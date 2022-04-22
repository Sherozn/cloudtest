//app.js
App({
  onLaunch: function () {
    wx.cloud.init({
      env:'test-59478a',
      traceUser:true
    })
  }
})