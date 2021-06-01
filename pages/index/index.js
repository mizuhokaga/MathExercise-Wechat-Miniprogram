// index.js
const app = getApp()
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
var languageUtil = require('../../utils/languageUtils.js');
Page({
  data: {
    languagePackage: {}, //用于保存当前页面所需字典变量
    inputNum: '',



    shareImgPath: '' //用于储存canvas生成的图片
  },

  ToDraw() {

    let that = this;

    var expresion = '2*3-1*1';


    const context = wx.createCanvasContext('share');
    context.setFillStyle('#fff') //这里是绘制白底，让图片有白色的背景
    context.fillRect(0, 0, 750, 920)

    context.setFontSize(15)
    context.setFillStyle('#000')
    // context.fillText('MINA', 0, 80)
    // context.fillText('MINA', 0, 100)
    var x=0;
    for (var i = 0; i <=10; i++) {
    
      context.fillText(' ' + [i] + '>' + expresion, 1, i * 15)
     
    }
  


    context.draw(false, function () {
      wx.canvasToTempFilePath({
        x: 0,
        y: 0,
        width: 750,
        height: 920,
        destWidth: 750,
        destHeight: 920,
        canvasId: 'share',
        success: res => {
          console.log(res)
          that.data.shareImgPath = res.tempFilePath, //将绘制的图片地址保存在shareImgPath 中

            console.log(that.data.shareImgPath)
          wx.previewImage({ //将图片预览出来
            urls: [that.data.shareImgPath]
          })
          wx.hideLoading() //图片已经绘制出来，隐藏提示框
        },
        fail: e => {
          console.log("error")
        }
      })
    })
  },

  initLanguage() {
    //获取当前小程序语言版本所对应的字典变量
    let lang = languageUtil.languageVersion()
    this.setData({
      languagePackage: lang
    });
    wx.setNavigationBarTitle({
      title: lang.lang.index.title
    })

  },
  into_questions(e) {

    let _this = this;
    _this.setData({
      inputNum: e.detail.value.num
    })
    if (this.data.inputNum == '' || this.data.inputNum == 0) {
      Toast.fail({
        message: 'error',
        forbidClick: true,
      });
      // wx.showToast({
      //   title: '输入非法！',
      //   icon: 'loading',
      //   duration: 1000,
      //   mask: true
      // });
      return false;
    } else {
      if (this.data.inputNum > 1270) {
        Toast.fail({
          message: 'error',
          forbidClick: true,
        });
        // wx.showToast({
        //   title: '题量太大啦！',
        //   icon: 'loading',
        //   duration: 1000,
        //   mask: true
        // });
        return false;
      } else {

        wx.navigateTo({
          url: '/pages/questions/questions?inputNum=' + this.data.inputNum,
        });
        this.data.inputNum = '';
      }


    }

  },

  onLoad() {

  },
  onShow() {
    this.initLanguage()
  }
})