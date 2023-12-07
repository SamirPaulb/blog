---
title: add two numbers as lists
tags: [interviewbit]
keywords: interviewbit, interviewbit solution in Python3 C++ Java, add two numbers as lists solution
description: add two numbers as lists Interviewbit Solution Explained
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

# Add Two Numbers As Lists

https://www.interviewbit.com/problems/add-two-numbers-as-lists


## Solution

```cpp
ListNode* Solution::addTwoNumbers(ListNode* a, ListNode* b) {
    int carry = 0;
    ListNode * head = 0, * prev;
    while (a || b || carry) {
        int sum = (a ? a->val : 0) + (b ? b->val : 0) + carry;
        ListNode * node = new ListNode(sum % 10);
        carry = sum / 10;
        
        if (!head)
            head = prev = node;
        else {
            prev->next = node;
            prev = prev->next;
        }
        
        if (a)
            a = a->next;
        if (b)
            b = b->next;
    }
    return head;
}

```