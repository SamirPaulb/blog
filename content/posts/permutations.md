---
title: permutations
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, permutations solution
description: permutations LeetCode Solution Explained
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


<h2>46. Permutations</h2><h3>Medium</h3><hr><div><p>Given an array <code>nums</code> of distinct integers, return <em>all the possible permutations</em>. You can return the answer in <strong>any order</strong>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [1,2,3]
<strong>Output:</strong> [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
</pre><p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [0,1]
<strong>Output:</strong> [[0,1],[1,0]]
</pre><p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> nums = [1]
<strong>Output:</strong> [[1]]
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 6</code></li>
	<li><code>-10 &lt;= nums[i] &lt;= 10</code></li>
	<li>All the integers of <code>nums</code> are <strong>unique</strong>.</li>
</ul>
</div>

---




```cpp
class Solution {
public:
    
    
   void backtrack(vector<vector<int>> &t,vector<int> &ans, vector<int>& nums){
       if(ans.size()==nums.size())
           t.push_back(ans);
       
      for(int i=0;i<nums.size();i++){
           if(find(ans.begin(),ans.end(),nums[i]) == ans.end()){
               ans.push_back(nums[i]);
               backtrack(t, ans, nums);
               ans.pop_back();
           }
       }
       
   }
    
    vector<vector<int>> permute(vector<int>& nums) {
       vector<vector<int>> t;
       vector<int> ans;
       backtrack(t, ans, nums);
       return t;
    }
};

```
