---
title: 1898 maximum number of removable characters
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 1898-maximum-number-of-removable-characters solution
description: 1898 maximum number of removable characters LeetCode Solution Explained
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
# https://leetcode.com/problems/maximum-number-of-removable-characters/

class Solution:
    def maximumRemovals(self, s: str, p: str, removable: List[int]) -> int:
        def isSubsequence(mid):
            remove = set(removable[:mid+1])
            i = j = 0
            while i < len(s) and j < len(p):
                if s[i] == p[j] and i not in remove:
                    j += 1
                i += 1
            return j == len(p)
        
        
        res = 0
        l, r = 0, len(removable)-1
        while l <= r:
            mid = l + (r - l)//2
            if isSubsequence(mid):
                res = max(res, mid+1)
                l = mid + 1
            else:
                r = mid - 1
        
        return res
    
    
# Time: (n * log(k))   # n = len(s), k = len(removable)
```
