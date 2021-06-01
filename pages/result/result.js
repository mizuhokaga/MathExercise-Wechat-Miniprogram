// pages/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    totalScore: 0,
    totalNum: 0,
    remark: ["真厉害！全对！", "答对一半左右!还不错！", "别灰心，继续努力哦！"], // 评语
  },
  toIndex: function () {
    wx.switchTab({
      url: '../index/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.setData({
      totalScore: options.totalScore,
      totalNum: options.totalNum
    })

  },



})