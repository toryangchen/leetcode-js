/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {

	var stack = [];
	for (var token of tokens) {
		if (token === '+') {
			stack.push(stack.pop() + stack.pop());
		} else if (token === '-') {
			stack.push(-stack.pop() + stack.pop());
		} else if (token === '*') {
			stack.push(stack.pop() * stack.pop());
		} else if (token === '/') {
			let num = stack.pop();
			stack.push(Math.trunc(stack.pop() / num));
		} else {
			stack.push(Number(token));
		}
	}

	return stack.pop();
};

console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));

console.log(Math.trunc(-1.5));
console.log(Math.ceil(-1.5));
console.log(Math.floor(-1.5));


console.log(Math.trunc(1.5));
console.log(Math.ceil(1.5));
console.log(Math.floor(1.5));