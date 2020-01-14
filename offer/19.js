// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，例如，如果输入如下4 X 4矩阵：
// 1  2  3  4
// 5  6  7  8
// 9  10 11 12
// 13 14 15 16
// 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.

function printMatrix(matrix) {
  // write code here
  let row = matrix.length,
    col = matrix[0].length;
  let res = [];
  if (row === 0 || col === 0) {
    return res;
  }
  let left = 0,
    top = 0,
    right = col - 1,
    bottom = row - 1;

  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    for (let i = top + 1; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    if (bottom != top) {
      for (let i = right - 1; i >= left; i--) {
        res.push(matrix[bottom][i]);
      }
    }
    if (left != right) {
      for (let i = bottom - 1; i > top; i--) {
        res.push(matrix[i][left]);
      }
    }

    left++, top++, right--, bottom--;
  }

  return res;
}
