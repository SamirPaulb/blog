---
title: 1117 as far from land as possible
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 1117-as-far-from-land-as-possible solution
description: 1117 as far from land as possible LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/as-far-from-land-as-possible">1117. As Far from Land as Possible</a></h2><h3>Medium</h3><hr><p>Given an <code>n x n</code> <code>grid</code>&nbsp;containing only values <code>0</code> and <code>1</code>, where&nbsp;<code>0</code> represents water&nbsp;and <code>1</code> represents land, find a water cell such that its distance to the nearest land cell is maximized, and return the distance.&nbsp;If no land or water exists in the grid, return <code>-1</code>.</p>

<p>The distance used in this problem is the Manhattan distance:&nbsp;the distance between two cells <code>(x0, y0)</code> and <code>(x1, y1)</code> is <code>|x0 - x1| + |y0 - y1|</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/05/03/1336_ex1.JPG" style="width: 185px; height: 87px;" />
<pre>
<strong>Input:</strong> grid = [[1,0,1],[0,0,0],[1,0,1]]
<strong>Output:</strong> 2
<strong>Explanation:</strong> The cell (1, 1) is as far as possible from all the land with distance 2.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/05/03/1336_ex2.JPG" style="width: 184px; height: 87px;" />
<pre>
<strong>Input:</strong> grid = [[1,0,0],[0,0,0],[0,0,0]]
<strong>Output:</strong> 4
<strong>Explanation:</strong> The cell (2, 2) is as far as possible from all the land with distance 4.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == grid.length</code></li>
	<li><code>n == grid[i].length</code></li>
	<li><code>1 &lt;= n&nbsp;&lt;= 100</code></li>
	<li><code>grid[i][j]</code>&nbsp;is <code>0</code> or <code>1</code></li>
</ul>


---




```python
# https://leetcode.com/problems/as-far-from-land-as-possible/

class Solution:
    def maxDistance(self, grid: List[List[int]]) -> int:
        # using concepts of 200. Number of Islands problem
        q = []
        
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == 1:
                    q.append([i,j])
        
        # len(q) == 0  => All elements are 0 
        # len(q) == len(grid)*len(grid)  => All elements are 1
        if len(q) == 0 or len(q) == len(grid)*len(grid): return -1  # no land or water exists in the grid
        
        res = -1
        
        direction = [[1,0], [-1,0], [0,1], [0,-1]]
        
        while q: 
            for i in range(len(q)):
                curr = q.pop(0)  # as quequ so first in first out
                for direc in direction:
                    r = curr[0] + direc[0]
                    c = curr[1] + direc[1]
                    
                    if r < 0 or r >= len(grid) or c < 0 or c >= len(grid[0]) or grid[r][c] == 1:
                        continue
                    q.append([r,c])
                    grid[r][c] = 1  # to mark this cell as visited
            # after making the q empty we forward 1 step in any direction where 0 is present. 
            res += 1
        
        # As we also added +1 to res for 1st time emptying queue but that cells with 1 was not in path so we started res = -1
        return res

        
```


```python
class Solution:
    def maxDistance(self, grid: List[List[int]]) -> int:
        q = collections.deque()
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == 1:
                    q.append((i,j))
        res = -1
        while q:
            res += 1
            n = len(q)
            for _ in range(n):
                i,j = q.popleft()
                for x,y in ((1,0),(-1,0),(0,1),(0,-1)):
                    r,c = i+x,j+y
                    if 0<=r<len(grid) and 0<=c<len(grid[0]) and grid[r][c] == 0:
                        grid[r][c] = 1
                        q.append((r,c))
        return res if res != 0 else -1
```
