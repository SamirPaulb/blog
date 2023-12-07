---
title: making a large island
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, making-a-large-island solution
description: making a large island LeetCode Solution Explained
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


<h2>827. Making A Large Island</h2><h3>Hard</h3><hr><div><p>You are given an <code>n x n</code> binary matrix <code>grid</code>. You are allowed to change <strong>at most one</strong> <code>0</code> to be <code>1</code>.</p>

<p>Return <em>the size of the largest <strong>island</strong> in</em> <code>grid</code> <em>after applying this operation</em>.</p>

<p>An <strong>island</strong> is a 4-directionally connected group of <code>1</code>s.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> grid = [[1,0],[0,1]]
<strong>Output:</strong> 3
<strong>Explanation:</strong> Change one 0 to 1 and connect two 1s, then we get an island with area = 3.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> grid = [[1,1],[1,0]]
<strong>Output:</strong> 4
<strong>Explanation: </strong>Change the 0 to 1 and make the island bigger, only one island with area = 4.</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> grid = [[1,1],[1,1]]
<strong>Output:</strong> 4
<strong>Explanation:</strong> Can't change any 0 to 1, only one island with area = 4.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == grid.length</code></li>
	<li><code>n == grid[i].length</code></li>
	<li><code>1 &lt;= n &lt;= 500</code></li>
	<li><code>grid[i][j]</code> is either <code>0</code> or <code>1</code>.</li>
</ul></div>

---




```cpp
class Solution {
public:
    int n,m;
    unordered_map<int, int> size;
    int vis[502][502];
    
    int dfs(int i, int j, vector<vector<int>>& grid, int islandNum){
        if(i<0 || i>=n || j<0 || j>=m || grid[i][j]==0 || vis[i][j]!=-1){
            return 0;
        }
        vis[i][j]=islandNum;
        int size=1;
        size+=dfs(i+1,j,grid,islandNum);
        size+=dfs(i-1,j,grid,islandNum);
        size+=dfs(i,j+1,grid,islandNum);
        size+=dfs(i,j-1,grid,islandNum);
        return size;
    }
    
    int largestIsland(vector<vector<int>>& grid) {
        n=grid.size();
        m=grid[0].size();
        memset(vis,-1,sizeof(vis));
        int l=1;
        for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){
                if(grid[i][j]==1 && vis[i][j]==-1){
                    size[l]=dfs(i, j, grid, l);
                    l++;
                }
            }
        }
        
        int maxarea=0;
        for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){
                if(grid[i][j]==0){
                    int area=1;
                    set<int> s;
                    if(i+1<n) 
                    s.insert(vis[i+1][j]);
                    if(i-1>=0)
                    s.insert(vis[i-1][j]);
                    if(j+1<m) 
                    s.insert(vis[i][j+1]);
                    if(j-1>=0) 
                    s.insert(vis[i][j-1]);
                    for(int c: s){
                        area+=size[c];
                    }
                    maxarea=max(maxarea, area);
                }
            }
        }
        if(maxarea!=0)
        return maxarea;
        return n*m;
    }
};
```
