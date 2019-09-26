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
var sortList = function(head) {
	if (!head || !head.next) {
		return head;
	}
	let fast = head.next,
		slow = head;
	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
	}

	fast = slow.next;
	slow.next = null;

	const merge = (l, r) => {
		const dummy = {};
		let cur = dummy;
		while (l && r) {
			if (l.val < r.val) {
				cur.next = l;
				l = l.next;
			} else {
				cur.next = r;
				r = r.next;
			}
			cur = cur.next;
		}
		cur.next = l || r;
		return dummy.next;
	};

	return merge(sortList(head), sortList(fast));
};