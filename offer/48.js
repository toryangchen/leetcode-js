// 将一个字符串转换成一个整数，要求不能使用字符串转换整数的库函数。
// 数值为0或者字符串不是一个合法的数值则返回0

function StrToInt(str) {
  // write code here
  if (str === "" || str.length === 0) {
    return 0;
  }
  let fuhao = 0;
  if (str[0] === "-") {
    fuhao = 1;
  }
  let sum = 0;
  for (let i = fuhao; i < str.length; i++) {
    if (str[i] === "+") {
      continue;
    }
    if (str[i].charCodeAt() < 48 || str[i].charCodeAt() > 57) {
      return 0;
    }
    sum = sum * 10 + str[i] * 1;
  }
  return fuhao === 1 ? sum * -1 : sum;
}

console.log(StrToInt("123"));
