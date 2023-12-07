---
title: 0201 bitwise and of numbers range
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 0201-bitwise-and-of-numbers-range solution
description: 0201 bitwise and of numbers range LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/bitwise-and-of-numbers-range/">201. Bitwise AND of Numbers Range</a></h2><h3>Medium</h3><hr><div><p>Given two integers <code>left</code> and <code>right</code> that represent the range <code>[left, right]</code>, return <em>the bitwise AND of all numbers in this range, inclusive</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> left = 5, right = 7
<strong>Output:</strong> 4
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> left = 0, right = 0
<strong>Output:</strong> 0
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> left = 1, right = 2147483647
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= left &lt;= right &lt;= 2<sup>31</sup> - 1</code></li>
</ul>
</div>

---




```python
# https://leetcode.com/problems/bitwise-and-of-numbers-range/
# https://youtu.be/-qrpJykY2gE

'''
# Intuition:
Traverse from LSB to MSB and keep right-shifting left and right until both of them become equal. 
If at any bit position left side bits of left and right are equal ie. left == right, 
then all numbers in [left, right] will also be equal.

e.g.
bit index =  3 2 1 0
left =  12 = 1 1 0 0
        13 = 1 1 0 1
        14 = 1 1 1 0
right = 15 = 1 1 1 1

After right-shifting left and right 2 times(ie. count = 2), left == right = 12 = 13 = 14 = 15 = 0 0 1 1
So '&' of all number in [left, right] is (left << count)
'''


class Solution:
    def rangeBitwiseAnd(self, left: int, right: int) -> int:
        count = 0
        
        while left != right:
            left = left >> 1
            right = right >> 1
            count += 1
        
        return left << count
                
        
# Time: O(1)
# Space: O(1)
```
