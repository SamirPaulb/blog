---
title: find the smallest divisor given a threshold
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, find-the-smallest-divisor-given-a-threshold solution
description: find the smallest divisor given a threshold LeetCode Solution Explained
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


<h2>1283. Find the Smallest Divisor Given a Threshold</h2><h3>Medium</h3><hr><div><p>Given an array of integers <code>nums</code> and an integer <code>threshold</code>, we will choose a positive integer <code>divisor</code>, divide all the array by it, and sum the division's result. Find the <strong>smallest</strong> <code>divisor</code> such that the result mentioned above is less than or equal to <code>threshold</code>.</p>

<p>Each result of the division is rounded to the nearest integer greater than or equal to that element. (For example: <code>7/3 = 3</code> and <code>10/2 = 5</code>).</p>

<p>It is guaranteed that there will be an answer.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [1,2,5,9], threshold = 6
<strong>Output:</strong> 5
<strong>Explanation:</strong> We can get a sum to 17 (1+2+5+9) if the divisor is 1. 
If the divisor is 4 we can get a sum of 7 (1+1+2+3) and if the divisor is 5 the sum will be 5 (1+1+1+2). 
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [44,22,33,11,1], threshold = 5
<strong>Output:</strong> 44
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> nums = [21212,10101,12121], threshold = 1000000
<strong>Output:</strong> 1
</pre>

<p><strong>Example 4:</strong></p>

<pre><strong>Input:</strong> nums = [2,3,5,7,11], threshold = 11
<strong>Output:</strong> 3
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>6</sup></code></li>
	<li><code>nums.length &lt;= threshold &lt;= 10<sup>6</sup></code></li>
</ul>
</div>

---




```cpp
class Solution {
public:
    
    bool isValid(vector<int>& nums, int t, int mid){
        int ans=0;
        for(int i=0;i<nums.size();i++){
            int x=nums[i]/mid;
            int y=nums[i]%mid;
            if(y>0)
                x++;
            ans+=x;
        }
        if(ans<=t)
            return true;
        return false;
    }
    
    int smallestDivisor(vector<int>& nums, int threshold) {
        int l=1;
        int r=1;
        for(int i=0;i<nums.size();i++)
            r=max(r,nums[i]);
        while(l<r){
            int mid=l+(r-l)/2;
            if(isValid(nums,threshold,mid)){
                r=mid;
            }
            else
                l=mid+1;
        }
        return l;
    }
};

```
