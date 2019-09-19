/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
	let hash = {};
	const res = [];
	nums1.forEach((item, index) => {
		if (hash[item]) {
			hash[item]++;
		} else {
			hash[item] = 1;
		}
	});

	nums2.forEach((item, index) => {
		if (hash[item]) {
			res.push(item);
			hash[item]--;
		}
	});

	return res;
};


var intersect1 = function(nums1, nums2) {
	let res = [];
	for (var i = 0; i < nums1.length; i++) {
		if (nums2.includes(nums1[i])) {
			res.push(nums1[i]);
			nums2.splice(nums2.indexOf(nums1[i]), 1);
		}
	}
	return res;
}