/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
	let res = null;
	let current = head;
	while (current) {
		let temp = current.next;
		current.next = res;
		res = current;
		current = temp;
	}
	return res;
};

var reverseList_1 = function(head) {

	var reverse = function(pre, cur) {
		if (cur == null) {
			return pre;
		}
		let next = cur.next
		cur.next = pre
		return reverse(cur, next);
	}
	return reverse(null, head);
};