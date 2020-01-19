// 输入一颗二叉树的跟节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。
// 路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。
// (注意: 在返回值的list中，数组长度大的数组靠前)

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

var path, stack;
function FindPath(root, expectNumber) {
  // write code here
  if (root == null) return [];
  stack = [];
  path = [];
  dfsPath(root, expectNumber);
  return path;
}

function dfsPath(root, expectNumber) {
  stack.push(root.val);
  if (root.val == expectNumber && root.left == null && root.right == null) {
    path.push(stack.slice());
  } else {
    if (root.left) {
      dfsPath(root.left, expectNumber - root.val);
    }

    if (root.right) {
      dfsPath(root.right, expectNumber - root.val);
    }
  }

  stack.pop();
}
