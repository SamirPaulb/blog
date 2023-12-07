---
title: target sum
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, target-sum solution
description: target sum LeetCode Solution Explained
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


<h2>494. Target Sum</h2><h3>Medium</h3><hr><div><p>You are given a list of non-negative integers, a1, a2, ..., an, and a target, S. Now you have 2 symbols <code>+</code> and <code>-</code>. For each integer, you should choose one from <code>+</code> and <code>-</code> as its new symbol.</p>

<p>Find out how many ways to assign symbols to make sum of integers equal to target S.</p>

<p><b>Example 1:</b></p>

<pre><b>Input:</b> nums is [1, 1, 1, 1, 1], S is 3. 
<b>Output:</b> 5
<b>Explanation:</b> 

-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3

There are 5 ways to assign symbols to make the sum of nums be target 3.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The length of the given array is positive and will not exceed 20.</li>
	<li>The sum of elements in the given array will not exceed 1000.</li>
	<li>Your output answer is guaranteed to be fitted in a 32-bit integer.</li>
</ul>
</div>

---




```cpp
class Solution {
public:
    int ans=0;
    
    void backtrack(int i, vector<int>& nums, long long sum, int S){
        if(i==nums.size()){
            if(S==sum)
            ans++;
        }
        else{
            backtrack(i+1, nums, sum+nums[i], S);
            backtrack(i+1, nums, sum-nums[i], S);
        }
    }
    
    int findTargetSumWays(vector<int>& nums, int S) {
        backtrack(0, nums, 0, S);
        return ans;
    }
};
```
