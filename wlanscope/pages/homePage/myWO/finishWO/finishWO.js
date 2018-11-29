// pages/homePage/myWO/finishWO/finishWO.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    workorderId: "",
    workFeedback: "",
    remarks: "",
    array: ['成功安装', '安装异常'],
    index: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 获取到工单id
    this.setData({
      workorderId: options.workorderId
    })

  },
  // 更改安装结果的值
  bindPickerChange: function(event) {
    console.log('picker发送选择改变，携带值为', this.data.array[event.detail.value])
    this.setData({
      index: event.detail.value
    })
  },
  //获取输入的安装反馈具体内容
  remarksInput: function(event) {
    this.setData({
      remarks: event.detail.value
    })
  },
  //点击提交按钮
  workFeedbackInput: function(event) {
    console.log("工单ID：" + this.data.workorderId + "安装结果：" + this.data.workFeedback + "安装反馈：" + this.data.remarks)
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