// pages/homePage/myNetwork/myNetwork.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    businessName: "",
    array: ['阿里巴巴', '华为', '小米', '全维']

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
  },
  //点击新建网络按钮
  toCreatNet: function(event) {
    wx.navigateTo({
      url: '../setup/creatNet/creatNet',
    })
  },
  //点击查看设备按钮
  onCheckTap: function(event) {
    wx.navigateTo({
      url: 'equipmentList/equipmentList',
    })

  },
  //点击添加设备按钮
  addEquipmentTap: function(event) {
    wx.navigateTo({
      url: '../setup/addEquipment/addEquipment',
    })
  },
  //点击更多设置按钮，下方跳出选择框
  onSettingTap: function(event) {
    var settingList = [
      "重命名",
      "修改wifi密码",
      "删除"
    ]
    wx.showActionSheet({
      itemList: settingList,
      success: function(res) {
        if (res.tapIndex == 0) {
          wx.navigateTo({
            url: 'netRename/netRename',
          })
        } else if (res.tapIndex == 1) {
          wx.navigateTo({
            url: 'changePwd/changePwd',
          })
        } else if (res.tapIndex == 2) {
          console.log("删除")
        }
      }
    })
  },
  //当前企业下拉选择框
  bindPickerChange: function(event) {
    console.log('picker发送选择改变，携带值为', this.data.array[event.detail.value])
    this.setData({
      index: event.detail.value
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