---
title: 409 longest palindrome
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 409-longest-palindrome solution
description: 409 longest palindrome LeetCode Solution Explained
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
    def longestPalindrome(self, s: str) -> int:
        countDict = {}
        for i in s:
            if i not in countDict:
                countDict[i] = 1
            else:
                countDict[i] += 1
        
        res = 0
        firstOdd = False
        for i in countDict:
            if countDict[i] % 2 == 0:
                res += countDict[i]
            else:
                if not firstOdd: 
                    res += 1
                    firstOdd = True
                res += countDict[i] - 1
        print(countDict)
        return res
```
