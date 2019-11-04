/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
	var len = nums.length;
	if (len < 2) {
		return len
	}
	var dp = new Array(nums.length).fill(1);
	var res = 0;
	for (var i = 0; i < len; i++) {
		for (var j = 0; j < i; j++) {
			if (nums[j] < nums[i]) {
				dp[i] = Math.max(dp[j] + 1, dp[i]);
			}
		}
		res = Math.max(res, dp[i]);
	}
	return res;
};

var lengthOfLIS_1 = function(nums) {
	let tails = new Array(nums.length);
	let res = 0;
	for (num of nums) {
		let i = 0,
			j = res;
		while (i < j) {
			let m = Math.floor((i + j) / 2);
			if (tails[m] < num) {
				i = m + 1;
			} else {
				j = m;
			}
		}
		tails[i] = num;
		if (res === j) {
			res++;
		}
	}

	return res;
};

console.log(lengthOfLIS_1([10, 9, 2, 5, 3, 7, 101, 18]));