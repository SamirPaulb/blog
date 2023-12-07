---
title: Delete without head pointer   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Delete without head pointer - GFG solution
description: Delete without head pointer   GFG Solution Explained
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


# Delete without head pointer
## Easy
<div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">You are given a pointer/ reference to the node which is to be deleted from the&nbsp;linked list of <strong>N&nbsp;</strong>nodes. The task is to delete the node. Pointer/ reference to head node is not given.&nbsp;</span><br>
<span style="font-size:18px"><strong>Note:</strong> No head reference is given to you. It is&nbsp;guaranteed&nbsp;that the node to be deleted is<strong>&nbsp;</strong>not a tail node<strong>&nbsp;</strong>in the linked list.</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>N = 2
value[] = {1,2}
node = 1
<strong>Output: </strong>2<strong>
Explanation: </strong>After deleting 1 from the
linked list, we have remaining nodes
as 2.</span>
</pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>N = 4
value[] = {10,20,4,30}
node = 20
<strong>Output: </strong>10 4 30<strong>
Explanation: </strong>After deleting 20 from
the linked list, we have remaining
nodes as 10, 4 and 30.</span></pre>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You only need to complete the <strong>function deleteNode </strong>that takes <strong>reference </strong>to the node that needs to be <strong>deleted</strong>. The <strong>printing </strong>is done <strong>automatically </strong>by the<strong> driver code</strong>.</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity</strong> : O(1)<br>
<strong>Expected Auxilliary Space</strong> : O(1)</span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
2 &lt;= N &lt;= 10<sup>3</sup></span></p>
</div>

---




```cpp
//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;

/* Link list node */
struct Node {
  int data;
  struct Node *next;
  Node(int x) {
    data = x;
    next = NULL;
  }
}*head;

Node *findNode(Node* head, int search_for)
{
    Node* current = head;
    while (current != NULL)
    {
        if (current->data == search_for)
            break;
        current = current->next;
    }
    return current;
}


void insert()
{
    int n,i,value;
    Node *temp;
    scanf("%d",&n);

    for(i=0; i<n; i++)
    {
        scanf("%d",&value);
        if(i==0)
        {
            head=new Node(value);
            temp=head;
            continue;
        }
        else
        {
            temp->next= new Node(value);
            temp=temp->next;
            temp->next=NULL;
        }
    }
}

/* Function to print linked list */
void printList(Node *node)
{
    while (node != NULL)
    {
        printf("%d ", node->data);
        node = node->next;
    }
    cout << endl;
}



// } Driver Code Ends
/*
struct Node {
  int data;
  struct Node *next;
  Node(int x) {
    data = x;
    next = NULL;
  }
}*head;
*/


class Solution
{
    public:
    //Function to delete a node without any reference to head pointer.
    void deleteNode(Node *del)
    {
       // Your code here
       Node* current = del->next;
       del->data = current->data;
       del->next = current->next;
    }

};


//{ Driver Code Starts.

/* Drier program to test above function*/
int main(void)
{
    /* Start with the empty list */

    int t,k,n,value;
    
    scanf("%d",&t);
    while(t--)
    {
        insert();
        scanf("%d",&k);
        Node *del = findNode(head, k);
        Solution ob;
        if (del != NULL && del->next != NULL)
        {
            ob.deleteNode(del);
        }
        printList(head);
    }
    return(0);
}



// } Driver Code Ends
```
