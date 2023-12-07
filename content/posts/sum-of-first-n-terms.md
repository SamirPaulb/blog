---
title: Sum of first n terms   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Sum of first n terms - GFG solution
description: Sum of first n terms   GFG Solution Explained
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


# Sum of first n terms
## Easy
<div class="problem-statement">
                <p></p><p><span style="font-size:18px">Given and integer N.Calculate&nbsp;the sum of series 1<sup>3</sup> + 2<sup>3</sup> + 3<sup>3</sup> + 4<sup>3</sup> + …&nbsp;till N-th term.</span></p>

<p><strong><span style="font-size:18px">Example 1:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
N=5
<strong>Output:</strong>
225
<strong>Explanation:</strong>
1<sup>3</sup>+2<sup>3</sup>+3<sup>3</sup>+4<sup>3</sup>+5<sup>3</sup>=225</span></pre>

<p><strong><span style="font-size:18px">Example 2:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
N=7
<strong>Output:</strong>
784
<strong>Explanation:</strong>
1<sup>3</sup>+2<sup>3</sup>+3<sup>3</sup>+4<sup>3</sup>+5<sup>3</sup>+6<sup>3</sup>+7<sup>3</sup>=784</span></pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything.Your task is to complete the function <strong>sumOfSeries()</strong> which takes the integer N as parameter and returns the sum of the cubes of the first N natural numbers.</span></p>

<p><br>
<span style="font-size:18px"><strong>Expected Time Complexity:</strong>O(1)<br>
<strong>Expected Auxillary Space:</strong>O(1)</span></p>

<p><br>
<span style="font-size:18px"><strong>Constraints:</strong><br>
1&lt;=N&lt;=50000</span></p>
 <p></p>
            </div>

---




```cpp
// { Driver Code Starts
// Initial template for C++
#include <bits/stdc++.h>
using namespace std;

 // } Driver Code Ends
// User function template for C++

class Solution {
  public:
    long long sumOfSeries(long long N) {
        // code here
        long long sum = N * (N + 1)/2;
        return sum * sum;
    }
};

// { Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        long long N;
        cin >> N;
        Solution ob;
        cout << ob.sumOfSeries(N) << "\n";
    }
}  // } Driver Code Ends
```
