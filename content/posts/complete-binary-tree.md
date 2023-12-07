---
title: Complete Binary Tree   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Complete Binary Tree - GFG solution
description: Complete Binary Tree   GFG Solution Explained
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


# Complete Binary Tree
## Medium
<div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a Binary Tree, write a function to check whether the given Binary Tree is Complete Binary Tree or not. A complete binary tree&nbsp;is a binary tree in which every level, except possibly the last, is completely filled, and all nodes should be as much close to left as possible</span><span style="font-size:18px">.</span></p>

<pre><span style="font-size:18px">
<strong>Example 1:
Input:</strong>
       1
      / \
     2   3
<strong>Output:</strong>
Complete Binary Tree</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
              1
            /   \
          2      3
           \    /  \
            4  5    6
<strong>Output:</strong>
Not Complete Binary Tree
</span></pre>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1&lt;=Number of Node&lt;=100</span><br>
<span style="font-size:18px">0 &lt;= Data of a node &lt;= 10<sup>6</sup></span></p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to take input. Just complete the function<strong> isCompleteBT() </strong>that takes root <strong>node </strong>as a parameter and returns <strong>true, </strong>if the tree is Complete else returns <strong>false</strong>.</span></p>

<p>&nbsp;</p>

<p>&nbsp;</p>
</div>

---




```cpp
//{ Driver Code Starts
// A program to check if a given binary tree is complete or not
#include<bits/stdc++.h>
using namespace std;

/* A binary tree node has data, pointer to left child
   and a pointer to right child */
struct Node
{
    int data;
    struct Node *left;
    struct Node *right;

    Node(int val) {
        data = val;
        left = right = NULL;
    }
};

Node* buildTree(string str)
{   
    // Corner Case
    if(str.length() == 0 || str[0] == 'N')
            return NULL;
    
    // Creating vector of strings from input 
    // string after spliting by space
    vector<string> ip;
    
    istringstream iss(str);
    for(string str; iss >> str; )
        ip.push_back(str);
        
    // Create the root of the tree
    Node *root = new Node(stoi(ip[0]));
        
    // Push the root to the queue
    queue<Node*> queue;
    queue.push(root);
        
    // Starting from the second element
    int i = 1;
    while(!queue.empty() && i < ip.size()) {
            
        // Get and remove the front of the queue
        Node* currNode = queue.front();
        queue.pop();
            
        // Get the current node's value from the string
        string currVal = ip[i];
            
        // If the left child is not null
        if(currVal != "N") {

            // Create the left child for the current Node
            currNode->left = new Node(stoi(currVal));
                
            // Push it to the queue
            queue.push(currNode->left);
        }
            
        // For the right child
        i++;
        if(i >= ip.size())
            break;
        currVal = ip[i];
            
        // If the right child is not null
        if(currVal != "N") {
                
            // Create the right child for the current node
            currNode->right = new Node(stoi(currVal));
                
            // Push it to the queue
            queue.push(currNode->right);
        }
        i++;
    }
    
    return root;
}


// } Driver Code Ends
    

class Solution{
public:    
    bool isCompleteBT(Node* root){
        //code here
        if(root == NULL) return 1;
        
        queue<Node*>q;
        bool okay = 0;
        q.push(root);
        while(q.empty() == false) {
          Node* tp = q.front();
          q.pop();
          if(tp->left) {
              if(okay == true) {
                  return false;
              }
              q.push(tp->left);
          }
          else {
              okay = 1;
          }
          if(tp->right) {
              if(okay == true) {
                  return false;
              }
              q.push(tp->right);
          }
          else {
              okay = 1; 
          }
        }
        return true;
    }
};

//{ Driver Code Starts.

int main()
{
    int t;
    scanf("%d ",&t);
    while(t--)
    {
        string treeString;
		getline(cin,treeString);
		Node* root = buildTree(treeString);
		Solution ob;
        if(ob.isCompleteBT(root)){
            printf ("Complete Binary Tree\n");
        }
        else{
            printf ("Not Complete Binary Tree\n");
        } 
    }
    return 0;
}





// } Driver Code Ends
```
