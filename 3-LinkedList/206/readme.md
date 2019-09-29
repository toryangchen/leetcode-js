# LeetCode 206. 反转链表

## 题目描述

反转一个单链表。

示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL

进阶:
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？

## 解题思路

两种方式
1. 原地遍历链表 （循环体中的操作）
  * 使用临时变量temp存储当前节点的下一个节点；
  * 当前节点的next，连接到返回的res节点；
  * 将当前节点赋值给res节点，此时，res节点的头部已经插入当前节点；
  * 将存储的临时变量temp赋值给当前节点，即：当前节点前进一步；
2. 尾递归


## 刷题记录

- [x] 首刷：9.28
- [ ] 二刷：
- [ ] 三刷：