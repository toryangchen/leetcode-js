/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
	const bst = new BST(nums[nums.length - 1]);
	const output = new Array(nums.length).fill(0);
	for (let i = nums.length - 2; i >= 0; i--) {
		output[i] = bst.insert(nums[i]);
	}
	return output;
};

var BST = function(v, s = 0) {
	this.value = v;
	this.left = this.right = null;
	this.size = s;
}
BST.prototype.insert = function(v, s = 0) {
	if (v > this.value) {
		if (this.right) {
			return this.right.insert(v, s + this.size + 1)
		} else {
			this.right = new BST(v);
			return this.size + s + 1;
		}
	} else {
		this.size++;
		if (this.left) {
			return this.left.insert(v, s);
		} else {
			this.left = new BST(v);
			return s;
		}
	}
}
console.log(countSmaller([5, 2, 6, 1]));