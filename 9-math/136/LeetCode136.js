/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
	var res = {};
	for (let num of nums) {
		if (res.hasOwnProperty(num)) {
			res[num] = ++res[num];
		} else {
			res[num] = 1;
		}
	}

	let filterRes = Object.keys(res).filter((item) => {
		return res[item] == 1
	})
	return filterRes[0];
};


var singleNumber_1 = function(nums) {
	let res = 0;
	nums.forEach(item => {
		res ^= item;
	})
	return res;
};

console.log(singleNumber_1([4, 1, 2, 1, 2]));