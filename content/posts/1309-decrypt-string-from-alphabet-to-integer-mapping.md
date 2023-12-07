---
title: 1309 decrypt string from alphabet to integer mapping
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 1309-decrypt-string-from-alphabet-to-integer-mapping solution
description: 1309 decrypt string from alphabet to integer mapping LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/">1309. Decrypt String from Alphabet to Integer Mapping</a></h2><h3>Easy</h3><hr><div><p>You are given a string <code>s</code> formed by digits and <code>'#'</code>. We want to map <code>s</code> to English lowercase characters as follows:</p>

<ul>
	<li>Characters (<code>'a'</code> to <code>'i')</code> are represented by (<code>'1'</code> to <code>'9'</code>) respectively.</li>
	<li>Characters (<code>'j'</code> to <code>'z')</code> are represented by (<code>'10#'</code> to <code>'26#'</code>) respectively.</li>
</ul>

<p>Return <em>the string formed after mapping</em>.</p>

<p>The test cases are generated so that a unique mapping will always exist.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> s = "10#11#12"
<strong>Output:</strong> "jkab"
<strong>Explanation:</strong> "j" -&gt; "10#" , "k" -&gt; "11#" , "a" -&gt; "1" , "b" -&gt; "2".
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> s = "1326#"
<strong>Output:</strong> "acz"
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 1000</code></li>
	<li><code>s</code> consists of digits and the <code>'#'</code> letter.</li>
	<li><code>s</code> will be a valid string such that mapping is always possible.</li>
</ul>
</div>

---




```python
class Solution:
    def freqAlphabets(self, s: str) -> str:
        n = len(s)
        i = 0
        res = ""
        while i < n:
            if i < n-2:
                if s[i+2] == "#":
                    res += chr(96+int(s[i:i+2]))
                    i += 3
                else:
                    res += chr(96+int(s[i]))
                    i += 1
            else:
                res += chr(96+int(s[i]))
                i += 1
        
        return res
```
