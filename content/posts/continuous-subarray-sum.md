---
title: continuous subarray sum
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, continuous-subarray-sum solution
description: continuous subarray sum LeetCode Solution Explained
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


[Discussion Post (created on 25/0/2021 at 1:41)](https://leetcode.com/problems/continuous-subarray-sum/discuss/1033466/Prefix-Sum-or-C%2B%2B)  
<h2>523. Continuous Subarray Sum</h2><h3>Medium</h3><hr><div><p>Given a list of <b>non-negative</b> numbers and a target <b>integer</b> k, write a function to check if the array has a continuous subarray of size at least 2 that sums up to a multiple of <b>k</b>, that is, sums up to n*k where n is also an <b>integer</b>.</p>

<p>&nbsp;</p>

<p><b>Example 1:</b></p>

<pre><b>Input:</b> [23, 2, 4, 6, 7],  k=6
<b>Output:</b> True
<b>Explanation:</b> Because [2, 4] is a continuous subarray of size 2 and sums up to 6.
</pre>

<p><b>Example 2:</b></p>

<pre><b>Input:</b> [23, 2, 6, 4, 7],  k=6
<b>Output:</b> True
<b>Explanation:</b> Because [23, 2, 6, 4, 7] is an continuous subarray of size 5 and sums up to 42.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The length of the array won't exceed 10,000.</li>
	<li>You may assume the sum of all the numbers is in the range of a signed 32-bit integer.</li>
</ul>
</div>

---




```cpp
class Solution {
public:
    bool checkSubarraySum(vector<int>& nums, int k) {
        int n=nums.size();
        int pre[n];
        pre[0]=nums[0];
        for(int i=1;i<n;i++)
            pre[i]=pre[i-1]+nums[i];
        if(k==0)
        {
           for(int i=1;i<n;i++){
               if(pre[i]==0)
                   return true;
               
                if(i>1){
                   for(int j=0;j<=i-2;j++){
                    if((pre[i]-pre[j])==0)
                        return true;
                }
              } 
           }
            return false;
        }
        for(int i=1;i<n;i++)
        {
            if(pre[i]%k==0)
                   return true;
            if(i>1){
                for(int j=0;j<=i-2;j++){
                    if((pre[i]-pre[j])%k==0)
                        return true;
                }
            }
        }
        return false;
    }
};

```
