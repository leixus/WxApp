const app = getApp();
var util = require('../../utils/util.js');
var MD5 = require('../../utils/MD5.js');
Page({
  data: {
    userName: "",
    userPassword: "",
    identifyingCode: "",
    captchaImg: "",
    codeTicket: "",
    responsibleId: ""
  },
  //事件处理函数
  onLoad: function() {
    //util公共方法，向后台请求验证码数据
    util.loginHttp(this.dataSet)
  },
  //点击验证码刷新验证码
  onImgTap: function(event) {
    util.loginHttp(this.dataSet)
  },
  //公共方法callbak方法，绑定数据
  dataSet: function(codeData) {
    this.setData({
      captchaImg: codeData.result.captchaImg,
      codeTicket: codeData.result.ticket
    })
  },
  //获取input输入内容并绑定到data中的userName、userPassword和验证码
  userNameInput: function(event) {
    this.setData({
      userName: event.detail.value
    })
  },
  userPasswordInput: function(event) {
    this.setData({
      userPassword: MD5.hexMD5(event.detail.value)
    })
  },
  identifyingCodeInput: function(event) {
    this.setData({
      identifyingCode: event.detail.value
    })
  },
  //点击button按钮，上传输入的信息到后台，返回信息
  login: function(event) {
    var that = this;
    //判断input是否为空
    if (!this.data.userName) {
      wx.showToast({
        title: '用户名不能为空',
        image: "/images/fail.png"
      })
    } else if (!this.data.userPassword) {
      wx.showToast({
        title: '密码不能为空',
        image: "/images/fail.png"
      })
    } else if (!this.data.identifyingCode) {
      wx.showToast({
        title: '验证码不能为空',
        image: "/images/fail.png"
      })
    } else {
      wx.request({
        url: app.globalData.serverBase + '/ewifi/system/console/login',
        data: {
          username: this.data.userName,
          password: this.data.userPassword,
          code: this.data.identifyingCode,
          ticket: this.data.codeTicket
        },
        method: 'POST',
        header: {
          "Content-Type": "application/json"
        },
        success: function(res) {
          console.log(res)
          if (res.data.code == 0) {
            app.globalData.ticket = res.data.result.ticket;
            app.globalData.responsibleId = res.data.result.user.id
            wx.switchTab({
              url: '../homePage/myWO/myWO'
            })
            //上传数据到后台进行存储
            // wx.request({
            //   url: 'http://192.168.83.33:7188/api/iam/inatall/authenticate',
            //   header: {
            //     "Content-Type": "application/json",
            //   },
            //   method: "POST",
            //   data: {
            //     ticket: res.data.result.ticket,
            //     responsibleId: res.data.result.user.id,
            //     responsibleName: res.data.result.user.username,
            //     contactEmail: res.data.result.user.contactEmail,
            //     contactTel: res.data.result.user.contactTele
            //   },
            //   success: function(updateRes) {
            //     console.log(updateRes)
            //     if (updateRes.data.code == 12001) {
            //       app.globalData.ticket = res.data.result.ticket;
            //       app.globalData.responsibleId = res.data.result.user.id
            //       wx.switchTab({
            //         url: '../homePage/myWO/myWO'
            //       })
            //     } else {
            //       wx.showToast({
            //         title: '登录失败',
            //         image: "/images/fail.png"
            //       })
            //     }
            //   }
            // })
          } else if (res.data.code == 1105) {
            wx.showToast({
              title: '验证码错误',
              image: "/images/fail.png"
            })
            util.loginHttp(that.dataSet)
          } else if (res.data.code == 1111) {
            wx.showToast({
              title: '用户名不存在',
              image: "/images/fail.png"
            })
            util.loginHttp(that.dataSet)
          } else if (res.data.code == 1101) {
            wx.showToast({
              title: '用户名密码错误',
              image: "/images/fail.png"
            })
            util.loginHttp(that.dataSet)
          } else {
            wx.showToast({
              title: '登录失败',
              image: "/images/fail.png"
            })
            util.loginHttp(that.dataSet)
          }
        },
      })
    }
  },
})