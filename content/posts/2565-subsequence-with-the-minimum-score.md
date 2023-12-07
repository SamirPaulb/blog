---
title: 2565 subsequence with the minimum score
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 2565-subsequence-with-the-minimum-score solution
description: 2565 subsequence with the minimum score LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/subsequence-with-the-minimum-score/">2565. Subsequence With the Minimum Score</a></h2><h3>Hard</h3><hr><div><p>You are given two strings <code>s</code> and <code>t</code>.</p>

<p>You are allowed to remove any number of characters from the string <code>t</code>.</p>

<p>The score string is <code>0</code> if no characters are removed from the string <code>t</code>, otherwise:</p>

<ul>
	<li>Let <code>left</code> be the minimum index among all removed characters.</li>
	<li>Let <code>right</code> be the maximum index among all removed characters.</li>
</ul>

<p>Then the score of the string is <code>right - left + 1</code>.</p>

<p>Return <em>the minimum possible score to make </em><code>t</code><em>&nbsp;a subsequence of </em><code>s</code><em>.</em></p>

<p>A <strong>subsequence</strong> of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., <code>"ace"</code> is a subsequence of <code>"<u>a</u>b<u>c</u>d<u>e</u>"</code> while <code>"aec"</code> is not).</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> s = "abacaba", t = "bzaa"
<strong>Output:</strong> 1
<strong>Explanation:</strong> In this example, we remove the character "z" at index 1 (0-indexed).
The string t becomes "baa" which is a subsequence of the string "abacaba" and the score is 1 - 1 + 1 = 1.
It can be proven that 1 is the minimum score that we can achieve.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> s = "cde", t = "xyz"
<strong>Output:</strong> 3
<strong>Explanation:</strong> In this example, we remove characters "x", "y" and "z" at indices 0, 1, and 2 (0-indexed).
The string t becomes "" which is a subsequence of the string "cde" and the score is 2 - 0 + 1 = 3.
It can be proven that 3 is the minimum score that we can achieve.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length, t.length &lt;= 10<sup>5</sup></code></li>
	<li><code>s</code> and <code>t</code> consist of only lowercase English letters.</li>
</ul>
</div>

---




```python
class Solution:
    def minimumScore(self, s: str, t: str) -> int:
        # Take care of the case where t is already a substring of s, return 0 in this case.
        j = 0
        for i in range(len(s)):
            if s[i]==t[j]: j+=1
            if j==len(t): return 0
        
        # Moving forward, store the first letter's index in t that needs to be removed if s ends at i.
        firstRemovedIndexFromLeft = [0]*len(s)
        left = 0
        for i in range(len(s)):
            if s[i]==t[left]:
                left += 1
            firstRemovedIndexFromLeft[i] = left
        print(firstRemovedIndexFromLeft)
        # Worest case, we remove the first and last letter in t.
        res = len(t)
        
        # Moving backward, at each position i in s, there are two cases:
        # (1) the firstRemovedIndexFromLeft[i] <= first removed index from right,
        #       This is a valid case in the sense that we can 
        #       basically, remove everything in between these two indices, including these two indices.
        #       i.e.,
        #       s = 'aabbbaa'
        #       t = 'aazzzaa'
        #       firstRemovedIndexFromLeft  = [1, 2, 2, 2, 2, 2, 2]
        #       firstRemovedIndexFromRight = [4, 4, 4, 4 ,4, 5, 6] (We don't actually put the right in arr like this, but just for easy understanding here)
        #       when i=3, firstRemovedIndexFromLeft[i] = 2 and right = 4, 
        #       so we try to update res, if the score (right-left+1) is smaller.
        #
        # (2) left > right, this is an invalid case to consider both indices.
        #       In this case, we basically just remove everything from 0 to index right, 
        #       score is (right - 0 + 1), where 0 is the left index. Update res if score is smaller.
        right = len(t) -1 
        for i in reversed(range(len(s))):
            if right>=firstRemovedIndexFromLeft[i]:
                res = min(right-firstRemovedIndexFromLeft[i]+1,res)
            if s[i] == t[right]:
                right -= 1
            res = min(res, right+1)
            
        return res

```
