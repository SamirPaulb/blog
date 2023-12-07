---
title: 1373 maximum sum bst in binary tree
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 1373-maximum-sum-bst-in-binary-tree solution
description: 1373 maximum sum bst in binary tree LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/">1373. Maximum Sum BST in Binary Tree</a></h2><h3>Hard</h3><hr><div><p>Given a <strong>binary tree</strong> <code>root</code>, return <em>the maximum sum of all keys of <strong>any</strong> sub-tree which is also a Binary Search Tree (BST)</em>.</p>

<p>Assume a BST is defined as follows:</p>

<ul>
	<li>The left subtree of a node contains only nodes with keys <strong>less than</strong> the node's key.</li>
	<li>The right subtree of a node contains only nodes with keys <strong>greater than</strong> the node's key.</li>
	<li>Both the left and right subtrees must also be binary search trees.</li>
</ul>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2020/01/30/sample_1_1709.png" style="width: 320px; height: 250px;"></p>

<pre><strong>Input:</strong> root = [1,4,3,2,4,2,5,null,null,null,null,null,null,4,6]
<strong>Output:</strong> 20
<strong>Explanation:</strong> Maximum sum in a valid Binary search tree is obtained in root node with key equal to 3.
</pre>

<p><strong>Example 2:</strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2020/01/30/sample_2_1709.png" style="width: 134px; height: 180px;"></p>

<pre><strong>Input:</strong> root = [4,3,null,1,2]
<strong>Output:</strong> 2
<strong>Explanation:</strong> Maximum sum in a valid Binary search tree is obtained in a single root node with key equal to 2.
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> root = [-4,-2,-5]
<strong>Output:</strong> 0
<strong>Explanation:</strong> All values are negatives. Return an empty BST.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is in the range <code>[1, 4 * 10<sup>4</sup>]</code>.</li>
	<li><code>-4 * 10<sup>4</sup> &lt;= Node.val &lt;= 4 * 10<sup>4</sup></code></li>
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
    def maxSumBST(self, root: Optional[TreeNode]) -> int:
        def dfs(root):
            if not root: 
                return True, 0, float("inf"), float("-inf")
            lRes, lSum, lMin, lMax = dfs(root.left)
            rRes, rSum, rMin, rMax = dfs(root.right)
            
            if lRes and rRes and lMax < root.val < rMin:
                self.res = max(self.res, lSum + root.val + rSum)
                return True, lSum + root.val + rSum, min(lMin, root.val), max(rMax, root.val)
            
            else:
                return False, 0, 0, 0
        
        self.res = 0
        dfs(root)
        return self.res
```
