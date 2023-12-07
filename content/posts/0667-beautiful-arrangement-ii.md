---
title: 0667 beautiful arrangement ii
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 0667-beautiful-arrangement-ii solution
description: 0667 beautiful arrangement ii LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/beautiful-arrangement-ii/">667. Beautiful Arrangement II</a></h2><h3>Medium</h3><hr><div><p>Given two integers <code>n</code> and <code>k</code>, construct a list <code>answer</code> that contains <code>n</code> different positive integers ranging from <code>1</code> to <code>n</code> and obeys the following requirement:</p>

<ul>
	<li>Suppose this list is <code>answer =&nbsp;[a<sub>1</sub>, a<sub>2</sub>, a<sub>3</sub>, ... , a<sub>n</sub>]</code>, then the list <code>[|a<sub>1</sub> - a<sub>2</sub>|, |a<sub>2</sub> - a<sub>3</sub>|, |a<sub>3</sub> - a<sub>4</sub>|, ... , |a<sub>n-1</sub> - a<sub>n</sub>|]</code> has exactly <code>k</code> distinct integers.</li>
</ul>

<p>Return <em>the list</em> <code>answer</code>. If there multiple valid answers, return <strong>any of them</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> n = 3, k = 1
<strong>Output:</strong> [1,2,3]
Explanation: The [1,2,3] has three different positive integers ranging from 1 to 3, and the [1,1] has exactly 1 distinct integer: 1
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> n = 3, k = 2
<strong>Output:</strong> [1,3,2]
Explanation: The [1,3,2] has three different positive integers ranging from 1 to 3, and the [2,1] has exactly 2 distinct integers: 1 and 2.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= k &lt; n &lt;= 10<sup>4</sup></code></li>
</ul>
</div>

---




```python
class Solution:
    def constructArray(self, n: int, k: int) -> List[int]:
        numset = {i for i in range(2, n+1)}
        i = 1
        res = [1]
        while k > 1:
            a = i - k
            b = i + k
            if a in numset:
                res.append(a)
                i = a
            else:
                res.append(b)
                i = b
            numset.remove(i)
            k -= 1
        
        return res + list(numset)
    
# Time: O(K)
# Space: O(N)
```
