// 输入两个链表，找出它们的第一个公共结点。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindFirstCommonNode(pHead1, pHead2) {
  // write code here
  let p1 = pHead1,
    p2 = pHead2;

  while (p1 != p2) {
    p1 = p1 != null ? p1.next : pHead2;
    p2 = p2 != null ? p2.next : pHead1;
  }

  return p1;
}
