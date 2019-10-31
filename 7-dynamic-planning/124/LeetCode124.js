/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
	let maxPathSum = -Infinity;
	const sum = maxPath(root);
	return Math.max(sum, maxPathSum);

	function maxPath(root) {
		if (!root) {
			return -Infinity;
		}

		let leftSum = maxPath(root.left);
		let rightSum = maxPath(root.right);
		let maxSubPath = Math.max(leftSum, rightSum);

		let pathSum = Math.max(root.val, root.val + maxSubPath);

		if (maxSubPath > pathSum) {
			maxPathSum = Math.max(maxPathSum, maxSubPath);
		}

		let pathFinishedSum = root.val + leftSum + rightSum;

		if (pathFinishedSum > pathSum) {
			maxPathSum = Math.max(maxPathSum, pathFinishedSum);
		}

		return pathSum;
	}
};