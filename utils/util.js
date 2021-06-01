const formatTime = date => {
  var date = new Date(date);
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
//生成问题
//传入需求的 题量、操作符数组、运算数字的最大值、至少有几个运算符数
const genereateProblem = (capacity, operaArr, maxRange, maxOperateNum) => {

  let problemList = [];
  let problemSingle = [];
  let len = maxOperateNum + 1;
  for (let i = 0; i < capacity;) {
    problemSingle = []; //每次生成完一个表达式就清空该容器
    len = maxOperateNum + 1; //每次生成完一个表达式就复原len的值
    let flag = false;
    do {
      len--;
      let num = 0;
      if (!flag) {
        num = Math.ceil((Math.random() * maxRange));

        problemSingle.push(num);
      } else {
        flag = false;
      }

      let operator = operaArr[Math.floor((Math.random() * maxOperateNum))];
      //如果是除号，则找出被除数的因子并追加，保证被除数可以除尽
      //追加因子后，通过flag标志位跳过下一次的正常数字的追加
      if (operator == '÷') {
        let primeArr = getFactor(num);
        let prime = primeArr[Math.floor(Math.random() * primeArr.length)];
        problemSingle.push(operator);
        problemSingle.push(prime);
        flag = true;
      } else if(operator == '^') {
         //如果是乘方，则再push该数
    
        problemSingle.push(operator);
        problemSingle.push(2);
        flag = true;
      }else {
        problemSingle.push(operator);
      }
    } while (len > 0)
    //弹出最后多余的一个符号
    problemSingle.pop();
    let temp = problemSingle;
    //运算结果为负数/结果大于2k的表达式过滤掉
    let res = calculateSuffix(transformSuffix(temp))
    let isInt = isInteger(res);
    if (res > 0 && res < 2000) {
      //保证答案是整数
      if (isInt) {
        problemList.push(temp);
        i++;
      }
    }
  }


  console.log(problemList);
  return problemList;
}
//求被除数的因数，最多求10个
const getFactor = number => {
  let primeList = [1];
  let t = number;
  for (let i = 2; i <= number; i++) {
    if (t % i == 0) {
      primeList.push(i);
    }
    if (primeList.length >= 10 || t == i) {
      break;
    }
  }
  return primeList;
}

//中缀=》后缀
const transformSuffix = expression => {
  let operator_stack = [];
  let suffix_expr = [];
  expression.forEach(element => {
    if (0 == oprLevel(element)) {
      suffix_expr.push(element);
      //如果发现是符号
      //当前运算符等级高于栈顶运算符等级 就加入运算符栈
      //否则就将运算符栈顶符加入到表达式栈
    } else if (operator_stack.length == 0 || oprLevel(element) > oprLevel(operator_stack[operator_stack.length - 1])) {
      operator_stack.push(element);
    } else {
      while (operator_stack.length != 0 && (oprLevel(element) <= oprLevel(operator_stack[operator_stack.length - 1]))) {
        suffix_expr.push(operator_stack.pop());
      }
      operator_stack.push(element);
    }

  });
  while (operator_stack.length != 0) {
    suffix_expr.push(operator_stack.pop());
  }
  // console.log(suffix_expr.toString());
  return suffix_expr;
}

//运算符等级判断
const oprLevel = symbol => {
  switch (symbol) {
    case '+':
      return 1;
    case '-':
      return 1;
    case 'x':
      return 3;
    case '÷':
      return 3;
    case '^':
      return 4;
    default:
      return 0;
  }
}

//计算后缀表达式
const calculateSuffix = expression => {
  let numberStack = [];
  expression.forEach(element => {
    if (0 == oprLevel(element)) {
      numberStack.push(element);
    } else {
      let result = applyOpr(element, numberStack.pop(), numberStack.pop());
      numberStack.push(result);
    }
  });

  if (numberStack.length != 1) {
    return "后缀表达式计算错误";
  }

  return numberStack.pop();
}

//计算后缀表达式
//若为操作符需要pop两次
const applyOpr = (opr, second, first) => {
  let result;
  switch (opr) {
    case '+':
      result = first + second;
      break;
    case '-':
      result = first - second;
      break;
    case 'x':
      result = first * second;
      break;
    case '÷':
      result = first / second;
      break;
    case '^':
      result = first * first;
      break;

  }

  return result;

}
//判断的是否为整数
const isInteger = obj => {
  return obj % 1 === 0; //严格相同
}

module.exports = {
  formatTime,
  formatNumber,
  genereateProblem,
  transformSuffix,
  calculateSuffix
}