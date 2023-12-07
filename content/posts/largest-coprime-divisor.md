---
title: largest coprime divisor
tags: [interviewbit]
keywords: interviewbit, interviewbit solution in Python3 C++ Java, largest coprime divisor solution
description: largest coprime divisor Interviewbit Solution Explained
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

# Largest Coprime Divisor

https://www.interviewbit.com/problems/largest-coprime-divisor


## Solution

```cpp
int gcd(int A, int B) {
    if(A<B) swap(A,B);
    while(B) {
        int tmp = B;
        B = A%B;
        A = tmp;
    }
    return A;
}

int Solution::cpFact(int x, int y) {
    // first we will remove the common factors of x and y
    // from x by finding the greatest common divisor (gcd)
    // of x and y and dividing x with that gcd.
    // x = x / gcd(x, y)
    // we repeat till we get gcd(x, y) = 1.
    // At last, we return a = x
    while (gcd(x, y) != 1) {
        x = x / gcd(x, y);
    } 
    return x;
}
```