---
title: 0682 baseball game
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 0682-baseball-game solution
description: 0682 baseball game LeetCode Solution Explained
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
    def calPoints(self, operations: List[str]) -> int:
        stack = []
        for op in operations:
            if op == '+':
                if len(stack) >= 2:
                    stack.append(stack[-1] + stack[-2])
            elif op == 'D':
                if stack:
                    stack.append(2*stack[-1])
            elif op == 'C':
                if stack: 
                    stack.pop()
            else:
                stack.append(int(op))
            
        return sum(stack)
```
