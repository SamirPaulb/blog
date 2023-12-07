---
title: 279 perfect squares
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 279-perfect-squares solution
description: 279 perfect squares LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/perfect-squares/">279. Perfect Squares</a></h2><h3>Medium</h3><hr><div><p>Given an integer <code>n</code>, return <em>the least number of perfect square numbers that sum to</em> <code>n</code>.</p>

<p>A <strong>perfect square</strong> is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, <code>1</code>, <code>4</code>, <code>9</code>, and <code>16</code> are perfect squares while <code>3</code> and <code>11</code> are not.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> n = 12
<strong>Output:</strong> 3
<strong>Explanation:</strong> 12 = 4 + 4 + 4.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> n = 13
<strong>Output:</strong> 2
<strong>Explanation:</strong> 13 = 4 + 9.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 10<sup>4</sup></code></li>
</ul>
</div>

---




```python
'''
# Coin Change
class Solution:
    def numSquares(self, n: int) -> int:
        row = int(math.sqrt(n)) + 1
        dp = [[2**31]*(n+1) for i in range(row)]
        for i in range(row):
            dp[i][0] = 0
        for i in range(1, row):
            for j in range(1, n+1):
                if i**2 <= j:
                    dp[i][j] = min(dp[i-1][j], 1 + dp[i][j - i**2])
                else:
                    dp[i][j] = dp[i-1][j]
        # print(dp)
        return dp[-1][-1]
        
# Time: O(N * N^1/2)
# Space: O(N * N^1/2)
'''

# 1D DP
# https://youtu.be/HLZLwjzIVGo
class Solution:
    def numSquares(self, n: int) -> int:
        dp = [n] * (n+1)
        dp[0] = 0
        for i in range(1, n+1):
            for s in range(i):
                sq = s * s
                if sq > i: break
                if 1 + dp[i - sq] < dp[i]:
                    dp[i] = 1 + dp[i - sq]
        
        return dp[n]
    
# Time: O(N * N^1/2)
# Space: O(N)
```
