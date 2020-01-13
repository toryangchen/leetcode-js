// 输入一个链表，反转链表后，输出新链表的表头。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead) {
  // write code here
  if (pHead == null) {
    return false;
  }
  let res = null,
    temp = null,
    current = pHead;

  while (current.next) {
    temp = current.next;
    current.next = res;
    res = current;
    current = temp;
  }

  return res;
}
