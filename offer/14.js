// 输入一个链表，输出该链表中倒数第k个结点。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k) {
  // write code here
  if (head == null || k <= 0) return false;
  let fast = head,
    slow = head;
  let index = 1;

  while (fast.next) {
    if (index < k) {
      index++;
      fast = fast.next;
    } else {
      fast = fast.next;
      slow = slow.next;
    }
  }

  return index < k ? null : slow;
}
