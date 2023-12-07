---
title: identical binary trees
tags: [interviewbit]
keywords: interviewbit, interviewbit solution in Python3 C++ Java, identical binary trees solution
description: identical binary trees Interviewbit Solution Explained
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

# Identical Binary Tree

https://www.interviewbit.com/problems/identical-binary-tree


## Solution

```cpp
int Solution::isSameTree(TreeNode* A, TreeNode* B) {
    if (!A && !B)
        return true;
    if (!A || !B)
        return false;
    if (A->val != B->val)
        return false;
    return isSameTree(A->left, B->left) && isSameTree(A->right, B->right);
}

```