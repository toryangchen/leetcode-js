# 章节总结

本章题目比较中规中矩，没有比较难的，选两个比较有意思的题目总结一下吧：

1. [LeetCode 287. 寻找重复数](https://leetcode-cn.com/problems/find-the-duplicate-number/)
2. [LeetCode 315. 计算右侧小于当前元素的个数](https://leetcode-cn.com/problems/count-of-smaller-numbers-after-self/)

## 1.弗洛伊德的乌龟和兔子

LeetCode 287. 寻找重复数：给定一个包含`n + 1`个整数的数组`nums`，其数字都在`1`到`n`之间（包括`1`和`n`），可知至少存在一个重复的整数。假设只有一个重复的整数，找出这个重复的数。

解法非常巧妙，与链表中是否有环这道题目想法相同；

如果使用快慢指针的方法，fast 和 slow 是指针, nums[slow] 表示取指针对应的元素。注意 nums 数组中的数字都是在 1 到 n 之间的(在数组中进行游走不会越界),因为有重复数字的出现, 所以这个游走必然是成环的, 环的入口就是重复的元素, 即按照寻找链表环入口的思路来做：

```javascript
var findDuplicate = function(nums) {
  let [fast, slow] = [nums[0], nums[0]];

  //第一个循环是判断相遇
	do {
		slow = nums[slow];
		fast = nums[nums[fast]];
	} while (fast != slow);

  // 第二个循环是找到环的入口
	let [ptr1, ptr2] = [nums[0], slow];
	while (ptr1 != ptr2) {
		ptr1 = nums[ptr1];
		ptr2 = nums[ptr2];
	}
	return ptr1;
};
```

## 2. 二叉搜索树

二叉查找树（Binary Search Tree），（又：二叉搜索树，二叉排序树）它或者是一棵空树，或者是具有下列性质的二叉树： 若它的左子树不空，则左子树上所有结点的值均小于它的根结点的值； 若它的右子树不空，则右子树上所有结点的值均大于它的根结点的值；它的左、右子树也分别为二叉排序树。

LeetCode 315. 计算右侧小于当前元素的个数；给定一个整数数组 nums，按要求返回一个新数组 counts。数组 counts 有该性质： counts[i] 的值是  nums[i] 右侧小于 nums[i] 的元素的数量。

很明显，构建一个二叉树搜索树会很轻易解决这个问题；

那么如何构建二叉搜索树呢？

```javascript
var BST = function(v, s = 0) {
	this.value = v;
	this.left = this.right = null;
	this.size = s;
}
BST.prototype.insert = function(v, s = 0) {
	if (v > this.value) {
		if (this.right) {
			return this.right.insert(v, s + this.size + 1)
		} else {
			this.right = new BST(v);
			return this.size + s + 1;
		}
	} else {
		this.size++;
		if (this.left) {
			return this.left.insert(v, s);
		} else {
			this.left = new BST(v);
			return s;
		}
	}
}
```
