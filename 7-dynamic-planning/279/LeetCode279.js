/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {

	var arr = new Array(n + 1);

	for (var i = 0; i <= n + 1; i++) {
		arr[i] = i;
	}

	for (var i = 2; i <= n; i++) {
		for (var j = 1; j * j <= i; j++) {
			arr[i] = Math.min(memo[i], memo[i - j * j] + 1);
		}
	}

	return arr[n];

};