---
title: 0347 top k frequent elements
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 0347-top-k-frequent-elements solution
description: 0347 top k frequent elements LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/top-k-frequent-elements/">347. Top K Frequent Elements</a></h2><h3>Medium</h3><hr><div><p>Given an integer array <code>nums</code> and an integer <code>k</code>, return <em>the</em> <code>k</code> <em>most frequent elements</em>. You may return the answer in <strong>any order</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [1,1,1,2,2,3], k = 2
<strong>Output:</strong> [1,2]
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [1], k = 1
<strong>Output:</strong> [1]
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
	<li><code>k</code> is in the range <code>[1, the number of unique elements in the array]</code>.</li>
	<li>It is <strong>guaranteed</strong> that the answer is <strong>unique</strong>.</li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong> Your algorithm's time complexity must be better than <code>O(n log n)</code>, where n is the array's size.</p>
</div>

---




```python
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        num_cnt = collections.Counter()
        for num in nums:
            num_cnt[num] += 1
        
        cnt_num = {}
        for num in num_cnt:
            cnt = num_cnt[num]
            if cnt not in cnt_num: 
                cnt_num[cnt] = [num]
            else: 
                cnt_num[cnt].append(num)
        
        res = []
        n = max(num_cnt.values())
        for cnt in range(n, 0, -1):
            if cnt in cnt_num:
                res += cnt_num[cnt]
            if len(res) >= k: break
        
        return res
    
    
# Time: O(N)
# Space: O(N)
```
