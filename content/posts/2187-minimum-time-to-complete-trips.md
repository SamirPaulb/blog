---
title: 2187 minimum time to complete trips
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 2187-minimum-time-to-complete-trips solution
description: 2187 minimum time to complete trips LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/minimum-time-to-complete-trips/">2187. Minimum Time to Complete Trips</a></h2><h3>Medium</h3><hr><div><p>You are given an array <code>time</code> where <code>time[i]</code> denotes the time taken by the <code>i<sup>th</sup></code> bus to complete <strong>one trip</strong>.</p>

<p>Each bus can make multiple trips <strong>successively</strong>; that is, the next trip can start <strong>immediately after</strong> completing the current trip. Also, each bus operates <strong>independently</strong>; that is, the trips of one bus do not influence the trips of any other bus.</p>

<p>You are also given an integer <code>totalTrips</code>, which denotes the number of trips all buses should make <strong>in total</strong>. Return <em>the <strong>minimum time</strong> required for all buses to complete <strong>at least</strong> </em><code>totalTrips</code><em> trips</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> time = [1,2,3], totalTrips = 5
<strong>Output:</strong> 3
<strong>Explanation:</strong>
- At time t = 1, the number of trips completed by each bus are [1,0,0]. 
  The total number of trips completed is 1 + 0 + 0 = 1.
- At time t = 2, the number of trips completed by each bus are [2,1,0]. 
  The total number of trips completed is 2 + 1 + 0 = 3.
- At time t = 3, the number of trips completed by each bus are [3,1,1]. 
  The total number of trips completed is 3 + 1 + 1 = 5.
So the minimum time needed for all buses to complete at least 5 trips is 3.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> time = [2], totalTrips = 1
<strong>Output:</strong> 2
<strong>Explanation:</strong>
There is only one bus, and it will complete its first trip at t = 2.
So the minimum time needed to complete 1 trip is 2.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= time.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= time[i], totalTrips &lt;= 10<sup>7</sup></code></li>
</ul>
</div>

---




```python
class Solution:
    def minimumTime(self, time: List[int], totalTrips: int) -> int:
        
        def check(curTime):
            tripsCount = 0
            for t in time:
                tripsCount += curTime // t
            return tripsCount >= totalTrips
        
        l = 0
        r  = min(time) * totalTrips + 1
        while l <= r:
            mid = l + (r - l) // 2
            if check(mid):
                r = mid - 1
            else:
                l = mid + 1
        
        return l
```
