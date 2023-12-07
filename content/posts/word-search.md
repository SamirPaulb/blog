---
title: word search
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, word-search solution
description: word search LeetCode Solution Explained
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


[Discussion Post (created on 22/0/2021 at 17:59)](https://leetcode.com/problems/word-search/discuss/1029329/Easy-To-Understand-or-DFS-or-C%2B%2B)  
<h2>79. Word Search</h2><h3>Medium</h3><hr><div><p>Given an&nbsp;<code>m x n</code> <code>board</code> and a <code>word</code>, find if the word exists in the grid.</p>

<p>The word can be constructed from letters of sequentially adjacent cells, where "adjacent" cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/11/04/word2.jpg" style="width: 322px; height: 242px;">
<pre><strong>Input:</strong> board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
<strong>Output:</strong> true
</pre>

<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/11/04/word-1.jpg" style="width: 322px; height: 242px;">
<pre><strong>Input:</strong> board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
<strong>Output:</strong> true
</pre>

<p><strong>Example 3:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/15/word3.jpg" style="width: 322px; height: 242px;">
<pre><strong>Input:</strong> board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
<strong>Output:</strong> false
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == board.length</code></li>
	<li><code>n = board[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 200</code></li>
	<li><code>1 &lt;= word.length &lt;= 10<sup>3</sup></code></li>
	<li><code>board</code>&nbsp;and <code>word</code> consists only of lowercase and uppercase English letters.</li>
</ul>
</div>

---




```cpp
class Solution {
public:
    bool vis[201][201];
    bool dfs(vector<vector<char>>& board, string word, int i, int j, int idx, int p, int n, int m){
        if(i>=n || j>=m || i<0 || j<0 || board[i][j]!=word[idx] || vis[i][j]==true)
        return false;
        
        if(idx+1==p)
            return true;
        
        vis[i][j]=true;
        
        bool ans= dfs(board, word, i+1, j, idx+1, p, n, m) || dfs(board, word, i, j+1, idx+1, p, n, m) || dfs(board, word, i-1, j, idx+1, p, n, m) || dfs(board, word, i, j-1, idx+1, p, n, m);
        vis[i][j]=false;
        return ans;
        
    }
    
    bool exist(vector<vector<char>>& board, string word) {
        int n=board.size();
        int m=board[0].size();
        for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){
                if(board[i][j]==word[0])
                    if(dfs(board, word, i, j, 0, word.size(), n, m))
                        return true;
            }
        }
        return false;
    }
};

```
