---
title: Remove all occurences of duplicates in a linked list   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Remove all occurences of duplicates in a linked list - GFG solution
description: Remove all occurences of duplicates in a linked list   GFG Solution Explained
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


# Remove all occurences of duplicates in a linked list
## Medium
<div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a sorted linked list, delete all nodes that have duplicate numbers (all occurrences), leaving only numbers that appear once in the original list.&nbsp;</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong></span>
<span style="font-size:18px">N = 8</span>
<span style="font-size:18px">Linked List = 23-&gt;28-&gt;28-&gt;35-&gt;49-&gt;49-&gt;53-&gt;53</span>
<span style="font-size:18px"><strong>Output:</strong> 
23 35</span>
<span style="font-size:18px"><strong>Explanation:</strong></span>
<span style="font-size:18px">The duplicate numbers are 28, 49 and 53 which 
are removed from the list.</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong></span>
<span style="font-size:18px">N =<strong> </strong>6</span>
<span style="font-size:18px">Linked List =<strong> </strong>11-&gt;11-&gt;11-&gt;11-&gt;75-&gt;75</span>
<span style="font-size:18px"><strong>Output: 
</strong>Empty list</span>
<span style="font-size:18px"><strong>Explanation:</strong></span>
<span style="font-size:18px">All the nodes in the linked list have 
duplicates. </span><span style="font-size:18px">Hence the resultant list 
would be empty.</span></pre>

<div><span style="font-size:18px"><strong>Your task:</strong></span></div>

<div><span style="font-size:18px">You don't have to read input or print anything. Your task is to complete the function <strong>removeAllDuplicates()</strong>&nbsp;which takes the head of the linked list,&nbsp;removes&nbsp;all the occurences of duplicates in the linked list and returns the head of the modified linked list.</span></div>

<div>&nbsp;</div>

<div><span style="font-size:18px"><strong>Expected Time Complexity: </strong>O(N)</span></div>

<div><span style="font-size:18px"><strong>Expected Auxiliary Space: </strong>O(1)</span></div>

<div>&nbsp;</div>

<div><span style="font-size:18px"><strong>Constraints:</strong></span></div>

<div><span style="font-size:18px">1 ≤ N&nbsp;≤ 10^5</span></div>

<p>&nbsp;</p>
</div>

---




```cpp
//{ Driver Code Starts
//Initial Template for C++

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
};

// } Driver Code Ends
//User function Template for C++

/* Linked List node structure
    
struct Node {
	int data;
	struct Node *next;
};

*/

class Solution
{
    public:
    Node* removeAllDuplicates(struct Node* head)
    {
        //code here
    vector<int>ans;
       unordered_map<int,int>mp;
       int cnt=0,k=0;
       Node * tptr= head;
       Node * temp= head;
       while(tptr){ mp[tptr->data]++;cnt++; tptr=tptr->next;}
       for (auto x: mp){ if(x.second==1){k++;ans.push_back(x.first);}}
       sort(ans.begin(),ans.end());
       int newk=abs(cnt-k);
       Node * save;
     while(newk--)
    {
     temp= head;
     save=temp->next;
     head=save;
     delete temp;
    }
       if(ans.size()==0){head=NULL; return head;}
       else{
       tptr= head;
       int i=0;
       while(tptr) {tptr->data=ans[i]; i++; tptr=tptr->next;}
       return head;
       }
    }
};

//{ Driver Code Starts.
/* Function to print linked list */
void printList(struct Node *head)
{
	struct Node *temp = head;
	while (temp != NULL)
	{
		printf("%d ", temp->data);
		temp = temp->next;
	}
}



// Driver program to test above functions
int main()
{
	int T;
	cin >> T;


	while (T--)
	{
		int N;

		cin >> N ;

		Node *head = NULL;
		Node *temp = head;

		for (int i = 0; i < N; i++) {
			int data;
			cin >> data;
			if (head == NULL)
				head = temp = new Node(data);
			else
			{
				temp->next = new Node(data);
				temp = temp->next;
			}
		}

		Solution ob;
		head = ob.removeAllDuplicates(head);
		printList(head);

		cout << "\n";


	}
	return 0;
}

// } Driver Code Ends
```
