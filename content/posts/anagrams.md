---
title: anagrams
tags: [interviewbit]
keywords: interviewbit, interviewbit solution in Python3 C++ Java, anagrams solution
description: anagrams Interviewbit Solution Explained
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

# Anagrams

https://www.interviewbit.com/problems/anagrams



## Hint 1

Anagrams will map to the same string if the characters in the string are sorted.
Can you use the above fact to come up with a strategy ?

## Hint 2

Anagrams will map to the same string if the characters in the string are sorted.
We can maintain a hashmap with the key being the sorted string and the value being
the list of strings ( which have the sorted characters as key ).

## Solution

```cpp

// iterator

vector<vector<int> > Solution::anagrams(const vector<string> &A) {
    vector<vector<int>> res;
    unordered_map<string, int> m;
    for (int i=0; i<A.size(); i++) {
        string s = A[i];
        sort(s.begin(), s.end());
        auto it = m.find(s);
        if (it==m.end()) {
            m[s] = res.size();
            it = m.find(s);
            res.push_back(vector<int>());
        }
        res[(*it).second].push_back(i + 1);
    }
    return res;
}

// my

vector<vector<int>> Solution::anagrams(const vector<string> &A) {
    vector<vector<int>> res;
    unordered_map<string, int> m;
    for (int i = 0; i < A.size(); i++) {
        string s = A[i];
        sort(s.begin(), s.end());
        if (!m.count(s)) {
            m[s] = res.size();
            res.push_back(vector<int>());
        }
        res[m[s]].push_back(i + 1);
    }
    return res;
}

// my

vector<vector<int>> Solution::anagrams(const vector<string> &A) {
    map<string, vector<int>> m;
    for (int i = 0; i < A.size(); i++) {
        string s = A[i];
        sort(s.begin(), s.end());
        m[s].push_back(i + 1);
    }
    vector<vector<int>> res;
    for (auto x : m)
        res.push_back(x.second);

    return res;
}
```