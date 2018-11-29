// pages/homePage/setup/addEquipmentList/addEquipmentList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    equipmentList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    var equipmentList = wx.getStorageSync('deviceList');
    this.setData({
      equipmentList: equipmentList
    })
    console.log(this.data.equipmentList)

  },
  // 点击扫码添加
  onCodeTap: function(event) {
    wx.scanCode({
      success: function(codeRes) {
        console.log(codeRes)
      }
    })
  },
  // 点击手动添加，跳转到添加设备界面
  onAddselfTap: function(event) {
    wx.redirectTo({
      url: '../addEquipment/addEquipment',
    })
  },
  // 点击添加到已有网络，跳转到添加到已有网络界面
  addOnlineNet: function(event) {
    wx.navigateTo({
      url: '../addEquToNet/addEquToNet',
    })
  },
  // 点击添加到新的网络，跳转到创建新的网络界面
  addNewNet: function(event) {
    wx.navigateTo({
      url: '../creatNet/creatNet',
    })
  },
  //删除本地缓存中数组的单条数据
  equDel: function(event) {
    //获取到当前的设备类型列表
    var equipmentList = this.data.equipmentList
    //获取到点击该条数据传输过来的devicesn 设备序列号
    var deviceSnTap = event.currentTarget.dataset.devicesn
    //获取到该条数据的下标
    const index = equipmentList.findIndex(equipmentList => equipmentList.deviceSn === deviceSnTap)
    //将旧的设备列表下点击删除的数据删除
    equipmentList.splice(index, 1)
    //将删除后的数据替换原先的缓存
    wx.setStorageSync("deviceList", equipmentList)
    //绑定到data中
    this.setData({
      equipmentList: equipmentList
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