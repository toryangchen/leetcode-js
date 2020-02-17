// 给定一棵二叉搜索树，请找出其中的第k小的结点。
// 例如， （5，3，7，2，4，6，8）    中，按结点数值大小顺序第三小结点的值为4。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function KthNode(pRoot, k) {
    // write code here
    if (k <= 0) {
        return null;
    }
    var count = 0;
    function kNodes(pRoot, k) {
        if (pRoot != null) {
            var node = kNodes(pRoot.left, k);
            if (node != null) {
                return node;
            }
            count++;
            if (count == k) {
                return pRoot;
            }
            node = kNodes(pRoot.right, k);
            if (node != null) {
                return node;
            }
        }
        return null;
    }
    return kNodes(pRoot, k);
}