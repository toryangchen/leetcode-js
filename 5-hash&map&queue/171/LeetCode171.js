/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {

	let num = 0;
	for (var i = 0; i < s.length; i++) {
		if (s[i] === ' ') continue;
		num = num * 26 + s[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1;
	}

	return num;
};