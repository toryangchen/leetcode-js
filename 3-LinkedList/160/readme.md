# LeetCode 160. 相交链表

## 题目描述
编写一个程序，找到两个单链表相交的起始节点。

如下面的两个链表：

```
A        a1 -> a2  
                   c1 -> c2
B  b1 -> b2 -> b3
```

在节点 c1 开始相交。

注意：

* 如果两个链表没有交点，返回 null.
* 在返回结果后，两个链表仍须保持原有的结构。
* 可假定整个链表结构中没有循环。
* 程序尽量满足 O(n) 时间复杂度，且仅用 O(1) 内存。

## 解题思路

1. 用节点a，b分别从 headA 和 headB 链表遍历；
2. 如果a遍历到尾节点，则将headB赋值到该节点，b遍历到尾节点，则将headA赋值到该节点；
3. 如果a=b，则有两种情况：
  * a=b && a=null：无相交节点
  * a=b && a!=null：有相交节点，相交节点为a和b

## 刷题记录

- [x] 首刷：9.27
- [ ] 二刷：
- [ ] 三刷：