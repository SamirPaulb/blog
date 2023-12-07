---
title: 477 total hamming distance
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 477-total-hamming-distance solution
description: 477 total hamming distance LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/total-hamming-distance/">477. Total Hamming Distance</a></h2><h3>Medium</h3><hr><div><p>The <a href="https://en.wikipedia.org/wiki/Hamming_distance" target="_blank">Hamming distance</a> between two integers is the number of positions at which the corresponding bits are different.</p>

<p>Given an integer array <code>nums</code>, return <em>the sum of <strong>Hamming distances</strong> between all the pairs of the integers in</em> <code>nums</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [4,14,2]
<strong>Output:</strong> 6
<strong>Explanation:</strong> In binary representation, the 4 is 0100, 14 is 1110, and 2 is 0010 (just
showing the four bits relevant in this case).
The answer will be:
HammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2 + 2 + 2 = 6.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [4,14,4]
<strong>Output:</strong> 4
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
	<li><code>0 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
	<li>The answer for the given input will fit in a <strong>32-bit</strong> integer.</li>
</ul>
</div>

---




```python
'''
Notice the total hamming distance is the sum of the total hamming distance for each of the i-th bits separately.

Total hamming distance for the i-th bit = 
(the number of zeros in the i-th position) * (the number of ones in the i-th position).

We then add all of these together to get our answer.
'''

class Solution:
    def totalHammingDistance(self, nums: List[int]) -> int:
        res = 0
        
        for i in range(32):
            mask = 1 << i      # left shifting 1 by i eg. 1 << 4 = 00010000
            zero = 0; one = 0  # count of 0 and 1 at i'th bit position for all elements of nums
            for num in nums:
                if num & mask: # if 1
                    one += 1   
                else:          # if 0
                    zero += 1
            
            res += zero * one  # total number of diff bits at i'th position
        
        return res
```
