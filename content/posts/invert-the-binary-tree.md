---
title: invert the binary tree
tags: [interviewbit]
keywords: interviewbit, interviewbit solution in Python3 C++ Java, invert the binary tree solution
description: invert the binary tree Interviewbit Solution Explained
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

# Invert The Binary Tree

https://www.interviewbit.com/problems/invert-the-binary-tree


## Solution

```cpp
TreeNode* Solution::invertTree(TreeNode* A) {
    if (!A)
        return 0;
    TreeNode * left = invertTree(A->left);
    TreeNode * right = invertTree(A->right);
    A->left = right;
    A->right = left;
    return A;
}

```