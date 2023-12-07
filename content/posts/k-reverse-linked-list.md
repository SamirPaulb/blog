---
title: k reverse linked list
tags: [interviewbit]
keywords: interviewbit, interviewbit solution in Python3 C++ Java, k reverse linked list solution
description: k reverse linked list Interviewbit Solution Explained
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

# K Reverse Linked List

https://www.interviewbit.com/problems/k-reverse-linked-list



Given a singly linked list and an integer K, reverses the nodes of the

list K at a time and returns modified linked list.

## Hint 1
Try to split the list into buckets of K.

Solution approach
Split the list into buckets of length K and then reverse each of them.
After this you have to concatenate the buckets and return the list. To split the list into buckets of length K,
use 2 pointers that are K elements afar. To reverse a linked list check this.

## Solution

```cpp

// fastest

ListNode *Solution::reverseList(ListNode *A, int B) {

    struct ListNode *current = A;
    struct ListNode *next = NULL;
    struct ListNode *prev = NULL;
    int count = 0;

    /*reverse first k nodes of the linked list */
    while (count < B) {
        next = current->next;
        current->next = prev;
        prev = current;
        current = next;
        count++;
    }
    if (next != NULL)
        A->next = reverseList(next, B);
    return prev;
}

// mine

ListNode *Solution::reverseList(ListNode *head, int k) {
    if (k == 1)
        return head;

    ListNode *next = 0, *prev = 0, *curr = head;

    for (int i = 0; i < k && curr; i++) {
        next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }

    if (head)
        head->next = reverseList(curr, k);

    return prev;
}
```