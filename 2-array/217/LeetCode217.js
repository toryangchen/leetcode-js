/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  var set = new Set();
  for (var i = 0; i < nums.length; i++) {
    set.add(nums[i]);
  }

  return nums.length !== set.size;
};

var containsDuplicate1 = function(nums) {
  var set = {};
  for (var i = 0; i < nums.length; i++) {
    if (set[nums[i]] != undefined) {
      return true;
    } else {
      set[nums[i]] = i;
    }
  }

  return false;
};
