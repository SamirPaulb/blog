---
title: 848 shifting letters
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 848-shifting-letters solution
description: 848 shifting letters LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/shifting-letters/">848. Shifting Letters</a></h2><h3>Medium</h3><hr><div><p>You are given a string <code>s</code> of lowercase English letters and an integer array <code>shifts</code> of the same length.</p>

<p>Call the <code>shift()</code> of a letter, the next letter in the alphabet, (wrapping around so that <code>'z'</code> becomes <code>'a'</code>).</p>

<ul>
	<li>For example, <code>shift('a') = 'b'</code>, <code>shift('t') = 'u'</code>, and <code>shift('z') = 'a'</code>.</li>
</ul>

<p>Now for each <code>shifts[i] = x</code>, we want to shift the first <code>i + 1</code> letters of <code>s</code>, <code>x</code> times.</p>

<p>Return <em>the final string after all such shifts to s are applied</em>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> s = "abc", shifts = [3,5,9]
<strong>Output:</strong> "rpl"
<strong>Explanation:</strong> We start with "abc".
After shifting the first 1 letters of s by 3, we have "dbc".
After shifting the first 2 letters of s by 5, we have "igc".
After shifting the first 3 letters of s by 9, we have "rpl", the answer.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> s = "aaa", shifts = [1,2,3]
<strong>Output:</strong> "gfd"
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
	<li><code>s</code> consists of lowercase English letters.</li>
	<li><code>shifts.length == s.length</code></li>
	<li><code>0 &lt;= shifts[i] &lt;= 10<sup>9</sup></code></li>
</ul>
</div>

---




```python
class Solution:
    def shiftingLetters(self, s: str, shifts: List[int]) -> str:
        if shifts[-1] > 26: shifts[-1] = shifts[-1] % 26
        for i in range(len(shifts)-2, -1, -1):
            shifts[i] += shifts[i+1]
            if shifts[i] > 26:
                shifts[i] = shifts[i] % 26
        
        s = list(s)
        for i in range(len(s)):
            a = ord(s[i]) + shifts[i]
            a = a % 123
            print(a)
            if a < 97:
                s[i] = chr(97 + a)
            else:
                s[i] = chr(a)
        
        return "".join(s)
    
```
