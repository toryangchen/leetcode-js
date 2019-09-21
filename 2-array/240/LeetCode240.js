/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

	var i = matrix.length - 1;
	var j = 0;

	while (i >= 0 && j < matrix[0].length) {
		if (matrix[i][j] < target) {
			i--;
		} else if (matrix[i][j] > target) {
			j++;
		} else {
			return true;
		}
	}

	return false;
};