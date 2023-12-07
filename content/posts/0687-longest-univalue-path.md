---
title: 0687 longest univalue path
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 0687-longest-univalue-path solution
description: 0687 longest univalue path LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/longest-univalue-path/">687. Longest Univalue Path</a></h2><h3>Medium</h3><hr><div><p>Given the <code>root</code> of a binary tree, return <em>the length of the longest path, where each node in the path has the same value</em>. This path may or may not pass through the root.</p>

<p><strong>The length of the path</strong> between two nodes is represented by the number of edges between them.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/13/ex1.jpg" style="width: 450px; height: 238px;">
<pre><strong>Input:</strong> root = [5,4,5,1,1,null,5]
<strong>Output:</strong> 2
<strong>Explanation:</strong> The shown image shows that the longest path of the same value (i.e. 5).
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/13/ex2.jpg" style="width: 450px; height: 238px;">
<pre><strong>Input:</strong> root = [1,4,5,4,4,null,5]
<strong>Output:</strong> 2
<strong>Explanation:</strong> The shown image shows that the longest path of the same value (i.e. 4).
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is in the range <code>[0, 10<sup>4</sup>]</code>.</li>
	<li><code>-1000 &lt;= Node.val &lt;= 1000</code></li>
	<li>The depth of the tree will not exceed <code>1000</code>.</li>
</ul>
</div>

---




```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def longestUnivaluePath(self, root: Optional[TreeNode]) -> int:
        self.res = 0
        def solve(root):
            if not root: return 0
            l = solve(root.left)
            r = solve(root.right)
            if root.left and root.val == root.left.val:
                l += 1
            else:
                l = 0
            
            if root.right and root.val == root.right.val:
                r += 1
            else:
                r = 0
            
            self.res = max(self.res, l+r)
            return max(l, r)
        
        solve(root)
        return self.res
```
