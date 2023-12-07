---
title: 0877 stone game
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 0877-stone-game solution
description: 0877 stone game LeetCode Solution Explained
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
    def stoneGame(self, piles: List[int]) -> bool:
        dp = {}
        def dfs(l, r):
            if l > r: return 0
            if (l,r) in dp: return dp[(l,r)]
            even = True if (r-l)%2 else False
            left = piles[l] + dfs(l+1, r) if even else dfs(l+1, r)
            right = piles[r] + dfs(l, r-1) if even else dfs(l, r-1)
            dp[(l,r)] = max(left, right)
            return dp[(l,r)]
        
        return dfs(0, len(piles)-1)
```
