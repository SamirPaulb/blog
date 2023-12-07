---
title: remove duplicates from sorted array
tags: [interviewbit]
keywords: interviewbit, interviewbit solution in Python3 C++ Java, remove duplicates from sorted array solution
description: remove duplicates from sorted array Interviewbit Solution Explained
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

# Remove Duplicates

https://www.interviewbit.com/problems/remove-duplicates


## Solution

```cpp
int Solution::removeDuplicates(vector<int> &A) {
    // [1,1,2]
    //  i   j
    // [1,2,2]
    //    i j
    
    if (A.size()<2)
        return A.size();
    int i=0;
    for (int j=1; j<A.size(); j++) {
        if (A[i]!=A[j]) {
            i++;
            A[i] = A[j];
        }
    }
    return i+1;
}

```