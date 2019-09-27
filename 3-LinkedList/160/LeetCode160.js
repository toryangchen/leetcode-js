/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
	if (headA == null || headB == null) {
		return null;
	}
	let first = headA,
		second = headB;
	while (first != second) {
		first = first == null ? headB : first.next;
		second = second == null ? headA : second.next;
	}

	return first;
};