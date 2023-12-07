---
title: 316 remove duplicate letters
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 316-remove-duplicate-letters solution
description: 316 remove duplicate letters LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/remove-duplicate-letters/">316. Remove Duplicate Letters</a></h2><h3>Medium</h3><hr><div><p>Given a string <code>s</code>, remove duplicate letters so that every letter appears once and only once. You must make sure your result is <strong>the smallest in lexicographical order</strong> among all possible results.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> s = "bcabc"
<strong>Output:</strong> "abc"
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> s = "cbacdcbc"
<strong>Output:</strong> "acdb"
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>4</sup></code></li>
	<li><code>s</code> consists of lowercase English letters.</li>
</ul>

<p>&nbsp;</p>
<p><strong>Note:</strong> This question is the same as 1081: <a href="https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/" target="_blank">https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/</a></p>
</div>

---




```python
class Solution:
    def removeDuplicateLetters(self, s: str) -> str:
        visited = set()
        lastIndexDic = {ch:i for i, ch in enumerate(s)}
        stack = []
        
        for i, ch in enumerate(s):
            if ch not in visited:
                while stack and stack[-1] >= ch and lastIndexDic[stack[-1]] > i:
                    visited.remove(stack.pop())
                stack.append(ch)
                visited.add(ch)
        
        return "".join(stack)

# Time Complexity = O(N)
# Space Complexity = O(N)
```
