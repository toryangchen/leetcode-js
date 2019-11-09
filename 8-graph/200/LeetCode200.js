/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
	let numOfIslands = 0;

	grid.map((r, x) => {
		r.map((c, y) => {
			if (grid[x][y] == '1') {
				numOfIslands++
				removeIslandRecursive(grid, x, y);
			}
		})
	})

	return numOfIslands;
};

var removeIslandRecursive = function(grid, x, y) {
	if (x < 0 || y < 0 || x >= grid.length || y >= grid[x].length || grid[x][y] === '0') {
		return;
	}
	grid[x][y] = '0';
	removeIslandRecursive(grid, x + 1, y);
	removeIslandRecursive(grid, x - 1, y);
	removeIslandRecursive(grid, x, y + 1);
	removeIslandRecursive(grid, x, y - 1);
}