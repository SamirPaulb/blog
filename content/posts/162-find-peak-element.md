---
title: 162 find peak element
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 162-find-peak-element solution
description: 162 find peak element LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/find-peak-element/">162. Find Peak Element</a></h2><h3>Medium</h3><hr><div><p>A peak element is an element that is strictly greater than its neighbors.</p>

<p>Given an integer array <code>nums</code>, find a peak element, and return its index. If&nbsp;the array contains multiple peaks, return the index to <strong>any of the peaks</strong>.</p>

<p>You may imagine that <code>nums[-1] = nums[n] = -∞</code>.</p>

<p>You must write an algorithm that runs in&nbsp;<code>O(log n)</code> time.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [1,2,3,1]
<strong>Output:</strong> 2
<strong>Explanation:</strong> 3 is a peak element and your function should return the index number 2.</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [1,2,1,3,5,6,4]
<strong>Output:</strong> 5
<strong>Explanation:</strong> Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 1000</code></li>
	<li><code>-2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1</code></li>
	<li><code>nums[i] != nums[i + 1]</code> for all valid <code>i</code>.</li>
</ul>
</div>

---




```python
# https://youtu.be/OINnBJTRrMU
class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        n = len(nums)
        if n == 1: return 0
        
        low = 0; high = n-1
        
        while low <= high:
            
            mid = low + (high - low) // 2
            # Instead of writting mid = (low + high)//2 we should write mid = low + (high - low)//2 because of INTEGER OVERFLOW in the former case
            
            if 0 < mid < n-1:
                if nums[mid-1] < nums[mid] > nums[mid+1]:
                    return mid
                elif nums[mid-1] > nums[mid]:
                    high = mid - 1
                else:
                    low = mid + 1
                    
            else:
                if mid == 0:
                    if nums[0] > nums[1]:
                        return 0
                    else:
                        return 1
                if mid == n-1:
                    if nums[n-1] > nums[n-2]:
                        return n-1
                    else:
                        return n-2
                    
# Time: O(n)
# Space: O(1)
        
```
