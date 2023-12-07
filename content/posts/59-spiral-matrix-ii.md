---
title: 59 spiral matrix ii
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 59-spiral-matrix-ii solution
description: 59 spiral matrix ii LeetCode Solution Explained
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
    def generateMatrix(self, n: int) -> List[List[int]]:
        res = [[0]*n for i in range(n)]
        left = 0
        right = n-1
        top = 0
        down = n-1
        v = 1
        
        while left <= right and top <= down:
            for i in range(left, right+1):
                res[top][i] = v
                v += 1
            top += 1
            
            if top > down: break
            
            for i in range(top, down+1):
                res[i][right] = v
                v += 1
            right -= 1
            
            if left > right: break
            
            for i in range(right, left-1, -1):
                res[down][i] = v
                v += 1
            down -= 1
                        
            for i in range(down, top-1, -1):
                res[i][left] = v
                v += 1
            left += 1
        
        return res
```
