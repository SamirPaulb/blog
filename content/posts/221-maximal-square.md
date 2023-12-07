---
title: 221 maximal square
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 221-maximal-square solution
description: 221 maximal square LeetCode Solution Explained
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
    def maximalSquare(self, matrix: List[List[str]]) -> int:
        r = len(matrix); c = len(matrix[0])
        res = 0
        dp = [[0]*c for i in range(r)]
        
        for i in range(r):
            for j in range(c):
                if i==0 or j==0:
                    dp[i][j] = int(matrix[i][j])
                else:
                    if matrix[i][j] == "1":
                        dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1
                res = max(res, dp[i][j])
        
        return pow(res, 2)
                
```
