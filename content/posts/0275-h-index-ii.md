---
title: 0275 h index ii
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 0275-h-index-ii solution
description: 0275 h index ii LeetCode Solution Explained
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
    def hIndex(self, citations: List[int]) -> int:
        l = 0; r = len(citations)-1; n = len(citations)
        while l <= r:
            mid = l + (r - l) // 2
            if citations[mid] == n - mid: return citations[mid]
            elif citations[mid] > n-mid: 
                r = mid - 1
            else:
                l = mid + 1
        
        return n - l
```
