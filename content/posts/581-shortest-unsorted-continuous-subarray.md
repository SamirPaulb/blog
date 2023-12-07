---
title: 581 shortest unsorted continuous subarray
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 581-shortest-unsorted-continuous-subarray solution
description: 581 shortest unsorted continuous subarray LeetCode Solution Explained
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




---




```python
class Solution:
    def findUnsortedSubarray(self, nums: List[int]) -> int:
        minL = float("inf")
        maxR = float("-inf")
        
        for i in range(len(nums)-1):
            if nums[i] > nums[i+1]:
                minL = min(minL, nums[i+1])
        
        for i in range(len(nums)-2, -1, -1):
            if nums[i] > nums[i+1]:
                maxR = max(maxR, nums[i])
        
        if minL == float("inf"):  # if minL does not exist then maxR will also not exist. as both minL and maxR checks the same condition
            return 0
        
        left = 0; right = len(nums)-1
        
        for i in range(len(nums)-1):
            if nums[i] > minL:
                left = i
                break
        
        for i in range(len(nums)-1, -1, -1):
            if nums[i] < maxR:
                right = i
                break
        
        return right - left + 1
```
