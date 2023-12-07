---
title: permutations ii
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, permutations-ii solution
description: permutations ii LeetCode Solution Explained
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


[Discussion Post (created on 19/0/2021 at 20:57)](https://leetcode.com/problems/permutations-ii/discuss/1024681/Shortest-Solution-C%2B%2B)  
<h2>47. Permutations II</h2><h3>Medium</h3><hr><div><p>Given a collection of numbers, <code>nums</code>,&nbsp;that might contain duplicates, return <em>all possible unique permutations <strong>in any order</strong>.</em></p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [1,1,2]
<strong>Output:</strong>
[[1,1,2],
 [1,2,1],
 [2,1,1]]
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [1,2,3]
<strong>Output:</strong> [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 8</code></li>
	<li><code>-10 &lt;= nums[i] &lt;= 10</code></li>
</ul>
</div>

---




```cpp
class Solution {
public:
     bool visit[9];
     void backtrack(set<vector<int>> &t,vector<int> &ans, vector<int>& nums){
       if(ans.size()==nums.size()){
          t.insert(ans);
           return;
       }
       
      for(int i=0;i<nums.size();i++){
           if(visit[i] || (i>0 && nums[i] == nums[i-1] && visit[i-1] == false))
                continue;
               ans.push_back(nums[i]);
               visit[i]=true;
               backtrack(t, ans, nums);
               ans.pop_back();
               visit[i]=false;
           }
       
       
   }
    
    vector<vector<int>> permuteUnique(vector<int>& nums) {
      sort(nums.begin(),nums.end());
       set<vector<int>> t;
       vector<int> ans;
        vector<vector<int>> v;
       backtrack(t, ans, nums);
       for(auto it: t)
           v.push_back(it);
       return v; 
    }
};
```
