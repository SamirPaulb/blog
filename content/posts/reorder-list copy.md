---
title: Reorder List   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Reorder List - GFG solution
description: Reorder List   GFG Solution Explained
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


# Reorder List
## Hard
<div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a singly linked list<em>: A</em><sub>0</sub>→<em>A</em><sub>1</sub>→...→<em>A</em><sub><em>n</em>-2</sub>→<em>A</em><sub>n-1</sub>, reorder it to: <em>A</em><sub>0</sub>→<em>A</em><sub><em>n-1</em></sub>→<em>A</em><sub>1</sub>→<em>A</em><sub><em>n</em>-2</sub>→<em>A</em><sub>2</sub>→<em>A</em><sub><em>n</em>-3</sub>→...</span><br>
<span style="font-size:18px"><span style="color:#000000">For example: Given 1-&gt;2-&gt;3-&gt;4-&gt;5 its reorder is 1-&gt;5-&gt;2-&gt;4-&gt;3.</span></span></p>

<p><span style="font-size:18px"><strong>Note: It is recommended do this in-place without altering the node's&nbsp;values.</strong></span></p>

<p><strong><span style="font-size:18px">Example 1:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input:
</strong><strong>LinkedList:</strong> 1-&gt;2-&gt;3
<strong>Output: </strong>1 3 2
<strong>Explanation:
</strong>Here n=3, so the correct
order is<em> A</em><sub>0</sub>→<em>A</em><sub><em>2</em></sub>→<em>A</em><sub><em>1</em></sub></span></pre>

<p><strong><span style="font-size:18px">Example 2:</span></strong></p>

<pre><strong><span style="font-size:18px">Input:
</span></strong><span style="font-size:18px">Explanation: 1-&gt;7-&gt;3-&gt;4
<strong>Output: </strong>1 4 7 3
<strong>Explanation:
</strong>Here n=4, so the correct
order is<em> A</em><sub>0</sub>→<em>A</em><sub><em>3</em></sub>→<em>A</em><sub><em>1</em></sub>→<em>A</em><sub><em>2</em></sub></span></pre>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
The task is to complete the function <strong>reorderList</strong>() which should reorder the list as required. The reorder list is automatically printed by the driver's code.</span></p>

<p><span style="font-size:18px"><strong>Note</strong>: Try to solve without using any auxilliary space.</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong>&nbsp;O(N)<br>
<strong>Expected Auxiliary Space:</strong>&nbsp;O(1)</span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= N &lt;= 5*10<sup>5</sup><br>
1 &lt;= A[ i ]&nbsp;&lt;= 10<sup>5</sup></span></p>
</div>

---




```cpp
//{ Driver Code Starts
#include <stdio.h>
#include <stdlib.h>
#include <iostream>
#include <bits/stdc++.h>
using namespace std;
/* Linked list Node */
struct Node {
    int data;
    struct Node* next;

    Node(int x) {
        data = x;
        next = NULL;
    }
};



// } Driver Code Ends
/* Following is the Linked list node structure */

/*
struct Node
{
    int data;
    struct Node* next;

    Node(int x){
        data = x;
        next = NULL;
    }
};
*/

class Solution{ 
public:
   Node* reverse(Node* head)

{

    Node* curr = head;

    Node *next = NULL, *prev = NULL;

    while(curr)

    {

        next = curr->next;

        curr->next = prev;

        prev = curr;

        curr = next;

    }

    return prev;

}

Node* merge(Node* a,Node* b)

{

    while(b)

    {

        Node* temp1=a->next;

        Node* temp2=b->next;

        

        a->next=b;

        b->next=temp1;

        a=temp1;

        b=temp2;

    }

    return a;

}
    void reorderList(Node* head) {
        // Your code here
        if(!head || !head->next) return;

    Node *slow = head;

    Node *fast = head->next;

    while(fast&&fast->next)

        {

            slow=slow->next;

            fast=fast->next->next;

        }

    Node* shead = reverse(slow->next);

    slow->next=NULL;

    merge(head,shead);
    }
};

//{ Driver Code Starts.



/* Function to create a new Node with given data */
struct Node* newNode(int data) {
    struct Node* new_Node = new Node(data);
    new_Node->data = data;
    new_Node->next = NULL;
    return new_Node;
}

void printList(struct Node* Node) {
    while (Node != NULL) {
        printf("%d ", Node->data);
        Node = Node->next;
    }
    printf("\n");
}

void freeList(struct Node* head) {
    struct Node* temp;
    while (head != NULL) {

        temp = head;
        head = head->next;
        free(temp);
    }
}

int main(void) {
    int t, n, m, i, x;

    cin >> t;
    while (t--) {
        struct Node* temp, *head;
        cin >> n;
        cin >> x;
        head = new Node(x);
        temp = head;
        for (i = 0; i < n - 1; i++) {
            cin >> x;
            temp->next = new Node(x);
            temp = temp->next;
        }
        
        Solution ob;
        
        ob.reorderList(head);
        printList(head);
        freeList(head);
    }
    return 0;
}

// } Driver Code Ends
```
