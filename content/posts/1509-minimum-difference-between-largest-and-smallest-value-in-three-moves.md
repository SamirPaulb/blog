---
title: 1509 minimum difference between largest and smallest value in three moves
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 1509-minimum-difference-between-largest-and-smallest-value-in-three-moves solution
description: 1509 minimum difference between largest and smallest value in three moves LeetCode Solution Explained
cover:
    image: https://scdn.netlify.app/img/leetcode-cover-img.webp
    alt: leetcode-cover-img
    caption: leetcode-cover-img
images: https://scdn.netlify.app/img/leetcode-cover-img.webp
date: 2021-10-04T15:58:26+08:00
lastmod: 2022-03-04T15:58:26+08:00
draft: false
author: Samir Paul
authorLink: https://twitter.com/intent/follow?screen_name=SamirPaulb
license: CC BY 4.0
---


<h2><a href="https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/">1509. Minimum Difference Between Largest and Smallest Value in Three Moves</a></h2><h3>Medium</h3><hr><div><p>You are given an integer array <code>nums</code>. In one move, you can choose one element of <code>nums</code> and change it by <strong>any value</strong>.</p>

<p>Return <em>the minimum difference between the largest and smallest value of <code>nums</code> after performing <strong>at most three moves</strong></em>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [5,3,2,4]
<strong>Output:</strong> 0
<strong>Explanation:</strong> Change the array [5,3,2,4] to [<strong>2</strong>,<strong>2</strong>,2,<strong>2</strong>].
The difference between the maximum and minimum is 2-2 = 0.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [1,5,0,10,14]
<strong>Output:</strong> 1
<strong>Explanation:</strong> Change the array [1,5,0,10,14] to [1,<strong>1</strong>,0,<strong>1</strong>,<strong>1</strong>]. 
The difference between the maximum and minimum is 1-0 = 1.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
</ul>
</div>

---




```python
class Solution:
    def minDifference(self, nums: List[int]) -> int:
        n = len(nums)
        if n <= 4: return 0
        
        nums.sort()
        res = nums[-1] - nums[0]
        
        for i in range(4):
            res = min(res, nums[n-4+i] - nums[i])
        
        return res
```
