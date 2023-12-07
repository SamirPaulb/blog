---
title: greatest common divisor
tags: [interviewbit]
keywords: interviewbit, interviewbit solution in Python3 C++ Java, greatest common divisor solution
description: greatest common divisor Interviewbit Solution Explained
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

# Greatest Common Divisor

https://www.interviewbit.com/problems/greatest-common-divisor


## Solution

```cpp
int Solution::gcd(int A, int B) {
    if (B==0)
        return A;
    return gcd(B, A % B);
}

/*
int Solution::gcd(int A, int B) {
    if(A<B) swap(A,B);

    while(B) {
        int tmp = B;
        B = A%B;
        A = tmp;
    }

    return A;
}
*/
```