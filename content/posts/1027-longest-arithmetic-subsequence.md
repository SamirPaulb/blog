---
title: 1027 longest arithmetic subsequence
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 1027-longest-arithmetic-subsequence solution
description: 1027 longest arithmetic subsequence LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/longest-arithmetic-subsequence/">1027. Longest Arithmetic Subsequence</a></h2><h3>Medium</h3><hr><div><p>Given an array <code>nums</code> of integers, return the <strong>length</strong> of the longest arithmetic subsequence in <code>nums</code>.</p>

<p>Recall that a <em>subsequence</em> of an array <code>nums</code> is a list <code>nums[i<sub>1</sub>], nums[i<sub>2</sub>], ..., nums[i<sub>k</sub>]</code> with <code>0 &lt;= i<sub>1</sub> &lt; i<sub>2</sub> &lt; ... &lt; i<sub>k</sub> &lt;= nums.length - 1</code>, and that a sequence <code>seq</code> is <em>arithmetic</em> if <code>seq[i+1] - seq[i]</code> are all the same value (for <code>0 &lt;= i &lt; seq.length - 1</code>).</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [3,6,9,12]
<strong>Output:</strong> 4
<strong>Explanation: </strong>
The whole array is an arithmetic sequence with steps of length = 3.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [9,4,7,2,10]
<strong>Output:</strong> 3
<strong>Explanation: </strong>
The longest arithmetic subsequence is [4,7,10].
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> nums = [20,1,15,3,10,5,8]
<strong>Output:</strong> 4
<strong>Explanation: </strong>
The longest arithmetic subsequence is [20,15,10,5].
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= nums.length &lt;= 1000</code></li>
	<li><code>0 &lt;= nums[i] &lt;= 500</code></li>
</ul>
</div>

---




```python
class Solution:
    def longestArithSeqLength(self, nums: List[int]) -> int:
        dp = [{} for _ in range(len(nums))]
        res = 0
        
        for i in range(len(nums)):
            for j in range(i):
                diff = nums[i] - nums[j]
                if diff in dp[j]:
                    dp[i][diff] = max(2, 1 + dp[j][diff])
                else:
                    dp[i][diff] = 2
                res = max(res, dp[i][diff])
            
        return res
    
    
# Time: O(N^2)
# Space: O(N^2)
```
