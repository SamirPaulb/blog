---
title: zigzag level order traversal bt
tags: [interviewbit]
keywords: interviewbit, interviewbit solution in Python3 C++ Java, zigzag level order traversal bt solution
description: zigzag level order traversal bt Interviewbit Solution Explained
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

# Zigzag Level Order Traversal Bt

https://www.interviewbit.com/problems/zigzag-level-order-traversal-bt

Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

Example: 
Given binary tree
```
    3
   / \
  9  20
    /  \
   15   7
```
return
```
[
         [3],
         [20, 9],
         [15, 7]
]
```

## Solution

```cpp

/**
 * Definition for binary tree
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x): val(x), left(NULL), right(NULL) {}
 * };
 */
int height(TreeNode* A)
{
    if (!A)
        return 0;
    return 1 + max(height(A->left), height(A->right));
}

void levelTraversal(vector<int>& res, TreeNode* A, int level, bool inverse)
{
    if (!A)
        return;
    if (level == 1)
        res.emplace_back(A->val);
    else
    {
        if (inverse)
        {
            levelTraversal(res, A->right, level-1, inverse);
            levelTraversal(res, A->left, level-1, inverse);
        }
        else
        {
            levelTraversal(res, A->left, level-1, inverse);
            levelTraversal(res, A->right, level-1, inverse);
        }
    }
}

vector<vector<int> > Solution::zigzagLevelOrder(TreeNode* A) {
    int levels = height(A);
    vector<vector<int> > res;
    for (auto h = 1; h<=levels; ++h)
    {
        bool inverse = false;
        vector<int> row;
        if (h%2 == 0)
            inverse = true;
        levelTraversal(row, A, h, inverse);
        res.emplace_back(row);
    }
    return res;
}
```
