---
title: sorted insert position
tags: [interviewbit]
keywords: interviewbit, interviewbit solution in Python3 C++ Java, sorted insert position solution
description: sorted insert position Interviewbit Solution Explained
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

# Sorted Insert Position

https://www.interviewbit.com/problems/sorted-insert-position


Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Here are few examples.
```
[1,3,5,6], 5 -> 2
[1,3,5,6], 2 -> 1
[1,3,5,6], 7 -> 4
[1,3,5,6], 0 -> 0
```

## Hint 1

You need to return the index of least element >= x.

## Hint 2

Note that this is classic binary search. Instead of looking for the element x, 
you are looking for the least elements >= x.
## Solution

```cpp

/* editorial */

class Solution {
    public:
        int searchInsert(vector<int> &A, int target) {
            int n = A.size();
            int start = 0, end = n - 1;
            int mid;
            while(start <= end){
                mid = (start + end) / 2;
                if(target == A[mid]){
                    return mid;
                }
                else if(target < A[mid]){
                    end = mid - 1;
                }
                else{
                    start = mid + 1;
                }
            }
            return start;
        }
};

/* my solution */

int Solution::searchInsert(vector<int> &A, int B) {
    return lower_bound(A.begin(), A.end(), B) - A.begin();
}
```