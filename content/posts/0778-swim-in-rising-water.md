---
title: 0778 swim in rising water
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 0778-swim-in-rising-water solution
description: 0778 swim in rising water LeetCode Solution Explained
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
import heapq

class Solution:
    def swimInWater(self, grid: List[List[int]]) -> int:
        row, col = len(grid), len(grid[0])
        minHeap = []
        visited = set()
        minHeap.append((grid[0][0], 0,0))
        while minHeap:
            t,i,j = heapq.heappop(minHeap)
            # print(t,i,j)
            if (i,j) in visited: continue
            visited.add((i,j))
            if (i,j) == (row-1, col-1): return t
            for dx, dy in ((-1,0), (1,0), (0,1), (0,-1)):
                r, c = i+dx, j+dy
                if 0<=r<row and 0<=c<col and (r,c) not in visited:
                    heapq.heappush(minHeap, (max(t,grid[r][c]), r, c))
        return t
                    
                    
```
