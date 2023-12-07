---
title: 0331 verify preorder serialization of a binary tree
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 0331-verify-preorder-serialization-of-a-binary-tree solution
description: 0331 verify preorder serialization of a binary tree LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/">331. Verify Preorder Serialization of a Binary Tree</a></h2><h3>Medium</h3><hr><div><p>One way to serialize a binary tree is to use <strong>preorder traversal</strong>. When we encounter a non-null node, we record the node's value. If it is a null node, we record using a sentinel value such as <code>'#'</code>.</p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/03/12/pre-tree.jpg" style="width: 362px; height: 293px;">
<p>For example, the above binary tree can be serialized to the string <code>"9,3,4,#,#,1,#,#,2,#,6,#,#"</code>, where <code>'#'</code> represents a null node.</p>

<p>Given a string of comma-separated values <code>preorder</code>, return <code>true</code> if it is a correct preorder traversal serialization of a binary tree.</p>

<p>It is <strong>guaranteed</strong> that each comma-separated value in the string must be either an integer or a character <code>'#'</code> representing null pointer.</p>

<p>You may assume that the input format is always valid.</p>

<ul>
	<li>For example, it could never contain two consecutive commas, such as <code>"1,,3"</code>.</li>
</ul>

<p><strong>Note:&nbsp;</strong>You are not allowed to reconstruct the tree.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> preorder = "9,3,4,#,#,1,#,#,2,#,6,#,#"
<strong>Output:</strong> true
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> preorder = "1,#"
<strong>Output:</strong> false
</pre><p><strong class="example">Example 3:</strong></p>
<pre><strong>Input:</strong> preorder = "9,#,#,1"
<strong>Output:</strong> false
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= preorder.length &lt;= 10<sup>4</sup></code></li>
	<li><code>preorder</code> consist of integers in the range <code>[0, 100]</code> and <code>'#'</code> separated by commas <code>','</code>.</li>
</ul>
</div>

---




```python
class Solution:
    def isValidSerialization(self, preorder: str) -> bool:
        preorder = list(preorder.split(','))
        if preorder[0] == '#':
            if len(preorder) == 1: return True
            return False
        
        stack = []
        for i, ch in enumerate(preorder):
            if ch == '#':
                if not stack: return False
                stack[-1] -= 1
                while stack and stack[-1] <= 0:
                    stack.pop()
                    if stack: stack[-1] -= 1
            else:
                if i != 0 and not stack: return False
                stack.append(2)
                
        # print(stack)
        return True if not stack else False 
```
