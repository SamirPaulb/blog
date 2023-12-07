---
title: 229 majority element ii
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 229-majority-element-ii solution
description: 229 majority element ii LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/majority-element-ii/">229. Majority Element II</a></h2><h3>Medium</h3><hr><div><p>Given an integer array of size <code>n</code>, find all elements that appear more than <code>⌊ n/3 ⌋</code> times.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [3,2,3]
<strong>Output:</strong> [3]
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [1]
<strong>Output:</strong> [1]
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> nums = [1,2]
<strong>Output:</strong> [1,2]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong> Could you solve the problem in linear time and in <code>O(1)</code> space?</p>
</div>

---




```python
class Solution:
    def majorityElement(self, nums: List[int]) -> List[int]:
        res = set()
        
        me1 = ""
        me2 = ""
        count1 = 0
        count2 = 0
        
        for num in nums:
            if me1 == num:
                count1 += 1
            elif me2 == num:
                count2 += 1
            elif count1 == 0:
                me1 = num
                count1 = 1
            elif count2 == 0:
                me2 = num
                count2 = 1
            else:
                count1 -= 1
                count2 -= 1
        
        if nums.count(me1) > len(nums)//3: res.add(me1)
        if nums.count(me2) > len(nums)//3: res.add(me2)
        
        return res
```
