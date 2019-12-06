# 章节总结

这一章涉及到一些数学位运算的使用，每次做这一类题目都有一种恍然大悟的感觉；

## 异或位运算

然而异或位运算我如何做人，每个人都能想到的运算规律：

  * 交换律：a ^ b ^ c <=> a ^ c ^ b
  * 任何数于0异或为任何数 0 ^ n => n
  * 相同的数异或为0: n ^ n => 0

**LeetCode 136. 只出现一次的数字**

给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

我原本的思路是，记录该数组的元素出现的次数，然后在找那个出现次数为1的那个元素；

然而如果用异或位运算的话，没想到如此简单：

**相同的数异或为0**

```javascript
var singleNumber_1 = function(nums) {
	let res = 0;
	nums.forEach(item => {
		res ^= item;
	})
	return res;
};

```

**LeetCode 268. 缺失数字**

给定一个包含 0, 1, 2, ..., n 中 n 个数的序列，找出 0 .. n 中没有出现在序列中的那个数。

我的思路是使用高斯定理，先把n个数求和，然后再累加当前序列，相减后就是缺失数字；

然而我们可以用  `a ^ b ^ b = a` 。循环两次即可；

```javascript
var missingNumber = function(nums) {
	let res = 0;
	for (var num: nums) {
		res = num ^ res;
	}

	for (var i = 1; i <= array.length; i++) {
		res = i ^ res;
	}

	return res;
};
```

虽然两种算法上时间复杂度一样，但是使用位运算还是会快一些；
