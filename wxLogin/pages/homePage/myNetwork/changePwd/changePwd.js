// pages/homePage/myNetwork/changePwd/changePwd.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    switchValueCheck: false,
    netId: "",
    wifiName: "",
    wifiPwd: ""

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options.netId)
    this.setData({
      netId: options.netId
    })
    // var ticket = app.globalData.ticket
    // wx.request({
    //   url: '',
    //   header: {
    //     "Content-Type": "application/json",
    //     "ticket": ticket
    //   },
    //   method: "POST",
    //   data: {
    //     netId: this.data.netId
    //   },
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })
  },
  //选择按钮控制wifi密码输入框显隐藏
  onSwitchTap: function(event) {
    this.setData({
      switchValueCheck: event.detail.value
    })
  },
  wifiNameInput: function(event) {
    console.log(event)
    this.setData({
      wifiName: event.detail.value
    })
  },
  wifiPwdInput: function(event) {
    this.setData({
      wifiPwd: event.detail.value
    })
  },
  fixConfirm: function(event) {
    console.log("修改后的wifi名称" + this.data.wifiName + "修改后的wifi密码" + this.data.wifiPwd + "wifi状态" + this.data.switchValueCheck)
    // var ticket = app.globalData.ticket
    // wx.request({
    //   url: '',
    //   header: {
    //     "Content-Type": "application/json",
    //     "ticket": ticket
    //   },
    //   method: "POST",
    //   data: {
    //     netId: this.data.netId,
    //     wifiState: this.data.switchValueCheck,
    //     wifiPwd: this.data.wifiPwd,
    //     wifiName: this.data.wifiName
    //   },
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })
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