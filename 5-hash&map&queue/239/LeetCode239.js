/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {

	var res = [];
	if (k === 0 || nums.length === 0) {
		return res;
	}
	res = new Array(nums.length - k + 1);
	var begin, j = 0;
	var q = [];
	for (var i = 0; i < nums.length; i++) {
		begin = i - k + 1;
		if (q.length === 0) {
			q.push(i);
		} else if (begin > q[0]) {
			q.shift();
		}
		while ((q.length !== 0) && nums[i] >= nums[q[q.length - 1]]) {
			q.pop();
		}
		q.push(i);

		if (begin >= 0) {
			res[j++] = nums[q[0]]
		}
	}
	return res;

};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));