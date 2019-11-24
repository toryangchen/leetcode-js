/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {

	const dict = new Set(wordDict);
	const visited = new Set();
	const q = [0];

	while (q.length) {
		const start = q.shift();

		if (!visited.has(start)) {
			for (let end = start + 1; end <= s.length; end++) {
				if (dict.has(s.slice(start, end))) {
					if (end === s.length) {
						return true;
					}
					q.push(end);
				}
			}
			visited.add(start)
		}
	}

	return false;
};

var wordBreak_1 = function(s, wordDict) {
	const dp = new Array(s.length + 1).fill(false);
	dp[0] = true;

	for (let i = 1; i <= s.length; i++) {
		for (let j = 0; j < i; j++) {
			const word = s.slice(i, j);
			if (dp[j] == true && wordDict.includes(word)) {
				dp[i] = true;
				break;
			}
		}
	}

	return dp[s.length]
}