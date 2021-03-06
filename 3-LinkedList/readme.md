# 章节总结

本章节完完成了8个链表相关的问题，各有收获，看到解析提到解决链表问题：

> 解决链表问题最好的办法是在脑中或者纸上把链表画出来

还是选几个我做的时候有一些问题的题目作为总结：

## 链表排序

链表排序的做好的做法就是归并排序，这里再记录一下归并排序的步骤

1. 首先递归地将数组分为两组（直到两两为一组）；
2. 将每组的数据排序；
3. 将排序好的两组，两两进行归并，合成一个新的数组；

## 判断回文链表

看到这个题目我就想到了[有效的括号](https://leetcode-cn.com/problems/valid-parentheses/)这道题目，可以使用一个栈队列来进行数据判断。但是细想以后，发现判断回文又是一个不同的问题，不能单纯地使用链表栈来实现；

1. 由于链表的特殊性，只能顺序取值，如果能够按照索引来取值的话，那么判断方法就比较容易了。所以有一个最简单的方法就是遍历链表，将数据存入数组，然后判断数组是否为回文；

但是该方法的空间复杂度为O(n)，能否有一个常数级的解决方法呢？

2. 原地算法
  * 使用快慢指针的方法找到链表的中点；
  * 倒置第一段链表；
  * 对比倒置后的第一段链表和第二段链表，看是否相等；

## 奇偶链表

奇偶链表实现的思路也非常容易；
将奇节点放在一个链表里，偶链表放在另一个链表里。然后把偶链表接在奇链表的尾部。

虽然思路很好想，但是要想实现也是有些麻烦的，可以把链表画出来就会好想很多：

其中循环部分可以这样实现：

```javaScript
  odd.next = even.next;
  odd = odd.next;
  even.next = odd.next;
  even = even.next;
```

---

对于老题目的复习不够，前面的一些题目的解题思路可能有些忘记！
