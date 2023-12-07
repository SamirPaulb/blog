---
title: check if a string can break another string
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, check-if-a-string-can-break-another-string solution
description: check if a string can break another string LeetCode Solution Explained
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


<h2>1433. Check If a String Can Break Another String</h2><h3>Medium</h3><hr><div><p>Given two strings: <code>s1</code> and <code>s2</code> with the same&nbsp;size, check if some&nbsp;permutation of string <code>s1</code> can break&nbsp;some&nbsp;permutation of string <code>s2</code> or vice-versa. In other words <code>s2</code> can break <code>s1</code>&nbsp;or vice-versa.</p>

<p>A string <code>x</code>&nbsp;can break&nbsp;string <code>y</code>&nbsp;(both of size <code>n</code>) if <code>x[i] &gt;= y[i]</code>&nbsp;(in alphabetical order)&nbsp;for all <code>i</code>&nbsp;between <code>0</code> and <code>n-1</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> s1 = "abc", s2 = "xya"
<strong>Output:</strong> true
<strong>Explanation:</strong> "ayx" is a permutation of s2="xya" which can break to string "abc" which is a permutation of s1="abc".
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> s1 = "abe", s2 = "acd"
<strong>Output:</strong> false 
<strong>Explanation:</strong> All permutations for s1="abe" are: "abe", "aeb", "bae", "bea", "eab" and "eba" and all permutation for s2="acd" are: "acd", "adc", "cad", "cda", "dac" and "dca". However, there is not any permutation from s1 which can break some permutation from s2 and vice-versa.
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> s1 = "leetcodee", s2 = "interview"
<strong>Output:</strong> true
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>s1.length == n</code></li>
	<li><code>s2.length == n</code></li>
	<li><code>1 &lt;= n &lt;= 10^5</code></li>
	<li>All strings consist of lowercase English letters.</li>
</ul>
</div>

---




```cpp
class Solution {
public:
    bool checkIfCanBreak(string s1, string s2) {
        sort(s1.begin(), s1.end());
        sort(s2.begin(), s2.end());
        bool b1=true, b2=true;
        for(int i=0;i<s1.size();i++){
            if(s1[i]<s2[i])
                b1=false;
            if(s2[i]<s1[i])
                b2=false;
        }
        if(b1||b2)
            return true;
        return false;
    }
};
```
