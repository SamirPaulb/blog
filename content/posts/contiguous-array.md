---
title: contiguous array
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, contiguous-array solution
description: contiguous array LeetCode Solution Explained
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


<h2>525. Contiguous Array</h2><h3>Medium</h3><hr><div><p>Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1. </p>


<p><b>Example 1:</b><br>
</p><pre><b>Input:</b> [0,1]
<b>Output:</b> 2
<b>Explanation:</b> [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
</pre>
<p></p>

<p><b>Example 2:</b><br>
</p><pre><b>Input:</b> [0,1,0]
<b>Output:</b> 2
<b>Explanation:</b> [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
</pre>
<p></p>

<p><b>Note:</b>
The length of the given binary array will not exceed 50,000.
</p></div>

---




```cpp
class Solution {
public:
    int findMaxLength(vector<int>& nums) {
        unordered_map<int,int> m;
        int s=0;
        int l=0;
        for(int i=0;i<nums.size();i++){
            if(nums[i]==0)
                s+=-1;
            else
                s+=1;
            if(s==0)
                l=i+1;
            if(m.find(s)!=m.end())
                l=max(i-m[s], l);
            else
                m[s]=i;
        }
        return l;
    }
};
```
