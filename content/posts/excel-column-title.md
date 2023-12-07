---
title: excel column title
tags: [interviewbit]
keywords: interviewbit, interviewbit solution in Python3 C++ Java, excel column title solution
description: excel column title Interviewbit Solution Explained
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

# Excel Column Title

https://www.interviewbit.com/problems/excel-column-title


## Solution

```cpp

string Solution::convertToTitle(int A) {
    string res;
    do {
        A--;
        res = char('A' + A % 26) + res;
        A /= 26;
    } while (A);
    return res;
}

/*

string Solution::convertToTitle(int A) {
    string res;
    do {
        A--;
        res += A % 26 + 'A';
        A /= 26;
    } while (A);
    reverse(res.begin(), res.end());
    return res;
}
*/
```