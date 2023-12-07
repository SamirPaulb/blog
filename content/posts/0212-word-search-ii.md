---
title: 0212 word search ii
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 0212-word-search-ii solution
description: 0212 word search ii LeetCode Solution Explained
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
class Solution(object):
    def findWords(self, board, words):
        if not board or not words: return []
        boardc = collections.Counter(sum(board,[]))
        words = [word for word in words if collections.Counter(word) <= boardc]
        trie = {}
        for word in words:
            node = trie
            for c in reversed(word):
                node = node.setdefault(c, {})
            node['$'] = word
            
        def find(i,j,node):
            if '$' in node: out.append(node.pop('$'))
            if not node: return
            tmp, board[i][j] = board[i][j], '#'
            
            for dx,dy in [(i+1, j),(i-1,j), (i,j+1), (i,j-1)]:
                if 0<=dx<m and 0<=dy<n and board[dx][dy] in node:
                    find(dx,dy,node[board[dx][dy]])
                    if not node[board[dx][dy]]: node.pop(board[dx][dy])
            board[i][j] = tmp
            
            return 0
                    
        m, n = len(board), len(board[0])
        out = []
        for i in range(m):
            for j in range(n):
                if board[i][j] in trie:
                    find(i,j,trie[board[i][j]])
                    if not trie[board[i][j]]: trie.pop(board[i][j])
                if len(words) == len(out): return out
        return out

```
