---
title: path sum iii
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, path-sum-iii solution
description: path sum iii LeetCode Solution Explained
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


<h2>437. Path Sum III</h2><h3>Medium</h3><hr><div><p>You are given a binary tree in which each node contains an integer value.</p>

<p>Find the number of paths that sum to a given value.</p>

<p>The path does not need to start or end at the root or a leaf, but it must go downwards
(traveling only from parent nodes to child nodes).</p>

<p>The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.

</p><p><b>Example:</b>
</p><pre>root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

      10
     /  \
    <b>5</b>   <b>-3</b>
   <b>/</b> <b>\</b>    <b>\</b>
  <b>3</b>   <b>2</b>   <b>11</b>
 / \   <b>\</b>
3  -2   <b>1</b>

Return 3. The paths that sum to 8 are:

1.  5 -&gt; 3
2.  5 -&gt; 2 -&gt; 1
3. -3 -&gt; 11
</pre>
<p></p></div>

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
    int solve(TreeNode* root, int cur, int& sum){
        if(!root)
            return 0;
        int cs=cur+root->val;
        return (sum==cs) + solve(root->left,cs,sum) + solve(root->right,cs,sum);
        
    }
    int pathSum(TreeNode* root, int sum) {
        if(!root)
            return 0;
        return solve(root, 0, sum) + pathSum(root->left,sum) + pathSum(root->right,sum);
    }
};
```
