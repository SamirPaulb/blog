---
title: 0605 can place flowers
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 0605-can-place-flowers solution
description: 0605 can place flowers LeetCode Solution Explained
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
    def canPlaceFlowers(self, fb: List[int], n: int) -> bool:
        fb = [0] + fb + [0]
        i, cnt = 1, 0
        for i in range(1, len(fb)-1):
            if fb[i-1] == fb[i] == fb[i+1] == 0:
                fb[i] = 1
                cnt += 1
        return cnt >= n        
```
