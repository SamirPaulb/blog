---
title: Power of 2   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Power of 2 - GFG solution
description: Power of 2   GFG Solution Explained
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


# Power of 2
## Easy
<div class="problem-statement">
                <p></p><p><span style="font-size:18px">Given a non-negative integer <strong>N</strong>. The task is to check if N is a power of <strong>2</strong>. More formally, check if<strong> N </strong>can be expressed as <strong>2<sup>x</sup> </strong>for some <strong>x.</strong></span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>N = 1
<strong>Output: </strong>YES
<strong>Explanation:</strong>1 is equal to 2 
raised to 0 (2<sup>0</sup> = 1).</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>N = 98
<strong>Output: </strong>NO
<strong>Explanation: </strong>98 cannot be obtained
by any power of 2.</span></pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:</strong>Your task is to complete the function <strong>isPowerofTwo</strong>() which takes <strong>n </strong>as a parameter and returns <strong>true or false</strong> by <strong>checking</strong> if the given number can be represented as a power of two or not.<br>
<br>
<strong>Expected Time Complexity:</strong>O(log N).<br>
<strong>Expected Auxiliary Space:</strong>O(1).<br>
<br>
<strong>Constraints:</strong><br>
0 ≤N ≤10<sup>18</sup></span></p>
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
    // Function to check if given number n is a power of two.
    bool isPowerofTwo(long long n){
        
        // Your code here    
        if ( n == 0 )
        return false;
        return ((n & (n - 1)) == 0);
    }
};

// { Driver Code Starts.

// Driver code
int main()
{

    int t;
    cin>>t;//testcases

    for(int i=0;i<t;i++)
    {
        long long n; //input a number n
        cin>>n;

        Solution ob;
         if(ob.isPowerofTwo(n))//Now, if log2 produces an integer not decimal then we are sure raising 2 to this value
             cout<<"YES"<<endl;
         else
            cout<<"NO"<<endl;

    }

    return 0;
}
  // } Driver Code Ends
```
