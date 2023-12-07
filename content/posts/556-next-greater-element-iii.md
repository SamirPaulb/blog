---
title: 556 next greater element iii
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 556-next-greater-element-iii solution
description: 556 next greater element iii LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/next-greater-element-iii/">556. Next Greater Element III</a></h2><h3>Medium</h3><hr><div><p>Given a positive integer <code>n</code>, find <em>the smallest integer which has exactly the same digits existing in the integer</em> <code>n</code> <em>and is greater in value than</em> <code>n</code>. If no such positive integer exists, return <code>-1</code>.</p>

<p><strong>Note</strong> that the returned integer should fit in <strong>32-bit integer</strong>, if there is a valid answer but it does not fit in <strong>32-bit integer</strong>, return <code>-1</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> n = 12
<strong>Output:</strong> 21
</pre><p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> n = 21
<strong>Output:</strong> -1
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 2<sup>31</sup> - 1</code></li>
</ul>
</div>

---




```python
class Solution:
    def nextGreaterElement(self, n: int) -> int:
        arr = []
        p = n
        while n:
            arr.append(n%10)
            n = n // 10
        arr.reverse()
        
        l = -1
        r = -1
        
        for i in range(len(arr)-1, 0, -1):
            if arr[i-1] < arr[i]:
                l = i-1
                r = i
                break
        
        if l == -1: return -1
        
        for i in range(r, len(arr)):
            if arr[l] < arr[i]:
                r = i
        
        arr[l], arr[r] = arr[r], arr[l]
        
        l = l+1
        r = len(arr)-1
        while l < r:
            arr[l], arr[r] = arr[r], arr[l]
            l += 1
            r -= 1
        
        res = 0
        for i in arr:
            res *= 10
            res += i
        
        return res if res < 2**31 else -1
```
