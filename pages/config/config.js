// pages/config/config.js
const app = getApp();
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';

var languageUtil = require('../../utils/languageUtils.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    oprStack: [],
    oprNum: 2,//操作符数
    maxRange: 10,
    languagePackage: {}, //用于保存当前页面所需字典变量
    show: false,
    actions: [{
        name: '小学一二年级',
        subname: '仅有加减法',
      },
      {
        name: '小学三四年级',
        subname: '完整的加减乘除运算',
      },
      {
        name: '小学五六年级',
        subname: '乘方等高一级的计算',
      },
    ],
    actionss: [{
      name: 'second grade of elementary school',
      subname: 'Addition and subtraction',
    },
    {
      name: 'fourth-grade primary',
      subname: 'add, subtract, multiply and divide',
    },
    {
      name: 'sixth-grade primary',
      subname: 'Advanced operations',
    },
  ],
    curAciton: 'fourth-grade primary',
  },
  onShowOpr(){
    Toast({
      message:"^ is power"
    })
  },
  onInputOprNum: function (event) {
    let _this = this;
    if (event.detail <= 16) {
      app.globalData.operator_app = event.detail;
    } else {

      Toast.fail({
        message: 'error',
        forbidClick: true,
        mask: true
      });
      _this.setData({
        oprNum: 3
      });
    }

  },
  onInputMaxNum: function (event) {
    let _this = this;
    if (event.detail <= 500) {
      app.globalData.maxRange_app = event.detail;
    } else {

      Toast.fail({
        message: 'error',
        forbidClick: true,
        mask: true
      });
      _this.setData({
        maxRange: 10
      });
    }

  },
  onClickIcon: function () {
    Dialog.alert({
      title: '标题',
      message: '小于等于3仅有加减,小于等于4不含乘方',
    }).then(() => {
      // on close
    });

  },

  switchLanguage: function () {
    //切换当前版本，即修改公共变量中的version
    languageUtil.changLanguage()
    this.initLanguage()
  },

  initLanguage() {
    //获取当前小程序语言版本所对应的字典变量
    let lang = languageUtil.languageVersion()
    this.setData({
      languagePackage: lang
    });
    wx.setNavigationBarTitle({
      title: lang.lang.config.title
    })

  },
  showActionSheet() {
    this.setData({
      show: true
    })
  },


  onClose() {
    this.setData({
      show: false
    });
  },

  onSelect(event) {
    let _this=this;
    console.log(event.detail);
    if(event.detail.name == '小学一二年级'){
      _this.setData({
        oprNum:3,
        maxRange:10,
        curAciton:'小学一二年级'
      });
    }else if(event.detail.name == '小学三四年级'){
      _this.setData({
        oprNum:4,
        maxRange:200,
        curAciton:'小学三四年级'
      });
    } else {
      _this.setData({
        oprNum:5,
        maxRange:500,
        curAciton:'小学五六年级'
      })
    }


  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.setData({
      oprStack: app.globalData.oprStack,
      oprNum: app.globalData.operator_app,
      maxRange: app.globalData.maxRange_app
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.initLanguage()
  },

})