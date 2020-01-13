// 给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。
// 保证base和exponent不同时为0
function Power(base, exponent) {
  // write code here
  if (exponent == 0) {
    return 1;
  }
  if (exponent == 1) {
    return base;
  }
  if (base == 0) {
    return 0;
  }

  let t = exponent < 0 ? Math.ceil(exponent / 2) : Math.floor(exponent / 2);

  if (t < 0) {
    t = -t;
    base = 1 / base;
  }

  let res = Power(base, t);
  return exponent % 2 == 0 ? res * res : res * res * base;
}
