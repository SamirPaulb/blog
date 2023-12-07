---
title: 1402 reducing dishes
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 1402-reducing-dishes solution
description: 1402 reducing dishes LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/reducing-dishes/">1402. Reducing Dishes</a></h2><h3>Hard</h3><hr><div><p>A chef has collected data on the <code>satisfaction</code> level of his <code>n</code> dishes. Chef can cook any dish in 1 unit of time.</p>

<p><strong>Like-time coefficient</strong> of a dish is defined as the time taken to cook that dish including previous dishes multiplied by its satisfaction level i.e. <code>time[i] * satisfaction[i]</code>.</p>

<p>Return <em>the maximum sum of <strong>like-time coefficient</strong> that the chef can obtain after dishes preparation</em>.</p>

<p>Dishes can be prepared in <strong>any </strong>order and the chef can discard some dishes to get this maximum value.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> satisfaction = [-1,-8,0,5,-9]
<strong>Output:</strong> 14
<strong>Explanation:</strong> After Removing the second and last dish, the maximum total <strong>like-time coefficient</strong> will be equal to (-1*1 + 0*2 + 5*3 = 14).
Each dish is prepared in one unit of time.</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> satisfaction = [4,3,2]
<strong>Output:</strong> 20
<strong>Explanation:</strong> Dishes can be prepared in any order, (2*1 + 3*2 + 4*3 = 20)
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> satisfaction = [-1,-4,-5]
<strong>Output:</strong> 0
<strong>Explanation:</strong> People do not like the dishes. No dish is prepared.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == satisfaction.length</code></li>
	<li><code>1 &lt;= n &lt;= 500</code></li>
	<li><code>-1000 &lt;= satisfaction[i] &lt;= 1000</code></li>
</ul>
</div>

---




```python
# https://leetcode.com/problems/reducing-dishes/

'''
# We choose dishes from most satisfied. Everytime we add a new dish to the menu list, 
# all dishes on the menu list will be cooked one time unit later, so the result += total satisfaction on the list.
# We'll keep doing this as long as A[i] + total > 0.

class Solution:
    def maxSatisfaction(self, A: List[int]) -> int:
        n = len(A)
        A.sort()
        dp = [[-1]*(n+1) for _ in range(n+1)]
        
        def dfs(i, j):
            if i >= len(A): return 0
            if dp[i][j] != -1: return dp[i][j]
            ans = max(dfs(i+1, j), j * A[i] + dfs(i+1, j+1))
            dp[i][j] = ans
            return ans
        
        return dfs(0, 1)
    
# Time: O(N^2)
'''

class Solution:
    def maxSatisfaction(self, A: List[int]) -> int:
        res = total = 0
        A.sort()
        while A and A[-1] + total > 0:
            total += A.pop()
            res += total
        return res
      
# Time: O(N)
```
