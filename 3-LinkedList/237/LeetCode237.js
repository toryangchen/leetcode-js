/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {

	if (!node.next) {
		return
	}
	while (node.next.next) {
		node.val = node.next.val;
		node = node.next;
	}

	node.val = node.next.val;
	node.next = null;

}