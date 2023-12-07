---
title: prime sum
tags: [interviewbit]
keywords: interviewbit, interviewbit solution in Python3 C++ Java, prime sum solution
description: prime sum Interviewbit Solution Explained
cover:
    image: https://scdn.netlify.app/img/interviewbit-cover.jpg
    alt: interviewbit-cover
    caption: interviewbit-cover
image: https://scdn.netlify.app/img/interviewbit-cover.jpg
date: 2021-10-04T15:58:26+08:00
lastmod: 2022-03-04T15:58:26+08:00
draft: false
author: Samir Paul
authorLink: https://twitter.com/intent/follow?screen_name=SamirPaulb
license: CC BY 4.0
---

# Prime Sum

https://www.interviewbit.com/problems/prime-sum

// Given an even number ( greater than 2 ), return two prime numbers whose sum will be equal to given number.
// Solution: find all primes and check in a loop i to n if i and n-i are primes
vector<int> Solution::primesum(int n) {
    
    vector<bool> isPrime(n+1, true);
    isPrime[0] = isPrime[1] = false;

    for (int p=2; p*p<=n; p++)
        if (isPrime[p])
            for (int i=p*p; i<=n; i+=p) 
                isPrime[i] = false;
    
    vector<int> B;
    
    for (int i=0; i<n; i++) { 
        if (isPrime[i] && isPrime[n-i]) { 
            B.push_back(i);
            B.push_back(n-i);
            return B; 
        } 
    }
    return B;
}

```