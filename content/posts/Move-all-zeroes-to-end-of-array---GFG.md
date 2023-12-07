---
title: Move all zeroes to end of array   GFG
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, Move all zeroes to end of array - GFG solution
description: Move all zeroes to end of array   GFG LeetCode Solution Explained
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


# Move all zeroes to end of array
## Easy
<div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given an array <strong>arr[]</strong> of <strong>N</strong> positive integers. Push all the zeros of the given array to the right end of the array while maintaining the order of non-zero elements.</span></p>
<p><br><span style="font-size: 18px;"><strong>Example 1:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input:
</strong>N = 5
Arr[] = {3, 5, 0, 0, 4}
<strong>Output:</strong> 3 5 4 0 0
<strong>Explanation:</strong> The non-zero elements
preserve their order while the 0
elements are moved to the right.
</span></pre>
<p><span style="font-size: 18px;"><strong>Example 2:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input:
</strong>N = 4
Arr[] = {0, 0, 0, 4}
<strong>Output:</strong> 4 0 0 0
<strong>Explanation:</strong>&nbsp;4 is the only non-zero
element and it gets moved to the left.
</span></pre>
<p><br><span style="font-size: 18px;"><strong>Your Task:</strong><br>You don't need to read input or print anything. Complete the function <strong>pushZerosToEnd()</strong>&nbsp;which takes the&nbsp;array <strong>arr[] </strong>and its size&nbsp;<strong>n</strong>&nbsp;as input parameters&nbsp;and modifies arr[] in-place such that all the zeroes are moved to the&nbsp;right.&nbsp;&nbsp;</span></p>
<p><br><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong>&nbsp;O(N)<br><strong>Expected Auxiliary Space:</strong>&nbsp;O(1)</span></p>
<p><br><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 ≤ N&nbsp;≤ 10<sup>5</sup><br>0 ≤ arr<sub>i</sub> ≤ 10<sup>5</sup></span></p></div>

---




```python
#User function Template for python3

class Solution:
	def pushZerosToEnd(self,arr, n):
    	# code here
    	l = 0
    	for r in range(n):
    	    if arr[r] != 0:
    	        arr[l], arr[r] = arr[r], arr[l]
    	        l += 1
        return arr
    	


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    tc = int(input())
    while tc > 0:
        n = int(input())
        arr = list(map(int, input().strip().split()))
        ob = Solution()
        ob.pushZerosToEnd(arr, n)
        for x in arr:
            print(x, end=" ")
        print()
        tc -= 1
# } Driver Code Ends
```
