const app = getApp()
//语言切换
const languageVersion=function(){
  if (app.globalData.version == 0) {
    // 导入我们定义好的中文字典
    var zh_lang = require('../i18n/zh.js')

    return zh_lang
  } else {
    //导入我们定义好的英文字典
    var en_lang = require('../i18n/en.js')
    return en_lang
  }
}
//切换版本
const changLanguage=function(){
//修改前面已经定义好的，用于标识小程序的语言版本
  if (app.globalData.version == 0) {
  
    app.globalData.version = 1
    
  } else if (app.globalData.version == 1) {
    app.globalData.version = 0
   
  }
  
}
//抛出方法
module.exports={
  'languageVersion': languageVersion,
  'changLanguage': changLanguage

}
