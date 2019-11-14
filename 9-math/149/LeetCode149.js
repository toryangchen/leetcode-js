/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
	function gcd(x, y) {
		if (y === 0) {
			return x;
		}
		return gcd(y, x % y);
	}

	if (points.length <= 2) {
		return points.length;
	}

	let result = Number.MIN_SAFE_INTEGER;

	for (let i = 0; i < points.length - 1; ++i) {
		let max = 0;
		let repeat = 0;
		let slope = new Map();
		for (let j = i + 1; j < points.length; ++j) {
			let dx = points[i][0] - points[j][0];
			let dy = points[i][1] - points[j][1];

			if (dy === 0 && dx === 0) {
				++repeat;
				continue;
			}
			const g = gcd(dy, dx);

			if (g !== 0) {
				dx /= g;
				dy /= g;
			}

			const key = `${dx}/${dy}`;
			let count = (slope.get(key) || 0) + 1;

			slope.set(key, count);
			max = Math.max(max, count);
		}
		result = Math.max(result, repeat + max + 1);
	}
	return result;
};