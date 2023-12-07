---
title: remove duplicates from sorted list ii
tags: [interviewbit]
keywords: interviewbit, interviewbit solution in Python3 C++ Java, remove duplicates from sorted list ii solution
description: remove duplicates from sorted list ii Interviewbit Solution Explained
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

# Remove Duplicates From Sorted List II

https://www.interviewbit.com/problems/remove-duplicates-from-sorted-list-ii


## Solution

```cpp
ListNode *Solution::deleteDuplicates(ListNode *A) {
    ListNode *head = A, *curr = A, *prev = 0;

    ListNode tmp(0);
    tmp.next = head;
    prev = &tmp;

    while (curr) {
        while (curr->next && curr->val == curr->next->val)
            curr = curr->next;

        if (prev->next == curr)
            prev = prev->next;
        else
            prev->next = curr->next;

        curr = curr->next;
    }

    return tmp.next;
}
```