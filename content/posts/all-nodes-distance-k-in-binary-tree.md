---
title: all nodes distance k in binary tree
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, all-nodes-distance-k-in-binary-tree solution
description: all nodes distance k in binary tree LeetCode Solution Explained
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


<h2>863. All Nodes Distance K in Binary Tree</h2><h3>Medium</h3><hr><div><p>We are given a binary tree (with root node&nbsp;<code>root</code>), a <code>target</code> node, and an integer value <code>k</code>.</p>

<p>Return a list of the values of all&nbsp;nodes that have a distance <code>k</code> from the <code>target</code> node.&nbsp; The answer can be returned in any order.</p>

<p>&nbsp;</p>

<ol>
</ol>

<div>
<p><strong>Example 1:</strong></p>

<pre><strong>Input: </strong>root = <span id="example-input-1-1">[3,5,1,6,2,0,8,null,null,7,4]</span>, target = <span id="example-input-1-2">5</span>, k = <span id="example-input-1-3">2</span>

<strong>Output: </strong><span id="example-output-1">[7,4,1]</span>

<strong>Explanation: </strong>
The nodes that are a distance 2 from the target node (with value 5)
have values 7, 4, and 1.

<img alt="" src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/06/28/sketch0.png" style="width: 280px; height: 240px;">

Note that the inputs "root" and "target" are actually TreeNodes.
The descriptions of the inputs above are just serializations of these objects.
</pre>

<p>&nbsp;</p>

<p><strong>Note:</strong></p>

<ol>
	<li>The given tree is non-empty.</li>
	<li>Each node in the tree has unique values&nbsp;<code>0 &lt;= node.val &lt;= 500</code>.</li>
	<li>The <code>target</code>&nbsp;node is a node in the tree.</li>
	<li><code>0 &lt;= k &lt;= 1000</code>.</li>
</ol>
</div>
</div>

---




```cpp
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    
    unordered_map<TreeNode*, TreeNode*> m;
    vector<int> ans;
    
    void findParent(TreeNode* root){
        if(root==NULL)
            return;
        if(root->left)
        m[root->left]=root;
        if(root->right)
        m[root->right]=root;
        
        findParent(root->left);
        findParent(root->right);
    }
    
    vector<int> distanceK(TreeNode* root, TreeNode* target, int k) {
        if(root==NULL)
            return ans;
        
        findParent(root);
        unordered_set<TreeNode*> vis;
        
        queue<TreeNode*> q;
        q.push(target);
        while(!q.empty()){
            int n=q.size();
            while(n--){
            TreeNode* curr=q.front();
            q.pop();
            vis.insert(curr);
            if(k==0){
                ans.push_back(curr->val);
            }
            if(m.count(curr)>0 && vis.count(m[curr])==0){
                q.push(m[curr]);
            }
            if(curr->left && vis.count(curr->left)==0){
                q.push(curr->left);
            }
            if(curr->right && vis.count(curr->right)==0){
                q.push(curr->right);
            }
          }
          k--;
          if(k<0)
            break;
        }
        return ans;
    }
};
```
