---
title: Peak element   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Peak element - GFG solution
description: Peak element   GFG Solution Explained
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


# Peak element
## Easy
<div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">An element is called a peak element if its value&nbsp;is not smaller than the value of&nbsp;its adjacent elements(if they exists).<br>
Given an array <strong>arr[]</strong> of size&nbsp;<strong>N</strong>,&nbsp;<strong>Return the index of any one of its&nbsp;peak elements</strong>.<br>
<strong>Note:&nbsp;</strong>The generated output will always be&nbsp;1 if the index that you&nbsp;return is correct. Otherwise output will be 0.&nbsp;</span></p>

<p><br>
<strong><span style="font-size:18px">Example 1:</span></strong></p>

<pre><strong><span style="font-size:18px">Input: 
</span></strong><span style="font-size:18px">N = 3
arr[] = {1,2,3}
</span><strong><span style="font-size:18px">Possible Answer: </span></strong><span style="font-size:18px">2
<strong>Generated Output:</strong> 1
<strong>Explanation:</strong> index 2 is 3.
It is the peak element as it is 
greater than its neighbour 2.
If 2 is returned then the generated output will be 1 else 0.</span>
</pre>

<p><strong><span style="font-size:18px">Example 2:</span></strong></p>

<pre><strong><span style="font-size:18px">Input:
</span></strong><span style="font-size:18px">N = 2
arr[] = {3,4}
</span><strong><span style="font-size:18px">Possible Answer: </span></strong><span style="font-size:18px">1
<strong>Output: </strong>1<strong>
Explanation: </strong>4 (at index 1) is the 
peak element as it is greater than 
its only neighbour element 3.
</span><span style="font-size:18px">If 1 is returned then the generated output will be 1 else 0.</span>
</pre>

<p>&nbsp;</p>

<p><strong><span style="font-size:18px">Your Task:</span></strong><br>
<span style="font-size:18px">You don't have to read&nbsp;input or print anything. Complete the function <strong>peakElement</strong>() which takes the array arr[] and its size N as input parameters and return the&nbsp;index of any one of its peak elements.<br>
<br>
Can you solve the problem in expected time complexity?</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong>&nbsp;O(log N)<br>
<strong>Expected Auxiliary Space:</strong>&nbsp;O(1)</span></p>

<p><br>
<span style="font-size:18px"><strong>Constraints:</strong><br>
1 ≤ N ≤ 10<sup>5</sup><br>
1 ≤ A[] ≤ 10<sup>6</sup></span></p>
</div>

---




```cpp
//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;


// } Driver Code Ends
/* The function should return the index of any
   peak element present in the array */

// arr: input array
// n: size of array
class Solution
{
    public:
    int peakElement(int arr[], int n)
    {
       // Your code here
       // Brute force(linear search)
       //if(n == 1) return 0;
       
       //if(arr[0] >= arr[1]) return 0;
       
       //if(arr[n - 1] >= arr[n - 2]) return (n - 1);
       
       //for(int i = 1; i < n - 1 ; i++){
       //       if(arr[i] >= arr[i -1] && arr[i] >= arr[i + 1])
       //    return i;
       //}
       
       // Optimal Approach(Binary Search)
       int s = 0, e = n - 1;
       
       while(s < e) {
           int mid = (s+e)/2;
           if(arr[mid] < arr[mid+1]) 
           s = mid + 1;
           else e = mid;
       }
       return s;
    }
    
};

//{ Driver Code Starts.

int main() {
	int t;
	cin>>t;
	while(t--)
	{
		int n;
		cin>>n;
		int a[n], tmp[n];
		for(int i=0;i<n;i++)
		{
			cin>>a[i];
			tmp[i] = a[i];
		}
		bool f=0;
		Solution ob;
		
		int A = ob. peakElement(tmp,n);
		
		if(A<0 and A>=n)
		    cout<<0<<endl;
		else
		{
    		if(n==1 and A==0)
    		    f=1;
    		else if(A==0 and a[0]>=a[1])
    		    f=1;
    		else if(A==n-1 and a[n-1]>=a[n-2])
    		    f=1;
    		else if(a[A]>=a[A+1] and a[A]>= a[A-1])
    		    f=1;
    		else
    		    f=0;
    		cout<<f<<endl;
		}
		
	}

	return 0;
}
// } Driver Code Ends
```
