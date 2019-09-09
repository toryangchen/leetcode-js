/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      changeBorder(board, i, j);
    }
  }

  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      if (board[i][j] === -1) {
        board[i][j] = 1;
      }

      if (board[i][j] === 2) {
        board[i][j] = 0;
      }
    }
  }
};

var changeBorder = function(board, x, y) {
  let row = board.length;
  let col = board[0].length;
  let total = 0;

  for (var i = x - 1; i <= x + 1; i++) {
    for (var j = y - 1; j <= y + 1; j++) {
      if (i == x && j == y) {
        continue;
      }
      if (i >= 0 && i < row && j >= 0 && j < col) {
        if (board[i][j] > 0) {
          total++;
        }
      }
    }
  }

  if (board[x][y] > 0) {
    if (total < 2 || total > 3) {
      board[x][y] = 2;
    }
  }
  if (board[x][y] <= 0 && total == 3) {
    board[x][y] = -1;
  }
};
