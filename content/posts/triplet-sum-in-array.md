---
title: Triplet Sum in Array   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Triplet Sum in Array - GFG solution
description: Triplet Sum in Array   GFG Solution Explained
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


# Triplet Sum in Array
## Medium
<div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given an array arr of size n and an integer X. Find if there's a triplet in the array which sums up to the given integer X. </span></p>

<p><br>
<span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input</strong>:
n = 6, X = 13
arr[] = [1 4 45 6 10 8]
<strong>Output</strong>:
1
<strong>Explanation</strong>:
The triplet {1, 4, 8} in 
the array sums up to 13.</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input</strong>:
n = 5, X = 10
arr[] = [1 2 4 3 6]
<strong>Output</strong>:
1
<strong>Explanation</strong>:
The triplet {1, 3, 6} in 
the array sums up to 10.</span>
</pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function&nbsp;<strong>find3Numbers()</strong>&nbsp;which takes the array arr[], the size of the array (n) and the sum (X) as inputs and returns True if there exists a triplet in the array arr[] which sums up to X and False otherwise.</span></p>

<p><br>
<span style="font-size:18px"><strong>Expected Time Complexity:&nbsp;</strong>O(n<sup>2</sup>)<br>
<strong>Expected Auxiliary Space:&nbsp;</strong>O(1)</span></p>

<p><br>
<span style="font-size:18px"><strong>Constraints:</strong><br>
1 ≤ n ≤ 10<sup>3</sup><br>
1 ≤ A[i] ≤ 10<sup>5</sup></span></p>
</div>

---




```cpp
//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
class Solution{
    public:
    //Function to find if there exists a triplet in the 
    //array A[] which sums up to X.
    bool find3Numbers(int A[], int n, int X)
    {
        //Your Code Here
        sort(A, A+n);
        for(int i = 0; i < n; i++) {
            int c = A[i];
            
            int t = X - c;
            
            int s = i+1, e=n-1;
            
            while(s < e) {
                if(A[s] + A[e] == t) return true;
                else if(A[s] + A[e] < t) {
                    s++;
                }else e--;
            }
        }
        return false;
    }

};

//{ Driver Code Starts.

int main()
{
	int T;
	cin>>T;
	while(T--)
	{
		int n,X;
		cin>>n>>X;
		int i,A[n];
		for(i=0;i<n;i++)
			cin>>A[i];
		Solution ob;
        cout <<  ob.find3Numbers(A, n, X) << endl;
    }
}

// } Driver Code Ends
```
