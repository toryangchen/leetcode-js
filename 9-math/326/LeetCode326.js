/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
	let num = n;
	while (num > 1) {
		num = num / 3;
	}
	return num === 1;
};