/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
	let map = new Map();
	let res = -1;

	for (let item of s) {
		if (map.has(item)) {
			map.set(item, map.get(item) + 1)
		} else {
			map.set(item, 1)
		}
	}

	for (let i = 0; i < s.length; i++) {
		if (map.get(s[i]) === 1) {
			res = i;
			break;
		}
	}

	return res;
};

var firstUniqChar_1 = function(s) {

	for (let i = 0; i < s.length; i++) {
		if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
			return i;
		}
	}
	return -1;
}