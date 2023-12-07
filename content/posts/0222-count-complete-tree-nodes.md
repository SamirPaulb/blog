---
title: 0222 count complete tree nodes
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 0222-count-complete-tree-nodes solution
description: 0222 count complete tree nodes LeetCode Solution Explained
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
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def countNodes(self, root: Optional[TreeNode]) -> int:
        def lh(root):
            c = 1
            while root:
                c += 1
                root = root.left
        def rh(root):
            c = 1
            while root:
                c += 1
                root = root.right
            return c
        if not root: return 0
        lh = lh(root)
        rh = rh(root)
        if lh == rh: return 2**lh - 1
        return 1 + self.countNodes(root.left) + self.countNodes(root.right)
    
        
        
```
