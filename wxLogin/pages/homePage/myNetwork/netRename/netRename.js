// pages/homePage/myNetwork/netRename/netRename.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    netName: "",
    netId: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options.netId)

  },
  newNameInput: function(event) {
    this.setData({
      netName: event.detail.value
    })
    console.log(this.data.netName)
  },
  netRenameTap: function(event) {
    console.log("修改成功")
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
    //     netName: this.data.netName
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