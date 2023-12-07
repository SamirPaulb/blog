---
title: C++ Data Types   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, C++ Data Types - GFG solution
description: C++ Data Types   GFG Solution Explained
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


# C++ Data Types
## Easy
<div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Read a value and store it in the appropriate C++ Data Type.&nbsp;</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>
2 h 2.555
<strong>Output:</strong>
2
h
2.555 </span>
<span style="font-size:18px"><strong>Explanation:</strong></span>
<span style="font-size:18px">The three inputs are printed in order.</span>
</pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
Your task is to complete each of the given functions&nbsp;<br>
<strong>cppIntType() </strong>: read an integer input, store it in appropriate data type and return it.&nbsp;<br>
<strong>cppCharType() :&nbsp;</strong>read a character&nbsp;input, store it in appropriate data type and return it.&nbsp;<strong>&nbsp;<br>
cppFloatType() :&nbsp;</strong>read a float&nbsp;input, store it in appropriate data type and return it.&nbsp;</span></p>

<p><br>
<span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(1)<br>
<strong>Expected Auxiliary Space:</strong> O(1)</span></p>

<p>&nbsp;</p>
</div>

---




```cpp
//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends
class Solution {
  public:
    int cppIntType() {
        // code here
        int a;
        cin>>a;
        return a;
    }
    
    char cppCharType() {
        // code here
        char b;
        cin>>b;
        return b;
    }
    
    float cppFloatType() {
        // code here
        float c;
        cin>>c;
        return c;
    }
};

//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        Solution ob;
        cout << ob.cppIntType() << endl;
        cout << ob.cppCharType() << endl;
        cout << ob.cppFloatType() << endl;
    }
    return 0;
}
// } Driver Code Ends
```
