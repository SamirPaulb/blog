---
title: 2017 minimum number of flips to make the binary string alternating
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 2017-minimum-number-of-flips-to-make-the-binary-string-alternating solution
description: 2017 minimum number of flips to make the binary string alternating LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating">2017. Minimum Number of Flips to Make the Binary String Alternating</a></h2><h3>Medium</h3><hr><p>You are given a binary string <code>s</code>. You are allowed to perform two types of operations on the string in any sequence:</p>

<ul>
	<li><strong>Type-1: Remove</strong> the character at the start of the string <code>s</code> and <strong>append</strong> it to the end of the string.</li>
	<li><strong>Type-2: Pick</strong> any character in <code>s</code> and <strong>flip</strong> its value, i.e., if its value is <code>&#39;0&#39;</code> it becomes <code>&#39;1&#39;</code> and vice-versa.</li>
</ul>

<p>Return <em>the <strong>minimum</strong> number of <strong>type-2</strong> operations you need to perform</em> <em>such that </em><code>s</code> <em>becomes <strong>alternating</strong>.</em></p>

<p>The string is called <strong>alternating</strong> if no two adjacent characters are equal.</p>

<ul>
	<li>For example, the strings <code>&quot;010&quot;</code> and <code>&quot;1010&quot;</code> are alternating, while the string <code>&quot;0100&quot;</code> is not.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;111000&quot;
<strong>Output:</strong> 2
<strong>Explanation</strong>: Use the first operation two times to make s = &quot;100011&quot;.
Then, use the second operation on the third and sixth elements to make s = &quot;10<u>1</u>01<u>0</u>&quot;.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;010&quot;
<strong>Output:</strong> 0
<strong>Explanation</strong>: The string is already alternating.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;1110&quot;
<strong>Output:</strong> 1
<strong>Explanation</strong>: Use the second operation on the second element to make s = &quot;1<u>0</u>10&quot;.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
	<li><code>s[i]</code> is either <code>&#39;0&#39;</code> or <code>&#39;1&#39;</code>.</li>
</ul>


---




```python
class Solution:
    def minFlips(self, s: str) -> int:
        n = len(s)
        s += s
        alt1, alt2 = "", ""
        
        for i in range(len(s)):
            alt1 += '1' if i%2 else '0'
            alt2 += '0' if i%2 else '1'
        
        diff1 = diff2 = 0
        for i in range(n):
            if s[i] != alt1[i]: diff1 += 1
            if s[i] != alt2[i]: diff2 += 1
        
        l = 0
        res = min(diff1, diff2)
        for r in range(n, len(s)):
            if s[r] != alt1[r]: diff1 += 1
            if s[r] != alt2[r]: diff2 += 1
            if s[l] != alt1[l]: diff1 -= 1
            if s[l] != alt2[l]: diff2 -= 1
            l += 1
            res = min(res, diff1, diff2)
        
        return res
```
