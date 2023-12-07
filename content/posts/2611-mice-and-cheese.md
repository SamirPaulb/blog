---
title: 2611 mice and cheese
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 2611-mice-and-cheese solution
description: 2611 mice and cheese LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/mice-and-cheese/">2611. Mice and Cheese</a></h2><h3>Medium</h3><hr><div><p>There are two mice and <code>n</code> different types of cheese, each type of cheese should be eaten by exactly one mouse.</p>

<p>A point of the cheese with index <code>i</code> (<strong>0-indexed</strong>) is:</p>

<ul>
	<li><code>reward1[i]</code> if the first mouse eats it.</li>
	<li><code>reward2[i]</code> if the second mouse eats it.</li>
</ul>

<p>You are given a positive integer array <code>reward1</code>, a positive integer array <code>reward2</code>, and a non-negative integer <code>k</code>.</p>

<p>Return <em><strong>the maximum</strong> points the mice can achieve if the first mouse eats exactly </em><code>k</code><em> types of cheese.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> reward1 = [1,1,3,4], reward2 = [4,4,1,1], k = 2
<strong>Output:</strong> 15
<strong>Explanation:</strong> In this example, the first mouse eats the 2<sup>nd</sup>&nbsp;(0-indexed) and the 3<sup>rd</sup>&nbsp;types of cheese, and the second mouse eats the 0<sup>th</sup>&nbsp;and the 1<sup>st</sup> types of cheese.
The total points are 4 + 4 + 3 + 4 = 15.
It can be proven that 15 is the maximum total points that the mice can achieve.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> reward1 = [1,1], reward2 = [1,1], k = 2
<strong>Output:</strong> 2
<strong>Explanation:</strong> In this example, the first mouse eats the 0<sup>th</sup>&nbsp;(0-indexed) and 1<sup>st</sup>&nbsp;types of cheese, and the second mouse does not eat any cheese.
The total points are 1 + 1 = 2.
It can be proven that 2 is the maximum total points that the mice can achieve.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n == reward1.length == reward2.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= reward1[i],&nbsp;reward2[i] &lt;= 1000</code></li>
	<li><code>0 &lt;= k &lt;= n</code></li>
</ul>
</div>

---




```python
# https://leetcode.com/problems/mice-and-cheese/
'''
We want to maximize the total reward by selecting 'k' values from reward1 and everything remaining from reward2. To achieve this, we need to carefully choose values from reward1, as selecting an index in reward1 will make that index unavailable in reward2.

To determine the best selection, we first calculate the differences between the corresponding elements of reward2 and reward1. Then, we identify the 'k' largest positive differences, which indicate the most optimal selections from reward1.

Consider the example with reward1 = [4, 2, 1] and reward2 = [2, 5, 10]. The differences are calculated as follows: 2 - 4 = -2, 5 - 2 = 3, 10 - 1 = 9, resulting in the array [(-2, 0), (3, 1), (9, 2)]. Notice that we keep track of the index by storing tuples (value, index). In this case, if k = 2, we should select the values 4 and 2 from reward1, as they correspond to the largest positive differences. Next, we can take the remaining available value from reward2, which is 10.

By following this approach, we can achieve the maximum total reward, which is the sum of these values: 4 + 2 + 10 = 16.
'''

class Solution:
    def miceAndCheese(self, reward1: List[int], reward2: List[int], k: int) -> int:
        output = 0
        n = len(reward1)
        heap = []
        for i in range(n):
            heap.append((reward2[i] - reward1[i], i))
            
        heapq.heapify(heap)
        visited = set()
        while k:
            k -= 1
            _, idx = heapq.heappop(heap)
            visited.add(idx)
            output += reward1[idx]
            
        # If there is anything left that has not been taken, we take it from reward2.
        for idx, val in enumerate(reward2):
            if idx in visited:
                continue
            output += val
        
        return output

```
