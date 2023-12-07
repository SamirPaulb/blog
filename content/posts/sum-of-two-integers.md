---
title: sum of two integers
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, sum-of-two-integers solution
description: sum of two integers LeetCode Solution Explained
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


<h2>371. Sum of Two Integers</h2><h3>Medium</h3><hr><div><p>Calculate the sum of two integers <i>a</i> and <i>b</i>, but you are <b>not allowed</b> to use the operator <code>+</code> and <code>-</code>.</p>

<div>
<p><strong>Example 1:</strong></p>

<pre><strong>Input: </strong>a = <span id="example-input-1-1">1</span>, b = <span id="example-input-1-2">2</span>
<strong>Output: </strong><span id="example-output-1">3</span>
</pre>

<div>
<p><strong>Example 2:</strong></p>

<pre><strong>Input: </strong>a = -<span id="example-input-2-1">2</span>, b = <span id="example-input-2-2">3</span>
<strong>Output: </strong>1
</pre>
</div>
</div>
</div>

---




```cpp
class Solution {
public:
    int getSum(int a, int b) {
        unsigned int carry=a&b;
        unsigned int sum=a^b;
        if(carry==0)
            return sum;
        carry<<=1;
        return getSum(sum, carry);
    }
};
```
