// 统计一个数字在排序数组中出现的次数。
function GetNumberOfK(data, k) {
  // write code here
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] > k) {
      break;
    }
    if (data[i] == k) {
      count++;
    }
  }

  return count;
}
