Page({
  data: {
    imgUrls: [
      '/images/b_1.jpg',
      '/images/b_2.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 3000,
    duration: 800,
  },
  onLoad: function () {
  },
  onPullDownRefresh: function () {
    console.log('正在下拉！')
  },
  // Event handler.
  callPhone: function() {
    wx.makePhoneCall({
      phoneNumber: '18457393073'
    })
  },
  copyContent:function() {  
    wx.setClipboardData({
      data: '11376569',
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            wx.showToast({
              title: '复制成功！',
              icon: 'success',
              duration: 2000
            })
          }
        })
      }
    })
  }
})