/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {

	if (nums == null || nums.length < 3) {
		return false;
	}

	var max = Number.MAX_VALUE,
		min = Number.MAX_VALUE;

	for (var i = 0; i < nums.length; i++) {
		if (nums[i] <= min) {
			min = nums[i]
		} else if (nums[i] <= max) {
			max = nums[i]
		} else {
			return true;
		}
	}

	return false;
};