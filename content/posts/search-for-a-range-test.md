---
title: search for a range test
tags: [interviewbit]
keywords: interviewbit, interviewbit solution in Python3 C++ Java, search for a range test solution
description: search for a range test Interviewbit Solution Explained
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

# Search for a Range Test

https://www.interviewbit.com/problems/search-for-a-range-test



A: [ 1 ]
B: 1
expected { 0, 0 }

A: [ 4, 7, 7, 7, 8, 10, 10 ]
B: 3
expected: -1 -1

## Solution

```cpp

#include <bits/stdc++.h>
using namespace std;

struct Solution{ vector<int> searchRange(const vector<int> &A, int B); };

#define DEBUG

vector<int> Solution::searchRange(const vector<int> &A, int B) {
    auto r = equal_range(A.begin(), A.end(), B);
    if (r.first!=A.end() && *r.first!=B)
        return {-1, -1};
    return { r.first-A.begin(), r.second-A.begin()-1 };
}

int main() {
    Solution s;
    //vector<int> res = s.searchRange({ 4, 7, 7, 7, 8, 10, 10 },3);
    vector<int> res = s.searchRange({1},1);
    cout << res[0] << "," << res[1] << endl;
    
}
```