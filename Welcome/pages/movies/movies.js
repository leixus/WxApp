var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    color: "red"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var inTheatersUrl = app.globalData.doubanBase + "/v2/movie/in_theaters?start=0&count=3";

    var comingSoonUrl = app.globalData.doubanBase + "/v2/movie/coming_soon?start=0&count=3";;

    var top250Url = app.globalData.doubanBase + "/v2/movie/top250?start=0&count=3";

    this.getListData(inTheatersUrl, "inTheaters", "正在热映");

    this.getListData(comingSoonUrl, "comingSoon", "即将上映");

    this.getListData(top250Url, "top250", "豆瓣Top250");

    // console.log(this.data.readyData);
    
  },

  /**
   * 获取数据
  */
  getListData: function (url, settedKey, categoryTitle) {
    var that = this;
    wx.request({
      url: url,
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        // console.log(res);
        that.processDoubanData(res.data, settedKey, categoryTitle);
      },
      fail: function (error) {
        // fail
        console.log(error)
      }
    });
  },

  processDoubanData: function (data, settedKey, categoryTitle) {
    var movies = [];
    // console.log(data);
    for (var idx in data.subjects) {
      var subject = data.subjects[idx];
      var title = subject.title;
      if (title.length >= 6) {
        title = title.substring(0, 6) + '...';
      }
      var temp = {
        stars: [1,1,1,0,0],
        title: title,
        average: subject.rating.average,
        coverageUrl: subject.images.large,
        movieId: subject.id
      }
      movies.push(temp);
    };

    var readyData = {};
    readyData[settedKey] = {
      categoryTitle: categoryTitle,
      movies: movies
    };

    // console.log(readyData);
    this.setData(readyData)
    // console.log(this.data.readyData);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})