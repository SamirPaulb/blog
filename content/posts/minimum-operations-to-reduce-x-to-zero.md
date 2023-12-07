---
title: minimum operations to reduce x to zero
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, minimum-operations-to-reduce-x-to-zero solution
description: minimum operations to reduce x to zero LeetCode Solution Explained
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


<h2>1658. Minimum Operations to Reduce X to Zero</h2><h3>Medium</h3><hr><div><p>You are given an integer array <code>nums</code> and an integer <code>x</code>. In one operation, you can either remove the leftmost or the rightmost element from the array <code>nums</code> and subtract its value from <code>x</code>. Note that this <strong>modifies</strong> the array for future operations.</p>

<p>Return <em>the <strong>minimum number</strong> of operations to reduce </em><code>x</code> <em>to <strong>exactly</strong></em> <code>0</code> <em>if it is possible</em><em>, otherwise, return </em><code>-1</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [1,1,4,2,3], x = 5
<strong>Output:</strong> 2
<strong>Explanation:</strong> The optimal solution is to remove the last two elements to reduce x to zero.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [5,6,7,8,9], x = 4
<strong>Output:</strong> -1
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> nums = [3,2,20,1,1,3], x = 10
<strong>Output:</strong> 5
<strong>Explanation:</strong> The optimal solution is to remove the last three elements and the first two elements (5 operations in total) to reduce x to zero.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
	<li><code>1 &lt;= x &lt;= 10<sup>9</sup></code></li>
</ul>
</div>

---




```cpp
class Solution {
public:
    int minOperations(vector<int>& nums, int x) {
        int n=nums.size();
        int ans=-1;
        unordered_map<int, int> m;
        m[0]=-1;
        int sum=0;
        for(int i=0;i<n && sum<x;i++){
            sum+=nums[i];
            m[sum]=i;
        }
        if(m[sum]==n-1){
            if(sum==x)
                return m[sum]+1;
            return -1;
        }
        if(sum==x)
            ans=m[sum]+1;
        sum=0;
        for(int i=n-1;i>=0;i--){
            sum+=nums[i];
            if(m.find(x-sum)!=m.end())
            {
                if(ans!=-1){
                    ans=min(ans, m[x-sum]+1+n-i);
                }
                else
                    ans=min(n, m[x-sum]+1+n-i);
            }
        }
        return ans;
    }
};
```
