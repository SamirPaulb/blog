---
title: Count total set bits   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Count total set bits - GFG solution
description: Count total set bits   GFG Solution Explained
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


# Count total set bits
## Medium 
<div class="problem-statement">
                <p></p><p><span style="font-size:18px">You are given a number<strong> N</strong>. Find the <strong>total count of set bits </strong>for all numbers from 1 to N(both inclusive).</span><br>
<br>
<span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input</strong>: N = 4
<strong>Output</strong>: 5
<strong>Explanation</strong>:
For numbers from 1 to 4.
For 1: 0 0 1 = 1 set bits
For 2: 0 1 0 = 1 set bits
For 3: 0 1 1 = 2 set bits
For 4: 1 0 0 = 1 set bits
Therefore, the total set bits is 5.</span>
</pre>

<p><strong><span style="font-size:18px">Example 2:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input</strong>: N = 17
<strong>Output</strong>: 35
<strong>Explanation</strong>: From numbers 1 to 17(both inclusive), 
the total number of set bits is 35.</span></pre>

<p><br>
<strong>Your Task:&nbsp;</strong><span style="font-size:18px">The task is to complete the function <strong>countSetBits</strong>() that takes <strong>n as a parameter </strong>and returns the<strong> count of all bits</strong>.<br>
<br>
<strong>Expected Time Complexity:</strong>&nbsp;O(log N).<br>
<strong>Expected Auxiliary Space:</strong>&nbsp;O(1).</span><br>
<br>
<span style="font-size:18px"><strong>Constraints:</strong></span><br>
<span style="font-size:18px">1 ≤ N ≤ 10<sup>8</sup></span></p>
 <p></p>
            </div>

---




```cpp
// { Driver Code Starts
//Initial Template for C++

#include<bits/stdc++.h>
using namespace std;


 // } Driver Code Ends
//User function Template for C++

class Solution{
    public:
    // n: input to count the number of set bits
    //Function to return sum of count of set bits in the integers from 1 to n.
    
    int max2(int n) {
        int c = 0;
        while((1 << c) <= n) {
            c++;
        }
        return c - 1;
    }
    
    int countSetBits(int n)
    {
        // Your logic here
        if(n == 0)
        return 0;
        int x = max2(n);
        int ans = x * ( 1 << (x -1)) + (n - (1 << x)) + 1 + countSetBits(n - (1<<x));
        return ans;
    }
};


// { Driver Code Starts.

// Driver code
int main()
{
	 int t;
	 cin>>t;// input testcases
	 while(t--) //while testcases exist
	 {
	       int n;
	       cin>>n; //input n
	       Solution ob;
	       cout << ob.countSetBits(n) << endl;// print the answer
	  }
	  return 0;
}
  // } Driver Code Ends
```
