# LeetCode 169. 求众数

## 题目描述

给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于  ⌊ n/2 ⌋  的元素。

你可以假设数组是非空的，并且给定的数组总是存在众数。

示例  1:

```
输入: [3,2,3]
输出: 3
```

示例  2:

```
输入: [2,2,1,1,1,2,2]
输出: 2
```

## 解题思路

这道题目比较容易，解题的方法有也有很多，比如使用 Map 记录数组每个元素的出现的次数，对数组排序取中间的的数，但是第一个解法的空间复杂度和时间复杂度都是 O(n)，第二个解法的时间复杂度为 O(nlogn)，有些差强人意。

题目指出，当前数组众总是存在众数，也就是说，当前数组众某个元素出现的次数大于 数组长度的一半。对此我们可以想到，众数的数量一定大于所有非众数的数量之和。所以我们只要找出两个不同的数，相互删除，剩下的一个就是众数。用这样的方法只需要时间复杂度为 O(n)，空间复杂度为 O(1)；

## 刷题记录

- [x] 首刷：9.14
- [ ] 二刷：
- [ ] 三刷：