const app = getApp();

function loginHttp(callback) {
  var that = this;
  wx.request({
    url: app.globalData.serverBase + '/ewifi/system/console/captcha',
    method: 'POST',
    header: {
      "Content-Type": "application/json"
    },
    data: {},
    success: function(res) {
      console.log(res)
      callback(res.data)
    }
  })
}

module.exports = {
  loginHttp: loginHttp
} 