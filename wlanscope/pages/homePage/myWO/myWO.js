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
    stateCheckVal: "进行中",
    WO_List: ""
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
    // 绑定从后台获取来的数据
    that.setData({
      WO_List: WOdatas.WOList.result,
    })
    console.log(WOdatas.WOList)
    var companyList = []
    for (var i = 0, len = WOdatas.WOList.result.length; i < len; i++) {
      companyList.push(WOdatas.WOList.result[i].enterprise)
    }
    app.globalData.companyList = companyList
  },
  // 选择进行中和已完结的工单
  WOstateChange: function(event) {
    if (event.detail.value === '进行中') {
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
    var workorderId = event.currentTarget.dataset.workorderid;
    wx.navigateTo({
      url: 'WOdetail/WOdetail?workorderId=' + workorderId,
    })
  },
  // 点击结束工单，携带工单编号的参数跳转到工单详情界面
  finshWOTap: function(event) {
    var workorderId = event.currentTarget.dataset.workorderid;
    wx.navigateTo({
      url: 'finishWO/finishWO?workorderId=' + workorderId,
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