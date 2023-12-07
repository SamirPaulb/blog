---
title: subarray product less than k
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, subarray-product-less-than-k solution
description: subarray product less than k LeetCode Solution Explained
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


[Discussion Post (created on 16/0/2021 at 11:52)](https://leetcode.com/problems/subarray-product-less-than-k/discuss/1019124/Sliding-Window-or-C%2B%2B)  
<h2>713. Subarray Product Less Than K</h2><h3>Medium</h3><hr><div><p>Your are given an array of positive integers <code>nums</code>.</p>
<p>Count and print the number of (contiguous) subarrays where the product of all the elements in the subarray is less than <code>k</code>.</p>

<p><b>Example 1:</b><br>
</p><pre><b>Input:</b> nums = [10, 5, 2, 6], k = 100
<b>Output:</b> 8
<b>Explanation:</b> The 8 subarrays that have product less than 100 are: [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6].
Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
</pre>
<p></p>

<p><b>Note:</b>
</p><li><code>0 &lt; nums.length &lt;= 50000</code>.</li>
<li><code>0 &lt; nums[i] &lt; 1000</code>.</li>
<li><code>0 &lt;= k &lt; 10^6</code>.</li>
<p></p></div>

---




```cpp
class Solution {
public:
    int numSubarrayProductLessThanK(vector<int>& nums, int k) {
        if(k<=1)
            return 0;
        int p=1,ans=0,l=0,r=0,n=nums.size();
        for(r=0;r<n;r++){
            p*=nums[r];
            while(p>=k)
                p=p/nums[l++];
            ans+=r-l+1;
        }
        return ans;
    }
};

```
