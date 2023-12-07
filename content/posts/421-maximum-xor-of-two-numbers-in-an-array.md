---
title: 421 maximum xor of two numbers in an array
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 421-maximum-xor-of-two-numbers-in-an-array solution
description: 421 maximum xor of two numbers in an array LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/">421. Maximum XOR of Two Numbers in an Array</a></h2><h3>Medium</h3><hr><div><p>Given an integer array <code>nums</code>, return <em>the maximum result of </em><code>nums[i] XOR nums[j]</code>, where <code>0 &lt;= i &lt;= j &lt; n</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [3,10,5,25,2,8]
<strong>Output:</strong> 28
<strong>Explanation:</strong> The maximum result is 5 XOR 25 = 28.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [14,70,53,83,49,91,36,80,92,51,66,70]
<strong>Output:</strong> 127
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 2 * 10<sup>5</sup></code></li>
	<li><code>0 &lt;= nums[i] &lt;= 2<sup>31</sup> - 1</code></li>
</ul>
</div>

---




```python
class TrieNode:
    def __init__(self):
        self.children = {}
        self.endNum = 0

class Solution:
    def __init__(self):
        self.root = TrieNode()
    
    def add(self, num):
        cur = self.root
        for i in range(31, -1, -1):
            bit = 1 if num & (1 << i) else 0
            if bit not in cur.children:
                cur.children[bit] = TrieNode()
            cur = cur.children[bit]
        cur.endNum = num
        
    def findMaximumXOR(self, nums):
        for num in nums:
            self.add(num)
        res = 0
        for num in nums:
            tmp = 0
            cur = self.root
            for i in range(31, -1, -1):
                bit  = 0 if num & (1 << i) else 1
                if bit == 0:
                    if 0 in cur.children: cur = cur.children[0]
                    else: cur = cur.children[1]
                else:
                    if 1 in cur.children: cur = cur.children[1]
                    else: cur = cur.children[0]
            res = max(res, num ^ cur.endNum)
        
        return res
```
