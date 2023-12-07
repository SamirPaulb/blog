---
title: 1888 minimum number of flips to make the binary string alternating
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 1888-minimum-number-of-flips-to-make-the-binary-string-alternating solution
description: 1888 minimum number of flips to make the binary string alternating LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/">1888. Minimum Number of Flips to Make the Binary String Alternating</a></h2><h3>Medium</h3><hr><div><p>You are given a binary string <code>s</code>. You are allowed to perform two types of operations on the string in any sequence:</p>

<ul>
	<li><strong>Type-1: Remove</strong> the character at the start of the string <code>s</code> and <strong>append</strong> it to the end of the string.</li>
	<li><strong>Type-2: Pick</strong> any character in <code>s</code> and <strong>flip</strong> its value, i.e., if its value is <code>'0'</code> it becomes <code>'1'</code> and vice-versa.</li>
</ul>

<p>Return <em>the <strong>minimum</strong> number of <strong>type-2</strong> operations you need to perform</em> <em>such that </em><code>s</code> <em>becomes <strong>alternating</strong>.</em></p>

<p>The string is called <strong>alternating</strong> if no two adjacent characters are equal.</p>

<ul>
	<li>For example, the strings <code>"010"</code> and <code>"1010"</code> are alternating, while the string <code>"0100"</code> is not.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> s = "111000"
<strong>Output:</strong> 2
<strong>Explanation</strong>: Use the first operation two times to make s = "100011".
Then, use the second operation on the third and sixth elements to make s = "10<u>1</u>01<u>0</u>".
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> s = "010"
<strong>Output:</strong> 0
<strong>Explanation</strong>: The string is already alternating.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> s = "1110"
<strong>Output:</strong> 1
<strong>Explanation</strong>: Use the second operation on the second element to make s = "1<u>0</u>10".
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
	<li><code>s[i]</code> is either <code>'0'</code> or <code>'1'</code>.</li>
</ul>
</div>

---




```python
# https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/
# https://youtu.be/MOeuK6gaC2A

class Solution:
    def minFlips(self, s: str) -> int:
        n = len(s)
        s = s + s
        alt1, alt2 = "", ""
        for i in range(len(s)):
            alt1 += '1' if i%2 else '0'
            alt2 += '0' if i%2 else '1'
        
        diff1, diff2, res = 0, 0, n
        l = 0
        for r in range(len(s)):
            if s[r] != alt1[r]: 
                diff1 += 1
            if s[r] != alt2[r]:
                diff2 += 1
                
            if r-l+1 > n:
                if s[l] != alt1[l]: 
                    diff1 -= 1
                if s[l] != alt2[l]:
                    diff2 -= 1
                l += 1
            
            if r-l+1 == n: 
                res = min(res, diff1, diff2)
        
        return res
    
    
    
# Time: O(N)
# Space: O(1)
```
