---
title: Remove duplicates from an unsorted linked list   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Remove duplicates from an unsorted linked list - GFG solution
description: Remove duplicates from an unsorted linked list   GFG Solution Explained
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


# Remove duplicates from an unsorted linked list
## Easy
<div class="problems_problem_content__Xm_eO"><p><span style="font-size: 18px;">Given an unsorted linked list of <strong>N</strong> nodes. The task is to remove duplicate&nbsp;elements from this&nbsp;unsorted Linked List. When a value appears in multiple nodes, the node which appeared first should be kept, all others duplicates are to be removed.</span></p>
<p><span style="font-size: 18px;"><strong>Example 1:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input:
</strong>N = 4
value[] = {5,2,2,4}
<strong>Output: </strong>5 2 4<strong>
Explanation:</strong>Given linked list elements are
5-&gt;2-&gt;2-&gt;4, in which 2 is repeated only.
So, we will delete the extra repeated
elements 2 from the linked list and the
resultant linked list will contain 5-&gt;2-&gt;4</span>
</pre>
<p><span style="font-size: 18px;"><strong>Example 2:</strong></span></p>
<pre><span style="font-size: 18px;"><strong>Input:
</strong>N = 5
value[] = {2,2,2,2,2}
<strong>Output: </strong>2<strong>
Explanation:</strong>Given linked list elements are
2-&gt;2-&gt;2-&gt;2-&gt;2, in which 2 is repeated. So,
we will delete the extra repeated elements
2 from the linked list and the resultant
linked list will contain only 2.</span></pre>
<p><span style="font-size: 18px;"><strong>Your Task:</strong><br>You have to complete the method&nbsp;<strong>removeDuplicates</strong>() which takes <strong>1</strong>&nbsp;argument: the <strong>head</strong> of the linked list. &nbsp;Your function should&nbsp;return a pointer to a linked list with no duplicate element.</span></p>
<p><span style="font-size: 18px;"><strong>Expected Time Complexity:</strong>&nbsp;O(N)<br><strong>Expected Auxiliary Space:</strong>&nbsp;O(N)</span></p>
<p><span style="font-size: 18px;"><strong>Constraints:</strong><br>1 &lt;= size of linked lists &lt;= 10<sup>6</sup></span><br><span style="font-size: 18px;">0 &lt;= numbers in list &lt;= 10</span><sup>4</sup></p>
<p>&nbsp;</p></div>

---




```cpp
//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

struct Node {
  int data;
  struct Node *next;
  Node(int x) {
    data = x;
    next = NULL;
  }
};

void print(Node *root)
{
Node *temp = root;
while(temp!=NULL)
{
cout<<temp->data<<" ";
temp=temp->next;
}
}


// } Driver Code Ends
/*
The structure of linked list is the following

struct Node {
  int data;
  struct Node *next;
  Node(int x) {
    data = x;
    next = NULL;
  }
};
*/


class Solution
{
    public:
    //Function to remove duplicates from unsorted linked list.
    Node * removeDuplicates( Node *head) 
    {
     // your code goes here
     map<int, int>m;
     Node* current = head;
     m[current->data] = 1;
     Node* prev = current;
     current = current->next;
     while(current != NULL) {
         if(m[current->data]) {
             prev->next = current->next;
             free(current);
         }else {
             m[current->data] = 1;
             prev = current;
         }
         current = prev->next;
     }
     return head;
    }
};


//{ Driver Code Starts.

int main() {
	// your code goes here
	int T;
	cin>>T;
	
	while(T--)
	{
		int K;
		cin>>K;
		struct Node *head = NULL;
        struct Node *temp = head;
 
		for(int i=0;i<K;i++){
		int data;
		cin>>data;
			if(head==NULL)
			head=temp=new Node(data);
			else
			{
				temp->next = new Node(data);
				temp=temp->next;
			}
		}
		
	    Solution ob;
		Node *result  = ob.removeDuplicates(head);
		print(result);
		cout<<endl;
		
	}
	return 0;
}
// } Driver Code Ends
```
