---
title: Print 1 to n without using loops   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Print 1 to n without using loops - GFG solution
description: Print 1 to n without using loops   GFG Solution Explained
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


# Print 1 to n without using loops
## Easy
<div class="problem-statement">
                <p></p><p><span style="font-size:18px">You are given an integer <strong>N</strong>.&nbsp;Print numbers from 1 to N without the help of loops.</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
N = 5
<strong>Output:</strong>
1 2 3 4 5
<strong>Explanation:</strong>
We have to print numbers from 1 to 5.</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
N = 10
<strong>Output:</strong>
1 2 3 4 5 6 7 8 9 10
<strong>Explanation:</strong>
We have to print numbers from 1 to 10.</span></pre>

<p><span style="font-size:18px"><strong>Your Task:&nbsp;&nbsp;</strong><br>
You don't need to read input. Your task is to complete the function&nbsp;printTillN()&nbsp;which takes an integer N as an input parameter and&nbsp;print numbers from 1 to N&nbsp;space-separated integers without the help of loops.<br>
Note: print newline character at the end.</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong>&nbsp;O(N)<br>
<strong>Expected Auxiliary Space:</strong>&nbsp;O(1)</span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 ≤ N ≤ 1000</span></p>
 <p></p>
            </div>

---




```cpp
// { Driver Code Starts
#include<bits/stdc++.h> 
using namespace std; 

 // } Driver Code Ends
//User function Template for C++
class Solution
{
public:
    void printTillN(int N)
    {
        // Write Your Code here
        if(N == 0) return;
        printTillN(N - 1);
        cout << N << " ";
    }
};

// { Driver Code Starts.
int main()
{
    int t;
    cin >> t;
    while (t--)
    {
        int N;
        cin>>N;
        Solution ob;
        ob.printTillN(N);
        cout<<endl;
    }
    return 0;
}  // } Driver Code Ends
```
