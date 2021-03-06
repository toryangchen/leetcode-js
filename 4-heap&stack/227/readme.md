# LeetCode 227. 基本计算器 II

## 题目描述

实现一个基本的计算器来计算一个简单的字符串表达式的值。

字符串表达式仅包含非负整数，+， - ，\*，/ 四种运算符和空格  。 整数除法仅保留整数部分。

示例 1:

```
输入: "3+2*2"
输出: 7
```

示例 2:

```
输入: " 3/2 "
输出: 1
```

示例 3:

```
输入: " 3+5 / 2 "
输出: 5
```

## 解题思路

解题需要注意两个点：

1. 具体执行运算num的获取：`num = num * 10 + s[i].charCodeAt(0) - '0'.charCodeAt(0);`这里主要是为了获取数字，由于for循环是从String中一个一个拿char，所以这里要取多位数数字。charCodeAt是取ascii码，`s[i].charCodeAt(0) - '0'.charCodeAt(0)`意思是通过ascii码来取具体数字；
2. 加减乘除的执行时机，加和减分别使用正负号添加，乘和除均立即执行；

## 刷题记录

- [x] 首刷：10.13/10.14
- [ ] 二刷：
- [ ] 三刷：
