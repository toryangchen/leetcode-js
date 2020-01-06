// 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。

var inArray = [];
var outArray = [];

function push(node) {
  // write code here
  outArray.push(node);
}
function pop() {
  // write code here
  if (!inArray.length) {
    while (outArray.length) {
      inArray.push(outArray.pop());
    }
  }
  return inArray.pop();
}
