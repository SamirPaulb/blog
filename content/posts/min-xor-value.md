---
title: min xor value
tags: [interviewbit]
keywords: interviewbit, interviewbit solution in Python3 C++ Java, min xor value solution
description: min xor value Interviewbit Solution Explained
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

# Min Xor Value

https://www.interviewbit.com/problems/min-xor-value


## Solution

```cpp
int Solution::findMinXor(vector<int> &arr) {
    int n = arr.size();
    sort(arr.begin(), arr.end()); 
    int minXor = INT_MAX; 
    int val = 0; 
    // calculate min xor of consecutive pairs 
    for (int i = 0; i < n - 1; i++)
        minXor = min(minXor, arr[i] ^ arr[i + 1]); 
        
    return minXor;
}
```