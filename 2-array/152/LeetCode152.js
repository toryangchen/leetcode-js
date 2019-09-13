/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  var imax = nums[0],
    imin = nums[0];
  var res = nums[0];

  for (var i = 1; i < nums.length; i++) {
    if (nums[i] < 0) {
      var temp = imax;
      imax = imin;
      imin = temp;
    }

    imax = Math.max(imax * nums[i], nums[i]);
    imin = Math.min(imin * nums[i], nums[i]);

    res = Math.max(res, imax);
  }

  return res;
};

// leetcode 排名最靠前的解法
var maxProduct1 = function(nums) {
  var a = 1;
  var max = nums[0];

  for (var num of nums) {
    a = a * num;
    if (max < a) max = a;
    if (num == 0) a = 1;
  }
  a = 1;
  for (var i = nums.length - 1; i >= 0; i--) {
    a = a * nums[i];
    if (max < a) max = a;
    if (nums[i] == 0) a = 1;
  }
  return max;
};
