---
title: Search an element in sorted and rotated array   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Search an element in sorted and rotated array - GFG solution
description: Search an element in sorted and rotated array   GFG Solution Explained
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


# Search an element in sorted and rotated array
## Easy
<div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a sorted and rotated array <strong>A </strong>of N distinct elements which are rotated at some point, and given an element <strong>K</strong>. The task is to find the index of the given element K in array A.</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>N = 9
A[] = {5,6,7,8,9,10,1,2,3}
K = 10
<strong>Output: </strong>5<strong>
Explanation: </strong>10 is found at index 5.</span>
</pre>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>N = 3
A[] = {3,1,2}
K = 1
<strong>Output: </strong>1</span></pre>

<p><span style="font-size:18px"><strong>User Task:</strong><br>
Complete <strong>Search()&nbsp;</strong>function and return&nbsp;the index of the element K if found in the array.&nbsp;If the element is not present, then return -1.</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong>&nbsp;O(log N).<br>
<strong>Expected Auxiliary Space:</strong>&nbsp;O(1).</span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 ≤ N ≤ 10<sup>7</sup><br>
0 ≤ A<sub>i</sub> ≤ 10<sup>8</sup><br>
1 ≤ K ≤ 10<sup>8</sup></span></p>
</div>

---




```cpp
//{ Driver Code Starts
//Initial template for C++

#include<bits/stdc++.h>
using namespace std;

int Search(vector<int> ,int );

//User code will be pasted here

int main(){

    int t;
    cin >> t;

    while(t--){
        int n;
        cin >> n;
        
        vector<int> vec(n);
        
        for(int i =0;i<n;i++) 
            cin >> vec[i];
        
        int target;
        cin >> target;
        
        cout << Search(vec,target) << "\n";
         
    }
}
// } Driver Code Ends


//User function template for C++

// vec : given vector of elements
// K : given value whose index we need to find 
int Search(vector<int> vec, int K) {
    //code here
    
    //Naive Solution(linear Search)
    //for(int i = 0; i < vec.size(); i++) {
    //    if(vec[i] == K)
    //    return i;
    //}
    //return -1;
    
    //Efficient Approach(Binary Search)
    int n = vec.size();
    int l = 0, h = n - 1;
    while(l <= h) {
        int mid = (l+h)/2;
        
        if(vec[mid] == K){
            return mid;
        }else if(vec[l] <= vec[mid]){
            if(K >= vec[l] && K <= vec[mid])
            h = mid - 1;
            else
            l = mid+1;
        }
        else {
            if(K >= vec[mid] && K <= vec[h])
            l = mid+1;
            else
            h = mid-1;
        }
    }
    return -1;
}

```
