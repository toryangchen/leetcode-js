// 请实现一个函数按照之字形打印二叉树，即第一行按照从左到右的顺序打印，
// 第二层按照从右至左的顺序打印，第三行按照从左到右的顺序打印，其他行以此类推。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot) {
  // write code here
  if (!pRoot) {
    return []
  }
  var queue = [], result = [], flag = true;
  queue.push(pRoot);
  while (queue.length) {
    let len = queue.length;
    let tempArr = [];
    for (let i = 0; i < len; i++) {
      var temp = queue.shift();
      tempArr.push(temp.val);
      if (temp.left) {
        queue.push(temp.left);
      }
      if (temp.right) {
        queue.push(temp.right);
      }
    }
    if (!flag) {
      tempArr.reverse();
    }
    flag = !flag;
    result.push(tempArr);
  }
  return result;
}
