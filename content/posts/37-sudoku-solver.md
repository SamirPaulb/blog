---
title: 37 sudoku solver
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 37-sudoku-solver solution
description: 37 sudoku solver LeetCode Solution Explained
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
<p><strong>Example 1:</strong></p>
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
    def solveSudoku(self, board):
        
        def backtrack(board, i, j):
            if j == 9: i = i+1; j = 0
            if i == 9: return True
            
            if board[i][j] != ".":
                if backtrack(board, i, j+1): return True    # checking if the remaining calls can be valid or not
                else: return False  # if remaining calls not valid then this recursive subtree can not be valid
                
            else:
                for p in range(1, 10):
                    ch = str(p)
                    if self.isValid(board, i, j, ch):
                        board[i][j] = ch
                        if backtrack(board, i, j+1): return True  # if remaining recursive sub-tree is valid then return True from here
                        board[i][j] = "."  # the subtree was not valid so it did not return so update current cell as new
                return False   # No subtree was valid 
        
        backtrack(board, 0, 0)
        return board
    
    
    def isValid(self, board, i, j, ch):
        # check row i
        for c in range(9):
            if board[i][c] == ch: return False
        
        # check column j
        for r in range(9):
            if board[r][j] == ch: return False
        
        # check sub-boxes of the grid
        smr = (i//3) * 3   # SUb-Matrix up-leftmost corner row index
        smc = (j//3) * 3   # Sub-Matrix up-leftmost corner column index
        for r in range(3):
            for c in range(3):
                if board[smr+r][smc+c] == ch: return False
        
        return True
    
    
# Learn Concept: https://youtu.be/uyetDh-DyDg    
    
'''    
Time complexity: O(9^(n*n)). For every unassigned index, there are 9 possible options so the time complexity is O(9^(n*n)). The time complexity remains the same but checking if a number is safe to use is much faster, O(1).
Space Complexity: O(n*n). As in worst case there can be n*n "." so to update them in board we need to use this space.
'''
```
