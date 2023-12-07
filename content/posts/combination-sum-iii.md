---
title: combination sum iii
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, combination-sum-iii solution
description: combination sum iii LeetCode Solution Explained
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


<h2>216. Combination Sum III</h2><h3>Medium</h3><hr><div><p>Find all valid combinations of <code>k</code> numbers that sum up to <code>n</code> such that the following conditions are true:</p>

<ul>
	<li>Only numbers <code>1</code> through <code>9</code> are used.</li>
	<li>Each number is used <strong>at most once</strong>.</li>
</ul>

<p>Return <em>a list of all possible valid combinations</em>. The list must not contain the same combination twice, and the combinations may be returned in any order.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> k = 3, n = 7
<strong>Output:</strong> [[1,2,4]]
<strong>Explanation:</strong>
1 + 2 + 4 = 7
There are no other valid combinations.</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> k = 3, n = 9
<strong>Output:</strong> [[1,2,6],[1,3,5],[2,3,4]]
<strong>Explanation:</strong>
1 + 2 + 6 = 9
1 + 3 + 5 = 9
2 + 3 + 4 = 9
There are no other valid combinations.
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> k = 4, n = 1
<strong>Output:</strong> []
<strong>Explanation:</strong> There are no valid combinations. [1,2,1] is not valid because 1 is used twice.
</pre>

<p><strong>Example 4:</strong></p>

<pre><strong>Input:</strong> k = 3, n = 2
<strong>Output:</strong> []
<strong>Explanation:</strong> There are no valid combinations.
</pre>

<p><strong>Example 5:</strong></p>

<pre><strong>Input:</strong> k = 9, n = 45
<strong>Output:</strong> [[1,2,3,4,5,6,7,8,9]]
<strong>Explanation:</strong>
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45
​​​​​​​There are no other valid combinations.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= k &lt;= 9</code></li>
	<li><code>1 &lt;= n &lt;= 60</code></li>
</ul>
</div>

---




```cpp
class Solution {
public:
    
    void backtrack(vector<vector<int>> &ans,vector<int> &t, int j, int k, int n){
        if(n==0 && t.size()==k){
            ans.push_back(t);
            return;
        }
        
        for(int i=j;i<=9;i++){
                t.push_back(i);
                backtrack(ans,t,i+1,k,n-i);
                t.pop_back();
            }
        
        
    }
    
    vector<vector<int>> combinationSum3(int k, int n) {
        vector<vector<int>> ans;
        vector<int> t;
        backtrack(ans, t, 1, k,n);
        return ans;
    }
};

```
