# 章节总结

本章的的题目比较杂乱，主要是使用hash、map、queue等相关的题目，共5道题目：
我觉得最有代表性的有两道题目：

## 1. 滑动窗口最大值

滑动窗口类的问题应该是面试中的高频题，一般需要用到`双指针`来求解，其实这一类题目都是有固定的解题思路与模板。

```javascript

var slidingWindowTemplate = function(arr){
  // 入参有效性的判断
  if (...) {
    ...
  }

  // 申请一个散列，用于记录窗口中具体元素的个数情况，可以使用数组形式
  var hash = [...arr];

  // l 表示左指针
  // count 记录当前的条件，具体根据题目要求来定义
  // result 用来存放结果
  var l = 0, count  = ... , results = ...;
  for (var r = 0; r < arr.length; r++) {
    hash[arr[r]]--; // 更新新元素在散列中的数量；

    // 根据窗口的变更结果来改变条件值
    if (hash[arr[r]] == ...) {
      count++;
    }

    // 如果当前条件不满足，移动左指针直至条件满足为止
    while(count > K || ...){
      ...
      if (...) {
        count--;
      }
      hash[arr[l]]++;
      l++;
    }
    // 更新结果
    results = ...
  }

  return results
}

```
具体题目可以在下一章来做；


## 2. 四数相加II

这道题让我想到[Leetcode 1. 两数之和](https://leetcode-cn.com/problems/two-sum/)。四数相加的暴力破解的时间算法复杂度为O(n^4)。但是，时间复杂度如何小于n^4呢？

还是使用LeetCode1的解题思路，先两两相加，然后再相加，这样的算法的时间复杂度就是O(n^2);

---

本章题目较容易！
