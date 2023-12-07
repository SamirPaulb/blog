---
title: next greater number bst
tags: [interviewbit]
keywords: interviewbit, interviewbit solution in Python3 C++ Java, next greater number bst solution
description: next greater number bst Interviewbit Solution Explained
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

# Next Greater Number Bst

https://www.interviewbit.com/problems/next-greater-number-bst


## Solution

```cpp
class Solution {
public:
    TreeNode *Find(TreeNode *root, int data) {
        while (root != NULL && root->val != data) {
            if (data < root->val)
                root = root->left;
            else
                root = root->right;
        }
        if (root != NULL && root->val == data) return root;
        return NULL;
    }

    TreeNode *FindMin(TreeNode *root) {
        while (root->left != NULL) root = root->left;
        return root;
    }

    TreeNode *getSuccessor(TreeNode *root, int data) {
        // Search the node O(h)
        TreeNode *current = Find(root, data);
        if (current == NULL) return NULL;
        if (current->right != NULL) { // Case 1 : Node has right subtree
            return FindMin(current->right);
        } else {
            TreeNode *successor = NULL, *ancestor = root;
            while (ancestor != current) {
                if (data < ancestor->val) {
                    successor = ancestor; // so far this is the deepest node for which current node is in left.
                    ancestor = ancestor->left;
                } else
                    ancestor = ancestor->right;
            }
            return successor;
        }
    }
};
```