/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
	var min = matrix[0][0];
	var max = matrix[matrix.length - 1][matrix[0].length - 1];
	var bucket = new Array(max - min + 1).fill(0);
	for (var i = 0; i < matrix.length; i++) {
		for (var j = 0; j < matrix[0].length; j++) {
			bucket[matrix[i][j] - min]++;
		}
	}

	var count = 0;
	for (var a = 0; a < bucket.length; a++) {
		count += bucket[a];
		if (count >= k) {
			return min + a;
		}
	}
	return -1;
};

console.log(kthSmallest([[1, 5, 9], [10, 11, 13], [12, 13, 15]], 8))

var kthSmallest_1 = function(matrix, k) {
	var n = matrix.length,
		min = matrix[0][0],
		max = matrix[n - 1][n - 1];
	var mid, count;

	while (min < max) {
		mid = (min + max) >> 1;
		count = countNumber(matrix, mid);
		if (count < k) {
			min = mid + 1;
		} else {
			max = mid;
		}
	}

	return min;
};

var countNumber = (matrix, x) => {
	var n = matrix.length,
		count = 0;

	matrix.forEach(function(row) {
		for (var j = 0; j < n && row[j] <= x; j++) {
			count++
		}
	});

	return count;
}