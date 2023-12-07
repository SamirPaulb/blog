---
title: 0474 ones and zeroes
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 0474-ones-and-zeroes solution
description: 0474 ones and zeroes LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/ones-and-zeroes/">474. Ones and Zeroes</a></h2><h3>Medium</h3><hr><div><p>You are given an array of binary strings <code>strs</code> and two integers <code>m</code> and <code>n</code>.</p>

<p>Return <em>the size of the largest subset of <code>strs</code> such that there are <strong>at most</strong> </em><code>m</code><em> </em><code>0</code><em>'s and </em><code>n</code><em> </em><code>1</code><em>'s in the subset</em>.</p>

<p>A set <code>x</code> is a <strong>subset</strong> of a set <code>y</code> if all elements of <code>x</code> are also elements of <code>y</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> strs = ["10","0001","111001","1","0"], m = 5, n = 3
<strong>Output:</strong> 4
<strong>Explanation:</strong> The largest subset with at most 5 0's and 3 1's is {"10", "0001", "1", "0"}, so the answer is 4.
Other valid but smaller subsets include {"0001", "1"} and {"10", "1", "0"}.
{"111001"} is an invalid subset because it contains 4 1's, greater than the maximum of 3.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> strs = ["10","0","1"], m = 1, n = 1
<strong>Output:</strong> 2
<b>Explanation:</b> The largest subset is {"0", "1"}, so the answer is 2.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= strs.length &lt;= 600</code></li>
	<li><code>1 &lt;= strs[i].length &lt;= 100</code></li>
	<li><code>strs[i]</code> consists only of digits <code>'0'</code> and <code>'1'</code>.</li>
	<li><code>1 &lt;= m, n &lt;= 100</code></li>
</ul>
</div>

---




```python
class Solution:
    def findMaxForm(self, strs: List[str], m: int, n: int) -> int:
        count = {i:(strs[i].count('0'), strs[i].count('1')) for i in range(len(strs))}
        dp = {}
        def dfs(i, m, n, tmp):
            if m<0 or n<0: 
                return -2**31
            if i >= len(strs):
                return 0
            if (i, m, n) in dp: return dp[(i, m, n)]
            z, o = count[i]
            if z <= m and o <= n:
                ans = max(1 + dfs(i+1, m-z, n-o, tmp+1), dfs(i+1, m, n, tmp))
            else:
                ans = dfs(i+1, m, n, tmp)
            dp[(i, m, n)] = ans
            return ans
        
        return dfs(0, m, n, 0)
```
