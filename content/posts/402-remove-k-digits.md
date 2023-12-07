---
title: 402 remove k digits
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 402-remove-k-digits solution
description: 402 remove k digits LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/remove-k-digits/">402. Remove K Digits</a></h2><h3>Medium</h3><hr><div><p>Given string num representing a non-negative integer <code>num</code>, and an integer <code>k</code>, return <em>the smallest possible integer after removing</em> <code>k</code> <em>digits from</em> <code>num</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> num = "1432219", k = 3
<strong>Output:</strong> "1219"
<strong>Explanation:</strong> Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> num = "10200", k = 1
<strong>Output:</strong> "200"
<strong>Explanation:</strong> Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> num = "10", k = 2
<strong>Output:</strong> "0"
<strong>Explanation:</strong> Remove all the digits from the number and it is left with nothing which is 0.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= k &lt;= num.length &lt;= 10<sup>5</sup></code></li>
	<li><code>num</code> consists of only digits.</li>
	<li><code>num</code> does not have any leading zeros except for the zero itself.</li>
</ul>
</div>

---




```python
# https://leetcode.com/problems/remove-k-digits/
# https://youtu.be/cFabMOnJaq0

class Solution:
    def removeKdigits(self, num: str, k: int) -> str:
        # Implement Monotonic Stack (Increasing Order)
        monoStack = []
        for i in num:
            while monoStack and monoStack[-1] > i and k > 0:
                monoStack.pop()
                k -= 1
            monoStack.append(i)
        
        while monoStack and k > 0:
            monoStack.pop()
            k -= 1
        
        res = "".join(monoStack)
        if res == '': return '0'
        res = int(res)  # if num = "10200" => res = 0200
        res = str(res)
        
        return res
```
