---
title: excel column number
tags: [interviewbit]
keywords: interviewbit, interviewbit solution in Python3 C++ Java, excel column number solution
description: excel column number Interviewbit Solution Explained
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

# Excel Column Number

https://www.interviewbit.com/problems/excel-column-number


## Solution

```cpp
int Solution::titleToNumber(string A) {

    int x = 0, p = 1;
    for (int i=A.length()-1; i>=0; i--) {
        x += int(A[i]-'A'+1) * p;
        p *= 26;
    }

    return x;
}

```