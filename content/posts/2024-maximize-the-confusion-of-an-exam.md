---
title: 2024 maximize the confusion of an exam
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 2024-maximize-the-confusion-of-an-exam solution
description: 2024 maximize the confusion of an exam LeetCode Solution Explained
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
    def maxConsecutiveAnswers(self, answerKey: str, k: int) -> int:
        l = 0; r = 0
        frequency = {}
        maxFrequency = 0
        ans = 0
        
        for r in range(len(answerKey)):
            if answerKey[r] not in frequency:
                frequency[answerKey[r]] = 1
            else:
                frequency[answerKey[r]] += 1
            maxFrequency = max(maxFrequency, frequency[answerKey[r]])
            
            while r - l - maxFrequency >= k:
                frequency[answerKey[l]] -= 1
                l += 1
            
            ans = max(ans, r - l + 1)
        
        return ans
```
