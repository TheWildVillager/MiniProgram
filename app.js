// 注册一个小程序示例
App({
  onLaunch: function (options) {
    // console.log('小程序初始化完成: onLaunch')
    // 网络请求
    // wx.request({
    //   url: '',
    // })

    // 1.判断小程序的进入场景
    // console.log(options)
    // switch (options.scene) {
    //   case 1001:
    //     console.log('发现栏小程序主入口')
    //     break;
    //   case 10015:
    //     console.log('微信首页顶部搜索框的搜索结果页')
    //     break;
    // }

    // 2.获取用户的信息,并获取到用户信息之后将信息传递到服务器
    wx.getUserInfo({
      success: function (res) {
        // console.log(res)
      }
    })

    // setTimeout(function() {
    //   const err = new Error()
    //   throw err
    // }, 3000)
  },
  onShow: function(options) {
    // console.log('小程序在前台显示: onShow')
  },
  onHide: function() {
    // console.log('小程序进入后台: onHide')
  },
  onError: function(msg) {
    // console.log('小程序发生错误时: onError')
  },
  // 全局数据
  globalData: {
    name: 'coderfqw',
    age: 25
  }
})