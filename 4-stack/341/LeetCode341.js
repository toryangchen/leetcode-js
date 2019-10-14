/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
	this.array = nestedList;
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
	while (this.array.length !== 0) {
		if (this.array[0].isInteger()) {
			return true;
		} else {
			let cur = this.array[0].getList();
			this.array.shift();
			this.array.unshift(...cur);
		}
	}
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
	return this.array.shift().getInteger();
};