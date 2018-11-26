// pages/index/index-detail/index-detail.js
var postsData = require("../../../data/data.js");
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlayingMusic: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var postId = options.id;
    // console.log(postId);
    this.data.currentId = postId;
    var postData = postsData.postList[postId];
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
    };

    if (app.globalData.g_isPlayingMusic && app.globalData.g_isPlayingMusicPostId === postId) {
      // this.data.isPlayingMusic = true;
      this.setData({
        isPlayingMusic: true
      });
    }

    // 设置音乐全局监听事件
    this.setMusicMonitor();
    
  },

  setMusicMonitor: function() {
    var that = this;
    wx.onBackgroundAudioPlay(function (event) {
      // 播放当前页面音乐才改变图标
      that.setData({
        isPlayingMusic: true
      });
      app.globalData.g_isPlayingMusic = true;
      app.globalData.g_isPlayingMusicPostId = that.data.currentId;
    });
    wx.onBackgroundAudioPause(function () {
      that.setData({
        isPlayingMusic: false
      });
      app.globalData.g_isPlayingMusic = false;
      app.globalData.g_isPlayingMusicPostId = null;
    });
  },

  onColletionTap: function() {

  },

  onMusicTap: function(event) {
    var currentPostId = this.data.currentId;
    var postData = postsData.postList[currentPostId];
    var isPlayingMusic = this.data.isPlayingMusic;
    if (isPlayingMusic) {
      wx.pauseBackgroundAudio();
      this.setData({
        isPlayingMusic: false
      });
    } else {
      wx.playBackgroundAudio({
        dataUrl: postData.music.url,
        title: postData.music.title,
        coverImgUrl: postData.music.coverImg,
      })
      this.setData({
        isPlayingMusic: true
      })
    }
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
      console.log("关闭页面");
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