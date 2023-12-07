---
title: remove duplicates from sorted array ii
tags: [interviewbit]
keywords: interviewbit, interviewbit solution in Python3 C++ Java, remove duplicates from sorted array ii solution
description: remove duplicates from sorted array ii Interviewbit Solution Explained
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

# Remove Duplicates From Sorted Array II

https://www.interviewbit.com/problems/remove-duplicates-from-sorted-array-ii


## Solution

```cpp

int Solution::removeDuplicates(vector<int> &A) {
    int count = 0;
    int size = A.size();
    for (auto i = 0; i < size; ++i) {
        if (i < size - 2 && A[i] == A[i + 1] && A[i] == A[i + 2])
            continue;
        else
            A[count++] = A[i];
    }
    return count;
}

int Solution::removeDuplicates(vector<int> &A) {
    int i = 0, j = A.size() - 1, k = 0;
    while (i <= j) {
        A[k] = A[i++];
        while (i + 1 <= j && A[i] == A[k] && A[i + 1] == A[k])
            i++;
        k++;
    }
    return k;
}
```