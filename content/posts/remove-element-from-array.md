---
title: remove element from array
tags: [interviewbit]
keywords: interviewbit, interviewbit solution in Python3 C++ Java, remove element from array solution
description: remove element from array Interviewbit Solution Explained
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

# Remove Element From Array

https://www.interviewbit.com/problems/remove-element-from-array



## Hint 1
You need to modify the original array itself. 
So you need to keep current like pointer which will point to the index of the array where you can store the next value.

Solution approach

Maybe you should try maintaining 2 pointers in the array:

One pointer iterates over the array
Other pointer only moves when it finds an element different from 'elem'.
In other words, the second pointer only moves when the first pointer is on an element worth keeping in the final array.

## Solution

```cpp

// editorial

int Solution::removeElement(vector<int> &A, int elem) {
    int count = 0, n = A.size();
    for (int i = 0; i < n; i++) {
        if (A[i] == elem)
            continue;
        else {
            A[count] = A[i];
            count++;
        }
    }
    return count;
}

/////////////////

// OOM

int Solution::removeElement(vector<int> &A, int B) {
    auto n = A.size();
    auto count = 0;
    for (auto i = 0; i < n; ++i) {
        if (A[i] == B)
            continue;
        else
            A[count++] = A[i];
    }
    return count;
}

///

int Solution::removeElement(vector<int> &A, int B) {

    int i = 0;
    int length = A.size();

    while (i < A.size()) {
        if (A[i] == B) {
            break;
        }
        i++;
    }

    if (i == length) {
        return length;
    }

    int j = i + 1;

    while (j < length) {
        if (A[j] != B) {
            A[i] = A[j];
            i++;
        }
        j++;
    }

    while (i < length) {
        A.pop_back();
        i++;
    }

    return A.size();
}
```