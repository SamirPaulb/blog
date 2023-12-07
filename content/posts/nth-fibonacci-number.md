---
title: Nth Fibonacci Number   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Nth Fibonacci Number - GFG solution
description: Nth Fibonacci Number   GFG Solution Explained
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


# Nth Fibonacci Number
## Easy 
<div class="problem-statement">
                <p></p><p><span style="font-size:18px">Given a positive integer n, find the nth fibonacci number.&nbsp;Since the answer can be very large, return&nbsp;the answer modulo 1000000007.</span><br>
<br>
<span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input</strong>: n = 2
<strong>Output:</strong>&nbsp;1&nbsp;
<strong>Explanation</strong>: 1 is the 2nd number
of fibonacci series.</span>
</pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>n = 5
<strong>Output:&nbsp;</strong>5
<strong>Explanation</strong>: 5 is the 5th number
of fibonacci series.
</span></pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:&nbsp;&nbsp;</strong><br>
You dont need to read input or print anything. Complete the function <strong>nthFibonacci()&nbsp;</strong>which takes n&nbsp;as input parameter and returns nth fibonacci number.<br>
<br>
<strong>Expected Time Complexity:</strong> O(n)<br>
<strong>Expected Auxiliary Space:</strong> O(n)<br>
<br>
<strong>Constraints:</strong><br>
1&lt;= n&nbsp;&lt;=1000</span></p>
 <p></p>
            </div>

---




```cpp
// { Driver Code Starts
// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;

 // } Driver Code Ends
// User function Template for C++
class Solution {
  public:
    long long int nthFibonacci(long long int n){
        // code here
        int mod = 1000000007;
        
        int a = 0, b = 1, curr;
        for(int i = 2; i <= n; i++)
        {
            curr = (a % mod + b % mod) % mod;
            a = b;
            b = curr;
        }
        return curr;
    }
};

// { Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        long long int n;
        cin >> n;
        Solution ob;
        cout << ob.nthFibonacci(n) << endl;
    }
    return 0;
}
  // } Driver Code Ends
```
