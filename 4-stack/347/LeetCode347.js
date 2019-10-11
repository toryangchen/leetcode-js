/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

	const map = {};
	for (let n of nums) {
		if (map[n] == null) map[n] = 0;
		map[n]++;
	}

	const result = []

	Object.keys(map).forEach(n => {
		result.push({
			n,
			count: map[n]
		})
	})

	return result.sort((a, b) => b.count - a.count).slice(0, k).map(a => Number(a.n));
};

console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2));

var topKFrequent_1 = function(nums, k) {

	var map = new Map();
	nums.forEach(function(num) {
		if (map.has(num)) {
			map.set(num, map.get(num) + 1);
		} else {
			map.set(num, 1);
		}
	})
	return Array.from(map.keys()).sort((a, b) => map.get(b) - map.get(a)).slice(0, k)
};

console.log(topKFrequent_1([4, 1, -1, 2, -1, 2, 3], 2));