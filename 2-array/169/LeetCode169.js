/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  var current = nums[0];
  var count = 1;

  for (var i = 1; i < nums.length; i++) {
    if (nums[i] == current) {
      count += 1;
    } else {
      count -= 1;
    }

    if (count == 0) {
      current = nums[i];
      count = 1;
    }
  }

  return current;
};
