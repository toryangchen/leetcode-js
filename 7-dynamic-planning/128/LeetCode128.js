/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
	let longest = 0;
	let numSet = new Set(nums);

	for (var i = 0; i < nums.length; i++) {
		let shift = 1;

		while (numSet.has(nums[i] + shift)) {
			shift++;
		}

		longest = Math.max(shift, longest);
	}

	return longest;
};