---
title: 0467 unique substrings in wraparound string
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 0467-unique-substrings-in-wraparound-string solution
description: 0467 unique substrings in wraparound string LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/unique-substrings-in-wraparound-string/">467. Unique Substrings in Wraparound String</a></h2><h3>Medium</h3><hr><div><p>We define the string <code>base</code> to be the infinite wraparound string of <code>"abcdefghijklmnopqrstuvwxyz"</code>, so <code>base</code> will look like this:</p>

<ul>
	<li><code>"...zabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcd...."</code>.</li>
</ul>

<p>Given a string <code>s</code>, return <em>the number of <strong>unique non-empty substrings</strong> of </em><code>s</code><em> are present in </em><code>base</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> s = "a"
<strong>Output:</strong> 1
<strong>Explanation:</strong> Only the substring "a" of s is in base.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> s = "cac"
<strong>Output:</strong> 2
<strong>Explanation:</strong> There are two substrings ("a", "c") of s in base.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> s = "zab"
<strong>Output:</strong> 6
<strong>Explanation:</strong> There are six substrings ("z", "a", "b", "za", "ab", and "zab") of s in base.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
	<li><code>s</code> consists of lowercase English letters.</li>
</ul>
</div>

---




```python
from collections import defaultdict

class Solution:
    def findSubstringInWraproundString(self, p: str) -> int:
        dp = defaultdict(int)
        streak = 0
        for i in range(len(p)):
            if (ord(p[i-1]) - 96) % 26 == (ord(p[i]) - 97):
                streak += 1
            else:
                streak = 1
            dp[p[i]] = max(dp[p[i]], streak)
        # print(dp)
        return sum(dp.values())
    
    
    
class Solution(object):
    def findSubstringInWraproundString(self, p):
        p, d, lo = '0'+p, collections.defaultdict(int), 0
        for hi in range(1, len(p)):
            if p[hi-1]+p[hi] not in 'abcdefghijklmnopqrstuvwxyza':
                lo = hi
            d[p[hi]] = max(d[p[hi]], hi+1-lo)
        return sum(d.values())
```
