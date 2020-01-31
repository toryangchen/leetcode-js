// 输入一棵二叉树，判断该二叉树是否是平衡二叉树。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function IsBalanced_Solution(pRoot) {
  // write code here
  if (pRoot == null) {
    return true;
  }

  if (Math.abs(getDepth(pRoot.left, 1) - getDepth(pRoot.right, 1)) > 1) {
    return false;
  }

  return IsBalanced_Solution(pRoot.left) && IsBalanced_Solution(pRoot.right);
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
