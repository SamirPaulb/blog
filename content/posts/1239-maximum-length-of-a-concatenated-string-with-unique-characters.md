---
title: 1239 maximum length of a concatenated string with unique characters
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 1239-maximum-length-of-a-concatenated-string-with-unique-characters solution
description: 1239 maximum length of a concatenated string with unique characters LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/">1239. Maximum Length of a Concatenated String with Unique Characters</a></h2><h3>Medium</h3><hr><div><p>You are given an array of strings <code>arr</code>. A string <code>s</code> is formed by the <strong>concatenation</strong> of a <strong>subsequence</strong> of <code>arr</code> that has <strong>unique characters</strong>.</p>

<p>Return <em>the <strong>maximum</strong> possible length</em> of <code>s</code>.</p>

<p>A <strong>subsequence</strong> is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> arr = ["un","iq","ue"]
<strong>Output:</strong> 4
<strong>Explanation:</strong> All the valid concatenations are:
- ""
- "un"
- "iq"
- "ue"
- "uniq" ("un" + "iq")
- "ique" ("iq" + "ue")
Maximum length is 4.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> arr = ["cha","r","act","ers"]
<strong>Output:</strong> 6
<strong>Explanation:</strong> Possible longest valid concatenations are "chaers" ("cha" + "ers") and "acters" ("act" + "ers").
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> arr = ["abcdefghijklmnopqrstuvwxyz"]
<strong>Output:</strong> 26
<strong>Explanation:</strong> The only string in arr has all 26 characters.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= arr.length &lt;= 16</code></li>
	<li><code>1 &lt;= arr[i].length &lt;= 26</code></li>
	<li><code>arr[i]</code> contains only lowercase English letters.</li>
</ul>
</div>

---




```python
# https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/
'''
In this we will store each unique lenght substring separetly and will compare with all the possible permutation.
'''


#----------------------- Method 1 -----------------------
class Solution:
    def maxLength(self, arr):
        dp = [set()]  # adding an empty set
        for a in arr:
            if len(set(a)) < len(a): continue  # repeated character is string
            a = set(a)
            for c in dp:
                if a & c: continue # intersection of 2 sets is not empty 
                dp.append(a | c)   # adding union of set a and c
        
        return max(len(a) for a in dp)
    
    
#----------------------- Method 2 -----------------------
class Solution:
    def maxLength(self, arr):
        unique = ['']
        for a in arr:
            for b in unique:
                if len(a+b) == len(set(a+b)):  # a and b are Mutual Exclusivity
                    unique.append(a+b)
        
        return max(len(a) for a in unique)
    
    
#----------------------- Method 3 -----------------------
class Solution:
    def maxLength(self, arr):
        self.res = 0
        def dfs(i, s):
            if len(set(s)) < len(s): 
                return
            self.res = max(self.res, len(s))
            for j in range(i, len(arr)):
                dfs(j+1, s + arr[j])
        
        dfs(0, "")
        return self.res
            
        
        
# Time: O(N^2)  # For All Methods 1, 2, 3
```
