// pages/homePage/setup/creatNet/creatNet.js
const app = getApp();
var WOdatas = require('../../../../data/myWO.js');
var net_List = require('../../../../data/networkType.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    businessName: "",
    region: ['浙江省', '杭州市', '西湖区'],
    enterpriseList: [],
    enterpriseId: "",
    netName: "",
    netType: "",
    province: "",
    city: "",
    county: "",
    detailAddress: "",
    equipmentList: []

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      enterpriseList: app.globalData.companyList
    })
    console.log(this.data.enterpriseList)
    var that = this;
    wx.getStorage({
      key: 'deviceList',
      success: function(res) {
        console.log(res)
        that.setData({
          equipmentList: res.data
        })
      },
    })
    // 获取到组网类型列表
    this.setData({
      network: net_List.networkList.result
    });

  },
  /**选择网络类型 */
  chooseNetworkType: function(data) {
    this.setData({ //把选中值放入判断值
      typeSelect: data.currentTarget.dataset.id
    })
    this.setData({
      netType: this.data.network[this.data.typeSelect].netTypeId
    })
    console.log(this.data.netType)
  },
  // 地址下拉选择
  bindRegionChange: function(event) {
    console.log(event)
    console.log('picker发送选择改变，携带值为', event.detail.value)
    this.setData({
      region: event.detail.value,
      province: event.detail.value[0],
      city: event.detail.value[1],
      county: event.detail.value[2]
    })
  },
  // 企业下拉选择
  bindPickerChange: function(event) {
    var index = event.detail.value;
    this.setData({
      index: index
    })
    this.setData({
      enterpriseId: this.data.enterpriseList[index].id
    })
    console.log(this.data.enterpriseId)
  },
  // 获取到输入的网络名称
  netNameInput: function(event) {
    console.log(event.detail.value)
    this.setData({
      netName: event.detail.value
    })
  },
  detailAddressInput: function(event) {
    this.setData({
      detailAddress: event.detail.value
    })
  },
  creatNetTap: function(event) {
    var ticket = app.globalData.ticket
    wx.request({
      url: 'http://192.168.83.5:7188/api/iam/install/wechat/network-device-insert',
      header: {
        "Content-Type": "application/json",
        "ticket": ticket
      },
      method: "POST",
      data: {
        enterpriseId: this.data.enterpriseId,
        netName: this.data.netName,
        netType: this.data.netType,
        province: this.data.province,
        city: this.data.city,
        county: this.data.county,
        detailAddress: this.data.detailAddress,
        deviceInfo: this.data.equipmentList
      },
      success: function(res) {
        console.log(res)
      }
    })
    wx.switchTab({
      url: '../../myNetwork/myNetwork',
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