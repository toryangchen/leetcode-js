# LeetCode 146 LRU 缓存机制

## 题目描述

运用你所掌握的数据结构，设计和实现一个   LRU (最近最少使用) 缓存机制。它应该支持以下操作： 获取数据 get 和 写入数据 put 。

获取数据 get(key) - 如果密钥 (key) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1。 写入数据 put(key, value) - 如果密钥不存在，则写入其数据值。当缓存容量达到上限时，它应该在写入新数据之前删除最近最少使用的数据值，从而为新的数据值留出空间。

进阶:

你是否可以在  O(1) 时间复杂度内完成这两种操作？

```
示例:

LRUCache cache = new LRUCache( 2 /* 缓存容量 */ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // 返回  1
cache.put(3, 3);    // 该操作会使得密钥 2 作废
cache.get(2);       // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得密钥 1 作废
cache.get(1);       // 返回 -1 (未找到)
cache.get(3);       // 返回  3
cache.get(4);       // 返回  4
```

## 解题思路

使用 JavaScript 的 Map 数据结构，key 插入时的有序性：

- get 元素时，先将 get 的 k-v 删除，然后再按照顺序去插入数据，就把此时的 k-v 就在最前方；
- put 元素时，先做 key 的删除，再 put 进去放入最前方；这样操作的原因就是如果有元素，则将原来的删除，没有即返回 false，不影响结果；
  - 如果超过容量，则删除最后一个即可

## 刷题记录

- [x] 首刷：9.7
- [ ] 二刷：
- [ ] 三刷：
