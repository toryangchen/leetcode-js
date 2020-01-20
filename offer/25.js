//输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针指向任意一个节点），
// 返回结果为复制后复杂链表的head。
//（注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）

/*function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}*/
function Clone(pHead) {
  // write code here
  if (pHead == null) {
    return null;
  }

  var current = pHead,
    temp = null,
    pNewHead = null;

  while (current) {
    temp = new RandomListNode(current.label);
    temp.next = current.next;
    current.next = temp;
    current = current.next.next;
  }

  current = pHead;
  while (current) {
    if (current.random) {
      current.next.random = current.random.next;
    }
    current = current.next.next;
  }

  pNewHead = pHead.next;
  current = pHead;
  var clone;

  while (current) {
    clone = current.next;
    current.next = clone.next;
    clone.next = clone.next ? clone.next.next : null;
    current = current.next;
  }

  return pNewHead;
}
