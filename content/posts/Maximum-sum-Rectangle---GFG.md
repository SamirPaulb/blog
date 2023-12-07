---
title: Maximum sum Rectangle   GFG
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, Maximum sum Rectangle - GFG solution
description: Maximum sum Rectangle   GFG LeetCode Solution Explained
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


# Maximum sum Rectangle
## Medium
<div class="problems_problem_content__Xm_eO"><p><span style="font-size:20px">Given a 2D matrix M of dimensions RxC. Find the maximum sum submatrix in it.</span></p>

<p><strong><span style="font-size:20px">Example 1:</span></strong></p>

<pre><span style="font-size:20px"><strong>Input:</strong>
R=4
C=5
M=[[1,2,-1,-4,-20],
[-8,-3,4,2,1],
[3,8,10,1,3],
[-4,-1,1,7,-6]]
<strong>Output:</strong>
29
<strong>Explanation:</strong>
The matrix is as follows and the
blue rectangle denotes the maximum sum
rectangle.</span>
<img alt="Thumbnail" src="https://a.disquscdn.com/get?url=http%3A%2F%2Fwww.geeksforgeeks.org%2Fwp-content%2Fuploads%2Frectangle-11.png&amp;key=6UHjdHyGWQGo6f_kdpoBIQ&amp;w=320&amp;h=247">
</pre>

<p><span style="font-size:20px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:20px"><strong>Input:</strong>
R=2
C=2
M=[[-1,-2],[-3,-4]]
<strong>Output:</strong>
-1
<strong>Explanation:</strong>
Taking only the first cell is the 
optimal choice.</span></pre>

<p><br>
<span style="font-size:20px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function <strong>maximumSumRectangle()</strong> which takes the number R, C, and the 2D matrix M as input parameters and returns the maximum sum submatrix.</span></p>

<p><br>
<span style="font-size:20px"><strong>Expected Time Complexity:</strong>O(R*R*C)<br>
<strong>Expected Auxillary Space:</strong>O(R*C)</span><br>
&nbsp;</p>

<p><span style="font-size:20px"><strong>Constraints:</strong><br>
1&lt;=R,C&lt;=500<br>
-1000&lt;=M[i][j]&lt;=1000</span></p>
</div>

---




```python
#User function Template for python3


class Solution:
    def maximumSumRectangle(self,R,C,M):
        #code here
        def kadanes(arr):
            cs = 0; ms = arr[0]
            for a in arr:
                cs = max(a, cs + a)
                ms = max(ms, cs)
            return ms
        
        res = kadanes(M[0])
        for i in range(R):
            arr = [0]*C
            for r in range(i, -1, -1):
                for c in range(C):
                    arr[c] += M[r][c]
                res = max(res, kadanes(arr))
        
        return res
        
        
        
        


#{ 
 # Driver Code Starts
#Initial Template for Python 3

import math
import sys

if __name__=='__main__':
    t=int(sys.stdin.readline().strip())
    for _ in range(t):
        N,M=map(int,sys.stdin.readline().strip().split())
        a=[]
        for i in range(N):
            s=list(map(int,sys.stdin.readline().strip().split()))
            a.append(s)
        ob=Solution()
        print(ob.maximumSumRectangle(N,M,a))
# } Driver Code Ends
```
