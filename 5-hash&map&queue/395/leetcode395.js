/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
	if (k < 2) return s.length;
	return helper(s, k, 0, s.length - 1);
};

var helper = function(s, k, lo, hi) {
	if (hi - lo + 1 < k) {
		return 0;
	}

	let cnts = new Array(26);

	for (let i = lo; i <= hi; ++i) {
		cnts[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
	}

	while (hi - lo + 1 >= k && cnts[s[lo].charCodeAt(0) - 'a'.charCodeAt(0)] < k) lo++;
	while (hi - lo + 1 >= k && cnts[s[hi].charCodeAt(0) - 'a'.charCodeAt(0)] < k) hi--;
	if (hi - lo + 1 < k) return 0;

	for (let i = lo; i <= hi; ++i)
		if (cnts[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] < k) return Math.max(helper(s, k, lo, i - 1), helper(s, k, i + 1, hi));

	return hi - lo + 1;
}