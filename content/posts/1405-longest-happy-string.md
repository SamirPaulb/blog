---
title: 1405 longest happy string
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 1405-longest-happy-string solution
description: 1405 longest happy string LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/longest-happy-string/">1405. Longest Happy String</a></h2><h3>Medium</h3><hr><div><p>A string <code>s</code> is called <strong>happy</strong> if it satisfies the following conditions:</p>

<ul>
	<li><code>s</code> only contains the letters <code>'a'</code>, <code>'b'</code>, and <code>'c'</code>.</li>
	<li><code>s</code> does not contain any of <code>"aaa"</code>, <code>"bbb"</code>, or <code>"ccc"</code> as a substring.</li>
	<li><code>s</code> contains <strong>at most</strong> <code>a</code> occurrences of the letter <code>'a'</code>.</li>
	<li><code>s</code> contains <strong>at most</strong> <code>b</code> occurrences of the letter <code>'b'</code>.</li>
	<li><code>s</code> contains <strong>at most</strong> <code>c</code> occurrences of the letter <code>'c'</code>.</li>
</ul>

<p>Given three integers <code>a</code>, <code>b</code>, and <code>c</code>, return <em>the <strong>longest possible happy </strong>string</em>. If there are multiple longest happy strings, return <em>any of them</em>. If there is no such string, return <em>the empty string </em><code>""</code>.</p>

<p>A <strong>substring</strong> is a contiguous sequence of characters within a string.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> a = 1, b = 1, c = 7
<strong>Output:</strong> "ccaccbcc"
<strong>Explanation:</strong> "ccbccacc" would also be a correct answer.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> a = 7, b = 1, c = 0
<strong>Output:</strong> "aabaa"
<strong>Explanation:</strong> It is the only correct answer in this case.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= a, b, c &lt;= 100</code></li>
	<li><code>a + b + c &gt; 0</code></li>
</ul>
</div>

---




```python
'''
class Solution:
    def longestDiverseString(self, a, b, c):
        arr = [[a, 'a'], [b, 'b'], [c, 'c']]
        res = ""
        while True:
            arr.sort()
            i = 1 if len(res) > 1 and res[-2] == res[-1] == arr[2][1] else 2
            if arr[i][0]:
                res += arr[i][1]
                arr[i][0] -= 1
            else:
                break
        
        return res
    '''
    
class Solution:
    def longestDiverseString(self, a, b, c):
        maxHeap = [(-a, 'a'), (-b, 'b'), (-c, 'c')]
        heapq.heapify(maxHeap)
        res = ""
        while True:
            c1, s1 = heapq.heappop(maxHeap)
            c2, s2 = heapq.heappop(maxHeap)
            if len(res) > 1 and res[-2] == res[-1] == s1:
                if c2:
                    res += s2
                    c2 += 1
                else:
                    break
            elif c1:
                res += s1
                c1 += 1
            else:
                break
            heapq.heappush(maxHeap, (c1, s1))
            heapq.heappush(maxHeap, (c2, s2))
        
        return res
```
