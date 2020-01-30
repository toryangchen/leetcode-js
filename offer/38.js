/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function TreeDepth(pRoot) {
  // write code here
  if (pRoot == null) {
    return 0;
  }

  return Math.max(getDepth(pRoot.left, 1), getDepth(pRoot.right, 1));
}

function getDepth(root, count) {
  if (root == null) {
    return count;
  }

  return Math.max(
    getDepth(root.left, count + 1),
    getDepth(root.right, count + 1),
  );
}
