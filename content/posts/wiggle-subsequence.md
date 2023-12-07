---
title: wiggle subsequence
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, wiggle-subsequence solution
description: wiggle subsequence LeetCode Solution Explained
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


[Discussion Post (created on 1/1/2021 at 15:37)](https://leetcode.com/problems/wiggle-subsequence/discuss/1044893/Greedy-or-C%2B%2B)  
<h2>376. Wiggle Subsequence</h2><h3>Medium</h3><hr><div><p>A sequence of numbers is called a <strong>wiggle sequence</strong> if the differences between successive numbers strictly alternate between positive and negative. The first difference (if one exists) may be either positive or negative. A sequence with fewer than two elements is trivially a wiggle sequence.</p>

<p>For example, <code>[1,7,4,9,2,5]</code> is a wiggle sequence because the differences <code>(6,-3,5,-7,3)</code> are alternately positive and negative. In contrast, <code>[1,4,7,2,5]</code> and <code>[1,7,4,5,5]</code> are not wiggle sequences, the first because its first two differences are positive and the second because its last difference is zero.</p>

<p>Given a sequence of integers, return the length of the longest subsequence that is a wiggle sequence. A subsequence is obtained by deleting some number of elements (eventually, also zero) from the original sequence, leaving the remaining elements in their original order.</p>

<p><strong>Example 1:</strong></p>

<pre><strong>Input: </strong><span id="example-input-1-1">[1,7,4,9,2,5]</span>
<strong>Output: </strong><span id="example-output-1">6
<strong>Explanation:</strong> </span>The entire sequence is a wiggle sequence.</pre>

<div>
<p><strong>Example 2:</strong></p>

<pre><strong>Input: </strong><span id="example-input-2-1">[1,17,5,10,13,15,10,5,16,8]</span>
<strong>Output: </strong><span id="example-output-2">7
</span><span id="example-output-1"><strong>Explanation: </strong></span>There are several subsequences that achieve this length. One is [1,17,10,13,10,16,8].</pre>

<div>
<p><strong>Example 3:</strong></p>

<pre><strong>Input: </strong><span id="example-input-3-1">[1,2,3,4,5,6,7,8,9]</span>
<strong>Output: </strong><span id="example-output-3">2</span></pre>

<p><b>Follow up:</b><br>
Can you do it in O(<i>n</i>) time?</p>
</div>
</div>
</div>

---




```cpp
class Solution {
public:
    int wiggleMaxLength(vector<int>& nums) {
        int n=nums.size();
        if(n<2)
            return n;
        int prev=nums[1]-nums[0];
        int c=0;
        if(prev==0)
            c=1;
        else
            c=2;
        for(int i=2;i<n;i++){
            int next=nums[i]-nums[i-1];
            if((next>0 && prev<=0) || (next<0 && prev>=0))
            {
                c++;
                prev=next;
            }
        }
        return c;
    }
};
```
