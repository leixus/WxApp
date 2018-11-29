var app = getApp();
var util = require("../../../utils/util.js");
var reying = require("../../../data/reying.js");
var jijiang = require("../../../data/jijiang.js");
var top250 = require("../../../data/top250.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navigateTitle: "",
    movies: {},
    requestUrl: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var category = options.category;
    this.data.navigateTitle = category;
    wx.setNavigationBarTitle({
      title: this.data.navigateTitle
    })
    // var dataUrl = "";
    // switch (category) {
    //   case "正在热映":
    //     dataUrl = app.globalData.doubanBase +
    //       "/v2/movie/in_theaters";
    //     break;
    //   case "即将上映":
    //     dataUrl = app.globalData.doubanBase +
    //       "/v2/movie/coming_soon";
    //     break;
    //   case "豆瓣Top250":
    //     dataUrl = app.globalData.doubanBase + "/v2/movie/top250";
    //     break;
    // };
    // this.data.requestUrl = dataUrl;
    // this.getListData(dataUrl);

    // 真机测试
    switch (category) {
      case "正在热映":
        this.setData({
          movies: reying.reying
        });
        break;
      case "即将上映":
        this.setData({
          movies: jijiang.jijiang
        });
        break;
      case "豆瓣Top250":
        this.setData({
          movies: top250.top250
        });
        break;
    };
  },

  /**
   * 获取数据
   */
  getListData: function (url) {
    var that = this;
    wx.request({
      url: url,
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        // console.log(res);
        that.processDoubanData(res.data);
      },
      fail: function (error) {
        // fail
        console.log(error)
      }
    });
  },

  /**
   * 重新解析获取的数据
  */
  processDoubanData: function (data) {
    var movies = [];
    // console.log(data);
    for (var idx in data.subjects) {
      var subject = data.subjects[idx];
      var title = subject.title;
      if (title.length >= 6) {
        title = title.substring(0, 6) + '...';
      }
      // [1, 1, 1, 1, 1]  [1, 1, 1, 0, 0]
      var temp = {
        stars: util.analyticalConversionScore(subject.rating.stars),
        title: title,
        average: subject.rating.average,
        coverageUrl: subject.images.large,
        movieId: subject.id
      }
      movies.push(temp);
    };

    // var readyData = {};
    // readyData[settedKey] = {
    //   categoryTitle: categoryTitle,
    //   movies: movies
    // };
    // this.setData(readyData);
    this.data.movies = movies;
    this.setData({
      movies: movies
    });
    // console.log(JSON.stringify(this.data.movies));
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