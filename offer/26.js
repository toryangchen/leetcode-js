// 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。
// 要求不能创建任何新的结点，只能调整树中结点指针的指向。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Convert(pRootOfTree) {
  // write code here
  if (!pRootOfTree) {
    return null;
  }

  var arr = [],
    len = 0;
  sub(pRootOfTree, arr);
  len = arr.length;
  arr[0].left = null;
  arr[0].right = arr[1];
  for (let i = 0; i < len - 1; i++) {
    arr[i].left = arr[i - 1];
    arr[i].right = arr[i + 1];
  }
  arr[len - 1].left = arr[len - 2];
  arr[len - 1].right = null;

  return arr[0];
}

function sub(node, arr) {
  if (!node) {
    return;
  }
  sub(node.left, arr);
  arr.push(node);
  sub(node.right, arr);
}
