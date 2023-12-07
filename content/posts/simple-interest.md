---
title: Simple Interest   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Simple Interest - GFG solution
description: Simple Interest   GFG Solution Explained
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


# Simple Interest
## Easy
<div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given three integers P,R and T, denoting Principal, Rate of Interest and Time period respectively.Compute the simple Interest.</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
P=100
R=20
T=2
<strong>Output:</strong>
40.00
<strong>Explanation:</strong>
The simple interest on 100 at a rate
of 20% across 2 time periods is 40.</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
P=999
R=9
T=9
<strong>Output:</strong>
809.19
<strong>Explanation:</strong>
The simple interest on 999 at a rate 
of 9% across 9 time periods is 809.19</span></pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything.Your Task is to complete the function <strong>simpleInterest()</strong> which takes three integers P,R and T and returns the simple interest.</span></p>

<p><br>
<span style="font-size:18px"><strong>Expected Time Complexity:</strong>O(1)<br>
<strong>Expected Auxillary Space:</strong>O(1)</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1&lt;=P&lt;=10<sup>5</sup><br>
1&lt;=R,T&lt;=100</span></p>
</div>

---




```cpp
//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends
// User function Template for C++

class Solution {
  public:
    double simpleInterest(int P, int R, int T) {
        // code here
        return ((P*T*R)/100.00);
    }
};

//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int P, R, T;
        cin >> P >> R >> T;
        Solution ob;
        cout << fixed << setprecision(2);
        cout << ob.simpleInterest(P, R, T) << "\n";
    }
}

// } Driver Code Ends
```
