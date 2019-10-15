/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
	var max = Number.MIN_VALUE;
	var min = Number.MAX_VALUE;
	for (var num of nums) {
		max = Math.max(max, num);
		min = Math.min(min, num);
	}
	var bucket = new Array(max - min + 1).fill(0);
	for (var num of nums) {
		bucket[num - min]++;
	}
	var count = 0;
	for (var i = bucket.length - 1; i >= 0; i--) {
		count += bucket[i];
		if (count >= k) {
			return min + i;
		}
	}
	return -1;
};
console.log(findKthLargest([-1, 2, 0], 2));

var findKthLargest_1 = function(nums, k) {
	let length = nums.length;
	let res = nums.sort((a, b) => a - b);
	return res[length - k];
}

console.log(findKthLargest_1([-1, 2, 0], 2));