---
title: 0740 delete and earn
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 0740-delete-and-earn solution
description: 0740 delete and earn LeetCode Solution Explained
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
    def deleteAndEarn(self, nums: List[int]) -> int:
        dp = [0]*(max(nums)+1)
        for num in nums:
            dp[num] += num
        # House robber problem 
        if len(dp) < 3: return max(dp)
        for i in range(2, len(dp)):
            if i-3 >= 0:
                dp[i] += max(dp[i-3], dp[i-2])
            else:
                dp[i] += dp[i-2]
        
        return max(dp[-1], dp[-2])
```
