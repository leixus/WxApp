// pages/homePage/myWO/WOdetail/WOdetail.js
const app = getApp();
var WOdatas = require('../../../../data/myWO.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    workNum: "",
    WOdetail: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //获取到工单id
    var that = this;
    this.setData({
      workNum: options.workNum
    })
    var ticket = app.globalData.ticket
    wx.request({
      url: 'http://192.168.83.5:7188/api/iam/install/order/detail',
      header: {
        "Content-Type": "application/json",
        "ticket": ticket
      },
      method: "POST",
      data: {
        workNum: this.data.workNum
      },
      success: function(res) {
        if (res.data.code == 0) {
          console.log(res)
          that.setData({
            WOdetail: res.data.result
          })
        } else {
          wx.showToast({
            title: '获取信息失败',
            image: "/images/fail.png"
          })
        }
      }
    })
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
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})