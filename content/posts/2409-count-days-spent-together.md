---
title: 2409 count days spent together
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 2409-count-days-spent-together solution
description: 2409 count days spent together LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/count-days-spent-together/">2409. Count Days Spent Together</a></h2><h3>Easy</h3><hr><div><p>Alice and Bob are traveling to Rome for separate business meetings.</p>

<p>You are given 4 strings <code>arriveAlice</code>, <code>leaveAlice</code>, <code>arriveBob</code>, and <code>leaveBob</code>. Alice will be in the city from the dates <code>arriveAlice</code> to <code>leaveAlice</code> (<strong>inclusive</strong>), while Bob will be in the city from the dates <code>arriveBob</code> to <code>leaveBob</code> (<strong>inclusive</strong>). Each will be a 5-character string in the format <code>"MM-DD"</code>, corresponding to the month and day of the date.</p>

<p>Return<em> the total number of days that Alice and Bob are in Rome together.</em></p>

<p>You can assume that all dates occur in the <strong>same</strong> calendar year, which is <strong>not</strong> a leap year. Note that the number of days per month can be represented as: <code>[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> arriveAlice = "08-15", leaveAlice = "08-18", arriveBob = "08-16", leaveBob = "08-19"
<strong>Output:</strong> 3
<strong>Explanation:</strong> Alice will be in Rome from August 15 to August 18. Bob will be in Rome from August 16 to August 19. They are both in Rome together on August 16th, 17th, and 18th, so the answer is 3.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> arriveAlice = "10-01", leaveAlice = "10-31", arriveBob = "11-01", leaveBob = "12-31"
<strong>Output:</strong> 0
<strong>Explanation:</strong> There is no day when Alice and Bob are in Rome together, so we return 0.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>All dates are provided in the format <code>"MM-DD"</code>.</li>
	<li>Alice and Bob's arrival dates are <strong>earlier than or equal to</strong> their leaving dates.</li>
	<li>The given dates are valid dates of a <strong>non-leap</strong> year.</li>
</ul>
</div>

---




```python
class Solution:
    def countDaysTogether(self, arriveAlice: str, leaveAlice: str, arriveBob: str, leaveBob: str) -> int:
        am = (int(arriveAlice[:2]), int(leaveAlice[:2]))
        ad = (int(arriveAlice[3:]), int(leaveAlice[3:]))
        
        bm = (int(arriveBob[:2]), int(leaveBob[:2]))
        bd = (int(arriveBob[3:]), int(leaveBob[3:]))
        
        # print(am, ad, bm, bd)
        
        start_month = max(am[0], bm[0])
        end_month = min(am[1], bm[1])
        # print(start_month, end_month)
        if start_month == end_month:
            if am[0] == bm[0] == start_month:
                ans = min(ad[1], bd[1]) - max(ad[0], bd[0]) + 1
            elif am[0] == start_month:
                ans = min(ad[1], bd[1]) - ad[0] + 1
            elif bm[0] == start_month:
                ans = min(ad[1], bd[1]) - bd[0] + 1 
            else:
                ans = min(ad[1], bd[1]) - max(ad[0], bd[0]) + 1
            # print(ad[1], bd[1], ad[0], bd[0])
            return ans if ans > 0 else 0
        
        res = 0
        days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        for month in range(start_month, end_month+1):
            if month == start_month:
                if start_month == am[0] == bm[0]: res += days[month-1] - max(ad[0], bd[0]) + 1
                elif start_month == am[0]: res += days[month-1] - ad[0] + 1
                else: res += days[month-1] - bd[0] + 1
            elif month == end_month:
                if end_month == am[1] == bm[1]: res += min(ad[1], bd[1])
                elif end_month == am[1]: res += ad[1]
                else: res += bd[1]
            else:
                res += days[month - 1]
        
        return res
```
