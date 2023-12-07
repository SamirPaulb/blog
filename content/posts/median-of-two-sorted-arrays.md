---
title: median of two sorted arrays
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, median-of-two-sorted-arrays solution
description: median of two sorted arrays LeetCode Solution Explained
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


<h2>4. Median of Two Sorted Arrays</h2><h3>Hard</h3><hr><div><p>Given two sorted arrays <code>nums1</code> and <code>nums2</code> of size <code>m</code> and <code>n</code> respectively, return <strong>the median</strong> of the two sorted arrays.</p>

<p><strong>Follow up:</strong> The overall run time complexity should be <code>O(log (m+n))</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> nums1 = [1,3], nums2 = [2]
<strong>Output:</strong> 2.00000
<strong>Explanation:</strong> merged array = [1,2,3] and median is 2.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> nums1 = [1,2], nums2 = [3,4]
<strong>Output:</strong> 2.50000
<strong>Explanation:</strong> merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> nums1 = [0,0], nums2 = [0,0]
<strong>Output:</strong> 0.00000
</pre>

<p><strong>Example 4:</strong></p>

<pre><strong>Input:</strong> nums1 = [], nums2 = [1]
<strong>Output:</strong> 1.00000
</pre>

<p><strong>Example 5:</strong></p>

<pre><strong>Input:</strong> nums1 = [2], nums2 = []
<strong>Output:</strong> 2.00000
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>nums1.length == m</code></li>
	<li><code>nums2.length == n</code></li>
	<li><code>0 &lt;= m &lt;= 1000</code></li>
	<li><code>0 &lt;= n &lt;= 1000</code></li>
	<li><code>1 &lt;= m + n &lt;= 2000</code></li>
	<li><code>-10<sup>6</sup> &lt;= nums1[i], nums2[i] &lt;= 10<sup>6</sup></code></li>
</ul>
</div>

---




```cpp
class Solution {
public:
    double mediann(vector<int>&a,vector<int>&b){
        int m=a.size();
        int n=b.size();
        if(m>n)
            return mediann(b,a);
        int l=0,r=m;
        while(l<=r){
            int partx=l+(r-l)/2;
            int party=(m+n+1)/2-partx;
            int maxlx=(partx==0)?INT_MIN:a[partx-1];
            int minrx=(partx==m)?INT_MAX:a[partx];
            int maxly=(party==0)?INT_MIN:b[party-1];
            int minry=(party==n)?INT_MAX:b[party];
            if(maxlx<=minry&&maxly<=minrx){
                if((m+n)%2==0)
                    return (double)(max(maxlx,maxly)+min(minrx,minry))/2;
                else
                    return (double)(max(maxlx,maxly));
            }else if(maxlx>minry)
                r=partx-1;
            else
                l=partx+1;
        }
        return -1.0;
    }
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        double ans;
        ans=mediann(nums1,nums2);
        return ans;   
    }
};
```
