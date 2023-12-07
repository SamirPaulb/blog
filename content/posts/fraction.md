---
title: fraction
tags: [interviewbit]
keywords: interviewbit, interviewbit solution in Python3 C++ Java, fraction solution
description: fraction Interviewbit Solution Explained
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

# Fraction

https://www.interviewbit.com/problems/fraction


## Solution

```cpp
string Solution::fractionToDecimal(int numerator, int denominator) {

    int64_t n = numerator, d = denominator;
    if (n == 0) return "0";
    string res;
    if (n < 0 ^ d < 0) res += '-';
    n = abs(n), d = abs(d);
    res += to_string((n / d));
    if (n % d == 0) return res;
    res += '.';

    unordered_map<int, int> map;
    for (int64_t r = n % d; r; r %= d) {
        if (map.find(r) != map.end()) {
            res.insert(map[r], 1, '(');
            res += ')';
            break;
        }
        map[r] = res.size();
        r *= 10;
        res.push_back((char)('0' + (r / d)));
    }

    return res;
}
```