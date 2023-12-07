---
title: reverse pairs
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, reverse-pairs solution
description: reverse pairs LeetCode Solution Explained
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


<h2>493. Reverse Pairs</h2><h3>Hard</h3><hr><div><p>Given an integer array <code>nums</code>, return <em>the number of <strong>reverse pairs</strong> in the array</em>.</p>

<p>A reverse pair is a pair <code>(i, j)</code> where <code>0 &lt;= i &lt; j &lt; nums.length</code> and <code>nums[i] &gt; 2 * nums[j]</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [1,3,2,3,1]
<strong>Output:</strong> 2
</pre><p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [2,4,3,5,1]
<strong>Output:</strong> 3
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>-2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1</code></li>
</ul>
</div>

---




```cpp
class Solution {
public:
    long long int merge(vector<int>& nums, vector<int>& temp, int l, int mid, int r){
        int i=l,j=mid,k=l;
        long long int ans=0;
        while(i<mid)
        {
            while(j<=r && (2LL*nums[j])<nums[i])
                j++;
            ans+=j-mid;
            i++;
        }
        i=l;
        j=mid;
        while(i<mid && j<=r){
            if(nums[i]<=nums[j]){
                temp[k]=nums[i];
                k++;
                i++;
            }
            else{
                temp[k]=nums[j];
                k++;
                j++;
            }
        }
        while(i<mid){
            temp[k]=nums[i];
            k++;
            i++;
        }
        while(j<=r){
            temp[k]=nums[j];
            k++;
            j++;
        }
        for(int i=l;i<=r;i++)
            nums[i]=temp[i];
        return ans;
    }
    long long int mergeSort(vector<int>& nums, vector<int>& temp, int st, int end){
        if(st>=end)
            return 0;
        int mid=st+(end-st)/2;
        long long int ans=0;
        ans+=mergeSort(nums, temp, st, mid);
        ans+=mergeSort(nums, temp, mid+1, end);
        
        ans+=merge(nums, temp, st, mid+1, end);
        return ans;
    }
    int reversePairs(vector<int>& nums) {
        int n=nums.size();
        vector<int> temp(n);
        return mergeSort(nums, temp, 0, n-1);
    }
};
```
