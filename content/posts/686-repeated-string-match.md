---
title: 686 repeated string match
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 686-repeated-string-match solution
description: 686 repeated string match LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/repeated-string-match/">686. Repeated String Match</a></h2><h3>Medium</h3><hr><div><p>Given two strings <code>a</code> and <code>b</code>, return <em>the minimum number of times you should repeat string </em><code>a</code><em> so that string</em> <code>b</code> <em>is a substring of it</em>. If it is impossible for <code>b</code>​​​​​​ to be a substring of <code>a</code> after repeating it, return <code>-1</code>.</p>

<p><strong>Notice:</strong> string <code>"abc"</code> repeated 0 times is <code>""</code>, repeated 1 time is <code>"abc"</code> and repeated 2 times is <code>"abcabc"</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> a = "abcd", b = "cdabcdab"
<strong>Output:</strong> 3
<strong>Explanation:</strong> We return 3 because by repeating a three times "ab<strong>cdabcdab</strong>cd", b is a substring of it.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> a = "a", b = "aa"
<strong>Output:</strong> 2
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= a.length, b.length &lt;= 10<sup>4</sup></code></li>
	<li><code>a</code> and <code>b</code> consist of lowercase English letters.</li>
</ul>
</div>

---




```python
# https://leetcode.com/problems/repeated-string-match/

# Method 1 ---------------------------------------  
class Solution:
    def repeatedStringMatch(self, a: str, b: str) -> int:
        res = 1
        tmp = a
        while len(a) < len(b):
            a += tmp
            res += 1
        if self.subStr(a, b):
            return res
        if self.subStr(a+tmp, b):
            return res + 1
        return -1
    
    
    def subStr(self, a, b):  # check if b is substring of a 
        for i in range(len(a)):
            if a[i] == b[0] and i+len(b) <= len(a) and a[i:i+len(b)] == b:
                return True
        return False

    
    
# Method 2 ---------------------------------------  

class Solution:
    def repeatedStringMatch(self, a: str, b: str) -> int:
        n = len(b) // len(a)
        if self.subStr(a*n, b): return n
        if self.subStr(a*(n+1), b): return n+1
        if self.subStr(a*(n+2), b): return n+2    
        return -1
    
    ''' 
    def subStr(self, a, b):
        return b in a
    '''
    def subStr(self, a, b):  # check if b is substring of a or not
        for i in range(len(a)):
            if a[i] == b[0] and i+len(b) <= len(a) and a[i:i+len(b)] == b:
                return True
        return False
    
```
