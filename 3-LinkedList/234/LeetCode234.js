/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
	let arr = [];
	let current = head;
	while (current) {
		arr.push(current.val)
		current = current.next
	}

	let reverse = arr.reverse();

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] != reverse[i]) {
			return false
		}
	}
	return true;
};