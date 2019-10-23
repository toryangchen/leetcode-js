/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {

	let sol;

	function traverseTreeInOrder(node) {
		if (!node || sol !== undefined) {
			return;
		}

		traverseTreeInOrder(node.left);

		if (--k === 0) {
			sol = node.val;
		}

		traverseTreeInOrder(node.right);
	}

	traverseTreeInOrder(node);

	return sol;
};