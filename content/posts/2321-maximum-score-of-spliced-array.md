---
title: 2321 maximum score of spliced array
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 2321-maximum-score-of-spliced-array solution
description: 2321 maximum score of spliced array LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/maximum-score-of-spliced-array/">2321. Maximum Score Of Spliced Array</a></h2><h3>Hard</h3><hr><div><p>You are given two <strong>0-indexed</strong> integer arrays <code>nums1</code> and <code>nums2</code>, both of length <code>n</code>.</p>

<p>You can choose two integers <code>left</code> and <code>right</code> where <code>0 &lt;= left &lt;= right &lt; n</code> and <strong>swap</strong> the subarray <code>nums1[left...right]</code> with the subarray <code>nums2[left...right]</code>.</p>

<ul>
	<li>For example, if <code>nums1 = [1,2,3,4,5]</code> and <code>nums2 = [11,12,13,14,15]</code> and you choose <code>left = 1</code> and <code>right = 2</code>, <code>nums1</code> becomes <code>[1,<strong><u>12,13</u></strong>,4,5]</code> and <code>nums2</code> becomes <code>[11,<strong><u>2,3</u></strong>,14,15]</code>.</li>
</ul>

<p>You may choose to apply the mentioned operation <strong>once</strong> or not do anything.</p>

<p>The <strong>score</strong> of the arrays is the <strong>maximum</strong> of <code>sum(nums1)</code> and <code>sum(nums2)</code>, where <code>sum(arr)</code> is the sum of all the elements in the array <code>arr</code>.</p>

<p>Return <em>the <strong>maximum possible score</strong></em>.</p>

<p>A <strong>subarray</strong> is a contiguous sequence of elements within an array. <code>arr[left...right]</code> denotes the subarray that contains the elements of <code>nums</code> between indices <code>left</code> and <code>right</code> (<strong>inclusive</strong>).</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> nums1 = [60,60,60], nums2 = [10,90,10]
<strong>Output:</strong> 210
<strong>Explanation:</strong> Choosing left = 1 and right = 1, we have nums1 = [60,<u><strong>90</strong></u>,60] and nums2 = [10,<u><strong>60</strong></u>,10].
The score is max(sum(nums1), sum(nums2)) = max(210, 80) = 210.</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> nums1 = [20,40,20,70,30], nums2 = [50,20,50,40,20]
<strong>Output:</strong> 220
<strong>Explanation:</strong> Choosing left = 3, right = 4, we have nums1 = [20,40,20,<u><strong>40,20</strong></u>] and nums2 = [50,20,50,<u><strong>70,30</strong></u>].
The score is max(sum(nums1), sum(nums2)) = max(140, 220) = 220.
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> nums1 = [7,11,13], nums2 = [1,1,1]
<strong>Output:</strong> 31
<strong>Explanation:</strong> We choose not to swap any subarray.
The score is max(sum(nums1), sum(nums2)) = max(31, 3) = 31.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == nums1.length == nums2.length</code></li>
	<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums1[i], nums2[i] &lt;= 10<sup>4</sup></code></li>
</ul>
</div>

---




```python
class Solution:
    def maximumsSplicedArray(self, nums1: List[int], nums2: List[int]) -> int:
        A = nums1
        B = nums2
        def kadane(A, B):
            cur, res = 0, 0
            for i in range(len(A)):
                cur += A[i] - B[i]
                res = max(res, cur)
                if cur < 0: cur = 0
            return res
        
        return max(sum(B) + kadane(A, B), sum(A) + kadane(B, A))
    
```
