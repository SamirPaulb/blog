---
title: Sieve of Eratosthenes   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Sieve of Eratosthenes - GFG solution
description: Sieve of Eratosthenes   GFG Solution Explained
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


# Sieve of Eratosthenes
## Easy
<div class="problem-statement">
                <p></p><p><span style="font-size:18px">Given a number <strong>N</strong>, calculate the prime numbers up to N using Sieve of Eratosthenes.&nbsp;&nbsp;</span></p>

<p><strong><span style="font-size:18px">Example 1:</span></strong></p>

<pre><strong><span style="font-size:18px">Input:
</span></strong><span style="font-size:18px">N = 10</span>

<strong><span style="font-size:18px">Output:
</span></strong><span style="font-size:18px">2 3 5 7</span>

<strong><span style="font-size:18px">Explanation:
</span></strong><span style="font-size:18px">Prime numbers less than equal to N 
are 2 3 5 and 7.</span></pre>

<p><strong><span style="font-size:18px">Example 2:</span></strong></p>

<pre><strong><span style="font-size:18px">Input:
</span></strong><span style="font-size:18px">N = 35</span>

<span style="font-size:18px"><strong>Output:</strong>
2 3 5 7 11 13 17 19 23 29 31</span>

<span style="font-size:18px"><strong>Explanation:</strong>
Prime numbers less than equal to 35 are
2 3 5 7 11 13 17 19 23 29 and 31.</span></pre>

<p><span style="font-size:18px"><strong>Your Task:&nbsp;&nbsp;</strong><br>
You don't need to read input or print anything. Your task is to complete the function&nbsp;<strong>sieveOfEratosthenes</strong><strong>()</strong>&nbsp;which takes an integer N as an input parameter and return&nbsp;the list of prime numbers less than equal to N.</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong>&nbsp;O(NloglogN)<br>
<strong>Expected Auxiliary Space:</strong>&nbsp;O(N)</span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong></span><br>
<span style="font-size:18px">1&lt;= N &lt;= 10<sup>4</sup></span></p>
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
    vector<int> sieveOfEratosthenes(int N)
    {
        // Write Your Code here
        int i, j;
        vector<int>v;
        for(i = 2; i <= N; i++) {
            for(j = 2; j <= i/2; j++) 
                if(i%j == 0) 
                break;
                if(j == (i/2) + 1)
                v.push_back(i);
        }
        return v;
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
        vector<int> primes  = ob.sieveOfEratosthenes(N);
        for(auto prime : primes) {
            cout<< prime <<" ";
        }
        cout<<endl;
    }
    return 0;
}  // } Driver Code Ends
```
