// 一只青蛙一次可以跳上1级台阶，也可以跳上2级。
// 求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。

function jumpFloor(number) {
  // write code here
  if (number <= 2) {
    return number;
  }
  let i = 1,
    j = 2,
    res = 0;

  for (let x = 3; x <= number; x++) {
    res = i + j;
    i = j;
    j = res;
  }
  return res;
}
