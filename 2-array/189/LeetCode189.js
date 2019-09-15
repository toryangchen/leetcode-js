/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let length = nums.length;
  k %= length;

  var reserve = function(arr, start, end) {
    while (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  };

  reserve(nums, 0, n - 1);
  reserve(nums, 0, k - 1);
  reserve(nums, k, n - 1);
};

var rotate1 = function(nums, k) {
  while (k--) {
    nums.splice(0, 0, nums.pop());
  }
};
