---
title: 1525 number of good ways to split a string
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 1525-number-of-good-ways-to-split-a-string solution
description: 1525 number of good ways to split a string LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/number-of-good-ways-to-split-a-string/">1525. Number of Good Ways to Split a String</a></h2><h3>Medium</h3><hr><div><p>You are given a string <code>s</code>.</p>

<p>A split is called <strong>good</strong> if you can split <code>s</code> into two non-empty strings <code>s<sub>left</sub></code> and <code>s<sub>right</sub></code> where their concatenation is equal to <code>s</code> (i.e., <code>s<sub>left</sub> + s<sub>right</sub> = s</code>) and the number of distinct letters in <code>s<sub>left</sub></code> and <code>s<sub>right</sub></code> is the same.</p>

<p>Return <em>the number of <strong>good splits</strong> you can make in <code>s</code></em>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> s = "aacaba"
<strong>Output:</strong> 2
<strong>Explanation:</strong> There are 5 ways to split <code>"aacaba"</code> and 2 of them are good. 
("a", "acaba") Left string and right string contains 1 and 3 different letters respectively.
("aa", "caba") Left string and right string contains 1 and 3 different letters respectively.
("aac", "aba") Left string and right string contains 2 and 2 different letters respectively (good split).
("aaca", "ba") Left string and right string contains 2 and 2 different letters respectively (good split).
("aacab", "a") Left string and right string contains 3 and 1 different letters respectively.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> s = "abcd"
<strong>Output:</strong> 1
<strong>Explanation:</strong> Split the string as follows ("ab", "cd").
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
	<li><code>s</code> consists of only lowercase English letters.</li>
</ul>
</div>

---




```python
class Solution:
    def numSplits(self, s: str) -> int:
        left = [0]*len(s)
        right = [0]*len(s)
        
        keep = set()
        count = 0
        for i, ch in enumerate(s):
            if ch not in keep:
                count += 1
            keep.add(ch)
            left[i] = count
        
        keep = set()
        count = 0
        for i in range(len(s)-1, -1, -1):
            right[i] = count
            if s[i] not in keep:
                count += 1
            keep.add(s[i])
            
        res = 0
        for i in range(len(s)):
            if left[i] == right[i]:
                res += 1
                
        return res
```
