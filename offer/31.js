// 求出1~13的整数中1出现的次数,并算出100~1300的整数中1出现的次数？
// 为此他特别数了一下1~13中包含1的数字有1、10、11、12、13因此共出现6次,但是对于后面问题他就没辙了。
// 把问题更加普遍化,可以很快的求出任意非负整数区间中1出现的次数（从1 到 n 中1出现的次数）。

function NumberOf1Between1AndN_Solution(n) {
  // write code here
  if (n < 0) {
    return -1;
  }
  let count = 0;
  while (n > 0) {
    count += getCount(n);
    n--;
  }
  return count;
}

function getCount(n) {
  let count = 0;
  while (n > 0) {
    let i = n % 10;
    n = Math.floor(n / 10);
    if (1 == i) {
      count++;
    }
  }
  return count;
}

console.log(NumberOf1Between1AndN_Solution(19));
