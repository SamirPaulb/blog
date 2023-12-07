---
title: Quick Left Rotation   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Quick Left Rotation - GFG solution
description: Quick Left Rotation   GFG Solution Explained
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


# Quick Left Rotation
## Easy
<div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given an array <strong>arr[] </strong>of size <strong>N</strong> and an integer <strong>K</strong>, the task is to left rotate the array <strong>K</strong> indexes</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>N = 7, K = 2
arr[] = {1, 2, 3, 4, 5, 6, 7}
<strong>Output:</strong> 3 4 5 6 7 1 2
<strong>Explanation</strong>: Rotation of the above 
array by 2 will make the output array .</span></pre>

<p><br>
<span style="font-size:18px"><strong>Example 2:</strong></span><span style="font-size:18px"><strong> </strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>N = 6, K = 12
arr[] = {1, 2, 3, 4, 5, 6}
<strong>Output:</strong> 1 2 3 4 5 6

</span></pre>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
This is a function problem. You don't need to take any input, as it is already accomplished by the driver code. You just need to complete the function <strong>leftRotate</strong>() that takes array<strong> arr, </strong>integer<strong> K </strong>and integer<strong> N</strong> as parameters and rotate the given array by d value.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(N).<br>
<strong>Expected Auxiliary Space:</strong> O(1).</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 ≤ N ≤ 10<sup>5</sup></span></p>

<p>&nbsp;</p>
</div>

---




```cpp
//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends
class Solution{
	
	
	public:
	void leftRotate(int arr[], int k, int n) 
	{ 
	   // Your code goes here
	   k = k % n;
	   int temp[k];
	   for(int i = 0; i < k; i++) {
	       temp[i] = arr[i];
	   }
	   for(int i = k; i < n; i++) {
	       arr[i-k] = arr[i];
	   }
	   for(int i = n - k; i < n; i++) {
	       arr[i] = temp[i-(n-k)];
	   }
	} 
		 

};

//{ Driver Code Starts.

int main() 
{
   	
   
   	int t;
    cin >> t;
    while (t--)
    {
    	int n;
	    cin >> n;
	    int k;
	    cin >> k;
	    int a[n];
	    for(int i = 0;i<n;i++){
	        cin >> a[i];
	        // um[a[i]]++;
	    }


       

        Solution ob;
        ob.leftRotate(a,k,n);
        
        for (int i = 0; i < n; i++) 
        	cout << a[i] << " "; 

	    cout << "\n";
	     
    }
    return 0;
}



// } Driver Code Ends
```
