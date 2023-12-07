---
title: shortest path in binary matrix
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, shortest-path-in-binary-matrix solution
description: shortest path in binary matrix LeetCode Solution Explained
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


[Discussion Post (created on 30/0/2021 at 18:6)](https://leetcode.com/problems/shortest-path-in-binary-matrix/discuss/1041936/C%2B%2B-BFS-or-Beats-99)  
<h2>1091. Shortest Path in Binary Matrix</h2><h3>Medium</h3><hr><div><p>In an N by N square grid, each cell is either empty (0) or blocked (1).</p>

<p>A&nbsp;<em>clear&nbsp;path from top-left to bottom-right</em>&nbsp;has length <code>k</code> if and only if it is composed of cells <code>C_1, C_2, ..., C_k</code>&nbsp;such that:</p>

<ul>
	<li>Adjacent cells <code>C_i</code> and <code>C_{i+1}</code> are connected 8-directionally (ie., they are different and&nbsp;share an edge or corner)</li>
	<li><code>C_1</code> is at location <code>(0, 0)</code> (ie. has value <code>grid[0][0]</code>)</li>
	<li><code>C_k</code>&nbsp;is at location <code>(N-1, N-1)</code> (ie. has value <code>grid[N-1][N-1]</code>)</li>
	<li>If <code>C_i</code> is located at&nbsp;<code>(r, c)</code>, then <code>grid[r][c]</code> is empty (ie.&nbsp;<code>grid[r][c] ==&nbsp;0</code>).</li>
</ul>

<p>Return the length of the shortest such clear path from top-left to bottom-right.&nbsp; If such a path does not exist, return -1.</p>

<p>&nbsp;</p>

<p><strong>Example 1:</strong></p>

<pre><strong>Input: </strong><span id="example-input-1-1">[[0,1],[1,0]]
<img alt="" src="https://assets.leetcode.com/uploads/2019/08/04/example1_1.png" style="width: 151px; height: 152px;">
</span>
<strong>Output: </strong>2
<img alt="" src="https://assets.leetcode.com/uploads/2019/08/04/example1_2.png" style="width: 151px; height: 152px;">
</pre>

<div>
<p><strong>Example 2:</strong></p>

<pre><strong>Input: </strong><span id="example-input-2-1">[[0,0,0],[1,1,0],[1,1,0]]
<img alt="" src="https://assets.leetcode.com/uploads/2019/08/04/example2_1.png" style="width: 151px; height: 152px;">
</span>
<strong>Output:</strong> 4
<img alt="" src="https://assets.leetcode.com/uploads/2019/08/04/example2_2.png" style="width: 151px; height: 152px;">
</pre>

<p>&nbsp;</p>
</div>

<p><strong>Note:</strong></p>

<ol>
	<li><code>1 &lt;= grid.length == grid[0].length &lt;= 100</code></li>
	<li><code>grid[r][c]</code> is <code>0</code> or <code>1</code></li>
</ol>
</div>

---




```cpp
class Solution {
public:
    int dx[8] = {0,0,1,-1,1,1,-1,-1};
    int dy[8] = {1,-1,0,0,1,-1,-1,1};
    
    int shortestPathBinaryMatrix(vector<vector<int>>& grid) {
        int n=grid.size();
        int m=grid[0].size();
        if(grid[0][0]!=0 || grid[n-1][m-1]!=0)
            return -1;
        int ans=0;
        queue<pair<int,int>> q;
        q.push({0,0});
        while(!q.empty()){
            int k=q.size();
            ans++;
            while(k--){
                int x=q.front().first;
                int y=q.front().second;
                q.pop();
                if(x==n-1 && y==m-1)
                   return ans;
                for(int i=0;i<8;i++){
                   int xx=x+dx[i];
                   int yy=y+dy[i];
                    if(xx>=0 && yy>=0 && xx<n && yy<m && grid[xx][yy]==0){
                        q.push({xx,yy});
                        grid[x][y]=1;
                        grid[xx][yy]=1;
                    }
               }
            }
        }
        return (grid[n-1][m-1]==1)?ans:-1;  
    }
};
```
