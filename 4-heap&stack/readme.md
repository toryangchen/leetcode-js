# 章节总结

本章有8篇关于堆和栈的相关的题目，题目难度相对来说较大，但是通过这一章的题目，我主要有两个收获：
1. 了解桶排序的思想：
2. 了解了很多`Array`和`Math`相关的API：
  * `Array.protoType.reduce()`;
  * `Array.protoType.splice()`;
  * `Array.protoType.push()/Array.protoType.pop()`，`Array.protoType.shift()/Array.protoType.unshift()`;
  * `Array.protoType.slice()`;
  * `Array.protoType.map()`;
  * `Array.protoType.from()`;
  * `Array.protoType.forEach()`;
  * `Array.protoType.fill()`;

## 1. 计算器相关题目
这一章有两个计算器相关的题目，[LeetCode 150. 逆波兰表达式求值](https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/)和[LeetCode 227. 基本计算器 II](https://leetcode-cn.com/problems/basic-calculator-ii/)。

**逆波兰表达式**，即后缀表达式；通俗点来说，就是当遇到`+ - * /`的运算符时，去取运算符前面两个数字进行运算，然后将结果插入该位置即可；这道题目让我了解了`Math.trunc`这个API，类似的还有`Math.floor`和`Math.ceil`。三者的区别是：

> (x<0?Math.ceil(x):Math.floor(x)) ===  Math.trunc(x)

**基本计算器 II**，这道题目就有些复杂，需要对传入表达式按位取值。当出现`+`或者`-`时，可以使用数字的正负进行代替，存入数组。如果出现`*`或者`/`时，立即执行，将结果存入数组，遍历完后，将数组累加即可；


## 2. 桶排序

实现桶排序的步骤：

1. 原数组遍历一次，找出数组中最大元素Max和最小的元素Min；
2. 创建一个新的数组arr，数组的长度为`Max-Min+1`，初始化数组元素为0；
3. 再次遍历原数组，并在新数组存各个元素出现的次数；（新数组的下标即为，`原数组数组元素-Min`）；

基于上面的桶元素，就可以解决下面的一些问题：

**[LeetCode 215. 数组中的第 K 个最大元素](https://leetcode-cn.com/problems/kth-largest-element-in-an-array/)**，从桶数组中的最后一个元素开始取，数到第k个，即为数组中的第K个最大元素；
**[LeetCode 378. 有序矩阵中第 k 小的元素](https://leetcode-cn.com/problems/kth-smallest-element-in-a-sorted-matrix/)**，这道题目我把矩阵构建了成了一个桶数组，本地跑是没有问题，但是在LeetCode上跑不通，堆溢出，可能网站上为js数组分配的内存大小有限制；

桶排序非常简单，如果理解方法的话，确实是一个很方便的解决问题的方法；

## 3. 二分查找

这8个题目中，有两个题目用到了二分查找来解决问题，[LeetCode 295. 数据流的中位数](https://leetcode-cn.com/problems/find-median-from-data-stream/)和[LeetCode 378. 有序矩阵中第 k 小的元素](https://leetcode-cn.com/problems/kth-smallest-element-in-a-sorted-matrix/)

二分排序首先是找中点，下面应该是一个通用的表达式：

```javascript
while(start < end){
  mid = (start + end) >> 1
  if (condition) {
    start ++;
  }else {
    end --;
  }
}
```
二分查找能够极大地优化算法的时间复杂度和空间复杂度，比如，`LeetCode 378`这道题目，使用桶排序的方法，就报堆溢出，但是使用二分查找，就可以完美地解决；

---

本章题目确实有些难度，还需好好消化！
