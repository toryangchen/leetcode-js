//大家都知道斐波那契数列，现在要求输入一个整数n，
//请你输出斐波那契数列的第n项（从0开始，第0项为0）。n <= 39

function Fibonacci(n) {
  let result = [];
  result[0] = 0;
  result[1] = 1;
  for (var i = 2; i <= n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  return result[n];
}

function Fibonacci_1(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  return Fibonacci_1(n - 1) + Fibonacci_1(n - 2);
}
