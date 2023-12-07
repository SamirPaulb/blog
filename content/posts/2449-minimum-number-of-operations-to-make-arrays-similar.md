---
title: 2449 minimum number of operations to make arrays similar
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 2449-minimum-number-of-operations-to-make-arrays-similar solution
description: 2449 minimum number of operations to make arrays similar LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/minimum-number-of-operations-to-make-arrays-similar/">2449. Minimum Number of Operations to Make Arrays Similar</a></h2><h3>Hard</h3><hr><div><p>You are given two positive integer arrays <code>nums</code> and <code>target</code>, of the same length.</p>

<p>In one operation, you can choose any two <strong>distinct</strong> indices <code>i</code> and <code>j</code> where <code>0 &lt;= i, j &lt; nums.length</code> and:</p>

<ul>
	<li>set <code>nums[i] = nums[i] + 2</code> and</li>
	<li>set <code>nums[j] = nums[j] - 2</code>.</li>
</ul>

<p>Two arrays are considered to be <strong>similar</strong> if the frequency of each element is the same.</p>

<p>Return <em>the minimum number of operations required to make </em><code>nums</code><em> similar to </em><code>target</code>. The test cases are generated such that <code>nums</code> can always be similar to <code>target</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [8,12,6], target = [2,14,10]
<strong>Output:</strong> 2
<strong>Explanation:</strong> It is possible to make nums similar to target in two operations:
- Choose i = 0 and j = 2, nums = [10,12,4].
- Choose i = 1 and j = 2, nums = [10,14,2].
It can be shown that 2 is the minimum number of operations needed.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [1,2,5], target = [4,1,3]
<strong>Output:</strong> 1
<strong>Explanation:</strong> We can make nums similar to target in one operation:
- Choose i = 1 and j = 2, nums = [1,4,3].
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> nums = [1,1,1,1,1], target = [1,1,1,1,1]
<strong>Output:</strong> 0
<strong>Explanation:</strong> The array nums is already similiar to target.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == nums.length == target.length</code></li>
	<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums[i], target[i] &lt;= 10<sup>6</sup></code></li>
	<li>It is possible to make <code>nums</code> similar to <code>target</code>.</li>
</ul>
</div>

---




```python
# https://leetcode.com/problems/minimum-number-of-operations-to-make-arrays-similar/

'''Intuition:
# Only odd numbers can be chaged to odd numbers and even to even hence separate them.
# Now minimum steps to make 'nums' to 'target' is by converting max of 'nums' to max of 'target'.
# Every number in 'nums' can be paired with a number in 'target' by index hence sorting.
# Now we need only the number of positives or number of negatives.
'''

class Solution:
    def makeSimilar(self, nums, target):
        nums_odd = sorted([i for i in nums if i%2 == 1])
        nums_even = sorted([i for i in nums if i%2 == 0])
        
        target_odd = sorted([i for i in target if i%2 == 1])
        target_even = sorted([i for i in target if i%2 == 0])
        
        res = 0
        for n, t in zip(nums_odd, target_odd):
            if n > t: res += n - t
        for n, t in zip(nums_even, target_even):
            if n > t: res += n - t
        
        return res//2
    
    
    
# Time: O(N log(N))
# Space: O(N)
```
