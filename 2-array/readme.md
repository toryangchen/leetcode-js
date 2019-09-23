# 章节总结

本章节完成了关于数组的10个题目，大部分题目还是有思路，可以独立完成的，但是也有一部分需要一些比较讨巧的思路；

## 最简单的动态规划问题

[LeetCode 152. 乘积最大子序列](https://github.com/toryangchen/leetcode-js/tree/master/2-array/152)，这道题目是最简单的一道动态规划问题。选择乘积最大的序列，其实就是分析元素的正负问题，

遍历数组元素，分别记录最大值max、最小值min和返回值res

如果当前元素值为负数：(计算之余应该与当前元素相比较)
max就变为：Math.max(min * current,current)
min就变为：Math.min(max * current,current)

如果当前元素值为正数：(计算之余应该与当前元素相比较)
max就变为：Math.max(max * current,current)
min就变为：Math.min(min * current,current)

res的值为：Math.max(res,max);

题目解决

## 数组旋转

[LeetCode 189. 旋转数组](https://github.com/toryangchen/leetcode-js/tree/master/2-array/189)，这道题目要求数组向右移动若干个位置。为了实现时间和空间复杂度的要求，对该数组进行三次翻转即可；

以第k个位置为例：

1. 对第一段数组(0~k-1)翻转
2. 对第二段数组(k~n)翻转
3. 对数组整体翻转

这里翻转的函数：设置首尾两个指针，首尾交换，并双指针向中间移动；

经过三次翻转，题目解决，原地算法，时间复杂度O(n)，空间复杂度O(1)

## 正反两次的遍历

[LeetCode 238. 除自身以外数组的乘积](https://github.com/toryangchen/leetcode-js/tree/master/2-array/238)。这道题目如果可以使用除法的话，就先累乘，然后将每个元素依次从累乘的积从该数中除去即可，但是如果不能使用除法呢？

若数组为：[a1,a2,a3,a4,a5]，返回值res[];
第一次遍历，从前往后
res[0] : 1
res[1] : a1
res[2] : a1 * a2
res[3] : a1 * a2 * a3
res[4] : a1 * a2 * a3 * a4

第二次遍历，从后往前
res[4] : res[4] * 1 = a1 * a2 * a3 * a4
res[3] : res[3] * a5 = a1 * a2 * a3 * a5
res[2] : res[2] * a4 * a5 = a1 * a2 * a4 * a5
res[1] : res[1] * a3 * a4 * a5 = a1 * a3 * a4 * a5
res[0] : res[0] * a2 * a3 * a4 * a5 = a2 * a3 * a4 * a5

**总结：**
通过上面的两次遍历我们可以看出，第一次遍历是数组和为当前元素左边的元素的累积。第二次遍历是数组和为当前元素左边的元素的累积。两次遍历得到返回结果；

### 其余

## 递增三元子序列
[LeetCode 334. 递增三元子序列](https://github.com/toryangchen/leetcode-js/tree/master/2-array/334)，这个题目是属于那种不看解析无处下爪，看了解析恍然大悟那种题目。
遍历一次，依次去填三元数组，如果填满即返回true

## 打乱数组
[LeetCode 384. 打乱数组](https://github.com/toryangchen/leetcode-js/tree/master/2-array/384)，这个题目也比较无厘头，开放性比较大。打乱数组时可以两两交换数组元素


----

这一组题目都是关于数组的，也做到了每天一道，做得还行。继续加油！
