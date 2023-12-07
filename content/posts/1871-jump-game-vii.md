---
title: 1871 jump game vii
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 1871-jump-game-vii solution
description: 1871 jump game vii LeetCode Solution Explained
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
    def canReach(self, s: str, minJump: int, maxJump: int) -> bool:
        q = deque([0])
        furthest = 0
        
        while q:
            i = q.popleft()
            start = max(i+minJump, furthest+1)
            for j in range(start, min(i+maxJump+1, len(s))):
                if s[j] == '0':
                    if j == len(s)-1:
                        return True
                    q.append(j)
            furthest = i+maxJump
            
        return False
                
```
