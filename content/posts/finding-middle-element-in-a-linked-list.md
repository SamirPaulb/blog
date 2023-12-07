---
title: Finding middle element in a linked list   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Finding middle element in a linked list - GFG solution
description: Finding middle element in a linked list   GFG Solution Explained
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


# Finding middle element in a linked list
## Easy
<div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a singly linked list of <strong>N</strong> nodes.<br>
The task is to find the <strong>middle</strong>&nbsp;of the linked list. For example, if the&nbsp;linked list is<br>
<strong>1-&gt; 2-&gt;3-&gt;4-&gt;5</strong>,<strong>&nbsp;</strong>then the middle node of the list is&nbsp;<strong>3</strong>.<br>
If there are&nbsp;two middle nodes(in case, when&nbsp;<strong>N</strong>&nbsp;is even),&nbsp;print the <strong>second middle</strong> element.<br>
For example, if the linked list given is <strong>1-&gt;2-&gt;3-&gt;4-&gt;5-&gt;6</strong>, then the middle node of the list is <strong>4</strong>.</span></p>

<p><strong><span style="font-size:18px">Example 1:</span></strong></p>

<pre><strong><span style="font-size:18px">Input:</span></strong><strong><span style="font-size:18px">
</span></strong><span style="font-size:18px">LinkedList: 1-&gt;2-&gt;3-&gt;4-&gt;5
<strong>Output: </strong>3 
<strong>Explanation:</strong> 
Middle of linked list is 3.</span>
</pre>

<p><strong><span style="font-size:18px">Example 2:&nbsp;</span></strong></p>

<pre><strong><span style="font-size:18px">Input:</span></strong><strong><span style="font-size:18px">
</span></strong><span style="font-size:18px">LinkedList: 2-&gt;4-&gt;6-&gt;7-&gt;5-&gt;1
<strong>Output: </strong>7 
<strong>Explanation:</strong> 
Middle of linked list is 7.</span>
</pre>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
The task is to complete the function<span style="font-size:18px"> </span><strong>getMiddle</strong>() which takes a head reference as the only argument and should return the data at the middle node of the linked list.</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:&nbsp;</strong>O(N).<br>
<strong>Expected Auxiliary Space:&nbsp;</strong>O(1).</span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= N &lt;= 5000</span></p>
</div>

---




```cpp
//{ Driver Code Starts
//Initial template for C++

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
void printList(Node* node) 
{ 
    while (node != NULL) { 
        cout << node->data <<" "; 
        node = node->next; 
    }  
    cout<<"\n";
} 


// } Driver Code Ends
/* Link list Node 
struct Node {
    int data;
    Node* next;
    
    Node(int x){
        data = x;
        next = NULL;
    }
    
}; */
class Solution{
    public:
    /* Should return data of middle node. If linked list is empty, then  -1*/
    int getMiddle(Node *head)
    {
        // Your code here
        if(head == NULL || head->next == NULL) {
            return head->data;
        }
        
        Node* slow = head;
        Node* fast = head;
        
        while(fast != NULL && fast->next != NULL) {
            fast = fast->next->next;
            slow = slow->next;
        }
        return slow->data;
    }
};


//{ Driver Code Starts.

int main() {
    //code
    int t;
    cin>>t;
    while(t--){
        int N;
        cin>>N;
        int data;
        cin>>data;
        struct Node *head = new Node(data);
        struct Node *tail = head;
        for (int i = 0; i < N-1; ++i)
        {
            cin>>data;
            tail->next = new Node(data);
            tail = tail->next;
        }
        
        Solution ob;
        cout << ob.getMiddle(head) << endl;
    }
    return 0;
}

// } Driver Code Ends
```
