---
title: 5 longest palindromic substring
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 5-longest-palindromic-substring solution
description: 5 longest palindromic substring LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/longest-palindromic-substring/">5. Longest Palindromic Substring</a></h2><h3>Medium</h3><hr><div><p>Given a string <code>s</code>, return <em>the longest palindromic substring</em> in <code>s</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> s = "babad"
<strong>Output:</strong> "bab"
<strong>Explanation:</strong> "aba" is also a valid answer.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> s = "cbbd"
<strong>Output:</strong> "bb"
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 1000</code></li>
	<li><code>s</code> consist of only digits and English letters.</li>
</ul>
</div>

---




```python
class Solution:
    def longestPalindrome(self, s: str) -> str:
        res = ""
        
        for i in range(len(s)):
            # For Palindromic Substring of EVEN length
            l = i; r = i
            while l >= 0 and r < len(s) and s[l] == s[r]:
                if r-l+1 > len(res):
                    res = s[l:r+1]
                    
                l -= 1
                r += 1
                
            
            # For Palindromic Substring of ODD length
            l = i; r = i+1
            while l >= 0 and r < len(s) and s[l] == s[r]:
                if r-l+1 > len(res):
                    res = s[l:r+1]
                    
                l -= 1
                r += 1
                
        return res
    
# Time: O(n^2)
# Space: O(1)
```
