---
title: 0790 domino and tromino tiling
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 0790-domino-and-tromino-tiling solution
description: 0790 domino and tromino tiling LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/domino-and-tromino-tiling/">790. Domino and Tromino Tiling</a></h2><h3>Medium</h3><hr><div><p>You have two types of tiles: a <code>2 x 1</code> domino shape and a tromino shape. You may rotate these shapes.</p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/07/15/lc-domino.jpg" style="width: 362px; height: 195px;">
<p>Given an integer n, return <em>the number of ways to tile an</em> <code>2 x n</code> <em>board</em>. Since the answer may be very large, return it <strong>modulo</strong> <code>10<sup>9</sup> + 7</code>.</p>

<p>In a tiling, every square must be covered by a tile. Two tilings are different if and only if there are two 4-directionally adjacent cells on the board such that exactly one of the tilings has both squares occupied by a tile.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/07/15/lc-domino1.jpg" style="width: 500px; height: 226px;">
<pre><strong>Input:</strong> n = 3
<strong>Output:</strong> 5
<strong>Explanation:</strong> The five different ways are show above.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> n = 1
<strong>Output:</strong> 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 1000</code></li>
</ul>
</div>

---




```python
'''
Purely based on observation and by intuition you can arrive at the follwing formula->
f(n)=f(n-1)+f(n-2)+2*(f(n-3)+f(n-4)+......+f(n-n))      ------(1)

if we remove 1 width  and 2 length tile vertically theres 1 way
if we remove 1 horizontal 2 width and 1 length tile below will also be same width tile so only 1 way
if we remove 3,by obervation we get 2 ways    

similarly,
f(n-1) = f(n-2) + f(n-3) + 2*(f(n-4) + ....)   
f(n-2) = f(n-1) - f(n-3) - 2*(f(n-4) + f(n-5) + ....)   ------(2)
putting value of f(n-2) to equation (1) we get,

f(n) = 2*f(n-1) + f(n-3)

                         __     and         __
                                                                       |  __|          |__ |   
similarly 2 for rest 
'''


class Solution:
    def numTilings(self, n: int) -> int:
        MOD = 10**9 + 7
        dp = [0, 1, 2, 5] + [1] * n
        if n <= 3: return dp[n]
        for i in range(4, n+1):
            dp[i] = (2 * dp[i-1] + dp[i-3]) % MOD 
        return dp[n] % MOD
    

```
