// pages/homePage/myWO/myWO.js
const app = getApp();
var WOdatas = require('../../../data/myWO.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: "",
    nickName: "",
    stateCheckVal: "处理中",
    WO_List: "",
    responsibleId: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //加载页面的时候获取微信信息
    var that = this;
    wx.getUserInfo({
      success: function(userRes) {
        that.setData({
          avatarUrl: userRes.userInfo.avatarUrl,
          nickName: userRes.userInfo.nickName
        })
      }
    })
    this.setData({
      responsibleId: app.globalData.responsibleId
    })
    // 绑定从后台获取来的数据
    // that.setData({
    //   WO_List: WOdatas.WOList.result,
    // })
    // console.log(WOdatas.WOList)
    var ticket = app.globalData.ticket
    wx.request({
      url: 'http://192.168.83.5:7188/api/iam/install/wechat/order/list',
      header: {
        "Content-Type": "application/json",
        "ticket": ticket
      },
      method: "POST",
      data: {
        responsibleId: this.data.responsibleId
      },
      success: function(res) {
        if (res.data.code == 0) {
          console.log(res.data.result)
          that.setData({
            WO_List: res.data.result
          })
        } else {
          wx.showToast({
            title: '获取信息失败',
            image: "/images/fail.png"
          })
        }
      }
    })
    //获取企业列表
    wx.request({
      url: 'http://192.168.83.5:7188/api/iam/install/wechat/order/business',
      header: {
        "Content-Type": "application/json",
        "ticket": ticket
      },
      method: "POST",
      data: {
        responsibleId: this.data.responsibleId
      },
      success: function(res) {
        if (res.data.code == 0) {
          // var companyList = []
          // for (var i = 0, len = res.data.result.length; i < len; i++) {
          //   companyList.push(res.data.result[i].name)
          // }
          app.globalData.companyList = res.data.result
          console.log(app.globalData.companyList)
        } else {
          wx.showToast({
            title: '获取信息失败',
            image: "/images/fail.png"
          })
        }
      }
    })

  },
  // 选择进行中和已完结的工单
  WOstateChange: function(event) {
    if (event.detail.value === '处理中') {
      this.setData({
        stateCheckVal: event.detail.value
      });
    } else if (event.detail.value === "已完结") {
      this.setData({
        stateCheckVal: event.detail.value
      });
    }
  },
  // 点击工单，携带工单编号的参数跳转到工单详情界面
  onWOInfoTap: function(event) {
    var workNum = event.currentTarget.dataset.worknum;
    wx.navigateTo({
      url: 'WOdetail/WOdetail?workNum=' + workNum,
    })
  },
  // 点击结束工单，携带工单编号的参数跳转到工单详情界面
  finshWOTap: function(event) {
    var workNum = event.currentTarget.dataset.worknum;
    wx.navigateTo({
      url: 'finishWO/finishWO?workNum=' + workNum,
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function(event) {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function(event) {

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})