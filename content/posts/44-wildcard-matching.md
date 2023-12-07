---
title: 44 wildcard matching
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 44-wildcard-matching solution
description: 44 wildcard matching LeetCode Solution Explained
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
    def isMatch(self, s: str, p: str) -> bool:
        dp = [[False]*(len(s) + 1) for _ in range(len(p) + 1)]
        
        for i in range(len(dp)-1, -1, -1):
            for j in range(len(dp[0])-1, -1, -1):
                if i == len(dp)-1 and j == len(dp[0])-1:
                    dp[i][j] = True
                elif i == len(dp)-1:
                    dp[i][j] = False
                elif j == len(dp[0])-1:
                    if p[i] == '*': dp[i][j] = dp[i+1][j]
                    else: dp[i][j] = False
                else:
                    if p[i] == "?":
                        dp[i][j] = dp[i+1][j+1]
                    elif p[i] == '*':
                        dp[i][j] = dp[i+1][j] or dp[i][j+1]
                    elif p[i] == s[j]:
                        dp[i][j] = dp[i+1][j+1]
                    else:
                        dp[i][j] = False
        
        return dp[0][0]
```
