// pages/homePage/myNetwork/RFconfig/RFconfig.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    twoInformation: ['自动', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
    twoPower: ['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'],
    twoBandwidth: ['20MHz', '40MHz', '80MHz', '160MHz'],
    fiveInformation: ['0', '36', '40', '44', '48', '52', '56', '60', '64'],
    fivePower: ['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'],
    fiveBandwidth: ['20MHz', '40MHz', '80MHz', '160MHz'],
    fieldStrength: ['40dBm', '50dBm', '58dBm', '64dBm', '68dBm', '72dBm', '76dBm', '78dBm', '80dBm', '82dBm', '84dBm', '86dBm', '88dBm', '90dBm'],
    rate: ['20Mbps', '22Mbps', '24Mbps', '26Mbps', '28Mbps', '30Mbps', '32Mbps', '35Mbps', '40Mbps', '45Mbps', '50Mbps', ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  //2G信道下拉菜单选择
  bindTwoInformationChange: function(event) {
    console.log(this.data.twoInformation[event.detail.value])
    this.setData({
      twoInformationIndex: event.detail.value
    })
  },
  //2G功率下拉菜单选择
  bindTwoPowerChange: function(event) {
    console.log(this.data.twoPower[event.detail.value])
    this.setData({
      twoPowerIndex: event.detail.value
    })
  },
  //2G频宽下拉菜单选择
  bindTwoBandwidthChange: function(event) {
    console.log(this.data.twoBandwidth[event.detail.value])
    this.setData({
      twoBandwidthIndex: event.detail.value
    })

  },
  //5G信道下拉菜单选择
  bindFiveInformationChange: function(event) {
    console.log(this.data.fiveInformation[event.detail.value])
    this.setData({
      fiveInformationIndex: event.detail.value,
    })
  },
  //5G功率下拉菜单选择
  bindFivePowerChange: function(event) {
    console.log(this.data.fivePower[event.detail.value])
    this.setData({
      fivePowerIndex: event.detail.value
    })
  },
  //5G频宽下拉菜单选择
  bindFiveBandwidthChange: function(event) {
    console.log(this.data.fiveBandwidth[event.detail.value])
    this.setData({
      fiveBandwidthIndex: event.detail.value
    })
  },
  //5G场强阈值下拉菜单选择
  bindFieldStrengthChange: function(event) {
    console.log(this.data.fieldStrength[event.detail.value])
    this.setData({
      fieldStrengthIndex: event.detail.value
    })
  },
  //5G速率阈值下拉菜单选择
  bindRateChange: function(event) {
    console.log(this.data.rate[event.detail.value])
    this.setData({
      rateIndex: event.detail.value
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