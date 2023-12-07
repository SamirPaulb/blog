---
title: rearrange array
tags: [interviewbit]
keywords: interviewbit, interviewbit solution in Python3 C++ Java, rearrange array solution
description: rearrange array Interviewbit Solution Explained
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

# Rearrange Array

https://www.interviewbit.com/problems/rearrange-array

Rearrange a given array so that Arr[i] becomes Arr[Arr[i]] with O(1) extra space.

Example:

Input : [1, 0]
Return : [0, 1]
 Lets say N = size of the array. Then, following holds true :
All elements in the array are in the range [0, N-1]
N * N does not overflow for a signed integer

## Solution

```cpp
void Solution::arrange(vector<int> &A) {
    int n = A.size();

    // First step: Increase all values by (arr[arr[i]]%n)*n
    for (int i=0; i<n; i++)
        A[i] += (A[A[i]]%n)*n;

    // Second Step: Divide all values by n
    for (int i=0; i<n; i++) 
        A[i] /= n;
}
```

