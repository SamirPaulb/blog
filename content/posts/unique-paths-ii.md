---
title: unique paths ii
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, unique-paths-ii solution
description: unique paths ii LeetCode Solution Explained
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


[Discussion Post (created on 10/0/2021 at 19:56)](https://leetcode.com/problems/unique-paths-ii/discuss/1010584/Easy-and-Understandable-C%2B%2B)  
<h2>63. Unique Paths II</h2><h3>Medium</h3><hr><div><p>A robot is located at the top-left corner of a <code>m x n</code> grid (marked 'Start' in the diagram below).</p>

<p>The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).</p>

<p>Now consider if some obstacles are added to the grids. How many unique paths would there be?</p>

<p>An obstacle and space is marked as <code>1</code> and <code>0</code> respectively in the grid.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/11/04/robot1.jpg" style="width: 242px; height: 242px;">
<pre><strong>Input:</strong> obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
<strong>Output:</strong> 2
<strong>Explanation:</strong> There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -&gt; Right -&gt; Down -&gt; Down
2. Down -&gt; Down -&gt; Right -&gt; Right
</pre>

<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/11/04/robot2.jpg" style="width: 162px; height: 162px;">
<pre><strong>Input:</strong> obstacleGrid = [[0,1],[0,0]]
<strong>Output:</strong> 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m ==&nbsp;obstacleGrid.length</code></li>
	<li><code>n ==&nbsp;obstacleGrid[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 100</code></li>
	<li><code>obstacleGrid[i][j]</code> is <code>0</code> or <code>1</code>.</li>
</ul>
</div>

---




```cpp
class Solution {
public:
    int uniquePathsWithObstacles(vector<vector<int>>& grid) {
        int n=grid.size();
        int m=grid[0].size();
        long long t[n][m];
        memset(t,0,sizeof(t));
        if(grid[n-1][m-1]==1)
            return 0;
        t[n-1][m-1]=1;
        for(int i=n-2;i>=0;i--){
            if(grid[i][m-1]==0)
                t[i][m-1]=t[i+1][m-1];
            else
                t[i][m-1]=0;
        }
        for(int i=m-2;i>=0;i--){
            if(grid[n-1][i]==0)
                t[n-1][i]=t[n-1][i+1];
            else
                t[n-1][i]=0;
        }
        for(int i=n-2;i>=0;i--){
            for(int j=m-2; j>=0;j--){
                if(grid[i][j]==0)
                    t[i][j]=t[i+1][j]+t[i][j+1];
                else
                    t[i][j]=0;
            }
        }
        return t[0][0];
    }
};
```
