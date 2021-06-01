// pages/log.js
const utils = require('../../utils/util.js')
var languageUtil = require('../../utils/languageUtils.js');
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    logs: [],
    languagePackage: {}, //用于保存当前页面所需字典变量,
    floorstatus: false
  },

  formatLogs: function () {
    let newList = [];
    (wx.getStorageSync('logs') || []).forEach(log => {
      if (log.date) {
        log['date'] = utils.formatTime(new Date(log.date));
        newList.push(log);
      }
    })
    return newList;
  },
  // 获取滚动条当前位置
  onPageScroll: function (e) {
    if (e.scrollTop > 100) {
      this.setData({
        floorstatus: true
      });
    } else {
      this.setData({
        floorstatus: false
      });
    }
  },
  //回到顶端的方法
  goTop: function (e) {
    if (wx.pageScrollTo) {
      wx.pageScrollTo({
        scrollTop: 0
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  },
  sweepCache() {
    wx.showModal({
      title: '是否清除做题记录？',
      success(res) {
        if (res.confirm) {
          try {
            wx.clearStorageSync();
            wx.reLaunch({
              url: '../log/log',
            })
          } catch (error) {
            Toast.fail('error');
          }

        }

      }
    })
  },
  initLanguage() {
    //获取当前小程序语言版本所对应的字典变量
    let lang = languageUtil.languageVersion()
    this.setData({
      languagePackage: lang
    });
    wx.setNavigationBarTitle({
      title: lang.lang.history.title
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },



  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.initLanguage();
    this.setData({
      logs: this.formatLogs()
    })
  },


})