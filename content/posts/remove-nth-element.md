---
title: remove nth element
tags: [interviewbit]
keywords: interviewbit, interviewbit solution in Python3 C++ Java, remove nth element solution
description: remove nth element Interviewbit Solution Explained
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

# Remove Nth Element

https://www.interviewbit.com/problems/remove-nth-element


## Solution

```cpp
ListNode* Solution::removeNthFromEnd(ListNode* A, int B) {
    ListNode *head = A, *a, *b, *prev = 0;

    for (a = head; a && B; a = a->next) {
        B--;
    }

    for (b = head; a && b; a = a->next) {
        prev = b;
        b = b->next;
    }

    if (prev && b) {
        prev->next = b->next;
    } else {
        head = head->next;
    }

    return head;
}

```