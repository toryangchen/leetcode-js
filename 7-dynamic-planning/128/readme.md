# LeetCode 128. 最长连续序列

## 题目描述

给定一个未排序的整数数组，找出最长连续序列的长度。

要求算法的时间复杂度为 O(n)。

示例:

```
输入: [100, 4, 200, 1, 3, 2]
输出: 4
解释: 最长连续序列是 [1, 2, 3, 4]。它的长度为 4。
```

## 解题思路

```
for (var i = 0; i < nums.length; i++) {
  let shift = 1;

  // 这里判断是否有连续的序列，has方法时间复杂度为O(1)，如果没有连续的，shift即为当前的最长的序列
  while (numSet.has(nums[i] + shift)) {
    shift++;
  }

  longest = Math.max(shift, longest);
}
```

## 刷题记录

- [x] 首刷：11.1
- [ ] 二刷：
- [ ] 三刷：
