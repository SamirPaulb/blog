---
title: Sort an array of 0s, 1s and 2s   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Sort an array of 0s, 1s and 2s - GFG solution
description: Sort an array of 0s, 1s and 2s   GFG Solution Explained
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


# Sort an array of 0s, 1s and 2s
## Easy
<div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.</span></p>

<p><br>
<span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>
N = 5
arr[]= {0 2 1 2 0}
<strong>Output:</strong>
0 0 1 2 2
<strong>Explanation:</strong>
0s 1s and 2s are segregated 
into ascending order.</span></pre>

<p><strong><span style="font-size:18px">Example 2:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input: </strong>
N = 3
arr[] = {0 1 0}
<strong>Output:</strong>
0 0 1
<strong>Explanation:</strong>
0s 1s and 2s are segregated 
into ascending order.</span></pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function <strong>sort012() </strong>that takes an array arr and N as input parameters and <strong>sorts the array in-place. </strong></span></p>

<p><br>
<span style="font-size:18px"><strong>Expected Time Complexity: </strong>O(N)<br>
<strong>Expected Auxiliary Space:</strong> O(1)</span></p>

<p><br>
<span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= N &lt;= 10^6<br>
0 &lt;= A[i] &lt;= 2</span></p>
</div>

---




```cpp
//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;



// } Driver Code Ends
class Solution
{
    public:
    void sort012(int a[], int n)
    {
        // code here 
        int low = 0, mid = 0, high = n - 1;
        
        while(mid <= high) {
            switch(a[mid]) {
                // If element is 0
                case 0:
                swap(a[mid++], a[low++]);
                break;
                
                case 1:
                a[mid++];
                break;
                
                case 2:
                swap(a[mid], a[high--]);
                break;
            }
        }
    }
    
};

//{ Driver Code Starts.
int main() {

    int t;
    cin >> t;

    while(t--){
        int n;
        cin >>n;
        int a[n];
        for(int i=0;i<n;i++){
            cin >> a[i];
        }

        Solution ob;
        ob.sort012(a, n);

        for(int i=0;i<n;i++){
            cout << a[i]  << " ";
        }

        cout << endl;
        
        
    }
    return 0;
}


// } Driver Code Ends
```
