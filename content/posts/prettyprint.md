---
title: prettyprint
tags: [interviewbit]
keywords: interviewbit, interviewbit solution in Python3 C++ Java, prettyprint solution
description: prettyprint Interviewbit Solution Explained
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

# PRETTYPRINT

https://www.interviewbit.com/problems/prettyprint/

Print concentric rectangular pattern in a 2d matrix. 
Let us show you some examples to clarify what we mean.

Example 1:

Input: A = 4.
Output:
```
4 4 4 4 4 4 4 
4 3 3 3 3 3 4 
4 3 2 2 2 3 4 
4 3 2 1 2 3 4 
4 3 2 2 2 3 4 
4 3 3 3 3 3 4 
4 4 4 4 4 4 4 
```
Example 2:

Input: A = 3.
Output:
```
3 3 3 3 3 
3 2 2 2 3 
3 2 1 2 3 
3 2 2 2 3 
3 3 3 3 3 
```
The outermost rectangle is formed by A, then the next outermost is formed by A-1 and so on.

You will be given A as an argument to the function you need to implement, and you need to return a 2D array.

## Solution

```cpp
// Print concentric rectangular pattern in a 2d matrix

vector<vector<int> > Solution::prettyPrint(int A) {
    int n = A*2 - 1;
    vector<vector<int>> v(n, vector<int>(n));
    for (int i=0; i<n; i++) {
        for(int j=0; j<n; j++) {
            int dx = abs(i-n/2);
            int dy = abs(j-n/2);
            v[i][j] = dx>dy ? dx+1 : dy+1;
        }
    }
    return v;
}
```
