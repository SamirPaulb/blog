---
title: 76 minimum window substring
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 76-minimum-window-substring solution
description: 76 minimum window substring LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/minimum-window-substring/">76. Minimum Window Substring</a></h2><h3>Hard</h3><hr><div><p>Given two strings <code>s</code> and <code>t</code> of lengths <code>m</code> and <code>n</code> respectively, return <em>the <strong>minimum window substring</strong> of </em><code>s</code><em> such that every character in </em><code>t</code><em> (<strong>including duplicates</strong>) is included in the window. If there is no such substring</em><em>, return the empty string </em><code>""</code><em>.</em></p>

<p>The testcases will be generated such that the answer is <strong>unique</strong>.</p>

<p>A <strong>substring</strong> is a contiguous sequence of characters within the string.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> s = "ADOBECODEBANC", t = "ABC"
<strong>Output:</strong> "BANC"
<strong>Explanation:</strong> The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> s = "a", t = "a"
<strong>Output:</strong> "a"
<strong>Explanation:</strong> The entire string s is the minimum window.
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> s = "a", t = "aa"
<strong>Output:</strong> ""
<strong>Explanation:</strong> Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == s.length</code></li>
	<li><code>n == t.length</code></li>
	<li><code>1 &lt;= m, n&nbsp;&lt;= 10<sup>5</sup></code></li>
	<li><code>s</code> and <code>t</code> consist of uppercase and lowercase English letters.</li>
</ul>

<p>&nbsp;</p>
<strong>Follow up:</strong> Could you find an algorithm that runs in <code>O(m + n)</code> time?</div>

---




```python
# https://leetcode.com/problems/minimum-window-substring/
# https://youtu.be/jSto0O4AJbM

class Solution:
    def minWindow(self, s: str, t: str) -> str:
        tCount, sWindow = {}, {}
        for c in t:
            tCount[c] = 1 + tCount.get(c, 0)   # if c present in tCount get its count else 0

        have = 0; need = len(tCount)
        res = ""; resLen = 2**31
        l, r = 0, 0
        while r < len(s):
            c = s[r]
            if c in tCount:
                sWindow[c] = 1 + sWindow.get(c, 0)
                if sWindow[c] == tCount[c]:
                    have += 1
            r += 1
            while have == need:
                if s[l] in sWindow:
                    if r - l < resLen:
                        res = s[l : r]
                        resLen = r - l
                    sWindow[s[l]] -= 1
                    if sWindow[s[l]] < tCount[s[l]]: 
                        have -= 1
                l += 1
        
        return res if resLen != 2**31 else ""
        
                
            
# Time: O(N)
# Space: O(N)
```
