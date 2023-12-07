---
title: 0357 count numbers with unique digits
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 0357-count-numbers-with-unique-digits solution
description: 0357 count numbers with unique digits LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/count-numbers-with-unique-digits/">357. Count Numbers with Unique Digits</a></h2><h3>Medium</h3><hr><div><p>Given an integer <code>n</code>, return the count of all numbers with unique digits, <code>x</code>, where <code>0 &lt;= x &lt; 10<sup>n</sup></code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> n = 2
<strong>Output:</strong> 91
<strong>Explanation:</strong> The answer should be the total numbers in the range of 0 ≤ x &lt; 100, excluding 11,22,33,44,55,66,77,88,99
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> n = 0
<strong>Output:</strong> 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= n &lt;= 8</code></li>
</ul>
</div>

---




```python
# https://leetcode.com/problems/count-numbers-with-unique-digits/

'''
n = 2
From 11 -> 20 => 11,22,33,..99 excluded. 
so ans = 10(for 1->10) + 9*9(as 1 element excluded in each 10 range). = 10 + 81 = 91

n = 3
for 1 -> 100 => ans = 91
From 101 -> 200 => (100,101), (110,112,113...119), (121,122),..(191,199) excluded.
ans(100, 199) = 8*9
From 201 -> 300 => (200,202), (211,212), (220,221,222...229),..(292,299) excluded.
ans(200, 299) = 8*9
.
.
ans(100, 1000) = 8*9*9
Total ans = 10 + 8*9*9 = 739

So Pattern = ans + 9*(11-i) ans i = [2,n]
'''

class Solution:
    def countNumbersWithUniqueDigits(self, n):
        if n == 0: return 1
        if n == 1: return 10
        
        ans = 10
        tmp = 9
        for i in range(2, n+1):
            tmp *= (11 - i)
            ans += tmp
            
        return ans
    

# Dynamic Programming

class Solution:
    def countNumbersWithUniqueDigits(self, n):
        dp = [1, 10]
        for i in range(2, n+1):
            tmp = 81
            for j in range(1, i-1):
                tmp *= (9 - j)
            ans = dp[i-1] + tmp
            dp.append(ans)
        
        return dp[n]
                
```
