---
title: sliding window maximum
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, sliding-window-maximum solution
description: sliding window maximum LeetCode Solution Explained
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


[Discussion Post (created on 2/2/2021 at 16:47)](https://leetcode.com/problems/sliding-window-maximum/discuss/1089707/Easy-Sliding-Window-or-C%2B%2B)  
<h2>239. Sliding Window Maximum</h2><h3>Hard</h3><hr><div><p>You are given an array of integers&nbsp;<code>nums</code>, there is a sliding window of size <code>k</code> which is moving from the very left of the array to the very right. You can only see the <code>k</code> numbers in the window. Each time the sliding window moves right by one position.</p>

<p>Return <em>the max sliding window</em>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [1,3,-1,-3,5,3,6,7], k = 3
<strong>Output:</strong> [3,3,5,5,6,7]
<strong>Explanation:</strong> 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       <strong>3</strong>
 1 [3  -1  -3] 5  3  6  7       <strong>3</strong>
 1  3 [-1  -3  5] 3  6  7      <strong> 5</strong>
 1  3  -1 [-3  5  3] 6  7       <strong>5</strong>
 1  3  -1  -3 [5  3  6] 7       <strong>6</strong>
 1  3  -1  -3  5 [3  6  7]      <strong>7</strong>
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [1], k = 1
<strong>Output:</strong> [1]
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> nums = [1,-1], k = 1
<strong>Output:</strong> [1,-1]
</pre>

<p><strong>Example 4:</strong></p>

<pre><strong>Input:</strong> nums = [9,11], k = 2
<strong>Output:</strong> [11]
</pre>

<p><strong>Example 5:</strong></p>

<pre><strong>Input:</strong> nums = [4,-2], k = 2
<strong>Output:</strong> [4]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
	<li><code>1 &lt;= k &lt;= nums.length</code></li>
</ul>
</div>

---




```cpp
class Solution {
public:
    vector<int> maxSlidingWindow(vector<int>& nums, int k) {
        vector<int> ans;
        deque<int> q;
        int n=nums.size();
        if(k>=n){
            int maxi=*max_element(nums.begin(),nums.end());
            ans.push_back(maxi);
            return ans;
        }
        int i=0,j=0;
        while(j<n){
            while(!q.empty() && q.back()<nums[j])
                q.pop_back();
            q.push_back(nums[j]);
            if(j-i+1<k)
                j++;
            else if(j-i+1==k){
                ans.push_back(q.front());
                if(nums[i]==q.front())
                    q.pop_front();
                i++;
                j++;
            }
        }
        return ans;
    }
};
```
