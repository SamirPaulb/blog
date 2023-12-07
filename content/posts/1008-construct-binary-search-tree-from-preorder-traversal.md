---
title: 1008 construct binary search tree from preorder traversal
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 1008-construct-binary-search-tree-from-preorder-traversal solution
description: 1008 construct binary search tree from preorder traversal LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/">1008. Construct Binary Search Tree from Preorder Traversal</a></h2><h3>Medium</h3><hr><div><p>Given an array of integers preorder, which represents the <strong>preorder traversal</strong> of a BST (i.e., <strong>binary search tree</strong>), construct the tree and return <em>its root</em>.</p>

<p>It is <strong>guaranteed</strong> that there is always possible to find a binary search tree with the given requirements for the given test cases.</p>

<p>A <strong>binary search tree</strong> is a binary tree where for every node, any descendant of <code>Node.left</code> has a value <strong>strictly less than</strong> <code>Node.val</code>, and any descendant of <code>Node.right</code> has a value <strong>strictly greater than</strong> <code>Node.val</code>.</p>

<p>A <strong>preorder traversal</strong> of a binary tree displays the value of the node first, then traverses <code>Node.left</code>, then traverses <code>Node.right</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/03/06/1266.png" style="height: 386px; width: 590px;">
<pre><strong>Input:</strong> preorder = [8,5,1,7,10,12]
<strong>Output:</strong> [8,5,10,1,7,null,12]
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> preorder = [1,3]
<strong>Output:</strong> [1,null,3]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= preorder.length &lt;= 100</code></li>
	<li><code>1 &lt;= preorder[i] &lt;= 1000</code></li>
	<li>All the values of <code>preorder</code> are <strong>unique</strong>.</li>
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
    def bstFromPreorder(self, preorder: List[int]) -> Optional[TreeNode]:
        root = TreeNode(preorder[0])
        stack = [root]
        parent = root
        
        for nodeVal in preorder[1:]:
            newNode = TreeNode(nodeVal)
            if stack and newNode.val < stack[-1].val:
                parent.left = newNode
                stack.append(newNode)
                parent = stack[-1]
            else:
                while stack and stack[-1].val < newNode.val:
                    parent = stack.pop()
                parent.right = newNode
                stack.append(newNode)
                parent = stack[-1]
        
        return root
```
