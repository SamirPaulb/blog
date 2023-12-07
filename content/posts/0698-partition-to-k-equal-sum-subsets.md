---
title: 0698 partition to k equal sum subsets
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 0698-partition-to-k-equal-sum-subsets solution
description: 0698 partition to k equal sum subsets LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/partition-to-k-equal-sum-subsets/">698. Partition to K Equal Sum Subsets</a></h2><h3>Medium</h3><hr><div><p>Given an integer array <code>nums</code> and an integer <code>k</code>, return <code>true</code> if it is possible to divide this array into <code>k</code> non-empty subsets whose sums are all equal.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [4,3,2,3,5,2,1], k = 4
<strong>Output:</strong> true
<strong>Explanation:</strong> It is possible to divide it into 4 subsets (5), (1, 4), (2,3), (2,3) with equal sums.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [1,2,3,4], k = 3
<strong>Output:</strong> false
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= k &lt;= nums.length &lt;= 16</code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
	<li>The frequency of each element is in the range <code>[1, 4]</code>.</li>
</ul>
</div>

---




```python
# https://leetcode.com/problems/partition-to-k-equal-sum-subsets/

class Solution:
    def canPartitionKSubsets(self, nums, k):
        nums.sort(reverse=True)
        subsets, target = [0] * k, sum(nums)//k
        
        def backtrack(idx):
            if idx == len(nums):
                return True
            for i in range(k):
                subsets[i] += nums[idx]
                if subsets[i] <= target and backtrack(idx+1): 
                    return True
                subsets[i] -= nums[idx]
                if subsets[i] == 0: 
                    break
            return False
        
        return backtrack(0)
    
# Time: O(n * 2^k)
# Space: O(n * 2^k)


'''
# https://youtu.be/h_6MldQ8vB8?t=121

class Solution:
    def canPartitionKSubsets(self, nums, k):
        if sum(nums) % k: 
            return False
        nums.sort(reverse = True)
        target = sum(nums)//k
        used = [False] * len(nums)
        
        def backtrack(i, k, subsetSum):
            if k == 0: 
                return True
            if subsetSum == target:
                return backtrack(0, k-1, 0)
            if i >= len(nums) or subsetSum > target:
                return False
            if used[i]:
                return backtrack(i+1, k, subsetSum)
            # Pick the urrent element
            used[i] = True
            pick = backtrack(i+1, k, subsetSum + nums[i])
            used[i] = False
            # Skip the current element
            skip = backtrack(i+1, k, subsetSum)
            return pick or skip
        
        return backtrack(0, k, 0)
    
    
# Time: O(k * 2^n)
# Space: O(k * 2^n)
'''
```
