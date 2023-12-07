---
title: Merge Sort for Linked List   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Merge Sort for Linked List - GFG solution
description: Merge Sort for Linked List   GFG Solution Explained
cover:
    image: https://scdn.netlify.app/img/gfg.webp
    alt: leetcode-cover-img
    caption: leetcode-cover-img
images: https://scdn.netlify.app/img/gfg.webp
date: 2021-10-04T15:58:26+08:00
lastmod: 2022-03-04T15:58:26+08:00
draft: false
author: Samir Paul
authorLink: https://twitter.com/intent/follow?screen_name=SamirPaulb
license: CC BY 4.0
---


# Merge Sort for Linked List
## Medium
<div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given Pointer/Reference to the head of the linked list, the task is to <strong>Sort the given linked list using Merge Sort</strong>.</span><br>
<span style="font-size:18px"><strong>Note:</strong>&nbsp;If the length of linked list is odd, then the&nbsp;extra node should go in the first list while splitting.</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>N = 5
value[]  = {3,5,2,4,1}
<strong>Output: </strong>1 2 3 4 5<strong>
Explanation: </strong>After sorting the given
linked list, the resultant matrix
will be 1-&gt;2-&gt;3-&gt;4-&gt;5.</span>
</pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>N = 3
value[]  = {9,15,0}
<strong>Output: </strong>0 9 15<strong>
Explanation: </strong>After sorting the given
linked list , resultant will be
0-&gt;9-&gt;15.</span></pre>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
<strong>For C++ and Python:</strong> The task is to complete the function <strong>mergeSort</strong>() which sort the linked list using merge sort function.<br>
<strong>For Java:&nbsp;</strong>The task is to complete the function <strong>mergeSort</strong>() and return the node which can be used to print the sorted linked list.</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong>&nbsp;O(N*Log(N))<br>
<strong>Expected Auxiliary Space:</strong>&nbsp;O(N)</span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= N &lt;= 10<sup>5</sup></span></p>

<p>&nbsp;</p>
</div>

---




```cpp
//{ Driver Code Starts
#include <iostream>
#include <stdio.h>
#include <stdlib.h>
#include <bits/stdc++.h>
using namespace std;

struct Node {
    int data;
    struct Node* next;
    Node(int x) {
        data = x;
        next = NULL;
    }
};


// } Driver Code Ends
/* Structure of the linked list node is as
struct Node 
{
    int data;
    struct Node* next;
    Node(int x) { data = x;  next = NULL; }
};
*/


class Solution{
  public:
  
  Node* Mid(Node *head) {
      Node* slow = head;
      Node* fast = head;
      
      while(fast->next != NULL && fast->next->next != NULL) {
          slow = slow->next;
          fast = fast->next->next;
      }
      return slow;
  }
  
  Node* mergeSortedList(Node* p1, Node* p2) {
      if(p1 == NULL || p2 == NULL) {
          return (p1 == NULL) ? p2 : p1;
      }
      
      Node* ans = new Node(0);
      Node* current = ans;
      
      while(p1 != NULL && p2 != NULL) {
          if(p1->data < p2->data) {
              current->next = p1;
              p1 = p1->next;
          }
          else {
              current->next = p2;
              p2 = p2->next;
          }
          current = current->next;
      }
      
      if(p1 != NULL || p2 != NULL) {
          current->next = (p1 != NULL) ? p1 : p2;
      }
      
      return ans->next;
      
  }
  
    //Function to sort the given linked list using Merge Sort.
    Node* mergeSort(Node* head) {
        // your code here
        if(head == NULL || head->next == NULL) return head;
        
        Node* mid = Mid(head);
        Node* newHead = mid->next;
        mid->next = NULL;
        
        Node* leftHalf = mergeSort(head);
        Node* rightHalf = mergeSort(newHead);
        
        return mergeSortedList(leftHalf, rightHalf);
    }
};


//{ Driver Code Starts.

void printList(Node* node) {
    while (node != NULL) {
        printf("%d ", node->data);
        node = node->next;
    }
    printf("\n");
}

void push(struct Node** head_ref, int new_data) {
    Node* new_node = new Node(new_data);

    new_node->next = (*head_ref);
    (*head_ref) = new_node;
}

int main() {
    long test;
    cin >> test;
    while (test--) {
        struct Node* a = NULL;
        long n, tmp;
        cin >> n;
        for (int i = 0; i < n; i++) {
            cin >> tmp;
            push(&a, tmp);
        }
        Solution obj;
        a = obj.mergeSort(a);
        printList(a);
    }
    return 0;
}
// } Driver Code Ends
```
