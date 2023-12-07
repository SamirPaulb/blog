---
title: Delete a Node in Single Linked List   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Delete a Node in Single Linked List - GFG solution
description: Delete a Node in Single Linked List   GFG Solution Explained
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


# Delete a Node in Single Linked List
## Easy
<div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a singly linked list and an integer x.Delete x<sup>th</sup> node from the&nbsp;singly&nbsp;linked list. </span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span><span style="font-size:18px"><strong> </strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>1 -&gt; 3 -&gt; 4 
&nbsp;     </span> <span style="font-size:18px">x = 3</span>
<span style="font-size:18px"><strong>Output: </strong>1 -&gt; 3</span>
<span style="font-size:18px"><strong>Explanation:
</strong></span><span style="font-size:18px">After deleting the node at 3rd
</span><span style="font-size:18px">position (1-base indexing), the
</span><span style="font-size:18px">linked list is as 1 -&gt; 3. </span>
</pre>

<p><strong><span style="font-size:18px">Example 2:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input: </strong>1 -&gt; 5 -&gt; 2 -&gt; 9 </span>
<span style="font-size:18px">x = 2<strong>
Output: </strong>1 -&gt; 2 -&gt; 9
<strong>Explanation: </strong></span>
<span style="font-size:18px">After deleting the node at 2nd</span>
<span style="font-size:18px">position (1-based indexing), the</span>
<span style="font-size:18px">linked list is as 1 -&gt; 2 -&gt; 9.</span></pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your task:&nbsp;</strong>Your task is to complete the method <strong>deleteNode()</strong> which takes two arguments: the address of the head of the linked list and an integer x. The function returns the head of the modified linked list.</span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= T &lt;= 300<br>
2 &lt;= N &lt;= 100<br>
1 &lt;= x &lt;= N</span><br>
&nbsp;</p>
</div>

---




```cpp
//{ Driver Code Starts
// C program to find n'th Node in linked list
#include <stdio.h>
#include <stdlib.h>
#include<iostream>
using namespace std;

/* Link list Node */
struct Node
{
    int data;
    struct Node* next;
    
    Node(int x){
        data = x;
        next = NULL;
    }
};

void append(struct Node** head_ref, struct Node **tail_ref,
           int new_data)
{
    struct Node* new_node = new Node(new_data);
    
    if (*head_ref == NULL)
       *head_ref = new_node;
    else
       (*tail_ref)->next = new_node;
    *tail_ref = new_node;
}

/* Function to get the middle of the linked list*/
struct Node* deleteNode(struct Node *head,int );

void printList(Node *head)
{
   while (head != NULL)
   {
      cout << head->data << " ";
      head = head->next;
   }
   cout << "\n";
}

/* Driver program to test above function*/
int main()
{
  int T, i, n, l;

    cin>>T;

    while(T--){
    struct Node *head = NULL,  *tail = NULL;

        cin>>n;
        for(i=1;i<=n;i++)
        {
            cin>>l;
            append(&head, &tail, l);
        }

	int kk;
	cin>>kk;
    head = deleteNode(head,kk);
    printList(head);
    }
    return 0;
}

// } Driver Code Ends


/* Link list Node 
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

/*You are required to complete below method*/
Node* deleteNode(Node *head,int x)
{
    //Your code here
    if(x == 1) return head->next;
    Node *temp = head;
    for(int i = 1; i < x - 1; i++) {
        temp = temp->next;
    }
    temp->next = temp->next->next;
    return head;
}



```
