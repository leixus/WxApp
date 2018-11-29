// pages/homePage/setup/setup.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  // 跳转到快速创建网络界面
  creatNetwork: function(event) {
    wx.navigateTo({
      url: 'creatNet/creatNet',
    })
  },
  // 跳转都添加设备界面
  addAP: function(event) {
    wx.navigateTo({
      url: 'addEquipment/addEquipment',
    })
  },
  // 跳转到关于云AC界面
  aboutAC: function(event) {
    wx.navigateTo({
      url: 'aboutAC/aboutAC',
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