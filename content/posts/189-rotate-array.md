---
title: 189 rotate array
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 189-rotate-array solution
description: 189 rotate array LeetCode Solution Explained
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
    def rotate(self, nums, k):
        # nums = [1,2,3,4,5,6,7,8,9,10]; k = 3
        n = len(nums)
        k = k % n
        
        # Step-1
        i = 0
        j = n-k-1
        while i < j:
            nums[i], nums[j] = nums[j], nums[i]
            i += 1
            j -= 1
        # nums = [7,6,5,4,3,2,1, 8,9,10]
        
        # Step-2
        # swap right k subarray with left k subarray
        i = n-k
        j = n-1
        while i < j:
            nums[i], nums[j] = nums[j], nums[i]
            i += 1
            j -= 1
        # nums = [7,6,5,4,3,2,1, 10,9,8]
        
        # Step-3
        # reverse total nums
        i = 0
        j = n-1
        while i < j:
            nums[i], nums[j] = nums[j], nums[i]
            i += 1
            j -= 1
        # nums = [8,9,10,1,2,3,4,5,6,7]        
```
