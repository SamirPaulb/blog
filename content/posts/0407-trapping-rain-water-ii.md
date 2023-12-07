---
title: 0407 trapping rain water ii
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 0407-trapping-rain-water-ii solution
description: 0407 trapping rain water ii LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/trapping-rain-water-ii/">407. Trapping Rain Water II</a></h2><h3>Hard</h3><hr><div><p>Given an <code>m x n</code> integer matrix <code>heightMap</code> representing the height of each unit cell in a 2D elevation map, return <em>the volume of water it can trap after raining</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/04/08/trap1-3d.jpg" style="width: 361px; height: 321px;">
<pre><strong>Input:</strong> heightMap = [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]
<strong>Output:</strong> 4
<strong>Explanation:</strong> After the rain, water is trapped between the blocks.
We have two small ponds 1 and 3 units trapped.
The total volume of water trapped is 4.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/04/08/trap2-3d.jpg" style="width: 401px; height: 321px;">
<pre><strong>Input:</strong> heightMap = [[3,3,3,3,3],[3,2,2,2,3],[3,2,1,2,3],[3,2,2,2,3],[3,3,3,3,3]]
<strong>Output:</strong> 10
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == heightMap.length</code></li>
	<li><code>n == heightMap[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 200</code></li>
	<li><code>0 &lt;= heightMap[i][j] &lt;= 2 * 10<sup>4</sup></code></li>
</ul>
</div>

---




```python
# https://leetcode.com/problems/trapping-rain-water-ii/
# https://youtu.be/QvQiQcLCQ4Y

import heapq
class Solution:
    def trapRainWater(self, heightMap):
        minHeap = []
        ROW, COL = len(heightMap), len(heightMap[0])
        visited = [[False]*COL for _ in range(ROW)]
        
        for i in range(ROW):
            for j in range(COL):
                if i in (0, ROW-1) or j in (0, COL-1):
                    heapq.heappush(minHeap, (heightMap[i][j], i, j))
                    visited[i][j] = True
        
        res = 0
        minBdH = 0  # Minimum Boundary Height
        while minHeap:
            h, i, j = heapq.heappop(minHeap)
            minBdH = max(minBdH, h)
            for dx, dy in ((1,0),(-1,0),(0,1),(0,-1)):
                r, c = i+dx, j+dy
                if 0<=r<ROW and 0<=c<COL and not visited[r][c]:
                    visited[r][c] = True
                    heapq.heappush(minHeap, (heightMap[r][c], r, c))
                    if heightMap[r][c] < minBdH:
                        res += minBdH - heightMap[r][c]
        
        return res
    
    
    
# Time: O(m*n * log(m*n))
# Space: O(m*n)
```
