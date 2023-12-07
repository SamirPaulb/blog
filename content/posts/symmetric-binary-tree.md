---
title: symmetric binary tree
tags: [interviewbit]
keywords: interviewbit, interviewbit solution in Python3 C++ Java, symmetric binary tree solution
description: symmetric binary tree Interviewbit Solution Explained
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

# Symmetric Binary Tree

https://www.interviewbit.com/problems/symmetric-binary-tree


## Solution

```cpp
bool symmetric(TreeNode* a, TreeNode* b) {
    if (!a || !b)
        return a == b;
    if (a->val != b->val)
        return false;
    return symmetric(a->left, b->right) && symmetric(a->right, b->left);
}

int Solution::isSymmetric(TreeNode* A) {
    return !A || symmetric(A->left, A->right);
}

```