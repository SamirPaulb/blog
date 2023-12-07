---
title: amortized2
tags: [interviewbit]
keywords: interviewbit, interviewbit solution in Python3 C++ Java, amortized2 solution
description: amortized2 Interviewbit Solution Explained
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

# AMORTIZED2

https://www.interviewbit.com/problems/amortized2/

What is the time complexity of the following code :

```
int j = 0;
for(i = 0; i < n; ++i) {
    while(j < n && arr[i] < arr[j]) {
        j++;
    }
}
```

## Solution
```
O(n)
```
