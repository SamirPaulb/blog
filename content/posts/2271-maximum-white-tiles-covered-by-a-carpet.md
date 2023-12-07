---
title: 2271 maximum white tiles covered by a carpet
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 2271-maximum-white-tiles-covered-by-a-carpet solution
description: 2271 maximum white tiles covered by a carpet LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/maximum-white-tiles-covered-by-a-carpet/">2271. Maximum White Tiles Covered by a Carpet</a></h2><h3>Medium</h3><hr><div><p>You are given a 2D integer array <code>tiles</code> where <code>tiles[i] = [l<sub>i</sub>, r<sub>i</sub>]</code> represents that every tile <code>j</code> in the range <code>l<sub>i</sub> &lt;= j &lt;= r<sub>i</sub></code> is colored white.</p>

<p>You are also given an integer <code>carpetLen</code>, the length of a single carpet that can be placed <strong>anywhere</strong>.</p>

<p>Return <em>the <strong>maximum</strong> number of white tiles that can be covered by the carpet</em>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2022/03/25/example1drawio3.png" style="width: 644px; height: 158px;">
<pre><strong>Input:</strong> tiles = [[1,5],[10,11],[12,18],[20,25],[30,32]], carpetLen = 10
<strong>Output:</strong> 9
<strong>Explanation:</strong> Place the carpet starting on tile 10. 
It covers 9 white tiles, so we return 9.
Note that there may be other places where the carpet covers 9 white tiles.
It can be shown that the carpet cannot cover more than 9 white tiles.
</pre>

<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2022/03/24/example2drawio.png" style="width: 231px; height: 168px;">
<pre><strong>Input:</strong> tiles = [[10,11],[1,1]], carpetLen = 2
<strong>Output:</strong> 2
<strong>Explanation:</strong> Place the carpet starting on tile 10. 
It covers 2 white tiles, so we return 2.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= tiles.length &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>tiles[i].length == 2</code></li>
	<li><code>1 &lt;= l<sub>i</sub> &lt;= r<sub>i</sub> &lt;= 10<sup>9</sup></code></li>
	<li><code>1 &lt;= carpetLen &lt;= 10<sup>9</sup></code></li>
	<li>The <code>tiles</code> are <strong>non-overlapping</strong>.</li>
</ul>
</div>

---




```python
class Solution:
    def maximumWhiteTiles(self, tiles: List[List[int]], carpetLen: int) -> int:
        tiles.sort()
        ans = 0
        starts, ends = zip(*tiles)
        dp = [0]*(len(tiles) + 1)
        for i in range(len(tiles)):
            dp[i+1] = dp[i] + ends[i] - starts[i] + 1
        for l in range(len(tiles)):
            e = starts[l] + carpetLen
            r = bisect_right(starts, e)
            ans = max(ans, dp[r] - dp[l] - max(0, ends[r-1] - e + 1))
        return ans
```
