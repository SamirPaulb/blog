---
title: 0373 find k pairs with smallest sums
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 0373-find-k-pairs-with-smallest-sums solution
description: 0373 find k pairs with smallest sums LeetCode Solution Explained
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


<h3><a href="https://leetcode.com/problems/find-k-pairs-with-smallest-sums/">373. Find K Pairs with Smallest Sums</a></h3><h3>Medium</h3><hr><div><p>You are given two integer arrays <code>nums1</code> and <code>nums2</code> sorted in <strong>ascending order</strong> and an integer <code>k</code>.</p>

<p>Define a pair <code>(u, v)</code> which consists of one element from the first array and one element from the second array.</p>

<p>Return <em>the</em> <code>k</code> <em>pairs</em> <code>(u<sub>1</sub>, v<sub>1</sub>), (u<sub>2</sub>, v<sub>2</sub>), ..., (u<sub>k</sub>, v<sub>k</sub>)</code> <em>with the smallest sums</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> nums1 = [1,7,11], nums2 = [2,4,6], k = 3
<strong>Output:</strong> [[1,2],[1,4],[1,6]]
<strong>Explanation:</strong> The first 3 pairs are returned from the sequence: [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> nums1 = [1,1,2], nums2 = [1,2,3], k = 2
<strong>Output:</strong> [[1,1],[1,1]]
<strong>Explanation:</strong> The first 2 pairs are returned from the sequence: [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> nums1 = [1,2], nums2 = [3], k = 3
<strong>Output:</strong> [[1,3],[2,3]]
<strong>Explanation:</strong> All possible pairs are returned from the sequence: [1,3],[2,3]

</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums1.length, nums2.length &lt;= 10<sup>5</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= nums1[i], nums2[i] &lt;= 10<sup>9</sup></code></li>
	<li><code>nums1</code> and <code>nums2</code> both are sorted in <strong>ascending order</strong>.</li>
	<li><code>1 &lt;= k &lt;= 10<sup>4</sup></code></li>
</ul>
</div>


---




```python
class Solution:
    def kSmallestPairs(self, nums1: List[int], nums2: List[int], k: int) -> List[List[int]]:
        # we use maxHeap so that we can pop largest number among k+1 numbers in maxHeap first
        maxHeap = []

        """
        instead of iterating over all the numbers of both array, we can iterate only
        the first 'K' numbers from both array.

        Since they are sorted in ascending order, the pairs with the minimum sum will
        be just the first 'K' numbers from those two arrays.
        """
        for i in range(0, min(k, len(nums1))):
            for j in range(0, min(k, len(nums2))):
                x = nums1[i]
                y = nums2[j]
                
                # sum of two number
                total = x + y
                
                if len(maxHeap) < k:
                    heapq.heappush(maxHeap, [-total, x, y])
                else:
                    # if the sum of x and y is larger than the largest (among the k smallests)
                    # sum, we can 'break' here. Since the arrays are sorted in the ascending order,
                    # we will not be able to find a pair with smaller sum moving forward.
                    if total > -maxHeap[0][0]:
                        break
                    
                    # push new numbers to the heap
                    heapq.heappush(maxHeap, [-total, x, y])

                    # pop the largest number among k+1 numbers in maxHeap, so that only
                    # k smallest numbers are in maxHeap
                    heapq.heappop(maxHeap)

        result = []
        while maxHeap:
            popped = heapq.heappop(maxHeap)
            result.append([popped[1], popped[2]])

        return result


```
