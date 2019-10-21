/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
	var ab_map = {};
	var count = 0;
	A.forEach(a => {
		B.forEach(b => {
			let key = a + b;
			if (ab_map.hasOwnProperty(key)) {
				ab_map[key]++;
			} else {
				ab_map[key] = 1;
			}
		})
	});
	C.forEach(c => {
		D.forEach(d => {
			var sum = c + d;
			if (ab_map.hasOwnProperty(0 - sum)) {
				count += ab_map[0 - sum]
			}
		});
	});
	return count;
};

console.log(fourSumCount([-1, -1], [-1, 1], [-1, 1], [1, -1]));