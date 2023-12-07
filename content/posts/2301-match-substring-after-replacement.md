---
title: 2301 match substring after replacement
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 2301-match-substring-after-replacement solution
description: 2301 match substring after replacement LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/match-substring-after-replacement/">2301. Match Substring After Replacement</a></h2><h3>Hard</h3><hr><div><p>You are given two strings <code>s</code> and <code>sub</code>. You are also given a 2D character array <code>mappings</code> where <code>mappings[i] = [old<sub>i</sub>, new<sub>i</sub>]</code> indicates that you may <strong>replace</strong> any number of <code>old<sub>i</sub></code> characters of <code>sub</code> with <code>new<sub>i</sub></code>. Each character in <code>sub</code> <strong>cannot</strong> be replaced more than once.</p>

<p>Return <code>true</code><em> if it is possible to make </em><code>sub</code><em> a substring of </em><code>s</code><em> by replacing zero or more characters according to </em><code>mappings</code>. Otherwise, return <code>false</code>.</p>

<p>A <strong>substring</strong> is a contiguous non-empty sequence of characters within a string.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> s = "fool3e7bar", sub = "leet", mappings = [["e","3"],["t","7"],["t","8"]]
<strong>Output:</strong> true
<strong>Explanation:</strong> Replace the first 'e' in sub with '3' and 't' in sub with '7'.
Now sub = "l3e7" is a substring of s, so we return true.</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> s = "fooleetbar", sub = "f00l", mappings = [["o","0"]]
<strong>Output:</strong> false
<strong>Explanation:</strong> The string "f00l" is not a substring of s and no replacements can be made.
Note that we cannot replace '0' with 'o'.
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> s = "Fool33tbaR", sub = "leetd", mappings = [["e","3"],["t","7"],["t","8"],["d","b"],["p","b"]]
<strong>Output:</strong> true
<strong>Explanation:</strong> Replace the first and second 'e' in sub with '3' and 'd' in sub with 'b'.
Now sub = "l33tb" is a substring of s, so we return true.

</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= sub.length &lt;= s.length &lt;= 5000</code></li>
	<li><code>0 &lt;= mappings.length &lt;= 1000</code></li>
	<li><code>mappings[i].length == 2</code></li>
	<li><code>old<sub>i</sub> != new<sub>i</sub></code></li>
	<li><code>s</code> and <code>sub</code> consist of uppercase and lowercase English letters and digits.</li>
	<li><code>old<sub>i</sub></code> and <code>new<sub>i</sub></code> are either uppercase or lowercase English letters or digits.</li>
</ul>
</div>

---




```python
class Solution:
    def matchReplacement(self, s: str, sub: str, mappings: List[List[str]]) -> bool:
        dic = {}
        for m in mappings:
            if m[0] not in dic:
                dic[m[0]] = {m[1]}
            else:
                dic[m[0]].add(m[1])
        
        for i in range(len(s)-len(sub)+1):
            j = 0
            while j < len(sub):
                if s[i+j] == sub[j]:
                    j += 1
                else:
                    if sub[j] in dic and s[i+j] in dic[sub[j]]:
                        j += 1
                    else:
                        break
            if j == len(sub): return True
        
        return False
    
```
