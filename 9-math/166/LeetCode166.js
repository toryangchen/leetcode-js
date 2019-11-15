/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
	if (numerator === 0) {
		return '0'
	}
	const isNegative = numerator < 0 ? denominator > 0 : denominator < 0;

	numerator = Math.abs(numerator);
	denominator = Math.abs(denominator);

	const leftSide = Math.floor(numerator / denominator);
	const hasDecimal = (numerator / denominator) % 1 !== 0;

	if (!hasDecimal) {
		return isNegative ? `-${leftSide.toString()}` : leftSide.toString();
	}

	let result = [leftSide.toString(), '.'];
	addDecimal(numerator, denominator, leftSide, result);

	if (isNegative) {
		result.unshift('-');
	}

	return result.join('');
};

function addDecimal(numerator, denominator, leftSide, result) {
	console.log(numerator + ", " + denominator + ", " + leftSide, result);

	numerator -= (leftSide * denominator);

	let idx = 0;
	const carries = {};

	while (numerator != 0 && !(numerator in carries)) {
		carries[numerator] = idx++;
		numerator *= 10;
		const nextDigit = Math.floor(numerator / denominator);
		result.push(nextDigit.toString());
		numerator %= denominator;
	}

	if (numerator in carries) {
		result.splice(2 + carries[numerator], 0, '(');
		result.push(")")
	}
}

console.log(fractionToDecimal(2, 3));