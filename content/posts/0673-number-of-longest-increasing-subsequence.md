---
title: 0673 number of longest increasing subsequence
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 0673-number-of-longest-increasing-subsequence solution
description: 0673 number of longest increasing subsequence LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/number-of-longest-increasing-subsequence/">673. Number of Longest Increasing Subsequence</a></h2><h3>Medium</h3><hr><div><p>Given an integer array&nbsp;<code>nums</code>, return <em>the number of longest increasing subsequences.</em></p>

<p><strong>Notice</strong> that the sequence has to be <strong>strictly</strong> increasing.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [1,3,5,4,7]
<strong>Output:</strong> 2
<strong>Explanation:</strong> The two longest increasing subsequences are [1, 3, 4, 7] and [1, 3, 5, 7].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [2,2,2,2,2]
<strong>Output:</strong> 5
<strong>Explanation:</strong> The length of the longest increasing subsequence is 1, and there are 5 increasing subsequences of length 1, so output 5.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 2000</code></li>
	<li><code>-10<sup>6</sup> &lt;= nums[i] &lt;= 10<sup>6</sup></code></li>
</ul>
</div>

---




```python
# https://leetcode.com/problems/number-of-longest-increasing-subsequence/
# https://youtu.be/Tuc-rjJbsXU

class Solution:
    def findNumberOfLIS(self, nums: List[int]) -> int:
        dp = [1]*len(nums)  # length of LIS
        count = [1]*len(nums)   # count of LIS
        
        for r in range(len(nums)):
            for l in range(r):
                if nums[l] < nums[r] and dp[l] + 1 > dp[r]:
                    dp[r] = dp[l] + 1
                    count[r] = count[l]
                elif nums[l] < nums[r] and dp[l] + 1 == dp[r]:
                    count[r] += count[l]
        
        maxi = max(dp)
        res = 0
        for i in range(len(nums)):
            if dp[i] == maxi:
                res += count[i]
        # print(nums)
        # print(dp)
        # print(count)
        return res
```
