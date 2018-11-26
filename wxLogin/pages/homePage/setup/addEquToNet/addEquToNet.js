// pages/homePage/setup/addEquToNet/addEquToNet.js
const app = getApp();
var net_List = require('../../../../data/myNet.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radioCheckVal: '',
    // array: ['阿里巴巴', '华为', '小米', '全维'],
    enterpriseList: [],
    NetList: [],
    equipmentList: [],
    netId: "",
    isEmpty: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      enterpriseList: app.globalData.companyList
    })
    //获取缓存中的数据
    var equipmentList = wx.getStorageSync('deviceList');
    this.setData({
      equipmentList: equipmentList
    })
    console.log(this.data.equipmentList)
    //获取网络列表数据并绑定
    this.setData({
      NetList: net_List.NetList.result
    })
    console.log(this.data.NetList.length)
    if (this.data.NetList.length == 0) {
      this.setData({
        isEmpty: "true"
      })
    } else {
      this.setData({
        isEmpty: "false"
      })
    }
  },
  //选择当前网络的时候，获取到该网络的id
  chooseNet: function(event) {
    console.log(event)
    this.setData({
      netId: event.currentTarget.dataset.netid
    })
  },
  //当前企业下拉菜单选择
  bindPickerChange: function(event) {
    var index = event.detail.value;
    this.setData({
      index: index
    })
    this.setData({
      enterprise: this.data.enterpriseList[index].enterprise
    })
    //获取网络列表并绑定
    // var ticket = app.globalData.ticket
    // wx.request({
    //   url: '',
    //   header: {
    //     "Content-Type": "application/json",
    //     "ticket": ticket
    //   },
    //   method: "POST",
    //   data: {
    //     enterprise: this.data.enterprise
    //   },
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })
    console.log(this.data.enterprise)
  },
  upEquListTap: function(event) {
    //上传数据并清空缓存
    // var ticket = app.globalData.ticket
    // wx.request({
    //   url: '',
    //   header: {
    //     "Content-Type": "application/json",
    //     "ticket": ticket
    //   },
    //   method: "POST",
    //   data: {
    //     netId: this.data.netId,
    //     deviceInfo:this.data.equipmentList
    //   },
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })
    wx.clearStorage()
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