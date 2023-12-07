---
title: 1545 find kth bit in nth binary string
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 1545-find-kth-bit-in-nth-binary-string solution
description: 1545 find kth bit in nth binary string LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/">1545. Find Kth Bit in Nth Binary String</a></h2><h3>Medium</h3><hr><div><p>Given two positive integers <code>n</code> and <code>k</code>, the binary string <code>S<sub>n</sub></code> is formed as follows:</p>

<ul>
	<li><code>S<sub>1</sub> = "0"</code></li>
	<li><code>S<sub>i</sub> = S<sub>i - 1</sub> + "1" + reverse(invert(S<sub>i - 1</sub>))</code> for <code>i &gt; 1</code></li>
</ul>

<p>Where <code>+</code> denotes the concatenation operation, <code>reverse(x)</code> returns the reversed string <code>x</code>, and <code>invert(x)</code> inverts all the bits in <code>x</code> (<code>0</code> changes to <code>1</code> and <code>1</code> changes to <code>0</code>).</p>

<p>For example, the first four strings in the above sequence are:</p>

<ul>
	<li><code>S<sub>1 </sub>= "0"</code></li>
	<li><code>S<sub>2 </sub>= "0<strong>1</strong>1"</code></li>
	<li><code>S<sub>3 </sub>= "011<strong>1</strong>001"</code></li>
	<li><code>S<sub>4</sub> = "0111001<strong>1</strong>0110001"</code></li>
</ul>

<p>Return <em>the</em> <code>k<sup>th</sup></code> <em>bit</em> <em>in</em> <code>S<sub>n</sub></code>. It is guaranteed that <code>k</code> is valid for the given <code>n</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> n = 3, k = 1
<strong>Output:</strong> "0"
<strong>Explanation:</strong> S<sub>3</sub> is "<strong><u>0</u></strong>111001".
The 1<sup>st</sup> bit is "0".
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> n = 4, k = 11
<strong>Output:</strong> "1"
<strong>Explanation:</strong> S<sub>4</sub> is "0111001101<strong><u>1</u></strong>0001".
The 11<sup>th</sup> bit is "1".
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 20</code></li>
	<li><code>1 &lt;= k &lt;= 2<sup>n</sup> - 1</code></li>
</ul>
</div>

---




```python
# https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/


''' 
# Brute Force Solution
class Solution:
    def findKthBit(self, n: int, k: int) -> str:
        def revinv(s):
            s = list(s)
            for i in range(len(s)):
                if s[i] == '0':
                    s[i] = '1'
                else:
                    s[i] = '0'
            s = ''.join(s)
            s = s[::-1]
            return s
        
        dp = ['0'] * n
        dp[0] = '0'
        for i in range(n):
            dp[i] = dp[i-1] + '1' + revinv(dp[i-1])
        
        return dp[-1][k-1]
# Time: O(n^2)
# Space: (n)
''' 


# Optimal Solution:
# https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/discuss/785548/JavaC++Python-O(1)-Solutions

class Solution:
    def findKthBit(self, n, k):
        return str(k // (k & -k) >> 1 & 1 ^ k & 1 ^ 1)

# Time: O(1)
# Space: O(1)
```
