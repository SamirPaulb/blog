---
title: 2423 remove letter to equalize frequency
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 2423-remove-letter-to-equalize-frequency solution
description: 2423 remove letter to equalize frequency LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/remove-letter-to-equalize-frequency/">2423. Remove Letter To Equalize Frequency</a></h2><h3>Easy</h3><hr><div><p>You are given a <strong>0-indexed</strong> string <code>word</code>, consisting of lowercase English letters. You need to select <strong>one</strong> index and <strong>remove</strong> the letter at that index from <code>word</code> so that the <strong>frequency</strong> of every letter present in <code>word</code> is equal.</p>

<p>Return<em> </em><code>true</code><em> if it is possible to remove one letter so that the frequency of all letters in </em><code>word</code><em> are equal, and </em><code>false</code><em> otherwise</em>.</p>

<p><strong>Note:</strong></p>

<ul>
	<li>The <b>frequency</b> of a letter <code>x</code> is the number of times it occurs in the string.</li>
	<li>You <strong>must</strong> remove exactly one letter and cannot chose to do nothing.</li>
</ul>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> word = "abcc"
<strong>Output:</strong> true
<strong>Explanation:</strong> Select index 3 and delete it: word becomes "abc" and each character has a frequency of 1.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> word = "aazz"
<strong>Output:</strong> false
<strong>Explanation:</strong> We must delete a character, so either the frequency of "a" is 1 and the frequency of "z" is 2, or vice versa. It is impossible to make all present letters have equal frequency.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= word.length &lt;= 100</code></li>
	<li><code>word</code> consists of lowercase English letters only.</li>
</ul>
</div>

---




```python
# https://leetcode.com/problems/remove-letter-to-equalize-frequency/

class Solution:
    def equalFrequency(self, word: str) -> bool:
        counter = collections.Counter(word)
        for c in word:
            counter[c] -= 1
            if counter[c] == 0:
                counter.pop(c)
            if len(set(counter.values())) == 1: return True
            counter[c] += 1
        
        return False
    


class Solution:
    def equalFrequency(self, word: str) -> bool:
        dct = {}
        for i in word:
            if i in dct: dct[i] += 1
            else: dct[i] = 1
        
        for i in word:
            dct[i] -= 1
            if dct[i] == 0:
                del dct[i]
                if len(set(dct.values())) == 1: return True
                dct[i] = 1
            else:
                if len(set(dct.values())) == 1: return True
                dct[i] += 1
        
        return False
```
