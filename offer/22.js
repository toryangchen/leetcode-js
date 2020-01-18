// 从上往下打印出二叉树的每个节点，同层节点从左至右打印。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root) {
  // write code here
  var arr = [],
    res = [];
  if (root) {
    arr.push(root);
  }

  while (arr.length != 0) {
    var node = arr.shift();
    if (node.left) {
      arr.push(node.left);
    }

    if (node.right) {
      arr.push(node.right);
    }

    res.push(node.val);
  }

  return res;
}
