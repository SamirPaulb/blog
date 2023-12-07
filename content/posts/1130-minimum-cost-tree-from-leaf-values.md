---
title: 1130 minimum cost tree from leaf values
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 1130-minimum-cost-tree-from-leaf-values solution
description: 1130 minimum cost tree from leaf values LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/">1130. Minimum Cost Tree From Leaf Values</a></h2><h3>Medium</h3><hr><div><p>Given an array <code>arr</code> of positive integers, consider all binary trees such that:</p>

<ul>
	<li>Each node has either <code>0</code> or <code>2</code> children;</li>
	<li>The values of <code>arr</code> correspond to the values of each <strong>leaf</strong> in an in-order traversal of the tree.</li>
	<li>The value of each non-leaf node is equal to the product of the largest leaf value in its left and right subtree, respectively.</li>
</ul>

<p>Among all possible binary trees considered, return <em>the smallest possible sum of the values of each non-leaf node</em>. It is guaranteed this sum fits into a <strong>32-bit</strong> integer.</p>

<p>A node is a <strong>leaf</strong> if and only if it has zero children.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/08/10/tree1.jpg" style="width: 500px; height: 169px;">
<pre><strong>Input:</strong> arr = [6,2,4]
<strong>Output:</strong> 32
<strong>Explanation:</strong> There are two possible trees shown.
The first has a non-leaf node sum 36, and the second has non-leaf node sum 32.
</pre>

<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/08/10/tree2.jpg" style="width: 224px; height: 145px;">
<pre><strong>Input:</strong> arr = [4,11]
<strong>Output:</strong> 44
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= arr.length &lt;= 40</code></li>
	<li><code>1 &lt;= arr[i] &lt;= 15</code></li>
	<li>It is guaranteed that the answer fits into a <strong>32-bit</strong> signed integer (i.e., it is less than 2<sup>31</sup>).</li>
</ul>
</div>

---




```python
class Solution:
    def mctFromLeafValues(self, arr: List[int]) -> int:
        arr = [float("inf")] + arr + [float("inf")]
        n = len(arr)
        res = 0
        
        while n > 3:
            mini = min(arr)
            i = arr.index(mini)
            if arr[i-1] < arr[i+1]:
                res += arr[i-1] * arr[i]
            else:
                res += arr[i] * arr[i+1]
            
            arr.remove(mini)
            n = len(arr)
        
        return res
```
