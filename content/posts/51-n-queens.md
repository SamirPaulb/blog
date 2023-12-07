---
title: 51 n queens
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 51-n-queens solution
description: 51 n queens LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/n-queens/">51. N-Queens</a></h2><h3>Hard</h3><hr><div><p>The <strong>n-queens</strong> puzzle is the problem of placing <code>n</code> queens on an <code>n x n</code> chessboard such that no two queens attack each other.</p>

<p>Given an integer <code>n</code>, return <em>all distinct solutions to the <strong>n-queens puzzle</strong></em>. You may return the answer in <strong>any order</strong>.</p>

<p>Each solution contains a distinct board configuration of the n-queens' placement, where <code>'Q'</code> and <code>'.'</code> both indicate a queen and an empty space, respectively.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/11/13/queens.jpg" style="width: 600px; height: 268px;">
<pre><strong>Input:</strong> n = 4
<strong>Output:</strong> [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
<strong>Explanation:</strong> There exist two distinct solutions to the 4-queens puzzle as shown above
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> n = 1
<strong>Output:</strong> [["Q"]]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 9</code></li>
</ul>
</div>

---




```python
class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        row = set()
        col = set()
        posDiag = set()
        negDiag = set()
        board = [['.']*n for i in range(n)]
        res = []
        
        def dfs(i):
            if i >= n: 
                s = ["".join(board[i]) for i in range(n)]
                res.append(s)
                return
            
            for j in range(n):
                if j in col or (i+j) in posDiag or (i-j) in negDiag: continue
                
                col.add(j)
                posDiag.add(i+j)
                negDiag.add(i-j)
                board[i][j] = "Q"

                dfs(i+1)

                col.remove(j)
                posDiag.remove(i+j)
                negDiag.remove(i-j)
                board[i][j] = "."
        
        dfs(0)
        return res

```
