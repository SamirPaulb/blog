---
title: 1207 unique number of occurrences
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 1207-unique-number-of-occurrences solution
description: 1207 unique number of occurrences LeetCode Solution Explained
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
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        mp = {}
        for i in arr:
            if i not in mp:
                mp[i] = 1
            else:
                mp[i] += 1
        
        occurrences = list(mp.values())
        return len(set(occurrences )) == len(occurrences )
```
