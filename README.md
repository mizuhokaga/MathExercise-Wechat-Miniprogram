<img width="280" src="https://i.qpix.com/2021/06/01/A7fj.png" alt="logo" data-canonical-src="http://code.xiaoyou66.com/img/study.png" style="max-width:100%;">

<img src="https://img.shields.io/badge/license-MIT-blue"/><img src="https://img.shields.io/badge/version-1.0.0-brightgreen"/><img src="https://img.shields.io/badge/status-stop%20development-red">

### 个人的软件工程作业：纯前端微信小程序实现四则运算

****

##### 📕老师要求

****

来自https://www.cnblogs.com/xinz/p/7417960.html

由于能力有限，本人并未完成所有老师所提出的需求(lll￢ω￢)

##### 🍗实现功能

****

- 整数的四则运算，运算符数量和操作数最大值可自行调节（考虑到小程序性能，运算符数不建议超过10）；
- 根据题量调整做题时间
- 记录做题结果；
- 国际化，支持中文和英文

##### 😭缺陷

****

- 不支持==分数==四则运算和一元一次方程
- 整数除法采用除以被除数的因子保证结果为==整数==，所以可能有 `79÷1÷1÷1`的式子
- i18n 未完全覆盖所有界面，我忘记了(●∀●)

##### 🎈技术栈

****

- 小程序:[vant-weapp](https://github.com/youzan/vant-weapp)/微信小程序

##### 界面预览🖊

****

| [![A7fN.md.jpg](https://i.qpix.com/2021/06/01/A7fN.md.jpg)](https://qpix.com/i/A7fN) | [![A7fH.md.jpg](https://i.qpix.com/2021/06/01/A7fH.md.jpg)](https://qpix.com/i/A7fH) | [![A7fR.md.jpg](https://i.qpix.com/2021/06/01/A7fR.md.jpg)](https://qpix.com/i/A7fR) |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |



##### 🐟界面路径说明

****

> "pages": [
>
>  "pages/index/index",                    //首页
>
>  "pages/config/config",                  //设置界面
>
>  "pages/questions/questions",     //做题界面
>
>  "pages/result/result",                    //得分结果界面
>
>  "pages/log/log"                              //得分历史界面
>
> ],

📧联系

****

- Gmail：mizuhokaga@gmail.com
- B站：https://space.bilibili.com/5032560