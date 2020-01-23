// 输入n个整数，找出其中最小的K个数。
// 例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4,。

function GetLeastNumbers_Solution(input, k) {
  // write code here
  let res = [];
  if (input.length < k) {
    return res;
  }
  for (let i = 0; i < k; i++) {
    res[i] = input[i];
  }
  res.sort();
  for (var i = k; i < input.length; i++) {
    insertHepler(res, input[i]);
  }
  return res;
}

function insertHepler(arr, item) {
  if (item >= arr[arr.length - 1]) {
    return;
  } else if (item < arr[0]) {
    arr.pop();
    arr.unshift(item);
    return;
  } else {
    let count = arr.length;
    for (let i = 0; i < count - 1; i++) {
      if (arr[i] < item && arr[i + 1] >= item) {
        arr.splice(i + 1, 0, item);
        arr.pop();
        return;
      }
    }
  }
}

console.log(GetLeastNumbers_Solution([4, 5, 1, 6, 2, 7, 3, 8], 1));
