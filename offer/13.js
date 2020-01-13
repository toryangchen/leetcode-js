// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，
// 所有的偶数位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。
function reOrderArray(array) {
  // write code here
  let array1 = [],
    array2 = [];
  for (const item of array) {
    if (item % 2 == 1) {
      array1.push(item);
    } else {
      array2.push(item);
    }
  }

  return array1.concat(array2);
}
