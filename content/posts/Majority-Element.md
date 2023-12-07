---
title: Majority Element
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, Majority Element solution
description: Majority Element LeetCode Solution Explained
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


<h2><a href="https://practice.geeksforgeeks.org/problems/majority-element-1587115620/1?page=1&company[]=Amazon&sortBy=submissions">Majority Element</a></h2><h3>Difficulty Level : Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given an array <strong>A</strong> of <strong>N</strong> elements. Find the majority element in the array.&nbsp;A majority element in an array A of size N is an <strong>element that appears more than N/2 times in the array</strong>.</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>N = 3 
A[] = {1,2,3} 
<strong>Output:
</strong>-1<strong>
Explanation:
</strong>Since, each element in 
{1,2,3} appears only once so there 
is no majority element.</span>
</pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>N = 5 
A[] = {3,1,3,3,2} 
<strong>Output:
</strong>3<strong>
Explanation:
</strong>Since, 3 is present more
than N/2 times, so it is 
the majority element.</span>
</pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:</strong><br>
The task is to complete the function <strong>majorityElement</strong>() which returns&nbsp;the majority element in the array. If no majority exists, return -1.</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong>&nbsp;O(N).<br>
<strong>Expected Auxiliary Space:</strong>&nbsp;O(1).</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 ≤ N ≤ 10<sup>7</sup><br>
0 ≤ A<sub>i</sub> ≤ 10<sup>6</sup></span></p>
</div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>Flipkart</code>&nbsp;<code>Accolite</code>&nbsp;<code>Amazon</code>&nbsp;<code>Microsoft</code>&nbsp;<code>D-E-Shaw</code>&nbsp;<code>Google</code>&nbsp;<code>Nagarro</code>&nbsp;<code>Atlassian</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Searching</code>&nbsp;<code>Greedy</code>&nbsp;<code>Data Structures</code>&nbsp;<code>Algorithms</code>&nbsp;

---




```python
#Back-end complete function Template for Python 3

class Solution:
    # use linear search to compute candidate for majority element
    def findCandidate(self, A):
        maj_index = 0
        count = 1
        for i in range(len(A)):
            if A[maj_index] == A[i]:
                count += 1
            else:
                count -= 1
            if count == 0:
                maj_index = i
                count = 1
        return A[maj_index]
        
    # Function to check if the candidate occurs more than n/2 times
    def isMajority(self, A, cand):
        count = 0
        for i in range(len(A)):
            if A[i] == cand:
                count += 1
        if count > len(A)/2:
            return True
        else:
            return False
    
    def majorityElement(self, A,N):
        cand = self.findCandidate(A)
    
        # Print the candidate if it is Majority
        if self.isMajority(A, cand) == True:
            return cand
        else:
            return -1


#{ 
 # Driver Code Starts
#Initial Template for Python 3

import math

from sys import stdin


def main():
        T=int(input())
        while(T>0):
            
            N=int(input())

            A=[int(x) for x in input().strip().split()]
            
            
            obj = Solution()
            print(obj.majorityElement(A,N))
            
            T-=1


if __name__ == "__main__":
    main()
# } Driver Code Ends
```
