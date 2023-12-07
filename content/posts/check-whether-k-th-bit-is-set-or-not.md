---
title: Check whether K th bit is set or not   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Check whether K-th bit is set or not - GFG solution
description: Check whether K th bit is set or not   GFG Solution Explained
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


# Check whether K-th bit is set or not
## Easy 
<div class="problem-statement">
                <p></p><p><span style="font-size:18px">Given a number <strong>N </strong>and a bit number <strong>K</strong>, check if <strong>K<sup>th</sup></strong> bit of N is <strong>set or not</strong>. A bit is called set if it is 1. Position of set bit&nbsp;'1' should be <strong>indexed starting with 0</strong>&nbsp;from <strong>LSB </strong>side in&nbsp;binary representation of the number.</span><br>
<br>
<span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input</strong>: N = 4, K = 0
<strong>Output</strong>: No
<strong>Explanation</strong>: Binary representation of 4 is 100, 
in which 0<sup>th</sup> bit from LSB is not set. 
So, return false.</span></pre>

<p><strong><span style="font-size:18px">Example 2:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input</strong>: N = 4, K = 2
<strong>Output</strong>: Yes
<strong>Explanation</strong>: Binary representation of 4 is 100, 
in which 2<sup>nd</sup> bit from LSB is set. 
So, return true.</span></pre>

<p><strong><span style="font-size:18px">Example 3:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input</strong>: N = 500, K = 3
<strong>Output</strong>: No
<strong>Explanation</strong>: Binary representation of 500&nbsp;is 
111110100, in which 3rd bit from LSB is not set. 
So, return false.</span></pre>

<div><br>
<strong><span style="font-size:18px">Your task:</span></strong></div>

<div><span style="font-size:18px">You don't have to read input or print anything. Your task is&nbsp;to complete the <strong>function checkKthbit </strong>that takes <strong>n and k as parameters</strong> and <strong>returns </strong>either <strong>true </strong>(if kth bit is set) or <strong>false</strong>(if kth bit is not set).</span><br>
<br>
<span style="font-size:18px"><strong>Expected Time Complexity:</strong>&nbsp;O(LogN).<br>
<strong>Expected Auxiliary Space:</strong>&nbsp;O(1).</span><br>
<br>
<span style="font-size:18px"><strong>Constraints:</strong><br>
1 ≤ N ≤ 10<sup>9</sup><br>
0 ≤ K ≤ floor(log<sub>2</sub>(N) + 1)</span></div>
 <p></p>
            </div>

---




```cpp
// { Driver Code Starts
//Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


 // } Driver Code Ends
//User function Template for C++


class Solution
{
    public:
    // Function to check if Kth bit is set or not.
    bool checkKthBit(int n, int k)
    {
        // Your code here
        // It can be a one liner logic!! Think of it!!
        return (n & (1 << (k)));
    }
};

// { Driver Code Starts.

// Driver Code
int main()
{
	int t;
	cin>>t;//taking testcases
	while(t--)
	{
	    long long n;
	    cin>>n;//input n
	    int k;
	    cin>>k;//bit number k
	    Solution obj;
	    if(obj.checkKthBit(n, k))
	        cout << "Yes" << endl;
	    else
	        cout << "No" << endl;
	}
	return 0;
}  // } Driver Code Ends
```
