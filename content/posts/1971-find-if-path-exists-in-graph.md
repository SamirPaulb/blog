---
title: 1971 find if path exists in graph
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 1971-find-if-path-exists-in-graph solution
description: 1971 find if path exists in graph LeetCode Solution Explained
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
    def validPath(self, n: int, edges: List[List[int]], source: int, destination: int) -> bool:
        adjList = {i:[] for i in range(n)}
        for egd in edges:
            a = egd[0]
            b = egd[1]
            adjList[a].append(b)
            adjList[b].append(a)
        
        visited = {i:False for i in range(n)}
        q = [source]
        while q:
            n = len(q)
            for i in range(n):
                node = q.pop()
                if visited[node] == True: continue
                visited[node] = True
                q += adjList[node]
        
        return visited[destination]
```
