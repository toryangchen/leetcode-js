/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
	var left = 0,
		right = nums.length - 1;
	while (left < right) {
		let mid = (left + right) >> 1
		if (nums[mid] > nums[mid + 1]) {
			right = mid;
		} else {
			left = mid + 1;
		}
	}
	return left;
};

var findPeakElement_1 = function(nums) {
	for (var i = 0; i < nums.length - 1; i++) {
		if (nums[i] > nums[i + 1]) {
			return i;
		}
	}
	return nums.length - 1;
};