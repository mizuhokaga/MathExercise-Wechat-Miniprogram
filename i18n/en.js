var Languague = {
  index:{
    motto:'Mathematics is a rational spirit ',
    tip_text:'Please input the number of questions (1~1270)',
    tip_input:'plz input sth',
    button:'Start!',
    title:'Arithmetic ver 1.5'
  },
  history:{
    score:'Score',
    timeStamp:'TimeStamp',
    nullData:'Nothing~',
    title: "History Hub"
  },

  config: {
    levelConfig:'Level Config',
    operatorNum:'Number of operators',
    MaximumOperand:'Maximum Operand',
    tip_opr:'It is not recommended to exceed 10',
    tip_max:'The maximum is 500',
    curLevel:'Current Level',
    preLevle:'System Level',
    otherConfig:'Other',
    Language:'English',
    LanguageConfig:'Tap to Switching',
    supportSymbol:'Support ',
    fastChooese:'Quick Selection Difficulty',
    title: "Config Hub operator"
  },
  questions:{
    scrollBar:'The paper will be handed in automatically after the countdown',
    examinationTime:'countdown',
    tip_input:'input there',
    button:'submit',
    title:'Examining'
  },
  //底部英文版工具栏，这里是用于自定义tarbar用的
  toolbar: {
    list: [   {
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