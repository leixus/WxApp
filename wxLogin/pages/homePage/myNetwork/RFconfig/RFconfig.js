// pages/homePage/myNetwork/RFconfig/RFconfig.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    config2gChannel: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    config2gPowerDbm: ['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'],
    config2gBandwidth: [20, 40, 80, 160],
    config5gChannel: [0, 36, 40, 44, 48, 52, 56, 60, 64],
    config5gPowerDbm: ['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'],
    config5gBandwidth: [20, 40, 80, 160],
    fieldsStrengthThreshold: [40, 50, 58, 64, 68, 72, 76, 78, 80, 82, 84, 86, 88, 90],
    apRateThreshold: [20, 22, 24, 26, 28, 30, 32, 35, 40, 45, 50],
    twoInformationContent: "",
    twoPowerContent: "",
    twoBandwidthContent: "",
    fiveInformationContent: "",
    fivePowerContent: "",
    fiveBandwidthContent: "",
    fieldStrengthContent: "",
    rateContent: "",
    devicrName: "",
    deviceSn: ""
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options.deviceSn)
    this.setData({
      deviceSn: options.deviceSn
    })
    // var ticket = app.globalData.ticket
    // wx.request({
    //   url: '',
    //   header: {
    //     "Content-Type": "application/json",
    //     "ticket": ticket
    //   },
    //   method: "POST",
    //   data: {
    //     deviceSn: this.data.deviceSn
    //   },
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })
  },
  //2G信道下拉菜单选择
  bindTwoInformationChange: function(event) {
    this.setData({
      twoInformationContent: this.data.config2gChannel[event.detail.value]
    })
    console.log(this.data.twoInformationContent)
  },
  //2G功率下拉菜单选择
  bindTwoPowerChange: function(event) {
    console.log(event)
    this.setData({
      twoPowerContent: this.data.config2gPowerDbm[event.detail.value]
    })
  },
  //2G频宽下拉菜单选择
  bindTwoBandwidthChange: function(event) {
    this.setData({
      twoBandwidthNumber: this.data.config2gBandwidth[event.detail.value],
      twoBandwidthContent: this.data.config2gBandwidth[event.detail.value] + "MHz"
    })
    console.log(this.data.twoBandwidthContent)
    console.log(this.data.twoBandwidthNumber)

  },
  //5G信道下拉菜单选择
  bindFiveInformationChange: function(event) {
    this.setData({
      fiveInformationContent: this.data.config5gChannel[event.detail.value],
    })
  },
  //5G功率下拉菜单选择
  bindFivePowerChange: function(event) {
    this.setData({
      fivePowerContent: this.data.config5gPowerDbm[event.detail.value]
    })
  },
  //5G频宽下拉菜单选择
  bindFiveBandwidthChange: function(event) {
    this.setData({
      fiveBandwidthNumber: this.data.config5gBandwidth[event.detail.value],
      fiveBandwidthContent: this.data.config5gBandwidth[event.detail.value] + "MHz"
    })
  },
  //5G场强阈值下拉菜单选择
  bindFieldStrengthChange: function(event) {
    this.setData({
      fieldStrengthNumber: this.data.fieldsStrengthThreshold[event.detail.value],
      fieldStrengthContent: this.data.fieldsStrengthThreshold[event.detail.value] + "dBm"
    })
  },
  //5G速率阈值下拉菜单选择
  bindRateChange: function(event) {
    this.setData({
      rateNumber: this.data.apRateThreshold[event.detail.value],
      rateContent: this.data.apRateThreshold[event.detail.value] + "Mbps"
    })
  },
  changeRFTap: function(event) {
    // var ticket = app.globalData.ticket
    // wx.request({
    //   url: '',
    //   header: {
    //     "Content-Type": "application/json",
    //     "ticket": ticket
    //   },
    //   method: "POST",
    //   data: {
    //     deviceSn: this.data.deviceSn,
    //     deviceName: this.data.deviceName,
    //     config2gChannel: this.data.twoInformationContent,
    //     config2gPowerDbm: this.data.twoPowerContent,
    //     config2gBandwidth: this.data.twoBandwidthNumber,
    //     config5gChannel: this.data.fiveInformationContent,
    //     config5gPowerDbm: this.data.fivePowerContent,
    //     config5gBandwidth: this.data.fiveBandwidthNumber,
    //     fieldsStrengthThreshold: this.data.fieldStrengthNumber,
    //     apRateThreshold: this.data.rateNumber
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