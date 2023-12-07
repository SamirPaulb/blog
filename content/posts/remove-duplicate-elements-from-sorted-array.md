---
title: Remove duplicate elements from sorted Array   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Remove duplicate elements from sorted Array - GFG solution
description: Remove duplicate elements from sorted Array   GFG Solution Explained
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


# Remove duplicate elements from sorted Array
## Easy
<div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a sorted array<strong> A[]</strong> of size <strong>N</strong>, delete all the duplicated elements from A[]. Modify the array such that if there are X distinct elements in it&nbsp;then the first X positions of the array should be filled with them in increasing order and return the number of distinct elements in the array.</span><br>
<br>
<span style="font-size:18px"><strong>Note: </strong><br>
1.<strong>&nbsp;</strong>Don't use set or HashMap to solve the problem.<br>
2. You must return the number of distinct elements(X) in the array, the generated output will print all the elements of the modified array from index 0 to X-1.</span><br>
<br>
<span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
N = 5
Array = {2, 2, 2, 2, 2}
<strong>Output:</strong> {2}
<strong>Explanation:</strong> After removing all the duplicates 
only one instance of 2 will remain.</span>
</pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
N = 3
Array = {1, 2, 2}
<strong>Output:</strong> {1, 2}</span></pre>

<p><br>
<span style="font-size:18px"><strong>Your Task: &nbsp;</strong><br>
You don't need to read input or print anything. Complete the function <strong>remove_duplicate()</strong> which takes the array A[] and its size N as input parameters and modifies it in place to delete all the duplicates. The function must return an integer X denoting the new modified size of the array.&nbsp;</span></p>

<p><br>
<span style="font-size:18px"><strong>Expected Time Complexity: </strong>O(N)<br>
<strong>Expected Auxiliary Space:</strong> O(1)</span></p>

<p><br>
<span style="font-size:18px"><strong>Constraints:</strong><br>
1 ≤ N ≤ 10<sup>4</sup><br>
1 ≤ A[i] ≤ 10<sup>6</sup></span></p>
</div>

---




```cpp
//{ Driver Code Starts
//Initial template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
//User function template for C++

class Solution{
public:
    int remove_duplicate(int a[],int n){
        // code here
        // T.C => O(N)
        // S.C. => O(N)
        // int temp[n];
        // temp[0] = a[0];
        // int res =  1;
        // for(int i = 1; i < n; i++) {
        //     if(temp[res-1] != a[i]){
        //         temp[res] = a[i];
        //         res++;
        //     }
        // }
        // for(int i = 0; i < n; i++) {
        //     a[i] = temp[i];
        // }
        // return res;
        
        // T.C => O(N)
        // S.C. => O(1)
        int res = 1;
        for(int i = 1; i < n; i++) {
            if(a[i] != a[res - 1]){
                a[res] = a[i];
                res++;
            }
        }
        return res;
    }
};

//{ Driver Code Starts.
int main()
{
    int T;
    cin>>T;
    while(T--)
    {
        int N;
        cin>>N;
        int a[N];
        for(int i=0;i<N;i++)
        {
            cin>>a[i];
        }
    Solution ob;
    int n = ob.remove_duplicate(a,N);

    for(int i=0;i<n;i++)
        cout<<a[i]<<" ";
    cout<<endl;
    }
}
// } Driver Code Ends
```
