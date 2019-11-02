/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
	var n = nums.length;
	if (n <= 1) {
		return n === 0 ? 0 : nums[0];
	}
	var memo = new Array(nums.length).fill(0);
	memo[0] = nums[0];
	memo[1] = Math.max(nums[0], nums[1]);

	for (var i = 2; i < nums.length; i++) {
		memo[i] = Math.max(memo[i - 1], memo[i] + memo[i - 2]);
	}

	return memo[n - 1]
};