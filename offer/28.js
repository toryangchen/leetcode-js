// 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
// 例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。
// 由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。

function MoreThanHalfNum_Solution(numbers) {
  // write code here
  let current = numbers[0];
  let count = 1;
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] == current) {
      count++;
    } else {
      count--;
    }
    if (count == 0) {
      current = numbers[i];
      count = 1;
    }
  }
  count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == current) count++;
  }
  return count * 2 > numbers.length ? current : 0;
}

console.log(MoreThanHalfNum_Solution([1, 2, 3, 2, 2, 2, 5, 4, 2]));
