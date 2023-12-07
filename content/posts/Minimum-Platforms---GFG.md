---
title: Minimum Platforms   GFG
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, Minimum Platforms - GFG solution
description: Minimum Platforms   GFG LeetCode Solution Explained
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


# Minimum Platforms
## Medium
<div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given arrival and departure times of all trains that reach a railway station. Find the minimum number of platforms required for the railway station so that no train is kept waiting.<br>
Consider that all the trains arrive on the same day and leave on the same day. Arrival and departure time can never&nbsp;be the same for a train&nbsp;but we can have arrival time of one train equal to departure time of the other.&nbsp;At any&nbsp;given instance of time, same platform can not be used for both departure of a train and arrival of another train.&nbsp;In such cases,&nbsp;we need different platforms<strong>.</strong></span></p>

<p><br>
<span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input</strong>: n = 6&nbsp;
arr[] = {0900, 0940, 0950, 1100, 1500, 1800}
dep[] = {0910, 1200, 1120, 1130, 1900, 2000}
<strong>Output</strong>: 3
<strong>Explanation</strong>: 
Minimum 3 platforms are required to 
safely arrive and depart all trains.</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input</strong>: n = 3
arr[] = {0900, 1100, 1235}
dep[] = {1000, 1200, 1240}
<strong>Output</strong>: 1
<strong>Explanation</strong>: Only&nbsp;1 platform is required to 
safely manage the arrival and departure 
of all trains.&nbsp;</span>
</pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function&nbsp;<strong>findPlatform()</strong>&nbsp;which takes the array arr[] (denoting the arrival times), array dep[] (denoting the departure times)&nbsp;and the size of the array as inputs and returns the minimum number of platforms required at the railway station such that no train waits.</span></p>

<p><span style="font-size:18px"><strong>Note:</strong> Time intervals are in the 24-hour format(<strong>HHMM) ,</strong>&nbsp;where the first two characters represent hour (between 00 to 23 ) and the last two characters represent minutes (this may be &gt; 59).</span></p>

<p><br>
<span style="font-size:18px"><strong>Expected Time Complexity:&nbsp;</strong>O(nLogn)<br>
<strong>Expected Auxiliary Space:&nbsp;</strong>O(n)</span></p>

<p><br>
<span style="font-size:18px"><strong>Constraints:</strong><br>
1 ≤ n ≤ 50000<br>
0000 ≤ A[i] ≤ D[i] ≤ 2359</span></p>
</div>

---




```python
#User function Template for python3

class Solution:    
    #Function to find the minimum number of platforms required at the
    #railway station such that no train waits.
    def minimumPlatform(self,n,arr,dep):
        # code here
        arr.sort()
        dep.sort()
        a,d = 0,0 
        ans, tmp = 0, 0
        while a < n and d < n:
            if arr[a] <= dep[d]:
                tmp += 1
                a += 1
            else:
                tmp -= 1
                d += 1
            ans = max(ans, tmp)
        
        return ans        





#{ 
 # Driver Code Starts
#Initial Template for Python 3
import atexit
import io
import sys

#Contributed by : Nagendra Jha


if __name__ == '__main__':
    test_cases = int(input())
    for cases in range(test_cases) :
        n = int(input())
        arrival = list(map(int, input().strip().split()))
        departure = list(map(int, input().strip().split()))
        ob=Solution()
        print(ob.minimumPlatform(n,arrival,departure))
# } Driver Code Ends
```
