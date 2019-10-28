/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
	// 数组排序
	nums.sort(function(a, b) {
		return a - b;
	});

	// 大小分割
	var len = nums.length,
		i = 0;
	// console.log(len % 2 == 0 ? len / 2 : (len / 2 + 1));
	var smaller = new Array(len % 2 == 0 ? len / 2 : Math.floor(len / 2) + 1);
	var bigger = new Array(Math.floor(len / 2));
	smaller = nums.slice(0, smaller.length);
	bigger = nums.slice(smaller.length, smaller.length + bigger.length)
	console.log(smaller, bigger);

	// 插入
	for (var i = 0; i < Math.floor(len / 2); i++) {
		nums[2 * i] = smaller[smaller.length - 1 - i];
		nums[2 * i + 1] = bigger[Math.floor(len / 2) - 1 - i];
	}
	if (len % 2 != 0) {
		nums[2 * i] = smaller[smaller.length - 1 - i];
	}

};

console.log(wiggleSort([10, 1, 7, 2, 10, 5, 8, 4, 9, 4, 10, 8, 8, 1, 5, 6, 8, 9, 2, 1]));
// console.log(wiggleSort([1, 5, 1, 1, 6, 4]));