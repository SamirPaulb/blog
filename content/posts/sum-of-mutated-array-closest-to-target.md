---
title: sum of mutated array closest to target
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, sum-of-mutated-array-closest-to-target solution
description: sum of mutated array closest to target LeetCode Solution Explained
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


<h2>1300. Sum of Mutated Array Closest to Target</h2><h3>Medium</h3><hr><div><p>Given an integer array&nbsp;<code>arr</code> and a target value <code>target</code>, return&nbsp;the integer&nbsp;<code>value</code>&nbsp;such that when we change all the integers&nbsp;larger than <code>value</code>&nbsp;in the given array to be equal to&nbsp;<code>value</code>,&nbsp;the sum of the array gets&nbsp;as close as possible (in absolute difference) to&nbsp;<code>target</code>.</p>

<p>In case of a tie, return the minimum such integer.</p>

<p>Notice that the answer is not neccesarilly a number from <code>arr</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> arr = [4,9,3], target = 10
<strong>Output:</strong> 3
<strong>Explanation:</strong> When using 3 arr converts to [3, 3, 3] which sums 9 and that's the optimal answer.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> arr = [2,3,5], target = 10
<strong>Output:</strong> 5
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> arr = [60864,25176,27249,21296,20204], target = 56803
<strong>Output:</strong> 11361
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= arr.length &lt;= 10^4</code></li>
	<li><code>1 &lt;= arr[i], target &lt;= 10^5</code></li>
</ul>
</div>

---




```cpp
class Solution {
public:
    int findBestValue(vector<int>& arr, int target) {
        int ans=0;
        int l=0;
        int r=0;
        for(int i=0;i<arr.size();i++){
            r=max(r,arr[i]);   
        }
        int d=INT_MAX;
        while(l<=r){
            int mid=l+(r-l)/2;
            int s=0;
            for(int t: arr){
                s+=t>mid?mid:t;
            }
            if(abs(s-target)<d){
                d=abs(s-target);
                ans=mid;
            }
            if(abs(s-target)==d){
                ans=min(ans,mid);
            }
            if(s>target)
                r=mid-1;
            else if(s==target)
                r--;
            else
                l=mid+1;
        }
        return ans;
    }
};

```
