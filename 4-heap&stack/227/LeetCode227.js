/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
	if (!s || !s.length) return 0;
	s = s.trim();
	let stack = [];
	let num = 0,
		sign = '+';
	for (var i = 0; i < s.length; i++) {
		if (s[i] === ' ') continue;

		if (!isNaN(s[i])) {
			num = num * 10 + s[i].charCodeAt(0) - '0'.charCodeAt(0);
		}

		if (isNaN(s[i]) || i === s.length - 1) {
			switch (sign) {
				case '+':
					stack.push(num);
					break;
				case '-':
					stack.push(-num);
					break;
				case '*':
					stack.push(stack.pop() * num);
					break;
				case '/':
					stack.push(Math.trunc(stack.pop() / num));
					break;
			}
			sign = s[i];
			num = 0;
		}
	}
	return stack.reduce((a, b) => a + b);
};

console.log(calculate("12 / 3"));