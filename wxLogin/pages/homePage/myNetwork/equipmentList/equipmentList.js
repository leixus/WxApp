// pages/homePage/myNetwork/equipmentList/equipmentList.js
const app = getApp();
var DeviceData = require('../../../../data/myNet.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    equipmentCheckVal: "AP",
    DeviceList: "",
    enterprise: "",
    netName: "",
    netId: "",
    newDeviceType: "",
    newDeviceName: "",
    newDeviceSn: "",
    newDeviceModel: "",
    newDeviceMac: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    this.setData({
      netId: options.netId
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
    //     netId: this.data.netId
    //   },
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })
    this.setData({
      DeviceList: DeviceData.DeviceList.result.deviceInfo
    })
    this.setData({
      enterprise: DeviceData.DeviceList.result.enterprise
    })
    this.setData({
      netName: DeviceData.DeviceList.result.netName
    })
    console.log(this.data.DeviceList)
    console.log(options)
  },
  //AP 交换机 网关及其他的选择按钮操作
  equipmentChange: function(event) {
    if (event.detail.value === 'AP') {
      this.setData({
        equipmentCheckVal: event.detail.value
      });
    } else if (event.detail.value === "交换机") {
      this.setData({
        equipmentCheckVal: event.detail.value
      });
    } else if (event.detail.value === '网关及其他') {
      this.setData({
        equipmentCheckVal: event.detail.value
      })
    }
  },
  //点击射频按钮跳转到射频配置
  onRFconfigTap: function(event) {
    console.log(event.currentTarget.dataset.devicesn)
    var deviceSn = event.currentTarget.dataset.devicesn
    wx.navigateTo({
      url: '../RFconfig/RFconfig?deviceSn=' + deviceSn,
    })
  },
  equipmentReplaceTap: function(event) {
    console.log(event)
    wx.scanCode({
      success: function(codeRes) {
        console.log(codeRes)
        //通过扫码获取到的序列号获取到设备信息
        // var ticket = app.globalData.ticket
        // wx.request({
        //   url: '',
        //   header: {
        //     "Content-Type": "application/json",
        //     "ticket": ticket
        //   },
        //   method: "POST",
        //   data: {
        //     deviceSn: codeRes. - 二维码的值
        //   },
        //   success: function(res) {
        //     console.log(res)
        //   }
        // })
        //上传数据替换设备
        // wx.request({
        //   url: '',
        //   header: {
        //     "Content-Type": "application/json",
        //     "ticket": ticket
        //   },
        //   method: "POST",
        //   data: {
        //     netId: this.data.netId,
        //     ololdDeviceSn: event.currentTarget.dataset.devicesn,
        //     deviceType: this.data.newDeviceType,
        //     deviceName: this.data.newDeviceName,
        //     deviceSn: this.data.newDeviceSn,
        //     deviceModel: this.data.newDeviceModel,
        //     deviceMac: this.data.newDeviceMac
        //   },
        //   success: function(res) {
        //     console.log(res)
        //   }
        // })
      }
    })
  },
  //点击删除设备
  delEquTap: function(event) {
    console.log(event)
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
    //     netId: event.currentTarget.dataset.devicesn
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