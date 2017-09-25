Page({
  data: {
    imgUrls: [
      '/images/b1.jpg',
      '/images/b2.jpg',
      '/images/b3.jpg'
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
      phoneNumber: '17621903525'
    })
  }
})