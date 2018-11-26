// pages/homePage/myWO/finishWO/finishWO.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    workNum: "",
    workFeedback: "",
    installResult: "",
    array: ['成功安装', '安装异常']

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 获取到工单id
    this.setData({
      workNum: options.workNum
    })

  },
  // 更改安装结果的值
  bindPickerChange: function(event) {
    console.log('picker发送选择改变，携带值为', this.data.array[event.detail.value])
    this.setData({
      index: event.detail.value
    })
    this.setData({
      installResult: this.data.array[event.detail.value]
    })
    console.log(this.data.installResult)
  },
  //获取输入的安装反馈具体内容
  workFeedbackInput: function(event) {
    console.log(event.detail.value)
    this.setData({
      workFeedback: event.detail.value
    })
  },
  //点击提交按钮
  updataResult: function(event) {
    // console.log("工单ID：" + this.data.workorderId + "安装结果：" + this.data.installResult + "安装反馈：" + this.data.workFeedback)
    var ticket = app.globalData.ticket
    wx.request({
      url: 'http://192.168.83.5:7188/api/iam/install/wechat/order/finish',
      header: {
        "Content-Type": "application/json",
        "ticket": ticket
      },
      method: "POST",
      data: {
        workNum: this.data.workNum,
        workFeedback: this.data.workFeedback,
        installResult: this.data.installResult
      },
      success: function(res) {
        if (res.data.code == 0) {
          console.log(res)
          wx.switchTab({
            url: '../myWO',
            success: function(event) {
              var page = getCurrentPages().pop();
              if (page == undefined || page == null) return;
              page.onLoad();
            }
          })
        } else {
          wx.showToast({
            title: '修改失败',
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