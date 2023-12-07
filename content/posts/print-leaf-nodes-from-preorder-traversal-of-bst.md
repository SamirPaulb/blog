---
title: Print leaf nodes from preorder traversal of BST   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Print leaf nodes from preorder traversal of BST - GFG solution
description: Print leaf nodes from preorder traversal of BST   GFG Solution Explained
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


# Print leaf nodes from preorder traversal of BST
## Medium
<div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a preorder traversal of a BST, find&nbsp;the leaf nodes of the tree without building the tree.</span></p>

<p><br>
<span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
N = 2
arr = {2,1}
<strong>Output:</strong> {1}
<strong>Explaination:</strong> 1 is the only leaf node.
</span></pre>

<p><br>
<span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
N = 3
Arr = {3, 2, 4}
<strong>Output:</strong> {2, 4}
<strong>Explaination:</strong> 2, 4 are the leaf nodes.</span></pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function&nbsp;<strong>leafNodes()</strong>&nbsp;which takes the array a<strong>rr[]</strong> and its size <strong>N&nbsp;</strong>as input parameters&nbsp;and returns&nbsp;the leaf nodes of the tree.</span></p>

<p><br>
<span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(N)<br>
<strong>Expected Auxiliary Space:</strong> O(N)</span></p>

<p><br>
<span style="font-size:18px"><strong>Constraints:</strong><br>
1 ≤ N ≤ 10<sup>3</sup><br>
1 ≤ arr[i]&nbsp;≤ 10<sup>3</sup></span></p>
</div>

---




```cpp
//{ Driver Code Starts
//Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends
// User function Template for C++
class Solution {
  public:
    vector<int> leafNodes(int arr[],int N) {
        // code here
        vector<int>ans;
        stack<int>s;
        for(int i = 0, j = 1; j < N; i++, j++) {
            if(arr[i] > arr[j]) 
            s.push(arr[i]);
            else {
                bool valid = false;
                while(!s.empty()){
                    if(arr[j]>s.top()){
                        s.pop();
                        valid = true;
                    }else break;
                }
            if(valid) ans.push_back(arr[i]);
            }
        }
        ans.push_back(arr[N-1]);
        return ans;
    }
};

//{ Driver Code Starts.
int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        int N;
        cin >> N;
        int arr[N];
        for(int i=0;i<N;i++)cin>>arr[i];
        Solution ob;
        vector<int>ans=ob.leafNodes(arr,N);
        for(int i=0;i<ans.size();i++)cout<<ans[i]<<" ";
        cout<<endl;
    }
    return 0;
}
// } Driver Code Ends
```
