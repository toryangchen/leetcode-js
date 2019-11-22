# LeetCode 136. 只出现一次的数字

## 题目描述

给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

说明：

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

示例 1:

```
输入: [2,2,1]
输出: 1
```

示例 2:

```
输入: [4,1,2,1,2]
输出: 4
```
## 解题思路

两种解法：
1. 使用Object记录每个元素出现的次数，最后选取次数为1 的元素
2. 使用异或位运算
  * 交换律：a ^ b ^ c <=> a ^ c ^ b
  * 任何数于0异或为任何数 0 ^ n => n
  * 相同的数异或为0: n ^ n => 0

## 刷题记录

- [x] 首刷：11.13
- [ ] 二刷：
- [ ] 三刷：