---
title: 43 multiply strings
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 43-multiply-strings solution
description: 43 multiply strings LeetCode Solution Explained
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
    def multiply(self, num1: str, num2: str) -> str:
        if num1 == '0' or num2 == '0': return '0'
        
        arr = [0] * (len(num1) + len(num2))
        
        for i in range(len(num1)-1, -1, -1):
            for j in range(len(num2)-1, -1, -1):
                n1 = ord(num1[i]) - ord('0')
                n2 = ord(num2[j]) - ord('0')
                arr[i+j+1] += n1 * n2
                arr[i+j] += arr[i+j+1] // 10
                arr[i+j+1] %= 10
        
        res = ""
        flag = False
        for i in range(len(arr)):
            if arr[i] == 0 and flag == False:
                if arr[i+1] == 0:
                    continue
                else:
                    flag = True
            else:
                res += str(arr[i])
                flag = True
                
        return res
```
