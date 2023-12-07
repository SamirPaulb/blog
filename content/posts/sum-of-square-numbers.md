---
title: sum of square numbers
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, sum-of-square-numbers solution
description: sum of square numbers LeetCode Solution Explained
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


<h2>633. Sum of Square Numbers</h2><h3>Medium</h3><hr><div><p>Given a non-negative integer <code>c</code>, decide whether there're two integers <code>a</code> and <code>b</code> such that <code>a<sup>2</sup> + b<sup>2</sup> = c</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> c = 5
<strong>Output:</strong> true
<strong>Explanation:</strong> 1 * 1 + 2 * 2 = 5
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> c = 3
<strong>Output:</strong> false
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> c = 4
<strong>Output:</strong> true
</pre>

<p><strong>Example 4:</strong></p>

<pre><strong>Input:</strong> c = 2
<strong>Output:</strong> true
</pre>

<p><strong>Example 5:</strong></p>

<pre><strong>Input:</strong> c = 1
<strong>Output:</strong> true
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= c &lt;= 2<sup>31</sup> - 1</code></li>
</ul>
</div>

---




```cpp
class Solution {
public:
    
    bool bs(long long s, long long e, int n){
        if(s>e)
            return false;
        long long mid=s+(e-s)/2;
        if(mid*mid==n)
            return true;
        if(mid*mid>n)
            return bs(s,mid-1, n);
        return bs(mid+1, e, n);
    }
    
    bool judgeSquareSum(int c) {
        for(long long a=0;a*a<=c;a++){
            int b=c-a*a;
            if(bs(0, b, b))
                return true;
        }
        return false;
    }
};
```
