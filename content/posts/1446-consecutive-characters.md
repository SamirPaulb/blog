---
title: 1446 consecutive characters
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 1446-consecutive-characters solution
description: 1446 consecutive characters LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/consecutive-characters/">1446. Consecutive Characters</a></h2><h3>Easy</h3><hr><div><p>The <strong>power</strong> of the string is the maximum length of a non-empty substring that contains only one unique character.</p>

<p>Given a string <code>s</code>, return <em>the <strong>power</strong> of</em> <code>s</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> s = "leetcode"
<strong>Output:</strong> 2
<strong>Explanation:</strong> The substring "ee" is of length 2 with the character 'e' only.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> s = "abbcccddddeeeeedcba"
<strong>Output:</strong> 5
<strong>Explanation:</strong> The substring "eeeee" is of length 5 with the character 'e' only.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 500</code></li>
	<li><code>s</code> consists of only lowercase English letters.</li>
</ul>
</div>

---




```python
class Solution:
    def maxPower(self, s: str) -> int:
        res = tmp = 1
        
        for i in range(1, len(s)):
            if s[i] == s[i-1]:
                tmp += 1
                res = max(res, tmp)
            else:
                tmp = 1
        
        return res
```
