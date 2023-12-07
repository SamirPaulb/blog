---
title: 228 summary ranges
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 228-summary-ranges solution
description: 228 summary ranges LeetCode Solution Explained
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
    def summaryRanges(self, nums: List[int]) -> List[str]:
        res = []
        s = e = ''        
        i = 0
        
        while i < len(nums):
            s = str(nums[i])
            i += 1
            while i < len(nums) and nums[i]-1 == nums[i-1]:
                e = '->' + str(nums[i])
                i += 1
            res.append(s + e)
            s = e = ''
        
        return res
                
        
# Time: O(N)
# Space: O(1)
```
