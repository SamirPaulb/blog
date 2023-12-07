---
title: 148 sort list
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 148-sort-list solution
description: 148 sort list LeetCode Solution Explained
cover:
    image: https://scdn.netlify.app/img/leetcode-cover-img.webp
    alt: leetcode-cover-img
    caption: leetcode-cover-img
images: https://scdn.netlify.app/img/leetcode-cover-img.webp
date: 2021-10-04T15:58:26+08:00
lastmod: 2022-03-04T15:58:26+08:00
draft: false
author: Samir Paul
authorLink: https://twitter.com/intent/follow?screen_name=SamirPaulb
license: CC BY 4.0
---




---




```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next: return head
        mid = self.getMid(head)
        left = head
        right = mid.next
        mid.next = None
        return self.mergeList(self.sortList(left), self.sortList(right))
        
    def getMid(self, head):
        if not head: return
        slow = head
        fast = head.next
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        
        return slow
    
    def mergeList(self, l1, l2):
        if not l1 or not l2: return l2 or l1
        if l1.val <= l2.val:
            a = l1; b = l2
        else:
            a = l2; b = l1
        head = a
        while a:
            if not a.next:
                a.next = b
                return head
            if not b:
                return head
            elif a.next.val > b.val:
                tmp = a.next
                a.next = b
                b = tmp
            a = a.next
        return head
            
            
        
```
