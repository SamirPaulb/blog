---
title: 2304 minimum path cost in a grid
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 2304-minimum-path-cost-in-a-grid solution
description: 2304 minimum path cost in a grid LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/minimum-path-cost-in-a-grid/">2304. Minimum Path Cost in a Grid</a></h2><h3>Medium</h3><hr><div><p>You are given a <strong>0-indexed</strong> <code>m x n</code> integer matrix <code>grid</code> consisting of <strong>distinct</strong> integers from <code>0</code> to <code>m * n - 1</code>. You can move in this matrix from a cell to any other cell in the <strong>next</strong> row. That is, if you are in cell <code>(x, y)</code> such that <code>x &lt; m - 1</code>, you can move to any of the cells <code>(x + 1, 0)</code>, <code>(x + 1, 1)</code>, ..., <code>(x + 1, n - 1)</code>. <strong>Note</strong> that it is not possible to move from cells in the last row.</p>

<p>Each possible move has a cost given by a <strong>0-indexed</strong> 2D array <code>moveCost</code> of size <code>(m * n) x n</code>, where <code>moveCost[i][j]</code> is the cost of moving from a cell with value <code>i</code> to a cell in column <code>j</code> of the next row. The cost of moving from cells in the last row of <code>grid</code> can be ignored.</p>

<p>The cost of a path in <code>grid</code> is the <strong>sum</strong> of all values of cells visited plus the <strong>sum</strong> of costs of all the moves made. Return <em>the <strong>minimum</strong> cost of a path that starts from any cell in the <strong>first</strong> row and ends at any cell in the <strong>last</strong> row.</em></p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2022/04/28/griddrawio-2.png" style="width: 301px; height: 281px;">
<pre><strong>Input:</strong> grid = [[5,3],[4,0],[2,1]], moveCost = [[9,8],[1,5],[10,12],[18,6],[2,4],[14,3]]
<strong>Output:</strong> 17
<strong>Explanation: </strong>The path with the minimum possible cost is the path 5 -&gt; 0 -&gt; 1.
- The sum of the values of cells visited is 5 + 0 + 1 = 6.
- The cost of moving from 5 to 0 is 3.
- The cost of moving from 0 to 1 is 8.
So the total cost of the path is 6 + 3 + 8 = 17.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> grid = [[5,1,2],[4,0,3]], moveCost = [[12,10,15],[20,23,8],[21,7,1],[8,1,13],[9,10,25],[5,3,2]]
<strong>Output:</strong> 6
<strong>Explanation:</strong> The path with the minimum possible cost is the path 2 -&gt; 3.
- The sum of the values of cells visited is 2 + 3 = 5.
- The cost of moving from 2 to 3 is 1.
So the total cost of this path is 5 + 1 = 6.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == grid.length</code></li>
	<li><code>n == grid[i].length</code></li>
	<li><code>2 &lt;= m, n &lt;= 50</code></li>
	<li><code>grid</code> consists of distinct integers from <code>0</code> to <code>m * n - 1</code>.</li>
	<li><code>moveCost.length == m * n</code></li>
	<li><code>moveCost[i].length == n</code></li>
	<li><code>1 &lt;= moveCost[i][j] &lt;= 100</code></li>
</ul>
</div>

---




```python
class Solution:
    def minPathCost(self, grid: List[List[int]], moveCost: List[List[int]]) -> int:
        row = len(grid)
        col = len(grid[0])
        '''
        NOTE: Incase of matrix (2-D Array) Python's matrix.copy() function Does NOT make a new copy of original matrix. So any change in new_matrix will cange in original matrix.
        '''
        dp = self.deepcopy(grid)  # Can NOT use, dp = grid.copy()  or  dp = grid[:]
        
        for i in range(1, row):
            for j in range(col):
                val = 2**31
                for k in range(col):
                    val = min(val, dp[i-1][k] + moveCost[grid[i-1][k]][j])
                dp[i][j] += val
        
        return min(dp[-1])
    
    
    def deepcopy(self, arr):
        n = len(arr)
        m = len(arr[0])
        new_arr = [[0]*m for i in range(n)]
        
        for i in range(n):
            for j in range(m):
                new_arr[i][j] = arr[i][j]
        
        return new_arr
```
