---
title: binary tree paths
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, binary-tree-paths solution
description: binary tree paths LeetCode Solution Explained
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


<h2>257. Binary Tree Paths</h2><h3>Easy</h3><hr><div><p>Given a binary tree, return all root-to-leaf paths.</p>

<p><strong>Note:</strong>&nbsp;A leaf is a node with no children.</p>

<p><strong>Example:</strong></p>

<pre><strong>Input:</strong>

   1
 /   \
2     3
 \
  5

<strong>Output:</strong> ["1-&gt;2-&gt;5", "1-&gt;3"]

<strong>Explanation:</strong> All root-to-leaf paths are: 1-&gt;2-&gt;5, 1-&gt;3
</pre></div>

---




```cpp
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    void traverse(string s, vector<string> &ans, TreeNode* root){
        if(root->left==NULL && root->right==NULL){
            ans.push_back(s);
            return;
        }
        if(root->right){
            traverse(s+ "->"+ to_string(root->right->val),ans,root->right);
        }
        if(root->left){
            traverse(s+ "->"+ to_string(root->left->val),ans,root->left);
        }
        
    }
    vector<string> binaryTreePaths(TreeNode* root) {
        vector<string> ans;
        if(root==NULL)
            return ans;
        string s=to_string(root->val);
        traverse(s, ans, root);
        return ans;  
    }
};

```
