/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
	let [fast, slow] = [nums[0], nums[0]];
	do {
		slow = nums[slow];
		fast = nums[nums[fast]];
	} while (fast != slow);
	let [ptr1, ptr2] = [nums[0], slow];
	while (ptr1 != ptr2) {
		ptr1 = nums[ptr1];
		ptr2 = nums[ptr2];
	}
	return ptr1;
};