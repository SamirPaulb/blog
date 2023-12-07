---
title: 814 binary tree pruning
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 814-binary-tree-pruning solution
description: 814 binary tree pruning LeetCode Solution Explained
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
class Solution:
    def pruneTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if not root: return 
        
        def solve(root):
            if not root: return True
            
            l = solve(root.left)
            r = solve(root.right)
            
            if l: root.left = None
            if r: root.right = None
            if not root.left and not root.right and root.val == 0: return True 
            return False
        
        solve(root)
        if not root.left and not root.right and root.val == 0: return None
        return root
```
