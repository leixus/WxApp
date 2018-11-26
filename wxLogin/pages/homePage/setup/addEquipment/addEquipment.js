// pages/homePage/setup/addEquipment/addEquipment.js
const app = getApp();
var net_List = require('../../../../data/networkType.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radioCheckVal: 0,
    focus: false,
    devicesType: [],
    deviceType: "",
    deviceName: "",
    deviceSn: "",
    deviceMode: "",
    deviceMac: "",
    setStorageArry: [],
    netId: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options.netId)
    this.setData({
      netId: options.netId
    })
    var that = this;
    //获取到缓存中的数据
    wx.getStorage({
      key: 'deviceList',
      success: function(res) {
        console.log(res)
        that.setData({
          setStorageArry: res.data
        })
      },
    })
    //获取到设备型号的列表并绑定
    this.setData({
      devicesType: net_List.deviceTypeList.result
    });
  },
  // 点击选择设备类型，并进行绑定，点击的设备类型呈现被点击的效果
  chooseDeviceType: function(data) {
    console.log(data)
    var that = this;
    that.setData({ //把选中值放入判断值
      typeSelect: data.currentTarget.dataset.devicetypeid
    })
    that.setData({
      deviceType: this.data.devicesType[this.data.typeSelect].deviceType
    })
    console.log(this.data.deviceType)
  },
  //点击扫码添加设备
  onCodeTap: function(event) {
    wx.scanCode({
      success: function(codeRes) {
        console.log(codeRes)
        //通过序列号获取到设备型号
        // var ticket = app.globalData.ticket
        // wx.request({
        //   url: '',
        //   header: {
        //     "Content-Type": "application/json",
        //     "ticket": ticket
        //   },
        //   data: {
        //     deviceSn: this.data.deviceSn
        //   },
        //   method: "POST",
        //   success: function(res) {
        //     console.log(res)
        //   }
        // })
      }
    })
  },
  //点击手动输入，光标自动聚焦到下面的输入框
  onAddselfTap: function(event) {
    this.setData({
      focus: true
    })
  },
  getDeviceModel: function(event) {
    console.log("获取到了设备类型")
    //请求后台获取设备型号
    var ticket = app.globalData.ticket
    wx.request({
      url: 'http://192.168.83.33:7188/api/iam/install/device-model-get',
      header: {
        "Content-Type": "application/json",
        "ticket": ticket
      },
      data: {
        deviceSn: this.data.deviceSn
      },
      method: "POST",
      success: function(res) {
        console.log(res)
      }
    })
  },
  //获取到输入的设备名称，序列号，设备型号，MAC地址
  deviceNameInput: function(event) {
    this.setData({
      deviceName: event.detail.value
    })
  },
  deviceSnInput: function(event) {
    this.setData({
      deviceSn: event.detail.value
    })
  },
  deviceModelInput: function(event) {
    this.setData({
      deviceMode: event.detail.value
    })
  },
  deviceMacInput: function(event) {
    this.setData({
      deviceMac: event.detail.value
    })
  },
  // 点击添加设备
  onAddEquToNetTap: function(event) {
    if (!this.data.deviceSn) {
      wx.showToast({
        title: '序列号不能为空',
        image: "/images/fail.png"
      })
    } else if (!this.data.deviceMac) {
      wx.showToast({
        title: 'mac不能为空',
        image: "/images/fail.png"
      })
    } else {
      //将输入的信息填充到deviceInfo中
      var deviceInfo = {
        "deviceType": this.data.deviceType,
        "deviceName": this.data.deviceName,
        "deviceSn": this.data.deviceSn,
        "deviceMode": this.data.deviceMode,
        "deviceMac": this.data.deviceMac,
      };
      var setStorageArry = this.data.setStorageArry;
      //将deviceInfo的信息填充到setStorageArry数组中，并缓存的本地中去
      setStorageArry.push(deviceInfo)
      console.log(this.data.setStorageArry)
      wx.setStorage({
        key: "deviceList",
        data: setStorageArry
      })
      var netId = this.data.netId;
      wx.redirectTo({
        url: '../addEquipmentList/addEquipmentList?netId=' + netId,
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

  },
})