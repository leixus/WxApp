// pages/homePage/myNetwork/equipmentList/equipmentList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    equipmentCheckVal: "AP"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  //AP 交换机 网关及其他的选择按钮操作
  equipmentChange: function(event) {
    this.setData({
      equipmentCheckVal: event.detail.value
    })
  },
  //点击设备名字跳转到射频配置
  onRFconfigTap: function(event) {
    wx.navigateTo({
      url: '../RFconfig/RFconfig',
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