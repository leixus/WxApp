const app = getApp();
var util = require('../../utils/util.js');
var MD5 = require('../../utils/MD5.js');
Page({
  data: {
    userName: "",
    userPassword: "",
    identifyingCode: "",
    captchaImg: "",
    codeTicket: ""
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
      console.log(this.data.codeTicket)
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
          // var ticket = res.data.result.ticket
          // console.log(res.data.result.ticket)
          // that.setData({
          //   ticket: res.data.result.ticket
          // })
          // console.log(that.data.ticket)
          if (res.data.code == 0) {
            app.globalData.ticket = res.data.result.ticket;
            wx.navigateTo({
              url: '../homePage/myNetwork/RFconfig/RFconfig'
            })
          } else if (res.data.code == 1105) {
            console.log("验证码错误")
          }
          // console.log(app.globalData.ticket)
        },
      })
    }
    console.log("用户名" + this.data.userName + "密码" + this.data.userPassword + "验证码" + this.data.identifyingCode)
  },
})