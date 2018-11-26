// pages/homePage/myNetwork/myNetwork.js
const app = getApp();
var WOdatas = require('../../../data/myWO.js');
var NetData = require('../../../data/myNet.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    businessName: "",
    enterpriseList: [],
    enterprise: "",
    NetList: "",
    netId: "",
    isEmpty: "",
    index: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    this.setData({
      enterpriseList: app.globalData.companyList
    })
    // this.setData({
    //   NetList: NetData.NetList.result
    // })
    // console.log(this.data.NetList)

    var index = this.data.index;
    this.setData({
      enterprise: this.data.enterpriseList[index].name
    })
    var ticket = app.globalData.ticket
    console.log(this.data.enterprise)
    wx.request({
      url: 'http://192.168.83.5:7188/api/iam/install/wechat/network/list',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "ticket": ticket
      },
      method: "POST",
      data: {
        enterprise: that.data.enterprise
      },
      success: function(res) {
        console.log(res)
        that.setData({
          NetList: res.data.result
        })
        if (that.data.NetList.length == 0) {
          that.setData({
            isEmpty: "true"
          })
        } else {
          that.setData({
            isEmpty: "false"
          })
        }
      }
    })
  },
  //点击新建网络按钮
  toCreatNet: function(event) {
    wx.clearStorage()
    wx.navigateTo({
      url: '../setup/creatNet/creatNet',
    })
  },
  //点击查看设备按钮
  onCheckTap: function(event) {
    console.log(event.currentTarget.dataset.netid)
    this.setData({
      netId: event.currentTarget.dataset.netid
    })
    var netId = this.data.netId;
    wx.navigateTo({
      url: 'equipmentList/equipmentList?netId=' + netId,
    })

  },
  //点击添加设备按钮
  addEquipmentTap: function(event) {
    wx.clearStorage()
    this.setData({
      netId: event.currentTarget.dataset.netid
    })
    var netId = this.data.netId;
    wx.navigateTo({
      url: '../setup/addEquipment/addEquipment?netId=' + netId,
    })
  },
  //点击更多设置按钮，下方跳出选择框
  onSettingTap: function(event) {
    console.log(event.currentTarget.dataset.netid)
    var netId = event.currentTarget.dataset.netid;
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
            url: 'netRename/netRename?netId=' + netId,
          })
        } else if (res.tapIndex == 1) {
          wx.navigateTo({
            url: 'changePwd/changePwd?netId=' + netId,
          })
        } else if (res.tapIndex == 2) {
          console.log("删除")
          // var ticket = app.globalData.ticket
          // wx.request({
          //   url: '',
          //   header: {
          //     "Content-Type": "application/json",
          //     "ticket": ticket
          //   },
          //   method: "POST",
          //   data: {
          //     netId: netId
          //   },
          //   success: function(res) {
          //     console.log(res)
          //   }
          // })
        }
      }
    })
  },
  //当前企业下拉选择框
  bindPickerChange: function(event) {
    var index = event.detail.value;
    this.setData({
      index: index
    })
    this.setData({
      enterprise: this.data.enterpriseList[index].name
    })
    console.log(this.data.enterprise)
    var ticket = app.globalData.ticket
    wx.request({
      url: 'http://192.168.83.33:7188/api/iam/install/wechat/network/list',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "ticket": ticket
      },
      method: "POST",
      data: {
        enterprise: this.data.enterprise
      },
      success: function(res) {
        console.log(res)
      }
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