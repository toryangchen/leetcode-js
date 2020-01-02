/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head) {
  // write code here
  let result = [];
  let current = head;
  while (current) {
    result.unshift(current.val);
    current = current.next;
  }

  return result;
}
