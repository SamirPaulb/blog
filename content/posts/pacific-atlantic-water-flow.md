---
title: pacific atlantic water flow
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, pacific-atlantic-water-flow solution
description: pacific atlantic water flow LeetCode Solution Explained
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


[Discussion Post (created on 25/2/2021 at 16:34)](https://leetcode.com/problems/pacific-atlantic-water-flow/discuss/1126854/BFS-or-C%2B%2B)  
<h2>417. Pacific Atlantic Water Flow</h2><h3>Medium</h3><hr><div><p>Given an <code>m x n</code> matrix of non-negative integers representing the height of each unit cell in a continent, the "Pacific ocean" touches the left and top edges of the matrix and the "Atlantic ocean" touches the right and bottom edges.</p>

<p>Water can only flow in four directions (up, down, left, or right) from a cell to another one with height equal or lower.</p>

<p>Find the list of grid coordinates where water can flow to both the Pacific and Atlantic ocean.</p>

<p><b>Note:</b></p>

<ol>
	<li>The order of returned grid coordinates does not matter.</li>
	<li>Both <i>m</i> and <i>n</i> are less than 150.</li>
</ol>

<p>&nbsp;</p>

<p><b>Example:</b></p>

<pre>Given the following 5x5 matrix:

  Pacific ~   ~   ~   ~   ~ 
       ~  1   2   2   3  (5) *
       ~  3   2   3  (4) (4) *
       ~  2   4  (5)  3   1  *
       ~ (6) (7)  1   4   5  *
       ~ (5)  1   1   2   4  *
          *   *   *   *   * Atlantic

Return:

[[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] (positions with parentheses in above matrix).
</pre>

<p>&nbsp;</p>
</div>

---




```cpp
class Solution {
public:
    int dx[4] = {0, 1, 0, -1};
    int dy[4] = {-1, 0, 1, 0};
    
    void dfs(vector<vector<int>>& mat, vector<vector<int>> &g, int x, int y){
        g[x][y]=1;
        for(int i=0;i<4;i++){
           int xx=x+dx[i];
           int yy=y+dy[i];
           if(xx>=0 && yy>=0 && xx<mat.size() && yy<mat[0].size() && !g[xx][yy] && mat[xx][yy]>=mat[x][y])
               dfs(mat, g, xx, yy);
        } 
    }
    
    
    vector<vector<int>> pacificAtlantic(vector<vector<int>>& matrix) {
        vector<vector<int>> ans;
        int n=matrix.size();
        if(n==0)
            return ans;
        int m=matrix[0].size();
        if(m==0)
            return ans;
        vector<vector<int>> pac(n, vector<int>(m,0));
        vector<vector<int>> atl(n, vector<int>(m,0));
        for(int i=0;i<n;i++){
            if(!pac[i][0]){
                dfs(matrix, pac, i, 0);
            }
        }
         for(int i=0;i<m;i++){
            if(!pac[0][i]){
                dfs(matrix, pac, 0, i);
            }
        }
         for(int i=0;i<n;i++){
            if(!atl[i][m-1]){
                dfs(matrix, atl, i, m-1);
            }
        }
         
         for(int i=0;i<m;i++){
            if(!atl[n-1][i]){
                dfs(matrix, atl, n-1, i);
            }
        }
        
        for (int i=0;i<n;i++) {
            for (int j=0;j<m;j++) {
                if (pac[i][j] && atl[i][j]){
                    ans.push_back({i, j});
                }
            }
        }
        return ans; 
    }
};
```
