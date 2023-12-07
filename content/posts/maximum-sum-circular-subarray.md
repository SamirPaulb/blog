---
title: maximum sum circular subarray
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, maximum-sum-circular-subarray solution
description: maximum sum circular subarray LeetCode Solution Explained
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


<h2>918. Maximum Sum Circular Subarray</h2><h3>Medium</h3><hr><div><p>Given a <strong>circular integer array</strong> <code>nums</code> of length <code>n</code>, return <em>the maximum possible sum of a non-empty <strong>subarray</strong> of </em><code>nums</code>.</p>

<p>A <strong>circular array</strong> means the end of the array connects to the beginning of the array. Formally, the next element of <code>nums[i]</code> is <code>nums[(i + 1) % n]</code> and the previous element of <code>nums[i]</code> is <code>nums[(i - 1 + n) % n]</code>.</p>

<p>A <strong>subarray</strong> may only include each element of the fixed buffer <code>nums</code> at most once. Formally, for a subarray <code>nums[i], nums[i + 1], ..., nums[j]</code>, there does not exist <code>i &lt;= k1</code>, <code>k2 &lt;= j</code> with <code>k1 % n == k2 % n</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [1,-2,3,-2]
<strong>Output:</strong> 3
<strong>Explanation:</strong> Subarray [3] has maximum sum 3
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [5,-3,5]
<strong>Output:</strong> 10
<strong>Explanation:</strong> Subarray [5,5] has maximum sum 5 + 5 = 10
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> nums = [3,-1,2,-1]
<strong>Output:</strong> 4
<strong>Explanation:</strong> Subarray [2,-1,3] has maximum sum 2 + (-1) + 3 = 4
</pre>

<p><strong>Example 4:</strong></p>

<pre><strong>Input:</strong> nums = [3,-2,2,-3]
<strong>Output:</strong> 3
<strong>Explanation:</strong> Subarray [3] and [3,-2,2] both have maximum sum 3
</pre>

<p><strong>Example 5:</strong></p>

<pre><strong>Input:</strong> nums = [-2,-3,-1]
<strong>Output:</strong> -1
<strong>Explanation:</strong> Subarray [-1] has maximum sum -1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == nums.length</code></li>
	<li><code>1 &lt;= n &lt;= 3 * 10<sup>4</sup></code></li>
	<li><code>-3 * 10<sup>4</sup> &lt;= nums[i] &lt;= 3 * 10<sup>4</sup></code></li>
</ul>
</div>

---




```cpp
class Solution {
public:
    int kadane(vector<int>& a){
        int n=a.size();
        int maxsf=a[0], ans=a[0];
        for(int i=1;i<n;i++){
            maxsf=max(maxsf+a[i], a[i]);
            ans=max(ans, maxsf);
        }
        return ans;
    }
    
    int maxSubarraySumCircular(vector<int>& a) {
        int n=a.size();
        // now find maximum subarray sum with window size<=n but it would be too hard
        // find minimum subarray sum and subtract it from total sum
        // for finding min subarray sum, make all values -ve and find max subarray sum
        int s=0;
        int q=kadane(a);
        if(q<0)
            return q;
        for(int i=0;i<n;i++)
            s+=a[i];
        for(int i=0;i<n;i++)
            a[i]=-a[i];
        int p=kadane(a); //-ve wala 
        return max(q, s+p);
    }
};
```
