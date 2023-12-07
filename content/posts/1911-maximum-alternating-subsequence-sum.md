---
title: 1911 maximum alternating subsequence sum
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 1911-maximum-alternating-subsequence-sum solution
description: 1911 maximum alternating subsequence sum LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/maximum-alternating-subsequence-sum/">1911. Maximum Alternating Subsequence Sum</a></h2><h3>Medium</h3><hr><div><p>The <strong>alternating sum</strong> of a <strong>0-indexed</strong> array is defined as the <strong>sum</strong> of the elements at <strong>even</strong> indices <strong>minus</strong> the <strong>sum</strong> of the elements at <strong>odd</strong> indices.</p>

<ul>
	<li>For example, the alternating sum of <code>[4,2,5,3]</code> is <code>(4 + 5) - (2 + 3) = 4</code>.</li>
</ul>

<p>Given an array <code>nums</code>, return <em>the <strong>maximum alternating sum</strong> of any subsequence of </em><code>nums</code><em> (after <strong>reindexing</strong> the elements of the subsequence)</em>.</p>

<ul>
</ul>

<p>A <strong>subsequence</strong> of an array is a new array generated from the original array by deleting some elements (possibly none) without changing the remaining elements' relative order. For example, <code>[2,7,4]</code> is a subsequence of <code>[4,<u>2</u>,3,<u>7</u>,2,1,<u>4</u>]</code> (the underlined elements), while <code>[2,4,2]</code> is not.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [<u>4</u>,<u>2</u>,<u>5</u>,3]
<strong>Output:</strong> 7
<strong>Explanation:</strong> It is optimal to choose the subsequence [4,2,5] with alternating sum (4 + 5) - 2 = 7.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [5,6,7,<u>8</u>]
<strong>Output:</strong> 8
<strong>Explanation:</strong> It is optimal to choose the subsequence [8] with alternating sum 8.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> nums = [<u>6</u>,2,<u>1</u>,2,4,<u>5</u>]
<strong>Output:</strong> 10
<strong>Explanation:</strong> It is optimal to choose the subsequence [6,1,5] with alternating sum (6 + 5) - 1 = 10.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>
</ul></div>

---




```python
# https://leetcode.com/problems/maximum-alternating-subsequence-sum/

class Solution:
    def maxAlternatingSum(self, nums: List[int]) -> int:
        stack = []
        for n in nums:
            if not stack:
                stack.append(n)
                continue
            elif len(stack)%2 and stack[-1] <= n:  # Odd index
                stack.pop()
            elif not len(stack)%2 and stack[-1] >= n:  # even index
                stack.pop()
            stack.append(n)
                
        if not len(stack)%2:
            stack.pop()

        # print(stack)
        res = 0
        for i in range(1, len(stack)+1):
            if i%2:
                res += stack[i-1]
            else:
                res -= stack[i-1]
        
        return res
    
# Time: O(N)
# Space: O(N)



'''
Given an alternating sequence (a0, a1... ak), the change in value after appending an element x depends only on whether we have an even or odd number of elements so far:

If we have even # of elements, we add x; otherwise, we subtract x. So, tracking the best subsequences of odd and even sizes gives an extremely simple update formula.

'''
class Solution:
    def maxAlternatingSum(self, nums):
        odd, even = nums[0], 0
        for num in nums[1:]:
            odd = max(even + num, odd)
            even = max(odd - num, even)
        
        return max(odd, even)
    
# Time: O(N)
# Space: O(1)
```
