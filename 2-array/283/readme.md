# LeetCode 283. 移动零

## 题目描述

给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

示例:

```
输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
```

说明:

1. 必须在原数组上操作，不能拷贝额外的数组。
2. 尽量减少操作次数。

## 解题思路

两种方法

1. 新建一个数组，将原有的不为零的元素放到放到新数组返回即可，显然这个不是最优解；
2. 用一个指针记录不为零的元素的 index，然后依次将不为零的元素从头开始排到该数组中，后面补零即可；

## 刷题记录

- [x] 首刷：9.17
- [ ] 二刷：
- [ ] 三刷：
