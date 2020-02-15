// 题目描述
// 从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。

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
    var queue = [], result = [];
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
        result.push(tempArr);
    }
    return result;
}