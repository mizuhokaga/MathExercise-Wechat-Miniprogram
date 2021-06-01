// pages/questions.js
let app = getApp();
let utils = require('../../utils/util.js');
var languageUtil = require('../../utils/languageUtils.js');
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    checked: false, //开关
    time: 10 * 60 * 1000, //默认倒计时
    questionList: [], //原始问题数组
    expressionList: [], //渲染层所使用的问题数组
    anwserList: [], //问题答案的数组
    inputNum: '', //输入的题量
    // oprStack: ['+', '-', 'x', '÷','^'],

    totalScore: 0 ,//总分
    languagePackage: {} //用于保存当前页面所需字典变量

  },
  initLanguage() {
    //获取当前小程序语言版本所对应的字典变量
    let lang = languageUtil.languageVersion()
    this.setData({
      languagePackage: lang
    });
    wx.setNavigationBarTitle({
      title: lang.lang.questions.title
    })
 
  },
  //初始化题目
  init: function () {
    let _this = this;
    let data = this.data;
    //问题数组
    //传入需求的 题量、操作符数组、运算数字的最大值、至少有几个运算符
    data.questionList = utils.genereateProblem(data.inputNum, app.globalData.oprStack, parseInt(app.globalData.maxRange_app), parseInt(app.globalData.operator_app));
    _this.setData({

      time: data.inputNum * 20 * 1000 //一题20s
    })
    //两个临时数组
    let temp = data.questionList;
    let t = [];

    //获得渲染数组
    temp.forEach(Element => {
      let str = '';
      Element.forEach(element => {
        str = str + element;
      });
      if (str != '') {
        t.push(str);
      }
    });

    _this.setData({
      expressionList: t,

    })
    // console.log(data.expressionList)
    //答案数组
    let t2 = [];
    data.questionList.forEach(element => {
      t2.push(utils.calculateSuffix(utils.transformSuffix(element)));
      _this.setData({
        anwserList: t2
      }, function () {
       wx.hideLoading({
         success: (res) => {},
       })
      });
    })
    // console.log(data.anwserList)
  },
  //每次填完后就检查该题目是否正确
  checkTrueOrFalse: function (e) {
    let _this = this;
    let eValue = e.detail.value;
    let ansList = this.data.anwserList;
    let index = e.target.dataset.id;
    if (eValue != '') {
      //当前填写值与答案数组里的值是否相同
      if (eValue == ansList[index]) {
        let temp = _this.data.totalScore;
        // wx.showToast({
        //   title: '答对了!',
        //   icon: 'success',
        //   duration: 300
        // })
        this.setData({
          totalScore: temp + 1
        })
      } else {
       
      }
    }

  },
  //倒计时结束自动提交
  onSumbit_auto: function () {
    let _this = this;
    //设置缓存
    let logs = wx.getStorageSync('logs') || []
    let logsList = {
      "date": Date.now(),
      "score": this.data.totalScore
    }
    logs.unshift(logsList);
    wx.setStorageSync('logs', logs);

    wx.navigateTo({
      url: '../result/result?totalScore=' + _this.data.totalScore + "&totalNum=" + _this.data.expressionList.length,
    })

  },
  
  //倒计时结束后Event
  finished() {
    let _this = this;
    let text;
    if(app.globalData.version == 1){
       text = (second) => `时间到，${second} 秒后自动提交！`;
    }
   else{
     text = (second) => `time over，Automatic submission in ${second} seconds`;
   }
    const toast = Toast.loading({
      duration: 0,
      forbidClick: true,
      message: text(3),
      mask: true
    });

    let second = 3;
    const timer = setInterval(() => {
      second--;
      if (second) {
        toast.setData({
          message: text(second)
        });
      } else {
        clearInterval(timer);
        Toast.clear();
      }
    }, 1000);
    setTimeout(function () {
      _this.onSumbit_auto();
    }, 3200)

  },
  //人为手动提交
  onSumbit: function () {
    let _this = this;
    //设置缓存
    let logs = wx.getStorageSync('logs') || []
    let logsList = {
      "date": Date.now(),
      "score": this.data.totalScore
    }
    logs.unshift(logsList);
    wx.setStorageSync('logs', logs);
    wx.showModal({
      title: '提示',
      content: '确认提交答案？',
      success(res) {
        console.log(res)
        if (res.confirm) {
          wx.navigateTo({
            url: '../result/result?totalScore=' + _this.data.totalScore + "&totalNum=" + _this.data.expressionList.length,
          })
        }
      }
    })


  },
  //switch开关Event
  onChange: function ({
    detail
  }) {

    if (detail) {
      Toast({
        message: 'open godMode'
      });
    } else {
      Toast({
        message: 'close godMode'
      });
    }
    this.setData({
      checked: detail
    });
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initLanguage();
    this.setData({
      inputNum: options.inputNum,
      // inputList: 1
    })
    //题数>300 加载时间明显增加
    wx.showLoading({
      title: '稍等片刻~',
    })


  },

  onReady() {

    this.init();
  }

})