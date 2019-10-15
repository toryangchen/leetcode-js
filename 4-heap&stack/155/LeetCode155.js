/**
 * initialize your data structure here.
 */
var MinStack = function() {
	this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
	const min = typeof this.getMin() === 'number' ? Math.min(MinStack.getMin(), x) : x;
	this.stack.push({
		val: x,
		min
	});
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
	this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
	return this.stack.length ? this.stack.getLast().val : null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
	return this.stack.length ? this.stack.getLast().min : null;
};

MinStack.prototype.getLast = function() {
	return this.stack[this.stack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */