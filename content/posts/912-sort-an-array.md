---
title: 912 sort an array
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 912-sort-an-array solution
description: 912 sort an array LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/sort-an-array/">912. Sort an Array</a></h2><h3>Medium</h3><hr><div><p>Given an array of integers <code>nums</code>, sort the array in ascending order.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [5,2,3,1]
<strong>Output:</strong> [1,2,3,5]
</pre><p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [5,1,1,2,0,0]
<strong>Output:</strong> [0,0,1,1,2,5]
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>-5 * 10<sup>4</sup> &lt;= nums[i] &lt;= 5 * 10<sup>4</sup></code></li>
</ul>
</div>

---




```python
class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        if len(nums) <= 1: return nums
        l = 0; r = len(nums)
        mid = l + (r - l) // 2
        left = self.sortArray(nums[:mid])
        right = self.sortArray(nums[mid:])
        return self.mergeSortedArrays(left, right)
    
    def mergeSortedArrays(self, a, b):
        if not a or not b: return b or a
        arr = []
        i = j = 0
        while i < len(a) and j < len(b):
            if a[i] <= b[j]:
                arr.append(a[i])
                i += 1
            else:
                arr.append(b[j])
                j += 1
        while i < len(a):
            arr.append(a[i])
            i += 1
        while j < len(b):
            arr.append(b[j])
            j += 1
        return arr
```
