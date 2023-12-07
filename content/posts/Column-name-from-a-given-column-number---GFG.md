---
title: Column name from a given column number   GFG
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, Column name from a given column number - GFG solution
description: Column name from a given column number   GFG LeetCode Solution Explained
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


# Column name from a given column number
## Medium
<div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a positive integer, return its corresponding column title as appear in an Excel sheet.<br>
Excel columns has a pattern like A, B, C, … ,Z, AA, AB, AC,…. ,AZ, BA, BB, … ZZ, AAA, AAB ….. etc. In other words, column 1 is named as “A”, column 2 as “B”, column 27 as “AA” and so on.</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
N = 28
<strong>Output:</strong> AB
<strong>Explanation</strong>: 1 to 26 are A to Z.
Then, 27 is AA and 28 = AB.
</span>
</pre>

<p><span style="font-size:18px">â€‹<strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input</strong>: 
N = 13
<strong>Output:</strong> M
<strong>Explanation</strong>: M is the 13th character of
alphabet.</span>
</pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function&nbsp;<strong>colName()&nbsp;</strong>which takes the column number&nbsp;N as input and returns the column name represented as a string.</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:&nbsp;</strong>O(LogN).<br>
<strong>Expected Auxiliary Space:&nbsp;</strong>O(1).</span></p>

<p><br>
<span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= N &lt;= 4294967295</span></p>

<p>&nbsp;</p>
</div>

---




```python
#User function Template for python3

class Solution:
    def colName (self, n):
        # your code here
        res = ''
        while n > 0:
            r = n%26
            if r == 0: 
                res = 'Z' + res
                n = (n-1)//26
            else:
                res = chr(64 + r) + res
                n = n//26
        
        return res
        


#{ 
 # Driver Code Starts
#Initial Template for Python 3

t = int (input ())
for tc in range (t):
    n = int (input ())
    ob = Solution()
    print (ob.colName (n))
    

# } Driver Code Ends
```
