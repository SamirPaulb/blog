---
title: 01 matrix
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 01-matrix solution
description: 01 matrix LeetCode Solution Explained
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


<h2>542. 01 Matrix</h2><h3>Medium</h3><hr><div><p>Given a matrix consists of 0 and 1, find the distance of the nearest 0 for each cell.</p>

<p>The distance between two adjacent cells is 1.</p>

<p>&nbsp;</p>

<p><b>Example 1: </b></p>

<pre><strong>Input:</strong>
[[0,0,0],
 [0,1,0],
 [0,0,0]]

<strong>Output:</strong>
[[0,0,0],
&nbsp;[0,1,0],
&nbsp;[0,0,0]]
</pre>

<p><b>Example 2: </b></p>

<pre><b>Input:</b>
[[0,0,0],
 [0,1,0],
 [1,1,1]]

<strong>Output:</strong>
[[0,0,0],
 [0,1,0],
 [1,2,1]]
</pre>

<p>&nbsp;</p>

<p><b>Note:</b></p>

<ol>
	<li>The number of elements of the given matrix will not exceed 10,000.</li>
	<li>There are at least one 0 in the given matrix.</li>
	<li>The cells are adjacent in only four directions: up, down, left and right.</li>
</ol>
</div>

---




```cpp
class Solution {
public:
    int dfs(vector<vector<int>>& matrix, int r, int c)
    {
        if(r < 0 || c < 0 || r >= matrix.size() || c >= matrix[0].size() || matrix[r][c] == -1)
            return 10000;
        
        if(matrix[r][c] == 0 || matrix[r][c] == 1)
            return matrix[r][c];
        
        int temp = matrix[r][c];
        
        matrix[r][c] = -1;
        
        int left = 1+dfs(matrix, r, c-1);
        int right = 1+dfs(matrix, r, c+1);
        int down = 1+dfs(matrix, r-1, c);
        int up = 1+dfs(matrix, r+1, c);
        
        matrix[r][c] = min({temp, left, right, down, up});
        return matrix[r][c];
    }
    
    vector<vector<int>> updateMatrix(vector<vector<int>>& matrix) {
        for(int i = 0; i < matrix.size(); i++)
            for(int j = 0; j < matrix[0].size(); j++)
                if(matrix[i][j])
                    matrix[i][j] = 10000;
        
        for(int i = 0; i < matrix.size(); i++)
            for(int j = 0; j < matrix[0].size(); j++)
                if(matrix[i][j])
                    dfs(matrix, i, j);
        return matrix;
        
    }
};
```
