// pages/welcome/welcome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    code: "",
    APPID: 'wxfcfa2d42c054c385',
    SECRET: '9388e1fc871a3e4e84dde5e6f9594654'
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function(options) {
    var that = this;
    wx.login({
      success: function(res) {
        console.log(res.code)
        that.setData({
          code: res.code
        })
      }
    })
  },
  //点击按钮获取用户信息，先判断是否已经授权
  getUserInfo: function(event) {
    var that = this;
    wx.getSetting({
      success: function(userInfoRes) {
        //如果已经授权，就上传数据
        if (userInfoRes.authSetting['scope.userInfo']) {
          console.log("已授权")
          console.log(event)
          wx.request({
            url: 'https://192.168.83.85:8848/code2session/login',
            data: {
              code: that.data.code,
              appid: that.data.APPID,
              secret: that.data.SECRET,
            },
            header: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            method: 'POST',
            success: function(result) {
              console.log(result)
              if (result.data.code == 12002) {
                wx.redirectTo({
                  url: '../login/login',
                })
              } else if (result.data.code == 12001) {
                wx.redirectTo({
                  url: '../homePage/homePage',
                })
              }
            },
          })
        } else {
          //没有上传就弹出警告
          wx.showModal({
            title: '警告',
            content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
            confirmText: '返回授权',
            success: function(res) {
              if (res.confirm) {
                console.log("用户点击了返回授权")
              }
            }
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