---
title: Rotation   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Rotation - GFG solution
description: Rotation   GFG Solution Explained
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


# Rotation
## Easy
<div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given an ascending&nbsp;sorted rotated&nbsp;array&nbsp;<strong>Arr&nbsp;</strong>of distinct integers&nbsp;of size <strong>N</strong>. The array is right rotated <strong>K</strong>&nbsp;times. Find the value of <strong>K</strong>.</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>N = 5
Arr[] = {5, 1, 2, 3, 4}
<strong>Output:</strong> 1
<strong>Explanation:</strong> The given array is 5 1 2 3 4. 
The original sorted array is 1 2 3 4 5. 
We can see that the array was rotated 
1 times to the right.
</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>N = 5
Arr[] = {1, 2, 3, 4, 5}
<strong>Output:</strong> 0
<strong>Explanation:</strong>&nbsp;The given array is not rotated.
</span></pre>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
Complete the function <strong>findKRotation()</strong>&nbsp;which takes array <strong>arr</strong> and size&nbsp;<strong>n</strong>,&nbsp;as input parameters&nbsp;and returns an integer representing the answer.&nbsp;You don't to print answer or take inputs.</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong>&nbsp;O(log(N))<br>
<strong>Expected Auxiliary Space:</strong>&nbsp;O(1)</span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= N &lt;=10<sup>5</sup><br>
1 &lt;= Arr<sub>i</sub> &lt;= 10<sup>7</sup></span></p>

<p>&nbsp;</p>
</div>

---




```cpp
//{ Driver Code Starts
#include <bits/stdc++.h>

using namespace std;


// } Driver Code Ends
//User function template for C++
class Solution{
public:	
	int findKRotation(int arr[], int n) {
	    // code here
	    int minIndex = 0;
	    for(int i = 1; i < n; i++) {
	        if(arr[i] < arr[minIndex])
	        minIndex = i;
	    }
	    return minIndex;
	}
};

//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    while (t--) {
        int n, i;
        cin >> n;
        int a[n];
        for (i = 0; i < n; i++) {
            cin >> a[i];
        }
        Solution ob;
        auto ans = ob.findKRotation(a, n);
        cout << ans << "\n";
    }
    return 0;
}

// } Driver Code Ends
```
