---
title: 179 largest number
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 179-largest-number solution
description: 179 largest number LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/largest-number/">179. Largest Number</a></h2><h3>Medium</h3><hr><div><p>Given a list of non-negative integers <code>nums</code>, arrange them such that they form the largest number and return it.</p>

<p>Since the result may be very large, so you need to return a string instead of an integer.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [10,2]
<strong>Output:</strong> "210"
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [3,30,34,5,9]
<strong>Output:</strong> "9534330"
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 100</code></li>
	<li><code>0 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
</ul>
</div>

---




```python
class Solution:
    def largestNumber(self, nums: List[int]) -> str:
        n = len(nums)
        for i in range(n):
            nums[i] = str(nums[i])
        # Bubble Sort
        for k in range(n):
            for i in range(n-1):
                if nums[i] + nums[i+1] < nums[i+1] + nums[i]:
                    nums[i], nums[i+1] = nums[i+1], nums[i]
        
        ans = "".join(nums)
        return ans if int(ans) != 0 else "0"
```
