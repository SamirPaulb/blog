---
title: subset
tags: [interviewbit]
keywords: interviewbit, interviewbit solution in Python3 C++ Java, subset solution
description: subset Interviewbit Solution Explained
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

# Subset

https://www.interviewbit.com/problems/subset


## Solution

```cpp
void helper(vector<vector<int>> &res, vector<int> &A, vector<int> &subset, int index) {
    res.push_back(subset);
    for (int i = index; i < A.size(); i++) {
        subset.push_back(A[i]);
        helper(res, A, subset, i+1);
        subset.pop_back();
    }
}

vector<vector<int> > Solution::subsets(vector<int> &A) {
    sort(A.begin(), A.end());
    vector<vector<int>> res;
    vector<int> subset;
    helper(res, A, subset, 0);
    return res;
}

```