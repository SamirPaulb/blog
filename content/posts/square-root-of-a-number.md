---
title: Square root of a number   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Square root of a number - GFG solution
description: Square root of a number   GFG Solution Explained
cover:
    image: https://scdn.netlify.app/img/gfg.webp
    alt: leetcode-cover-img
    caption: leetcode-cover-img
images: https://scdn.netlify.app/img/gfg.webp
date: 2021-10-04T15:58:26+08:00
lastmod: 2022-03-04T15:58:26+08:00
draft: false
author: Samir Paul
authorLink: https://twitter.com/intent/follow?screen_name=SamirPaulb
license: CC BY 4.0
---


# Square root of a number
## Medium
<div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given an integer <strong>x,</strong>&nbsp;find the square root of x. If <strong>x</strong> is not a perfect square, then return floor(√x).</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>x = 5
<strong>Output: </strong>2<strong>
Explanation: </strong>Since, 5 is not a perfect 
square, floor of square_root of 5 is 2.</span>
</pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>x = 4
<strong>Output: </strong>2<strong>
Explanation: </strong>Since, 4 is a perfect 
square, so its square root is 2.</span></pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything.&nbsp;The task is to complete the function <strong>floorSqrt</strong>() which takes x as the input parameter and&nbsp;return its square root.<br>
<strong>Note: </strong>Try Solving the question without using the sqrt function.&nbsp;The value of x&gt;=0.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong>&nbsp;O(log N)<br>
<strong>Expected Auxiliary Space:</strong>&nbsp;O(1)</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong></span><br>
<span style="font-size:18px">1 ≤ x ≤ 10<sup>7</sup></span></p>
</div>

---




```cpp
//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;

  

// } Driver Code Ends
// Function to find square root
// x: element to find square root
class Solution{
  public:
    long long int floorSqrt(long long int x) 
    {
        // Your code goes here  
        long long int s = 1, e = x/2;
        
        long long  ans = 1;
        
        while(s <= e) {
            long long int m = (s+e)/2;
            
            if(m*m <= x) {
                s = m + 1;
                ans = m;
            } else {
                e = m - 1;
            }
        }
        return ans;
    }
};

//{ Driver Code Starts.

int main()
{
	int t;
	cin>>t;
	while(t--)
	{
		long long n;
		cin>>n;
		Solution obj;
		cout << obj.floorSqrt(n) << endl;
	}
    return 0;   
}

// } Driver Code Ends
```
