---
title: 1031 maximum sum of two non overlapping subarrays
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 1031-maximum-sum-of-two-non-overlapping-subarrays solution
description: 1031 maximum sum of two non overlapping subarrays LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/">1031. Maximum Sum of Two Non-Overlapping Subarrays</a></h2><h3>Medium</h3><hr><div><p>Given an integer array <code>nums</code> and two integers <code>firstLen</code> and <code>secondLen</code>, return <em>the maximum sum of elements in two non-overlapping <strong>subarrays</strong> with lengths </em><code>firstLen</code><em> and </em><code>secondLen</code>.</p>

<p>The array with length <code>firstLen</code> could occur before or after the array with length <code>secondLen</code>, but they have to be non-overlapping.</p>

<p>A <strong>subarray</strong> is a <strong>contiguous</strong> part of an array.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [0,6,5,2,2,5,1,9,4], firstLen = 1, secondLen = 2
<strong>Output:</strong> 20
<strong>Explanation:</strong> One choice of subarrays is [9] with length 1, and [6,5] with length 2.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [3,8,1,3,2,1,8,9,0], firstLen = 3, secondLen = 2
<strong>Output:</strong> 29
<strong>Explanation:</strong> One choice of subarrays is [3,8,1] with length 3, and [8,9] with length 2.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> nums = [2,1,5,6,0,9,5,0,3,8], firstLen = 4, secondLen = 3
<strong>Output:</strong> 31
<strong>Explanation:</strong> One choice of subarrays is [5,6,0,9] with length 4, and [0,3,8] with length 3.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= firstLen, secondLen &lt;= 1000</code></li>
	<li><code>2 &lt;= firstLen + secondLen &lt;= 1000</code></li>
	<li><code>firstLen + secondLen &lt;= nums.length &lt;= 1000</code></li>
	<li><code>0 &lt;= nums[i] &lt;= 1000</code></li>
</ul>
</div>

---




```python
class Solution:
    def maxSumTwoNoOverlap(self, nums: List[int], firstLen: int, secondLen: int) -> int:
        n = len(nums)
        prefixArr = []
        s = 0
        for i in nums:
            s += i
            prefixArr.append(s)
        
        def left(k):
            arr = [0] * n
            curmax = 0
            for i in range(k-1, n):
                cur = prefixArr[i] - prefixArr[i-k+1] + nums[i-k+1]
                curmax = max(curmax, cur)
                arr[i] = curmax
            return arr
        
        def right(k):
            arr = [0] * n
            curmax = 0
            for i in range(n-k, -1, -1):
                cur = prefixArr[i+k-1] - prefixArr[i] + nums[i]
                curmax = max(curmax, cur)
                arr[i] = curmax
            return arr
        
        first_left = left(firstLen)
        first_right = right(firstLen)
        second_left = left(secondLen)
        second_right = right(secondLen)
        
        res = 0
        for i in range(1, n):
            a = first_left[i-1] + second_right[i]
            b = second_left[i-1] + first_right[i]
            res = max(res, a, b)
        
        return res
```
