---
title: 1302 deepest leaves sum
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 1302-deepest-leaves-sum solution
description: 1302 deepest leaves sum LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/deepest-leaves-sum/">1302. Deepest Leaves Sum</a></h2><h3>Medium</h3><hr><div>Given the <code>root</code> of a binary tree, return <em>the sum of values of its deepest leaves</em>.
<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/07/31/1483_ex1.png" style="width: 273px; height: 265px;">
<pre><strong>Input:</strong> root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
<strong>Output:</strong> 15
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
<strong>Output:</strong> 19
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is in the range <code>[1, 10<sup>4</sup>]</code>.</li>
	<li><code>1 &lt;= Node.val &lt;= 100</code></li>
</ul>
</div>

---




```python
class Solution:
    def deepestLeavesSum(self, root: Optional[TreeNode]) -> int:
        
        def depth(root):
            if not root: return 0
            return 1 + max(depth(root.left), depth(root.right))
        
        self.maxDepth = depth(root)
        self.res = 0
        
        def solve(root, d):
            if not root: return
            if d == self.maxDepth:
                self.res += root.val
            solve(root.left, d+1)
            solve(root.right, d+1)
        
        solve(root, 1)
        return self.res
```
