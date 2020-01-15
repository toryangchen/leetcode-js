// 定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。

var stack = [];

function push(node) {
  // write code here
  stack.push(node);
}
function pop() {
  // write code here
  return stack.length === 0 ? null : stack.pop();
}
function top() {
  // write code here
  return stack.length === 0 ? null : stack[0];
}
function min() {
  // write code here
  return Math.min.apply(this, stack);
}
