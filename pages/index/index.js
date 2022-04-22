Page({
  addLog(event){
    const add = event.currentTarget.dataset.add
    console.log("add",add)
    const ui = wx.getStorageSync("userinfo")
    if(!ui.openid){
      wx.switchTab({
        url: '/pages/me/me',
      })
    }else{
      wx.cloud.callFunction({
        name: "createlog",
        data: {
          add: add,
          date: Date.now(),
          openid: ui.openid
        }
      })
    }
    
  }
})