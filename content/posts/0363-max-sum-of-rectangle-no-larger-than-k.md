---
title: 0363 max sum of rectangle no larger than k
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 0363-max-sum-of-rectangle-no-larger-than-k solution
description: 0363 max sum of rectangle no larger than k LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/">363. Max Sum of Rectangle No Larger Than K</a></h2><h3>Hard</h3><hr><div><p>Given an <code>m x n</code> matrix <code>matrix</code> and an integer <code>k</code>, return <em>the max sum of a rectangle in the matrix such that its sum is no larger than</em> <code>k</code>.</p>

<p>It is <strong>guaranteed</strong> that there will be a rectangle with a sum no larger than <code>k</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/03/18/sum-grid.jpg" style="width: 255px; height: 176px;">
<pre><strong>Input:</strong> matrix = [[1,0,1],[0,-2,3]], k = 2
<strong>Output:</strong> 2
<strong>Explanation:</strong> Because the sum of the blue rectangle [[0, 1], [-2, 3]] is 2, and 2 is the max number no larger than k (k = 2).
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> matrix = [[2,2,-1]], k = 3
<strong>Output:</strong> 3
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == matrix.length</code></li>
	<li><code>n == matrix[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 100</code></li>
	<li><code>-100 &lt;= matrix[i][j] &lt;= 100</code></li>
	<li><code>-10<sup>5</sup> &lt;= k &lt;= 10<sup>5</sup></code></li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong> What if the number of rows is much larger than the number of columns?</p>
</div>

---




```python
class Solution:
    def maxSumSubmatrix(self, matrix: List[List[int]], k: int) -> int:
        rows = len(matrix)
        cols = len(matrix[0])

        ans = -2**31 - 1
        for i in range(cols):
            colsum = [0] * rows
            for j in range(i, cols):
                curlist = [0]
                rowsum = 0
                for r in range(rows):
                    # sum up columns in each row from i to j, use prefix sum to speed up
                    colsum[r] += matrix[r][j]
                    # sum up rows up to r
                    rowsum += colsum[r]
                    # find the smallest element larger than rowsum-k if exists
                    idx = bisect.bisect_left(curlist, rowsum - k)
                    # update final answer
                    if idx >= 0 and idx < len(curlist):
                        ans = max(ans, rowsum - curlist[idx])
                    # update the set of cums(or ordered list here)
                    bisect.insort(curlist, rowsum)

        return ans              
```
