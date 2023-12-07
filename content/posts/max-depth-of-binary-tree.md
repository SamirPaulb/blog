---
title: max depth of binary tree
tags: [interviewbit]
keywords: interviewbit, interviewbit solution in Python3 C++ Java, max depth of binary tree solution
description: max depth of binary tree Interviewbit Solution Explained
cover:
    image: https://scdn.netlify.app/img/interviewbit-cover.jpg
    alt: interviewbit-cover
    caption: interviewbit-cover
image: https://scdn.netlify.app/img/interviewbit-cover.jpg
date: 2021-10-04T15:58:26+08:00
lastmod: 2022-03-04T15:58:26+08:00
draft: false
author: Samir Paul
authorLink: https://twitter.com/intent/follow?screen_name=SamirPaulb
license: CC BY 4.0
---

# Max Depth Of Binary Tree

https://www.interviewbit.com/problems/max-depth-of-binary-tree


## Solution

```cpp


/**
 * Definition for binary tree
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
 
 int depth(TreeNode *root) {
    if (!root)
        return 0;
    return 1 + max(depth(root->left), depth(root->right));
 }
 
int Solution::maxDepth(TreeNode* A) {
    return depth(A);
}

```