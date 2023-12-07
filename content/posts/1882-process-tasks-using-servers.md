---
title: 1882 process tasks using servers
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 1882-process-tasks-using-servers solution
description: 1882 process tasks using servers LeetCode Solution Explained
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
# https://leetcode.com/problems/process-tasks-using-servers/
# https://youtu.be/XKA22PecuMQ

class Solution:
    def assignTasks(self, servers: List[int], tasks: List[int]) -> List[int]:
        res = [0] * len(tasks)
        
        available = [(servers[i], i) for i in range(len(servers))]
        heapq.heapify(available)
        unavailable = []
        
        t = 0
        for i in range(len(tasks)):
            t = max(t, i)
            
            if len(available) == 0:
                t = unavailable[0][0]
            while unavailable and t >= unavailable[0][0]:
                timefree, weight, index = heapq.heappop(unavailable)
                heapq.heappush(available, (weight, index))
            
            weight, index = heapq.heappop(available)
            res[i] = index
            heapq.heappush(unavailable, (t + tasks[i], weight, index))
        
        return res
```
