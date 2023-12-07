---
title: 0953 verifying an alien dictionary
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 0953-verifying-an-alien-dictionary solution
description: 0953 verifying an alien dictionary LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/verifying-an-alien-dictionary/">953. Verifying an Alien Dictionary</a></h2><h3>Easy</h3><hr><div><p>In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different <code>order</code>. The <code>order</code> of the alphabet is some permutation of lowercase letters.</p>

<p>Given a sequence of <code>words</code> written in the alien language, and the <code>order</code> of the alphabet, return <code>true</code> if and only if the given <code>words</code> are sorted lexicographically in this alien language.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
<strong>Output:</strong> true
<strong>Explanation: </strong>As 'h' comes before 'l' in this language, then the sequence is sorted.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
<strong>Output:</strong> false
<strong>Explanation: </strong>As 'd' comes after 'l' in this language, then words[0] &gt; words[1], hence the sequence is unsorted.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
<strong>Output:</strong> false
<strong>Explanation: </strong>The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" &gt; "app", because 'l' &gt; '∅', where '∅' is defined as the blank character which is less than any other character (<a href="https://en.wikipedia.org/wiki/Lexicographical_order" target="_blank">More info</a>).
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= words.length &lt;= 100</code></li>
	<li><code>1 &lt;= words[i].length &lt;= 20</code></li>
	<li><code>order.length == 26</code></li>
	<li>All characters in <code>words[i]</code> and <code>order</code> are English lowercase letters.</li>
</ul>
</div>

---




```python
# https://leetcode.com/problems/verifying-an-alien-dictionary/

''' 
If a sequence of words is sorted, then each adjacent word of the sequence must also be sorted.

\U0001f449 Lexicographically Sorted when -
    ✦ If at first mismatch, mp[a[i]] < mp[b[i]], or
    ✦ If each letters of both words match and length(a) <= length(b)

\U0001f449 Not Lexicographically Sorted when -
    ✦ If at first mismatch, mp[a[i]] > mp[b[i]], or
    ✦ If each letters of both words match and length(a) > length(b).

'''

class Solution:
    def isAlienSorted(self, words: List[str], order: str) -> bool:
        ind = {c:i for i,c in enumerate(order)}
        def checkOrder(w1, w2):
            for s1, s2 in zip(w1, w2):
                if ind[s1] != ind[s2]:
                    return ind[s1] < ind[s2]
            return len(w1) <= len(w2)
        
        return all(checkOrder(w1, w2) for w1, w2 in zip(words, words[1:]))

                
        
'''
✦ Time Complexity : O(N),   where N is the total number of characters in words.

✦ Space Complexity : O(1),  we only need constant amount of space to store the mapping of letters to index which does not depend on the size of input. Hence we get constant space complexity.
'''
```
