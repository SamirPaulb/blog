---
title: The Nth Fibonnaci   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, The Nth Fibonnaci - GFG solution
description: The Nth Fibonnaci   GFG Solution Explained
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


# The Nth Fibonnaci
## Easy 
<div class="problem-statement">
                <p></p><p><span style="font-size:18px">Given a positive integer <strong>N</strong>, find the last digit of the <strong>N<sup>th</sup></strong> term from the Fibonacci series.</span></p>

<p><span style="font-size:18px"><strong>Note:&nbsp;</strong>For N=0 you have to return 0.</span><br>
&nbsp;</p>

<p><strong><span style="font-size:18px">Example 1:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
N = 5
<strong>Output:</strong>
5
<strong>Explanation:</strong>
5th Fibonacci number is 5</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
N = 14
<strong>Output:</strong>
7
<strong>Explanation:</strong>
14th Fibonacci number is 377
It's last digit is 7</span>
</pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function&nbsp;<strong>fib()</strong>&nbsp;which takes an integer N<strong>&nbsp;</strong>as input parameter&nbsp;and returns the last digit of Nth Fibonacci number.</span><br>
<br>
<span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(N)<br>
<strong>Expected Space Complexity:</strong> O(1)</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
0 &lt;= N &lt;= 1000</span></p>
 <p></p>
            </div>

---




```cpp
// { Driver Code Starts
#include<bits/stdc++.h>
using namespace std;

 // } Driver Code Ends
class Solution{
public:
    int fib(int N){
        //code here
        if(N <= 1) return N;
        int a = 0, b = 1, c;
        for(int i = 2; i <= N; i ++) {
            c = (a+b) % 10;
            a = b, b = c;
        }
        return c;
    }
};

// { Driver Code Starts.
int main() 
{ 
    int t;
    cin>>t;
    while(t--)
    {
        int N;
        cin>>N;
        Solution ob;
        cout << ob.fib(N) << endl;
    }
    return 0; 
}  // } Driver Code Ends
```
