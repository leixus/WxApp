// pages/homePage/setup/creatNet/creatNet.js
var WOdatas = require('../../../../data/myWO.js');
var net_List = require('../../../../data/networkType.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    businessName: "",
    region: ['浙江省', '杭州市', '西湖区'],
    array: ['杭州全维技术有限公司', '小米', '华为', '阿里巴巴']

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 获取到组网类型列表
    this.setData({
      network: net_List.networkList.result
    });

  },
  /**选择网络类型 */
  chooseNetworkType: function(data) {
    var that = this;
    that.setData({ //把选中值放入判断值
      typeSelect: data.currentTarget.dataset.id
    })
    console.log(this.data.network[this.data.typeSelect].netType)
  },
  // 地址下拉选择
  bindRegionChange: function(e) {
    console.log(e)
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  // 企业下拉选择
  bindPickerChange: function(event) {
    console.log('picker发送选择改变，携带值为', this.data.array[event.detail.value])
    this.setData({
      index: event.detail.value
    })
  },
  // 获取到输入的网络名称
  netNameInput: function(event) {
    console.log(event.detail.value)
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