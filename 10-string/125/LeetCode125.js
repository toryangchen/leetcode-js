/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
	let str = s.toLowerCase();
	let start = 0,
		end = str.length - 1;
	while (start < end) {
		if ((str.charCodeAt(start) < 97 && str.charCodeAt(start) > 57) ||
			str.charCodeAt(start) > 122 || str.charCodeAt(start) < 48) {
			start++;
			continue
		}
		if ((str.charCodeAt(end) < 97 && str.charCodeAt(end) > 57) ||
			str.charCodeAt(end) > 122 || str.charCodeAt(end) < 48) {
			end--;
			continue
		}
		if (str[start] != str[end]) {
			return false;
		}
		start++;
		end--;
	}
	return true;
};


var isPalindrome_1 = function(s) {
	let str = s.toLowerCase();
	let start = 0,
		end = str.length - 1;
	var regs = /[a-z0-9]/
	while (start < end) {
		if (!regs.test(str[start])) {
			start++;
			continue
		}
		if (!regs.test(str[end])) {
			end--;
			continue
		}
		if (str[start] != str[end]) {
			return false;
		}
		start++;
		end--;
	}
	return true;
};

console.log(isPalindrome("0P"));