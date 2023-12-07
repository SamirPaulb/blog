---
title: Delete Middle of Linked List   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Delete Middle of Linked List - GFG solution
description: Delete Middle of Linked List   GFG Solution Explained
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


# Delete Middle of Linked List
## Easy
<div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a singly linked list, delete <strong>middle&nbsp;</strong>of the linked list. For example, if given linked list is 1-&gt;2-&gt;<strong>3</strong>-&gt;4-&gt;5 then linked list should be modified to 1-&gt;2-&gt;4-&gt;5.<br>
If there are <strong>even</strong> nodes, then there would be <strong>two middle </strong>nodes, we need to delete the second middle element. For example, if given linked list is 1-&gt;2-&gt;3-&gt;4-&gt;5-&gt;6 then it should be modified to 1-&gt;2-&gt;3-&gt;5-&gt;6.</span><br>
<span style="font-size:18px">If the input linked list is NULL or has 1 node, then it should return NULL</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>LinkedList: 1-&gt;2-&gt;3-&gt;4-&gt;5
<strong>Output: </strong>1 2 4 5</span>
</pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>LinkedList: 2-&gt;4-&gt;6-&gt;7-&gt;5-&gt;1
<strong>Output: </strong>2 4 6 5 1</span></pre>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
The task is to complete the function <strong>deleteMid</strong>() which should delete the middle element from the linked list and&nbsp;return the head&nbsp;of the modified linked list.&nbsp;If the linked list is empty then it should return NULL.</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:&nbsp;</strong>O(N).<br>
<strong>Expected Auxiliary Space:&nbsp;</strong>O(1).</span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= N &lt;= 1000<br>
1 &lt;= value &lt;= 1000</span></p>
</div>

---




```cpp
//{ Driver Code Starts
#include <bits/stdc++.h> 
using namespace std; 

struct Node
{
    int data;
    struct Node* next;
    
    Node(int x){
        data = x;
        next = NULL;
    }
};

/* Function to get the middle of the linked list*/
struct Node *deleteMid(struct Node *head);
void printList(Node* node) 
{ 
	while (node != NULL) { 
		cout << node->data <<" "; 
		node = node->next; 
	}  
	cout<<"\n";
} 
int main() 
{ 
	int t;
	cin>>t;
	while(t--)
	{
		int n;
		cin>>n;

		int data;
		cin>>data;
		struct Node *head = new Node(data);
		struct Node *tail = head;
		for (int i = 0; i < n-1; ++i)
		{
			cin>>data;
			tail->next = new Node(data);
			tail = tail->next;
		}
		head = deleteMid(head);
		printList(head); 
	}
	return 0; 
} 



// } Driver Code Ends


/* Link list Node:

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

// Deletes middle of linked list and returns head of the modified list
Node* deleteMid(Node* head)
{
    // Your Code Here
    if(head == NULL || head->next == NULL) {
        return NULL;
    }
    
    if(head->next->next == NULL) {
        head->next = NULL;
        return head;
    }
    
    Node* slow = head;
    Node* fast = head;
    
    while(fast != NULL && fast->next != NULL) {
        fast = fast->next->next;
        slow = slow->next;
    }
    slow->data = slow->next->data;
    slow->next = slow->next->next;
    
    return head;
}


```
