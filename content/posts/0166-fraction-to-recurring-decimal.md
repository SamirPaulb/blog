---
title: 0166 fraction to recurring decimal
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 0166-fraction-to-recurring-decimal solution
description: 0166 fraction to recurring decimal LeetCode Solution Explained
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
    def fractionToDecimal(self, n: int, d: int) -> str:
        res = ''
        if n < 0 and d < 0: n = abs(n); d = abs(d)
        if n < 0 or d < 0: n = abs(n); d = abs(d); res += '-'
        res += str(n//d)
        n = n%d
        res += '.'
        rem_ind = {}
        while n:
            n *= 10
            res += str(n//d)
            n = n%d
            if n in rem_ind:
                res = res[:rem_ind[n]] + '(' + res[rem_ind[n]:] + ')'
                break
            rem_ind[n] = len(res)
        if res[-1] == '.': 
            res = res[:-1]
        if res == "-0": return "0"
        return res 
```
