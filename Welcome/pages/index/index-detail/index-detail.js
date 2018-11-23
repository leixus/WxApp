// pages/index/index-detail/index-detail.js
var psotsData = require("../../../data/data.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var postId = options.id;
      console.log(postId);
      this.data.currentId = postId;
      var postData = psotsData.postList[postId];
      this.setData({
          postData: postData
      });

      var postsCollected = wx.getStorageSync('posts_collected');
      if (postsCollected) {
          var postCollected = postsCollected[postId];
          if (postCollected) {
              this.setData({
                  collected: postCollected
              })
          } else {
              postsCollected[postId] = false;
              wx.setStorageSync('posts_collected', postsCollected);
          }
      } else {
          var postsCollected = {};
          postsCollected[postId] = false;
          wx.setStorageSync('posts_collected', postsCollected);
      }
  },

  onColletionTap: function() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})