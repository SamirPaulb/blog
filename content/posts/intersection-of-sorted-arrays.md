---
title: intersection of sorted arrays
tags: [interviewbit]
keywords: interviewbit, interviewbit solution in Python3 C++ Java, intersection of sorted arrays solution
description: intersection of sorted arrays Interviewbit Solution Explained
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

# Intersection Of Sorted Arrays

https://www.interviewbit.com/problems/intersection-of-sorted-arrays


	Intersection Of Sorted Arrays
	Find the intersection of two sorted arrays.
	OR in other words,
	Given 2 sorted arrays, find all the elements which occur in both the arrays.
## Solution

```cpp
vector<int> Solution::intersect(const vector<int> &A, const vector<int> &B) {
    vector<int> res;
    int i=0,j=0,n=A.size(),m=B.size();
    while (i<n && j<m) {
        if (A[i]>B[j]) {
            j++;
        } else if (A[i]<B[j]) {
            i++;
        } else {
            res.push_back(A[i]);
            i++;
            j++;
        }
    }
    return res;
}
```