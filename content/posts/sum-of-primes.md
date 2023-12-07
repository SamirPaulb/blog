---
title: Sum of primes   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Sum of primes - GFG solution
description: Sum of primes   GFG Solution Explained
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


# Sum of primes
## Easy
<div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Your task is to calculate sum&nbsp; of primes present as digits of given number N.</span></p>

<p><strong><span style="font-size:18px">Example 1:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input:</strong> 333
<strong>Output:</strong> 9
<strong>Explaination:</strong> 3 is a prime number. It 
is present 3 times. So 3+3+3 = 9.</span></pre>

<p><strong><span style="font-size:18px">Example 2:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input:</strong> 686
<strong>Output:</strong> 0
<strong>Explaination:</strong> Neither 6 nor 8 is a 
prime number.</span></pre>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You do not need to read input or print anything. Your task is to complete the function <strong>primeSum()</strong> which takes N as input parameter and returns the sum of all the prime digits present in the number N.</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(logN)<br>
<strong>Expected Auxiliary Space:</strong> O(1)</span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 ≤ N ≤ 5*10<sup>4</sup>&nbsp; &nbsp;</span></p>
</div>

---




```cpp
//{ Driver Code Starts
//Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends
//User function Template for C++

class Solution{
    bool isPrime(int n) 
    {
        if(n==0 || n ==1)
        return false;
        else if(n == 2 || n == 3)
        return true;
        else if(n % 2 == 0 || n % 3 == 0)
        return false;
        else {
            for(int i = 5; i * i <= n; i+=6)
            if(n%i == 0)
            return false;
        }
        return true;
    }
public:
    int primeSum(int N){
        // code here
        int sum = 0;
        while(N > 0) {
            int temp = N % 10;
            if(isPrime(temp))
            sum+=temp;
            N/=10;
        }
        return sum;
    }
};

//{ Driver Code Starts.

int main(){
    int t;
    cin>>t;
    while(t--){
        int N;
        cin>>N;
        
        Solution ob;
        cout<<ob.primeSum(N)<<"\n";
    }
    return 0;
}
// } Driver Code Ends
```
