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
    // wx.setStorageSync('key', 'leixu');
  },

  onTap: function() {
    // console.log("onTap");
    // wx.navigateTo({
    //   url: '../index/index',
    // })

    // wx.redirectTo({
    //   url: '../index/index',
    // })

    wx.switchTab({
      // url: '../index/index',
      url: "../movies/movies"
    });

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
    console.log('隐藏');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    console.log('关闭');
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