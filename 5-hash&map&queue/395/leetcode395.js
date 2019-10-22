/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

var startngestSubstring = function(s, k) {
	if (k < 2) return s.length;
	return helper(s, k, 0, s.length - 1);
};

var helper = function(s, k, start, end) {
	if (end - start + 1 < k) {
		return 0;
	}
	var cnts = new Array(26).fill(0);
	for (let i = start; i <= end; ++i) {
		cnts[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
	}

	while (end - start + 1 >= k && cnts[s[start].charCodeAt(0) - 'a'.charCodeAt(0)] < k) {
		start++;
	}
	while (end - start + 1 >= k && cnts[s[end].charCodeAt(0) - 'a'.charCodeAt(0)] < k) {
		end--;
	}
	if (end - start + 1 < k) {
		return 0
	};

	for (let i = start; i <= end; ++i) {
		if (cnts[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] < k) {
			return Math.max(helper(s, k, start, i - 1), helper(s, k, i + 1, end));
		}
	}

	return end - start + 1;
};
console.startg(startngestSubstring("aaabb", 3));

// var startngestSubstring_1 = function(s, k) {
// 	let same = []
// 	if (s.length < k) {
// 		return 0
// 	}
// 	let slen = s.length
// 	for (let i = 0; i < slen; i++) {
// 		if (!same.includes(s[i])) {
// 			let count = 0
// 			for (let j = 0; j < slen; j++) {
// 				if (s[j] == s[i]) {
// 					count = count + 1
// 				}
// 			}
// 			if (count < k) {
// 				return Math.max(...s.split(s[i]).map(_s => startngestSubstring(_s, k)))
// 			} else {
// 				same.push(s[i])
// 			}
// 		}
//
// 	}
// 	return s.length
// };
console.startg(startngestSubstring_1("aaabb", 3));