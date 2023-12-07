---
title: 0413 arithmetic slices
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 0413-arithmetic-slices solution
description: 0413 arithmetic slices LeetCode Solution Explained
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
    def numberOfArithmeticSlices(self, nums):
        n = len(nums)
        dp = [0] * n
        for i in range(2, n):
            if nums[i] - nums[i-1] == nums[i-1] - nums[i-2]:
                dp[i] = dp[i-1] + 1
        
        return sum(dp)
    
# Time: O(n)
# Space: O(n)
    
    

class Solution:
    def numberOfArithmeticSlices(self, nums):
        dp = 0; n = len(nums); res = 0
        for i in range(2, n):
            if nums[i] - nums[i-1] == nums[i-1] - nums[i-2]:
                dp += 1
                res += dp
            else:
                dp = 0
                
        return res
    
# Time: O(n)
# Space: O(1)
```
