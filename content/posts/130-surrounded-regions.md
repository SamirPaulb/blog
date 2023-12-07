---
title: 130 surrounded regions
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 130-surrounded-regions solution
description: 130 surrounded regions LeetCode Solution Explained
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




---




```python
# https://leetcode.com/problems/surrounded-regions/
# https://youtu.be/0ZJViJEdtEc

''' 
Traverse the matrix boundary and whenever we get 'O' the call dfs from that call
and mark all connected 'O' to '.' 
Again traverse the matrix and and change 'O' to 'X' and '.' to 'O'
'''
class Solution:
    def solve(self, board: List[List[str]]) -> None:
        direc = [[1, 0], [-1, 0], [0, 1], [0, -1]]
        
        def dfs(i, j, val):
            if not 0<= i <len(board) or not 0 <= j < len(board[0]) or board[i][j] != 'O':
                return
            board[i][j] = val
            for k in range(4):
                r = i + direc[k][0]
                c = j + direc[k][1]
                dfs(r, c, val)

        # traverse the boundary
        for i in range(len(board)):
            for j in range(len(board[0])):
                if (i == len(board)-1 or i == 0 or j == len(board[0])-1 or j == 0) and board[i][j] == 'O':
                    dfs(i, j, '.')
        
        # Traverse the whole matrix to change 'O' to 'X' and '.' to 'O' 
        for i in range(len(board)):
            for j in range(len(board[0])):
                if board[i][j] == 'O':
                    board[i][j] = 'X'
                elif board[i][j] == '.':
                    board[i][j] = 'O'
        
        return board

# Time: O(m * n)
# Space: O(1)
```
