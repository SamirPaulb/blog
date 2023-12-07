---
title: Black and White   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Black and White - GFG solution
description: Black and White   GFG Solution Explained
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


# Black and White
## Medium
<div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given&nbsp;the chessboard dimensions. Find out the number of ways we can place a black and a white Knight on this chessboard such that they cannot attack each other.</span></p>

<p><span style="font-size:18px"><strong>Note:</strong><br>
The knights have to be placed on different squares. A knight can move two squares horizontally and one square vertically (L shaped), or two squares vertically and one square horizontally (L shaped). The knights attack each other if one can reach the other in one move.</span></p>

<p><strong><span style="font-size:18px">Example 1:</span></strong></p>

<pre><strong><span style="font-size:18px">Input:
</span></strong><span style="font-size:18px">N = 2, M = 2
<strong>Output: </strong>12 
<strong>Explanation</strong>: There are 12 ways we can place a black and a white Knight on this chessboard such that they cannot attack each other.</span>

</pre>

<p><strong><span style="font-size:18px">Example 2:</span></strong></p>

<pre><strong><span style="font-size:18px">Input:
</span></strong><span style="font-size:18px">N = 2, M = 3
<strong>Output: </strong>26
<strong>Explanation</strong>: There are 26 ways we can place a black and a white Knight on this chessboard such that they cannot attack each other.</span>
</pre>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
Your task is to complete the function <strong>numOfWays()&nbsp;</strong>which takes the chessboard dimensions N and M as inputs and returns the number of ways we can place 2 Knights on this chessboard such that they cannot attack each other. Since this number can be very large, return it modulo 10<sup>9</sup>+7.</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:&nbsp;</strong>O(N*M).<br>
<strong>Expected Auxiliary Space:&nbsp;</strong>O(1).</span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong></span><br>
<span style="font-size:18px">1 &lt;= N&nbsp;* M &lt;= 10<sup>5</sup></span></p>
</div>

---




```cpp
//{ Driver Code Starts
#include <bits/stdc++.h>

using namespace std;

long long numOfWays(int n, int m);

int main() {
    // code
    int T;
    cin >> T;
    while (T--) {
        int n, m;
        cin >> n >> m;
        cout << numOfWays(n, m) << endl;
    }
    return 0;
}
// } Driver Code Ends


//Function to find out the number of ways we can place a black and a 
//white Knight on this chessboard such that they cannot attack each other.
long long numOfWays(int N, int M)
{
    // write code here
    long long int mod = 1e9+7 ;
    long long int ans = 0 ;
    long long int a1 = 1 , a2 = 2 , a4 =4;
    ans+=(long long)(((N*M) -a1)*(N*M)) ;
    if(N >=2 && M>=3){
        ans-=(long long)((N-a1)*(a4)*(M-a2)) ;
    }
    if(N >=3 && M>=2){
        ans-= (long long)((N-a2)*(a4)*(M-a1)) ;
    }
    return (ans%mod) ;
}
```
