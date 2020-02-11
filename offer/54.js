// 给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function EntryNodeOfLoop(pHead) {
  // write code here
  if (pHead == null || pHead.next == null || pHead.next.next == null) {
    return null;
  }
  let slow = pHead.next;
  let fast = pHead.next.next;
  while (slow && fast) {
    if (slow != fast) {
      fast = fast.next.next;
      slow = slow.next;
    } else {
      break;
    }
  }

  if (fast == null || slow == null) {
    return null;
  }

  fast = pHead;
  while (fast != slow) {
    fast = fast.next;
    slow = slow.next;
  }

  return fast;
}
