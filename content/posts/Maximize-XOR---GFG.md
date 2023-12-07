---
title: Maximize XOR   GFG
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, Maximize XOR - GFG solution
description: Maximize XOR   GFG LeetCode Solution Explained
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


# Maximize XOR
## Easy
<div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a number X find the total numbers A&nbsp;such that A XOR X&nbsp;&gt;= X, &nbsp;and 1&lt;=A&lt;=X.</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>10
<strong>Output: </strong>5
<strong>Explanation: </strong>Calculating XOR of 10 with
{1, 4, 5, 6, 7} give values greater than 
equal to 10.</span>
</pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>5
</span><strong><span style="font-size:18px">Output: </span></strong><span style="font-size:18px">2
<strong>Explanation: </strong>Calculating XOR of 5 with 
{2, 3} give values greater than 5.
</span>
</pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read or print anything. Your task is to complete the function&nbsp;<strong>maximize_xor_count()&nbsp;</strong>which takes X as input parameter and returns total numbers A.</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:&nbsp;</strong>O(log(n))<br>
<strong>Expected Space Complexity:&nbsp;</strong>O(1)</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= X &lt;= 10<sup>8</sup></span></p>
</div>

---




```python
'''
Step 1:- Just find out the position of unset bit in number.
Step 2:- Suppose, if unset bit at i'th position then add (2^i)/2 in result variable
         /2 as that bit will not be consider and all permutation of right-side bits will 
         be lesser.
Step 3:- Right shift number n one time
Step 4:- continue till num become zero(0)
'''


class Solution:
	def maximize_xor_count(self, n):
		res = 0
		i = 1
		while n:
		    if n&1 == 0:
		        res += (2**i)//2
		    i += 1
            n = n >> 1
        return res

# Time: O(32)
# Space: O(1)



#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
	T=int(input())
	for i in range(T):
		n = int(input())
		ob = Solution();
		ans = ob.maximize_xor_count(n)
		print(ans)


# } Driver Code Ends
```
