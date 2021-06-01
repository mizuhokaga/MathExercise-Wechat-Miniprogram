var Languague = {
  index:{
    motto:'数学是一种理性的精神，使人类的思维得以运用到最完善的程度',
    tip_text:'请输入要做的题数(1~1270)',
    tip_input:'我必须输入点什么',
    button:'开始做题',
    title:'四则运算 ver 1.5'
  },
  history:{
    score:'得分',
    timeStamp:'时间',
    nullData:'没有数据哦~',
    title: "做题历史"
  },
  config: {
    levelConfig:'难度设置',
    operatorNum:'运算符的个数',
    MaximumOperand:'操作数最大值',
    tip_opr:'不建议超过10',
    tip_max:'最大值为500',

    curLevel:'当前难度',
    preLevle:'预设难度',
    otherConfig:'其他设置',
    LanguageConfig:'点击切换语言',
    Language:'中文',
    supportSymbol: "当前支持的运算符",
    fastChooese:'快速选择难度',
    title: "配置中心"
  },
  questions:{
    scrollBar:'倒计时结束后将自动交卷',
    examinationTime:'考试时间',
    tip_input:'点击输入',
    button:'提交',
    title:'做题中'
  },
  //顶部导航栏，这里是用于自定义tarbar用的
  toolbar:{
    list: [
      {
        "pagePath": "../pages/index/index",
        "iconPath": "/image/icon_homework.png",
        "selectedIconPath": "/image/icon_homework_HL.png",
        "text": "答题"
      },
      {
        "pagePath": "../pages/log/log",
        "iconPath": "/image/icon_API.png",
        "selectedIconPath": "/image/icon_API_HL.png",
        "text": "记录"
      },
      {
        "pagePath": "../pages/config/config",
        "iconPath": "/image/config.png",
        "selectedIconPath": "/image/config_HL.png",
        "text": "设置"
      }
    ]
  }
}

module.exports = {
  lang: Languague
}
