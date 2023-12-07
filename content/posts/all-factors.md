---
title: all factors
tags: [interviewbit]
keywords: interviewbit, interviewbit solution in Python3 C++ Java, all factors solution
description: all factors Interviewbit Solution Explained
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

# All Factors

https://www.interviewbit.com/problems/all-factors


## Solution

```cpp
vector<int> Solution::allFactors(int A) {
    vector<int> factors;
    int sqrtA = int(sqrt(A));
    for (int i=1; i<=sqrtA; i++) {
        if (A % i==0) {
            factors.push_back(i);
            if (i!=sqrtA) {
                factors.push_back(A/i);
            }
        }
    }
    sort(factors.begin(), factors.end());
    return factors;
}
```