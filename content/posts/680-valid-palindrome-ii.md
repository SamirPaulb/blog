---
title: 680 valid palindrome ii
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 680-valid-palindrome-ii solution
description: 680 valid palindrome ii LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/valid-palindrome-ii/">680. Valid Palindrome II</a></h2><h3>Easy</h3><hr><div><p>Given a string <code>s</code>, return <code>true</code> <em>if the </em><code>s</code><em> can be palindrome after deleting <strong>at most one</strong> character from it</em>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> s = "aba"
<strong>Output:</strong> true
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> s = "abca"
<strong>Output:</strong> true
<strong>Explanation:</strong> You could delete the character 'c'.
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> s = "abc"
<strong>Output:</strong> false
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
class Solution:
    def validPalindrome(self, s: str) -> bool:
        l = 0; r = len(s)-1
        lPal = True
        count = 0
        while l < r:
            if s[l] == s[r]:
                l += 1
                r -= 1
            else:
                if count == 1:
                    lPal = False
                    break
                l += 1
                count += 1
        
        l = 0; r = len(s)-1
        rPal = True
        count = 0
        while l < r:
            if s[l] == s[r]:
                l += 1
                r -= 1
            else:
                if count == 1:
                    rPal = False
                    break
                r -= 1
                count += 1
        
        return lPal or rPal
    
```
