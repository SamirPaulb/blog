---
title: surrounded regions
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, surrounded-regions solution
description: surrounded regions LeetCode Solution Explained
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


<h2>130. Surrounded Regions</h2><h3>Medium</h3><hr><div><p>Given an <code>m x n</code> matrix <code>board</code> containing <code>'X'</code> and <code>'O'</code>, <em>capture all regions surrounded by</em> <code>'X'</code>.</p>

<p>A region is <strong>captured</strong> by flipping all <code>'O'</code>s into <code>'X'</code>s in that surrounded region.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/19/xogrid.jpg" style="width: 550px; height: 237px;">
<pre><strong>Input:</strong> board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
<strong>Output:</strong> [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
<strong>Explanation:</strong> Surrounded regions should not be on the border, which means that any 'O' on the border of the board are not flipped to 'X'. Any 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'. Two cells are connected if they are adjacent cells connected horizontally or vertically.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> board = [["X"]]
<strong>Output:</strong> [["X"]]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == board.length</code></li>
	<li><code>n == board[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 200</code></li>
	<li><code>board[i][j]</code> is <code>'X'</code> or <code>'O'</code>.</li>
</ul>
</div>

---




```cpp
class Solution {
public:
        
void dfs(vector<vector<char>>& board, int i, int j,int rowsize,int colsize)
{
    if(i < 0 || j < 0 || i >= rowsize || j >= colsize || board[i][j] == 'X' || board[i][j] == '1')
    {
        return;
    }
    
    if(board[i][j] == 'O')
    {
        
        board[i][j] = '1';
       
        dfs(board,i+1,j,rowsize,colsize);
        dfs(board,i,j+1,rowsize,colsize);
        dfs(board,i-1,j,rowsize,colsize);
        dfs(board,i,j-1,rowsize,colsize);
          
        
    }
    
}
    
    void solve(vector<vector<char>>& board) {
       int rows = board.size();
    
    if(rows == 0)
        return;
    
    int cols = board[0].size();
    
    if(cols == 0)
        return;
    
    for(int i=0;i<rows;i++)
    {
        for(int j=0;j<cols;j++)
        {
            if(i==0 || j==0 || i==rows-1 || j==cols-1)
            {
                if(board[i][j] == 'O')
                {
                    dfs(board,i,j,rows,cols);
                }
            }
        }
    }
    
    
    for(int i=0;i<rows;i++)
    {
        for(int j=0;j<cols;j++)
        {
            if(board[i][j] == '1')
            {
                board[i][j] = 'O';
            }
            else if(board[i][j] == 'O')
            {
                board[i][j] = 'X';
            }
        }
    }
    }
};
```
