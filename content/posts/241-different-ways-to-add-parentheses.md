---
title: 241 different ways to add parentheses
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 241-different-ways-to-add-parentheses solution
description: 241 different ways to add parentheses LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/different-ways-to-add-parentheses/">241. Different Ways to Add Parentheses</a></h2><h3>Medium</h3><hr><div><p>Given a string <code>expression</code> of numbers and operators, return <em>all possible results from computing all the different possible ways to group numbers and operators</em>. You may return the answer in <strong>any order</strong>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> expression = "2-1-1"
<strong>Output:</strong> [0,2]
<strong>Explanation:</strong>
((2-1)-1) = 0 
(2-(1-1)) = 2
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> expression = "2*3-4*5"
<strong>Output:</strong> [-34,-14,-10,-10,10]
<strong>Explanation:</strong>
(2*(3-(4*5))) = -34 
((2*3)-(4*5)) = -14 
((2*(3-4))*5) = -10 
(2*((3-4)*5)) = -10 
(((2*3)-4)*5) = 10
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= expression.length &lt;= 20</code></li>
	<li><code>expression</code> consists of digits and the operator <code>'+'</code>, <code>'-'</code>, and <code>'*'</code>.</li>
	<li>All the integer values in the input expression are in the range <code>[0, 99]</code>.</li>
</ul>
</div>

---




```python
class Solution:
    def diffWaysToCompute(self, expression: str) -> List[int]:
        memo = {}
        
        def solve(expr):
            res = []
            if expr.isdigit():
                return [int(expr)]
            if expr in memo:
                return memo[expr]
            
            for i in range(len(expr)):
                if expr[i] in "+-*":
                    res1 = solve(expr[:i])
                    res2 = solve(expr[i+1:])
                    for j in res1:
                        for k in res2:
                            res.append(clac(j, k, expr[i]))
            return res
        
        def clac(j, k, operator):
            if operator == "+":
                return j + k
            if operator == "-":
                return j - k
            if operator == "*":
                return j * k
            return -1
        
        return solve(expression)
```
