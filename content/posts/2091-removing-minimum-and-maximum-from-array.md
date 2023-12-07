---
title: 2091 removing minimum and maximum from array
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 2091-removing-minimum-and-maximum-from-array solution
description: 2091 removing minimum and maximum from array LeetCode Solution Explained
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
    def minimumDeletions(self, nums: List[int]) -> int:
        n = len(nums)
        maxi = max(nums)
        maxInd = nums.index(maxi)
        
        mini = min(nums)
        minInd = nums.index(mini)
        
        both = min(maxInd, minInd) + 1 + n - max(maxInd, minInd)       
        back = n - min(maxInd, minInd)
        front = max(maxInd, minInd) + 1
        
        return min(both, back, front)
```
