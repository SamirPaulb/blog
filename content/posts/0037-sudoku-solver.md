---
title: 0037 sudoku solver
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 0037-sudoku-solver solution
description: 0037 sudoku solver LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/sudoku-solver/">37. Sudoku Solver</a></h2><h3>Hard</h3><hr><div><p>Write a program to solve a Sudoku puzzle by filling the empty cells.</p>

<p>A sudoku solution must satisfy <strong>all of the following rules</strong>:</p>

<ol>
	<li>Each of the digits <code>1-9</code> must occur exactly once in each row.</li>
	<li>Each of the digits <code>1-9</code> must occur exactly once in each column.</li>
	<li>Each of the digits <code>1-9</code> must occur exactly once in each of the 9 <code>3x3</code> sub-boxes of the grid.</li>
</ol>

<p>The <code>'.'</code> character indicates empty cells.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png" style="height:250px; width:250px">
<pre><strong>Input:</strong> board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
<strong>Output:</strong> [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]
<strong>Explanation:</strong>&nbsp;The input board is shown above and the only valid solution is shown below:

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Sudoku-by-L2G-20050714_solution.svg/250px-Sudoku-by-L2G-20050714_solution.svg.png" style="height:250px; width:250px">
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>board.length == 9</code></li>
	<li><code>board[i].length == 9</code></li>
	<li><code>board[i][j]</code> is a digit or <code>'.'</code>.</li>
	<li>It is <strong>guaranteed</strong> that the input board has only one solution.</li>
</ul>
</div>

---




```python
class Solution:
    def solveSudoku(self, board: List[List[str]]) -> None:
        row = {i:set() for i in range(9)}
        col = {i:set() for i in range(9)}
        sub_block = {}
        for i in range(9):
            for j in range(9):
                rs, cs = i//3, j//3
                if (rs,cs) not in sub_block: sub_block[(rs,cs)] = set()
                if board[i][j] != '.':
                    sub_block[(rs,cs)].add(board[i][j])
                    row[i].add(board[i][j])
                    col[j].add(board[i][j])
        
        def solve(r,c):
            if r >= len(board): return True
            if c == len(board[0]): return solve(r+1, 0)
            if board[r][c] != '.': return solve(r, c+1) 
            else:
                for i in range(1, 10):
                    s = str(i)
                    if s in row[r] or s in col[c] or s in sub_block[(r//3,c//3)]:
                        continue
                    board[r][c] = s
                    sub_block[(r//3,c//3)].add(s)
                    row[r].add(s)
                    col[c].add(s)
                    if solve(r, c+1): return True
                    board[r][c] = '.'
                    sub_block[(r//3,c//3)].remove(s)
                    row[r].remove(s)
                    col[c].remove(s)
                return False
        
        solve(0, 0)
        return board
```
