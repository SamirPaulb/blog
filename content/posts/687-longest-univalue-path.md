---
title: 687 longest univalue path
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 687-longest-univalue-path solution
description: 687 longest univalue path LeetCode Solution Explained
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
    def longestUnivaluePath(self, root: Optional[TreeNode]) -> int:
        self.res = 0
        
        def solve(root):
            if not root: return 0
            
            leftMax = solve(root.left)
            rightMax = solve(root.right)
            
            if root.left:
                if root.val == root.left.val: leftMax += 1
                else: leftMax = 0
                    
            if root.right:
                if root.val == root.right.val: rightMax += 1
                else: rightMax = 0
            
            self.res = max(self.res, leftMax + rightMax)
            return max(leftMax, rightMax)
        
        solve(root)
        return self.res
```
