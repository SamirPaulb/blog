---
title: maximum sum bst in binary tree
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, maximum-sum-bst-in-binary-tree solution
description: maximum sum bst in binary tree LeetCode Solution Explained
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


<h2>1373. Maximum Sum BST in Binary Tree</h2><h3>Hard</h3><hr><div><p>Given a <strong>binary tree</strong> <code>root</code>, the task is to return the maximum sum of all keys of <strong>any</strong>&nbsp;sub-tree which is also a Binary Search Tree (BST).</p>

<p>Assume a BST is defined as follows:</p>

<ul>
	<li>The left subtree of a node contains only nodes with keys&nbsp;<strong>less than</strong>&nbsp;the node's key.</li>
	<li>The right subtree of a node contains only nodes with keys&nbsp;<strong>greater than</strong>&nbsp;the node's key.</li>
	<li>Both the left and right subtrees must also be binary search trees.</li>
</ul>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2020/01/30/sample_1_1709.png" style="width: 320px; height: 250px;"></p>

<pre><strong>Input:</strong> root = [1,4,3,2,4,2,5,null,null,null,null,null,null,4,6]
<strong>Output:</strong> 20
<strong>Explanation:</strong> Maximum sum in a valid Binary search tree is obtained in root node with key equal to 3.
</pre>

<p><strong>Example 2:</strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2020/01/30/sample_2_1709.png" style="width: 134px; height: 180px;"></p>

<pre><strong>Input:</strong> root = [4,3,null,1,2]
<strong>Output:</strong> 2
<strong>Explanation:</strong> Maximum sum in a valid Binary search tree is obtained in a single root node with key equal to 2.
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> root = [-4,-2,-5]
<strong>Output:</strong> 0
<strong>Explanation:</strong> All values are negatives. Return an empty BST.
</pre>

<p><strong>Example 4:</strong></p>

<pre><strong>Input:</strong> root = [2,1,3]
<strong>Output:</strong> 6
</pre>

<p><strong>Example 5:</strong></p>

<pre><strong>Input:</strong> root = [5,4,8,3,null,6,3]
<strong>Output:</strong> 7
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The&nbsp;given binary tree will have between&nbsp;<code>1</code>&nbsp;and&nbsp;<code>40000</code>&nbsp;nodes.</li>
	<li>Each node's value is between <code>[-4 * 10^4&nbsp;, 4 * 10^4]</code>.</li>
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
    int ans=0;
    
    vector<int> dfs(TreeNode* root){
        if(root==NULL){
            return {true,0,0,0};
        }
        vector<int> l(dfs(root->left));
        vector<int> r(dfs(root->right));
        if((l[0]==true && (root->left==NULL || root->val>l[3])) && (r[0]==true && (root->right==NULL || root->val<r[2]))){
            int s=root->val+l[1]+r[1];
            ans=max(ans,s);
            int mini=0,maxi=0;
            if(root->left==NULL)
                mini=root->val;
            else
                mini=l[2];
            if(root->right==NULL)
                maxi=root->val;
            else
                maxi=r[3];
            return {true,s,mini,maxi};
        }
        return {false,0,0,0};  
    }
    int maxSumBST(TreeNode* root) {
        ans=0;
        dfs(root);
        return ans;
    }
};
```
