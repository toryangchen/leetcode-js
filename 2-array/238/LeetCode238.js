/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

	let res = [];
	map.reduce((item, cur, i) => {
		res[i] = item;
		return item * cur
	}, 1)

	map.reduceRight((item, cur, i) => {
		res[i] *= item;
		return item * cur;
	}, 1)
	return res;

};