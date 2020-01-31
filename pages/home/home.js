// pages/home/home.js
// getApp()可以获取App()产生的示例对象
// const app = getApp()
// console.log(app.globalData.name)
// console.log(app.globalData.age)

// 注册一个页面
Page({
  // 2.初始化数据
  data: {
    message: '哈哈哈',
    list: []
  },
  // 3.监听wxml中的事件
  // getUserInfo(event) {
  //   console.log(event)
  // },
  // 4.其他事件
  // 如：监听页面的滚动
  // onPageScroll(obj) {
  //   console.log(obj.scrollTop)
  // },
  // 监听页面滚动到底部
  // onReachBottom() {
  //   console.log('页面滚动到底部')
  // },
  // 监听下拉刷新事件
  // onPullDownRefresh() {
  //   console.log('下拉刷新事件')
  // },
  onTabItemTap() {
    console.log('tab页点击tab触发')
  },

  // 页面被加载
  onLoad() {
    console.log('onLoad')
    wx.request({
      url: 'http://123.207.32.32:8000/api/hy/recommend',
      success: (res) => {
        // console.log(res)
        const data = res.data.data.list
        // console.log(data)
        this.setData({
          list: data
        })
      }
    })
  },
  // url: 'http://106.54.54.237:8000/api/hy/recommend',
  // 页面显示
  onShow() {
    // console.log('onShow')
  },
  // 页面初次渲染完成
  onReady() {
    // console.log('onReady')
  },
  // 页面隐藏
  onHide() {
    // console.log('onHide')
  },
  onUnload() {
    // console.log('onUnload')
  }
})