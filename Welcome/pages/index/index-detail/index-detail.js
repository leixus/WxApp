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
      // this.data.postData = postData;

      var postsCollected = wx.getStorageSync('posts_collected');
      if (postsCollected) {
          var postCollected = postsCollected[postId];
          if (postCollected) {
              this.setData({
                  collected: postCollected
              });
          } else {
              postsCollected[postId] = false
              wx.setStorageSync('posts_collected', postsCollected);
              this.setData({
                  collected: false
              });
          }
      } else {
          var postsCollected ={};
          postsCollected[postId] = false
          wx.setStorageSync('posts_collected', postsCollected);
      }

      var that = this;
      wx.onBackgroundAudioPlay(function() {
          that.setData({
              isPlayingMusic: true
          });
      });
      wx.onBackgroundAudioPause(function() {
          that.setData({
              isPlayingMusic: false
          });
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

  onColletionTap: function(event) {
      var postsCollected = wx.getStorageSync('posts_collected');
      var postCollected = postsCollected[this.data.currentId];
      postCollected = !postCollected;
      this.setData({
          collected: postCollected
      });
      postsCollected[this.data.currentId] = postCollected
      wx.showToast({
        title: postCollected? '收藏成功': '取消收藏',
        duration: 1000,
        icon: "success"
      })
      wx.setStorageSync('posts_collected', postsCollected);
      // var that = this;
      // wx.showModal({
      //     title: "收藏",
      //     content: postCollected ? "收藏该文章？" : "取消收藏该文章？",
      //     showCancel: "true",
      //     cancelText: "取消",
      //     cancelColor: "#333",
      //     confirmText: "确认",
      //     confirmColor: "#405f80",
      //     success: function (res) {
      //         if (res.confirm) {
      //             // 更新数据绑定变量，从而实现切换图片
      //             that.setData({
      //                 collected: postCollected
      //             });
      //             postsCollected[that.data.currentId] = postCollected;
      //             wx.setStorageSync('posts_collected', postsCollected);
      //         }
      //     }
      // });
  },

  onShapeTap: function(event) {
    var menuList = [
        "微信好友",
        "朋友圈",
        "QQ",
        "微博"
      ];
    wx.showActionSheet({
        itemList: menuList,
        itemColor: "#405f80",
        success: function(res) {
            // res.tapIndex;
            // res.cancel;
            // wx.showToast({
            //   title: '分享到' + menuList[res.tapIndex],
            // })
            wx.showModal({
                title: "分享到" + menuList[res.tapIndex],
                content: "用户是否取消？" + res.cancel + "现在无法实现分享功能，什么时候能支持呢"
            })
        }
    })
  },

  onMusicTap: function(event) {
      var currentId = this.data.currentId;
      var postData = psotsData.postList[currentId];
      var isPlayingMusic = this.data.isPlayingMusic;
      if (isPlayingMusic) {
          wx.pauseBackgroundAudio();
          // 暂停的新方法
          // wx.getBackgroundAudioManager().pause();
          // this.data.isPlayingMusic = false;
          this.setData({
              isPlayingMusic: false
          });
      } else {
          wx.playBackgroundAudio({
            dataUrl: postData.music.url,
            title: postData.music.title,
            coverImgUrl: postData.music.coverImg,
          })
          // this.data.isPlayingMusic = true;
          this.setData({
              isPlayingMusic: true
          });
      }
      
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