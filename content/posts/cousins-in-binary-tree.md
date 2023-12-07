---
title: cousins in binary tree
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, cousins-in-binary-tree solution
description: cousins in binary tree LeetCode Solution Explained
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


<h2>993. Cousins in Binary Tree</h2><h3>Easy</h3><hr><div><p>In a binary tree, the root node is at depth <code>0</code>, and children of each depth <code>k</code> node are at depth <code>k+1</code>.</p>

<p>Two nodes of a binary tree are <em>cousins</em> if they have the same depth, but have <strong>different parents</strong>.</p>

<p>We are given the <code>root</code> of a binary tree with unique values, and the values <code>x</code>&nbsp;and <code>y</code>&nbsp;of two different nodes in the tree.</p>

<p>Return&nbsp;<code>true</code>&nbsp;if and only if the nodes corresponding to the values <code>x</code> and <code>y</code> are cousins.</p>

<p>&nbsp;</p>

<p><strong>Example 1:<br>
<img alt="" src="https://assets.leetcode.com/uploads/2019/02/12/q1248-01.png" style="width: 180px; height: 160px;"></strong></p>

<pre><strong>Input: </strong>root = <span id="example-input-1-1">[1,2,3,4]</span>, x = <span id="example-input-1-2">4</span>, y = <span id="example-input-1-3">3</span>
<strong>Output: </strong><span id="example-output-1">false</span>
</pre>

<div>
<p><strong>Example 2:<br>
<img alt="" src="https://assets.leetcode.com/uploads/2019/02/12/q1248-02.png" style="width: 201px; height: 160px;"></strong></p>

<pre><strong>Input: </strong>root = <span id="example-input-2-1">[1,2,3,null,4,null,5]</span>, x = <span id="example-input-2-2">5</span>, y = <span id="example-input-2-3">4</span>
<strong>Output: </strong><span id="example-output-2">true</span>
</pre>

<div>
<p><strong>Example 3:</strong></p>

<p><strong><img alt="" src="https://assets.leetcode.com/uploads/2019/02/13/q1248-03.png" style="width: 156px; height: 160px;"></strong></p>

<pre><strong>Input: </strong>root = <span id="example-input-3-1">[1,2,3,null,4]</span>, x = 2, y = 3
<strong>Output: </strong><span id="example-output-3">false</span>
</pre>
</div>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree will be between <code>2</code> and <code>100</code>.</li>
	<li>Each node has a unique integer value from <code>1</code> to <code>100</code>.</li>
</ul>
</div>

---




```cpp
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int xl,yl,xp,yp;
    
    void dfs(TreeNode* root, int x, int y, int p, int l){
        if(root==NULL)
            return;
        if(root->val==x){
            xl=l;
            xp=p;
            return;
        }
        if(root->val==y){
            yl=l;
            yp=p;
            return;
        }
        dfs(root->left,x,y,root->val,l+1);
        dfs(root->right,x,y,root->val,l+1);
    }
    
    bool isCousins(TreeNode* root, int x, int y) {
        dfs(root,x,y,0,0);
        if(xl==yl && xp!=yp)
            return true;
        return false;
    }
};
```
