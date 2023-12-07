---
title: 79 word search
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 79-word-search solution
description: 79 word search LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/word-search/">79. Word Search</a></h2><h3>Medium</h3><hr><div><p>Given an <code>m x n</code> grid of characters <code>board</code> and a string <code>word</code>, return <code>true</code> <em>if</em> <code>word</code> <em>exists in the grid</em>.</p>

<p>The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.</p>

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
	<li><code>1 &lt;= m, n &lt;= 6</code></li>
	<li><code>1 &lt;= word.length &lt;= 15</code></li>
	<li><code>board</code> and <code>word</code> consists of only lowercase and uppercase English letters.</li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong> Could you use search pruning to make your solution faster with a larger <code>board</code>?</p>
</div>

---




```python
class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        
        m = len(board); n = len(board[0])
        
        def dfs(i, j, board, word):
            if len(word) == 0: return True  # all the letters are checked
            if (not 0 <= i < len(board)) or (not 0 <= j < len(board[0])): return False
            if board[i][j] != word[0]: return False
            tmp = word[0]
            board[i][j] = '#'  # to mark this cell visited for the current call in current copy of board
            res = ( dfs(i+1, j, board, word[1:]) or
                    dfs(i-1, j, board, word[1:]) or
                    dfs(i, j+1, board, word[1:]) or
                    dfs(i, j-1, board, word[1:]) 
                   )
            board[i][j] = tmp   # during backtracking again update to previous value for using in next calls 
            return res
        
        for i in range(m):
            for j in range(n):
                if board[i][j] == word[0]:  # 0th letter matches so can check for the next lettere
                    if dfs(i, j, board.copy(), word):  # Passing a copy of board as this cells may be usefull in the next call so do not update the main board
                        return True
        
        return False
    

# Time: O(m*n * 4^s) ; where s = len(word), m = no. of rows and n = no. of cols of the word. Since we may end considering every character(m*n) as a start of the word, and from there we have 4 choices to continue to look for the rest of the word (4^s).

# Space: O(m*n) ; as each time of dfs calling we are passing a copy of main board.
```
