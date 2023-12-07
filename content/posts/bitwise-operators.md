---
title: Bitwise Operators   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Bitwise Operators - GFG solution
description: Bitwise Operators   GFG Solution Explained
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


# Bitwise Operators
## Easy
<div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Bitwise operators are useful when we want to work with bits. Here, we'll take a look at them.</span></p>

<p><span style="font-size:18px">Given three positive integers <strong>a</strong>, <strong>b</strong> and <strong>c</strong>. Your task is to perform some bitwise operations on them as given below:<br>
<strong>1.</strong> d = a ^ a<br>
<strong>2. </strong>e = c ^ b<br>
<strong>3.</strong> f = a &amp; b<br>
<strong>4.</strong> g = c | (a ^ a)<br>
<strong>5.</strong>&nbsp;h&nbsp;= ~e<br>
<strong>Note: ^ </strong>is for xor. The working of bitwise operators can be found <a href="https://www.geeksforgeeks.org/bitwise-operators-in-c-cpp/">here</a>.</span></p>

<p><span style="font-size:18px"><strong>Example:</strong></span></p>

<div style="background:#eee;border:1px solid #ccc;padding:5px 10px;"><span style="font-size:18px"><strong>Input:</strong><br>
a = 4<br>
b = 8<br>
c = 2<br>
<strong>Output:</strong><br>
0<br>
10<br>
0<br>
2<br>
-11</span></div>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= A, B, C &lt;= 10<sup>6</sup></span></p>

<p>&nbsp;</p>

<p><strong><span style="font-size:18px">Video:</span></strong></p>

<p><iframe frameborder="0" height="315" src="https://www.youtube.com/embed/WFy9SFJsAWQ" width="560"></iframe></p>
</div>

---




```cpp
//{ Driver Code Starts
// Initial Template for C++

#include <iostream>
using namespace std;

// Function Prototype
void bitWiseOperation(int, int, int);


// } Driver Code Ends
// User function Template for C++

// Function to perform bitwise manipulations
// a, b and c are input integers
void bitWiseOperation(int a, int b, int c) {

    // Your code here
    int d = a^a;
    int e = c^b;
    int f = a & b;
    int g = c | (a ^ a);
    int h = ~e;
    
    cout << d << endl << e << endl << f << endl << g << endl << h << endl;
}

//{ Driver Code Starts.

// Driver code to test above function
int main() {

    int t;
    cin >> t;

    while (t--) {
        int a, b, c;
        cin >> a >> b >> c;

        bitWiseOperation(a, b, c);
    }

    return 0;
}
// } Driver Code Ends
```
