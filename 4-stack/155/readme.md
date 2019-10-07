# LeetCode 155. 最小栈

## 题目描述

设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。

push(x) -- 将元素 x 推入栈中。
pop() -- 删除栈顶的元素。
top() -- 获取栈顶元素。
getMin() -- 检索栈中的最小元素。

示例:

```
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.
```
## 解题思路

数组中存入(push)的并不仅仅是一个元素，是一个对象，包含：当前元素的存入后的最小值`min`和当前元素`val`；
当执行top函数时， 取栈顶对象的val值；
当执行getMin函数时，取栈顶对象的min值；
当执行pop函数时，将栈顶元素pop出即可；


## 刷题记录

- [x] 首刷：10.7
- [ ] 二刷：
- [ ] 三刷：
