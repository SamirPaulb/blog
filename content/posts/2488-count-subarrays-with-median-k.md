---
title: 2488 count subarrays with median k
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 2488-count-subarrays-with-median-k solution
description: 2488 count subarrays with median k LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/count-subarrays-with-median-k/">2488. Count Subarrays With Median K</a></h2><h3>Hard</h3><hr><div><p>You are given an array <code>nums</code> of size <code>n</code> consisting of <strong>distinct </strong>integers from <code>1</code> to <code>n</code> and a positive integer <code>k</code>.</p>

<p>Return <em>the number of non-empty subarrays in </em><code>nums</code><em> that have a <strong>median</strong> equal to </em><code>k</code>.</p>

<p><strong>Note</strong>:</p>

<ul>
	<li>The median of an array is the <strong>middle </strong>element after sorting the array in <strong>ascending </strong>order. If the array is of even length, the median is the <strong>left </strong>middle element.

	<ul>
		<li>For example, the median of <code>[2,3,1,4]</code> is <code>2</code>, and the median of <code>[8,4,3,5,1]</code> is <code>4</code>.</li>
	</ul>
	</li>
	<li>A subarray is a contiguous part of an array.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [3,2,1,4,5], k = 4
<strong>Output:</strong> 3
<strong>Explanation:</strong> The subarrays that have a median equal to 4 are: [4], [4,5] and [1,4,5].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [2,3,1], k = 3
<strong>Output:</strong> 1
<strong>Explanation:</strong> [3] is the only subarray that has a median equal to 3.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == nums.length</code></li>
	<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums[i], k &lt;= n</code></li>
	<li>The integers in <code>nums</code> are distinct.</li>
</ul>
</div>

---




```python
# https://leetcode.com/problems/count-subarrays-with-median-k/
# https://youtu.be/QZzDioqkRhU

class Solution:
    def countSubarrays(self, nums: List[int], k: int) -> int:
        pos = nums.index(k)
        cnt = defaultdict(int)
        cnt[0] = 1
        c = 0
        for i in range(pos + 1, len(nums)):
            c += 1 if nums[i] > k else -1
            cnt[c] += 1

        ans = cnt[0] + cnt[1]
        c = 0
        for i in range(pos - 1, -1, -1):
            c += 1 if nums[i] < k else -1
            ans += cnt[c] + cnt[c + 1]
        # print(cnt)
        return ans
```
