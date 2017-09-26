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
  }
})