---
title: search in rotated sorted array ii
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, search-in-rotated-sorted-array-ii solution
description: search in rotated sorted array ii LeetCode Solution Explained
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


<h2>81. Search in Rotated Sorted Array II</h2><h3>Medium</h3><hr><div><p>You are given an integer array <code>nums</code> sorted in ascending order (not necessarily <strong>distinct</strong> values), and an integer <code>target</code>.</p>

<p>Suppose that <code>nums</code> is rotated at some pivot unknown to you beforehand (i.e., <code>[0,1,2,4,4,4,5,6,6,7]</code> might become <code>[4,5,6,6,7,0,1,2,4,4]</code>).</p>

<p><em>If <code>target</code> is found in the array return its index, otherwise, return <code>-1</code>.</em></p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [2,5,6,0,0,1,2], target = 0
<strong>Output:</strong> true
</pre><p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [2,5,6,0,0,1,2], target = 3
<strong>Output:</strong> false
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 5000</code></li>
	<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
	<li><code>nums</code> is guaranteed to be rotated at some pivot.</li>
	<li><code>-10<sup>4</sup> &lt;= target &lt;= 10<sup>4</sup></code></li>
</ul>

<p>&nbsp;</p>
<strong>Follow up: </strong>This problem is the same as <a href="/problems/search-in-rotated-sorted-array/description/" target="_blank">Search in Rotated Sorted Array</a>, where <code>nums</code> may contain <strong>duplicates</strong>. Would this affect the run-time complexity? How and why?</div>

---




```cpp
class Solution {
public:
    bool search(vector<int>& nums, int target) {
        int n=nums.size();
        if(n==1) 
            return (nums[0]==target);
        int l=0, r=n-1; 
        while(l<=r){
            while(r>l && nums[r]==nums[l])
                r--;
            int mid=(r+l)/2;
            if(nums[mid]==target)
                return true;
            else if(nums[l]<=nums[mid]){
                if(nums[l]<=target && target<nums[mid]) 
                    r=mid-1;
                else 
                    l=mid+1;
            }
            else{
                if(nums[mid]<target && target<=nums[r]) 
                    l=mid+1;
                else 
                    r=mid-1;
            }
        }
        return false;
    }
};

```
