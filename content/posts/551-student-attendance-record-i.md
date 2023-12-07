---
title: 551 student attendance record i
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 551-student-attendance-record-i solution
description: 551 student attendance record i LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/student-attendance-record-i/">551. Student Attendance Record I</a></h2><h3>Easy</h3><hr><div><p>You are given a string <code>s</code> representing an attendance record for a student where each character signifies whether the student was absent, late, or present on that day. The record only contains the following three characters:</p>

<ul>
	<li><code>'A'</code>: Absent.</li>
	<li><code>'L'</code>: Late.</li>
	<li><code>'P'</code>: Present.</li>
</ul>

<p>The student is eligible for an attendance award if they meet <strong>both</strong> of the following criteria:</p>

<ul>
	<li>The student was absent (<code>'A'</code>) for <strong>strictly</strong> fewer than 2 days <strong>total</strong>.</li>
	<li>The student was <strong>never</strong> late (<code>'L'</code>) for 3 or more <strong>consecutive</strong> days.</li>
</ul>

<p>Return <code>true</code><em> if the student is eligible for an attendance award, or </em><code>false</code><em> otherwise</em>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> s = "PPALLP"
<strong>Output:</strong> true
<strong>Explanation:</strong> The student has fewer than 2 absences and was never late 3 or more consecutive days.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> s = "PPALLL"
<strong>Output:</strong> false
<strong>Explanation:</strong> The student was late 3 consecutive days in the last 3 days, so is not eligible for the award.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 1000</code></li>
	<li><code>s[i]</code> is either <code>'A'</code>, <code>'L'</code>, or <code>'P'</code>.</li>
</ul>
</div>

---




```python
class Solution:
    def checkRecord(self, s: str) -> bool:
        count = {'A': 0}
        L = 0
        for i in range(len(s)):
            if s[i] == 'A':
                count['A'] += 1        
                L = 0
            elif s[i] == 'L':
                if i > 0 and s[i-1] == 'L':
                    L += 1
                else:
                    L = 1
                if L >= 3: return False
            else:
                L = 0
        
        if count['A'] >= 2: return False
        return True
```
