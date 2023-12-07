---
title: detect and remove loop from a linked list
tags: [interviewbit]
keywords: interviewbit, interviewbit solution in Python3 C++ Java, detect and remove loop from a linked list solution
description: detect and remove loop from a linked list Interviewbit Solution Explained
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

# Detect and Remove Loop from a linked list

https://www.interviewbit.com/problems/detect-and-remove-loop-from-a-linked-list/

Given a linked list which contains some loop.

You need to find the node, which creates a loop, and break it by making the node point to NULL.

### INPUT
```
3 -> 2 -> 4 -> 5 -> 6
          ^         |
          |         |    
          - - - - - -
```
### OUTPUT
```
3 -> 2 -> 4 -> 5 -> 6 -> NULL
```

## Solution
### Editorial
```cpp
ListNode* Solution::solve(ListNode* A) {
    
    if(A==NULL || A->next==NULL)
    return A;
    
    ListNode* slow=A;
    ListNode* fast=A;
    while(fast && fast->next)
    {
        slow=slow->next;
        fast=fast->next->next;
        
        if(slow==fast)
        break;
    }
    
    slow=A;
    while(slow!=fast)
    {
        
        if(slow==fast)
        break;
        
        else{
        slow=slow->next;
        fast=fast->next;
        }
    }
    
    ListNode* temp=slow;
    while(temp)
    {
        if(temp->next==slow)
        {
            temp->next=NULL;
            break;
        }
     else
     {
         temp=temp->next;
     }
        
    }
    return A;
}
```

### Fastest
```cpp
ListNode* Solution::solve(ListNode* A) {
    if(A==NULL) return NULL;
    if(A->next == NULL) return A;
    if(A->next == A)
    {
        A->next = NULL;
        return A;
    }
    ListNode* slow = A;
    ListNode* fast = A;
    bool cycle = false;
    while(fast!=NULL)
    {
        fast = fast->next;
        if(fast==NULL) return A;
        fast = fast->next;
        slow = slow->next;
        if(fast==slow) 
        {
            cycle = true;
            break;
        }
    }
    if(!cycle) return A;
    ListNode* curr = A;
    while(true)
    {
        slow = slow->next;
        curr = curr->next;
        if(curr==slow) break;
    }
    //cout<<slow->val<<"||";
    curr = A;
    int co = 0;
    while(true)
    {
        if(curr->next == slow) 
        {
            ++co;
        }
        if(co==2) break;
        curr = curr->next;
    }
    curr->next = NULL;
    return A;
}
```

### Lightweight
```cpp
ListNode* Solution::solve(ListNode* A) {
    ListNode* slow=A;
    ListNode* fast=A;
    while(fast && fast->next){
        slow=slow->next;
        fast=fast->next->next;
        if(slow==fast) break;
    }
    slow=A;
    while(slow!=fast){
        slow=slow->next;
        fast=fast->next;
    }
    ListNode* ok=slow;
    while(slow->next!=ok){
        slow=slow->next;
    }
    slow->next=NULL;
    return A;
}
```




