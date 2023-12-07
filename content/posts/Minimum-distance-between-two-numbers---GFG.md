---
title: Minimum distance between two numbers   GFG
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, Minimum distance between two numbers - GFG solution
description: Minimum distance between two numbers   GFG LeetCode Solution Explained
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


# Minimum distance between two numbers
## Easy
<div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">You are given an&nbsp;array <strong>A</strong>, of <strong>N</strong> elements. Find minimum index based&nbsp;distance between two elements of the array,&nbsp;<strong>x</strong> and <strong>y&nbsp;</strong>such that (x!=y).</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>N = 4
A[] = {1,2,3,2}
x = 1, y = 2
<strong>Output: </strong>1<strong>
Explanation: </strong>x = 1 and y = 2. There are
two distances between x&nbsp;and y, which are
1 and 3 out of which the least&nbsp;is 1.</span>
</pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>N = 7
A[] = {86,39,90,67,84,66,62}
x = 42, y = 12
<strong>Output: </strong>-1<strong>
Explanation: </strong>x = 42 and y = 12. We return
-1 as&nbsp;x and y don't exist in the array.</span></pre>

<p><strong><span style="font-size:18px">Your Task:</span></strong><br>
<span style="font-size:18px">Complete the function <strong>minDist()&nbsp;</strong>which takes the array, n, x and y as input parameters and&nbsp;returns&nbsp;the minimum distance between&nbsp;<strong>x and y</strong> in the array. If no such distance is possible then&nbsp;return <strong>-1</strong>.</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(N)<br>
<strong>Expected Auxiliary Space:</strong> O(1)</span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= N &lt;= 10<sup>5</sup><br>
0 &lt;= A[i], x, y &lt;= 10<sup>5</sup></span></p>
</div>

---




```python

class Solution:
    def minDist(self, arr, n, x, y):
        recent_x = -1
        recent_y = -1
        res = 2**31
        for i in range(n):
            if arr[i] == x:
                recent_x = i
                if recent_y != -1:
                    res = min(res, abs(recent_x - recent_y))
            if arr[i] == y:
                recent_y = i
                if recent_x != -1:
                    res = min(res, abs(recent_x - recent_y))
        
        return res if res != 2**31 else -1
        
        

                
#{ 
 # Driver Code Starts
#Initial Template for Python 3


if __name__=='__main__':
    t = int(input())
    for i in range(t):
        n = int(input())
        arr = list(map(int, input().strip().split()))
        x,y = list(map(int, input().strip().split()))
        print(Solution().minDist(arr, n, x, y))



# } Driver Code Ends
```
