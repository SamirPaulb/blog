---
title: 0689 maximum sum of 3 non overlapping subarrays
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 0689-maximum-sum-of-3-non-overlapping-subarrays solution
description: 0689 maximum sum of 3 non overlapping subarrays LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/">689. Maximum Sum of 3 Non-Overlapping Subarrays</a></h2><h3>Hard</h3><hr><div><p>Given an integer array <code>nums</code> and an integer <code>k</code>, find three non-overlapping subarrays of length <code>k</code> with maximum sum and return them.</p>

<p>Return the result as a list of indices representing the starting position of each interval (<strong>0-indexed</strong>). If there are multiple answers, return the lexicographically smallest one.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [1,2,1,2,6,7,5,1], k = 2
<strong>Output:</strong> [0,3,5]
<strong>Explanation:</strong> Subarrays [1, 2], [2, 6], [7, 5] correspond to the starting indices [0, 3, 5].
We could have also taken [2, 1], but an answer of [1, 3, 5] would be lexicographically larger.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [1,2,1,2,1,2,1,2,1], k = 2
<strong>Output:</strong> [0,2,4]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 2 * 10<sup>4</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;&nbsp;2<sup>16</sup></code></li>
	<li><code>1 &lt;= k &lt;= floor(nums.length / 3)</code></li>
</ul>
</div>

---




```python
class Solution:
    def maxSumOfThreeSubarrays(self, nums: List[int], k: int) -> List[int]:
        prefixSum = []
        s = 0
        for i in nums:
            s += i
            prefixSum.append(s)

        n = len(nums)
        left = [(0,0)] * n
        for i in range(k-1, n-2*k):
            curSum = prefixSum[i] - prefixSum[i-k+1] + nums[i-k+1]
            if i>0: left[i] = left[i-1]
            if curSum > left[i][0]:
                left[i] = (curSum, i-k+1)
        
        right = [(0,0)] * n
        for i in range(n-k, 2*k-1, -1):
            curSum = prefixSum[i+k-1] - prefixSum[i] + nums[i]
            if i+1 < n: right[i] = right[i+1]
            if curSum >= right[i][0]:
                right[i] = (curSum, i)
        
        res = []
        maxSum = 0
        for i in range(k, n-k):
            l = i-1
            r = i+k
            curSum = left[l][0] + (prefixSum[r-1] - prefixSum[l]) + right[r][0]
            if curSum > maxSum:
                maxSum = curSum
                res = [left[l][1], i, right[r][1]]
        # print(prefixSum)
        # print(left)
        # print(right)
        return res
        
                
            
```
