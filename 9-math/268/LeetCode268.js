/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

	let total = (0 + nums.length) * (nums.length + 1) / 2;

	return nums.reduce((all, currentValue) => {
		return all - currentValue;
	}, total)
};

var missingNumber_1 = function(nums) {
	let res = 0;
	for (var num: nums) {
		res = num ^ res;
	}

	for (var i = 1; i <= array.length; i++) {
		res = i ^ res;
	}

	return res;
};