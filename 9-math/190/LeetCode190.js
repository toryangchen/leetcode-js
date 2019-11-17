/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
	var str = (n >>> 0).toString(2) || '';
	var list = [];

	str = "00000000000000000000000000000000".substr(str.length) + str;
	list = str.split('');
	list.reverse();
	str = list.join('');

	return parseInt(str, 2)
};