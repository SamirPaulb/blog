---
title: 1029 two city scheduling
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 1029-two-city-scheduling solution
description: 1029 two city scheduling LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/two-city-scheduling/">1029. Two City Scheduling</a></h2><h3>Medium</h3><hr><div><p>A company is planning to interview <code>2n</code> people. Given the array <code>costs</code> where <code>costs[i] = [aCost<sub>i</sub>, bCost<sub>i</sub>]</code>,&nbsp;the cost of flying the <code>i<sup>th</sup></code> person to city <code>a</code> is <code>aCost<sub>i</sub></code>, and the cost of flying the <code>i<sup>th</sup></code> person to city <code>b</code> is <code>bCost<sub>i</sub></code>.</p>

<p>Return <em>the minimum cost to fly every person to a city</em> such that exactly <code>n</code> people arrive in each city.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> costs = [[10,20],[30,200],[400,50],[30,20]]
<strong>Output:</strong> 110
<strong>Explanation: </strong>
The first person goes to city A for a cost of 10.
The second person goes to city A for a cost of 30.
The third person goes to city B for a cost of 50.
The fourth person goes to city B for a cost of 20.

The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> costs = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]
<strong>Output:</strong> 1859
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> costs = [[515,563],[451,713],[537,709],[343,819],[855,779],[457,60],[650,359],[631,42]]
<strong>Output:</strong> 3086
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 * n == costs.length</code></li>
	<li><code>2 &lt;= costs.length &lt;= 100</code></li>
	<li><code>costs.length</code> is even.</li>
	<li><code>1 &lt;= aCost<sub>i</sub>, bCost<sub>i</sub> &lt;= 1000</code></li>
</ul>
</div>

---




```python
# https://leetcode.com/problems/two-city-scheduling/
# https://youtu.be/d-B_gk_gJtQ

# ------------------ Greedy Solution ------------------
class Solution:
    def twoCitySchedCost(self, costs):
        diffs = []
        for ac, bc in costs:
            diffs.append((bc-ac, ac, bc))
        diffs.sort()
        res = 0
        for i in range(len(costs)):
            if i < len(costs)//2:
                res += diffs[i][2]    # sending to city B     
            else:
                res += diffs[i][1]    # sending to city A
        return res

# Time: O(n log(n))

# ------------------ Dynamic Programming ------------------
class Solution:
    def twoCitySchedCost(self, costs):
        n = len(costs)//2
        dp = [[-1]*(n+1) for _ in range(n+1)]
        
        def dfs(i, a, b):
            if a == b == n:
                return 0
            if i >= len(costs) or a > n or b > n:
                return 2**31
            if dp[a][b] != -1:
                return dp[a][b]
            
            aCost = costs[i][0] + dfs(i+1, a+1, b)
            bCost = costs[i][1] + dfs(i+1, a, b+1)
            
            dp[a][b] = min(aCost, bCost)
            return dp[a][b]
        
        return dfs(0, 0, 0)
    
    
# Time: O(n^2)

```
