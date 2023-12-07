---
title: circular array loop
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, circular-array-loop solution
description: circular array loop LeetCode Solution Explained
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


[Discussion Post (created on 22/0/2021 at 22:59)](https://leetcode.com/problems/circular-array-loop/discuss/1029672/Fast-and-Slow-Pointer-or-C%2B%2B)  
<h2>457. Circular Array Loop</h2><h3>Medium</h3><hr><div><p>You are given a <b>circular</b> array <code>nums</code> of positive and negative integers. If a number <i>k</i> at an index is positive, then move forward <i>k</i> steps. Conversely, if it's negative (-<i>k</i>), move backward <i>k</i>&nbsp;steps. Since the array is circular, you may assume that the last element's next element is the first element, and the first element's previous element is the last element.</p>

<p>Determine if there is a loop (or a cycle) in <code>nums</code>. A cycle must start and end at the same index and the cycle's length &gt; 1. Furthermore, movements in a cycle must all follow a single direction. In other words, a cycle must not consist of both forward and backward movements.</p>

<p>&nbsp;</p>

<p><b>Example 1:</b></p>

<pre><b>Input:</b> [2,-1,1,2,2]
<b>Output:</b> true
<b>Explanation:</b> There is a cycle, from index 0 -&gt; 2 -&gt; 3 -&gt; 0. The cycle's length is 3.
</pre>

<p><b>Example 2:</b></p>

<pre><b>Input:</b> [-1,2]
<b>Output:</b> false
<b>Explanation:</b> The movement from index 1 -&gt; 1 -&gt; 1 ... is not a cycle, because the cycle's length is 1. By definition the cycle's length must be greater than 1.
</pre>

<p><b>Example 3:</b></p>

<pre><b>Input:</b> [-2,1,-1,-2,-2]
<b>Output:</b> false
<b>Explanation:</b> The movement from index 1 -&gt; 2 -&gt; 1 -&gt; ... is not a cycle, because movement from index 1 -&gt; 2 is a forward movement, but movement from index 2 -&gt; 1 is a backward movement. All movements in a cycle must follow a single direction.</pre>

<p>&nbsp;</p>

<p><b>Note:</b></p>

<ol>
	<li>-1000 ≤&nbsp;nums[i] ≤&nbsp;1000</li>
	<li>nums[i] ≠&nbsp;0</li>
	<li>1 ≤&nbsp;nums.length ≤ 5000</li>
</ol>

<p>&nbsp;</p>

<p><b>Follow up:</b></p>

<p>Could you solve it in <b>O(n)</b> time complexity and&nbsp;<strong>O(1)</strong> extra space complexity?</p></div>

---




```cpp
class Solution {
public:
    
    int next(vector<int>& nums, int idx, bool dir){
        bool x=(nums[idx]>=0);
        if(x!=dir)
            return INT_MIN;
        int n=nums.size();
        int v=(idx+nums[idx])%n;
        if(v<0){
           v=v+nums.size();
        }
        if(v==idx)
            return INT_MIN;
        return v;
    }
    
    bool circularArrayLoop(vector<int>& nums) {
        int n=nums.size();
        if(nums.size()<2)
           return false;
        for(int i=0;i<n;i++){
            int slow=i,fast=i;
            bool dir=nums[i]>0;
            while(true){
                slow=next(nums,slow,dir);
                if(slow==INT_MIN)
                    break;
                fast=next(nums,fast,dir);
                if(fast==INT_MIN)
                    break;
                fast=next(nums,fast,dir);
                if(fast==INT_MIN)
                    break;
                if(slow==fast)
                    return true;
            }
        }
        return false;
    }
};

```
