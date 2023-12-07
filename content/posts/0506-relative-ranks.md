---
title: 0506 relative ranks
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 0506-relative-ranks solution
description: 0506 relative ranks LeetCode Solution Explained
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
    def findRelativeRanks(self, score: List[int]) -> List[str]:
        arr = sorted(score, reverse = True)
        d = {}
        d[arr[0]] = "Gold Medal"
        if len(arr) > 1: d[arr[1]] = "Silver Medal"
        if len(arr) > 2: d[arr[2]] = "Bronze Medal"
        i = 4
        for a in arr[3:]:
            d[a] = str(i)
            i += 1
        
        res = []
        for i in score:
            res.append(d[i])
        
        return res
```
