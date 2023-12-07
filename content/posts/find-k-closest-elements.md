---
title: find k closest elements
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, find-k-closest-elements solution
description: find k closest elements LeetCode Solution Explained
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


<h2>658. Find K Closest Elements</h2><h3>Medium</h3><hr><div><p>Given a <strong>sorted</strong> integer&nbsp;array <code>arr</code>, two integers <code>k</code> and <code>x</code>, return the <code>k</code> closest integers to <code>x</code> in the array. The result should also be sorted in ascending order.</p>

<p>An integer <code>a</code> is closer to <code>x</code> than an integer <code>b</code> if:</p>

<ul>
	<li><code>|a - x| &lt; |b - x|</code>, or</li>
	<li><code>|a - x| == |b - x|</code> and <code>a &lt; b</code></li>
</ul>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> arr = [1,2,3,4,5], k = 4, x = 3
<strong>Output:</strong> [1,2,3,4]
</pre><p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> arr = [1,2,3,4,5], k = 4, x = -1
<strong>Output:</strong> [1,2,3,4]
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= k &lt;= arr.length</code></li>
	<li><code>1 &lt;= arr.length&nbsp;&lt;= 10<sup>4</sup></code></li>
	<li>Absolute value of elements in the array and <code>x</code> will not exceed <code>10<sup>4</sup></code></li>
</ul>
</div>

---




```cpp
class Solution {
public:
    vector<int> findClosestElements(vector<int>& arr, int k, int x) {
        int n=arr.size();
        int l=0, r=n-1;
        int ind=-1;
        while(l<=r){
            int mid=l+(r-l)/2;
            if(arr[mid]>x)
               r=mid-1;
            else{
                ind=mid;
                l=mid+1;
            }
        }
        cout<<ind;
        l=max(ind-k,0), r=min(ind+k,n-1);
        vector<int> ans;
        int c=0;
        while(r-l>=k){
            if(abs(arr[l]-x)<=abs(arr[r]-x)){
                r--;
            }
            else{
                l++;
            }
        }
        for(int i=l;i<=r;i++)
            ans.push_back(arr[i]);
        return ans;
    }
};
```
