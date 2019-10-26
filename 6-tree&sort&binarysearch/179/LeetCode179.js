/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
	var sorted = nums.sort(function(a, b) {
		let ab = a + "" + b;
		let ba = b + "" + a;
		return ba - ab;
	})

	let joined = sorted.join('');
	if (parseInt(joined) === 0) {
		return '0';
	} else {
		return joined;
	}
};