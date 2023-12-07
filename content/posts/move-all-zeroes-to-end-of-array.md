---
title: Move all zeroes to end of array   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Move all zeroes to end of array - GFG solution
description: Move all zeroes to end of array   GFG Solution Explained
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


# Move all zeroes to end of array
## Easy
<div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given an array <strong>arr[]</strong> of <strong>N</strong> positive integers. Push all the zeros of the given array to the right&nbsp;end of the array&nbsp;while maitaining the order of non-zero elements.</span></p>

<p><br>
<span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>N = 5
Arr[] = {3, 5, 0, 0, 4}
<strong>Output:</strong> 3 5 4 0 0
<strong>Explanation:</strong> The non-zero elements
preserve their order while the 0
elements are moved to the right.
</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>N = 4
Arr[] = {0, 0, 0, 4}
<strong>Output:</strong> 4 0 0 0
<strong>Explanation:</strong>&nbsp;4 is the only non-zero
element and it gets moved to the left.
</span></pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Complete the function <strong>pushZerosToEnd()</strong>&nbsp;which takes the&nbsp;array <strong>arr[] </strong>and its size&nbsp;<strong>n</strong>&nbsp;as input parameters&nbsp;and modifies arr[] in-place such that all the zeroes are moved to the&nbsp;right.&nbsp;&nbsp;</span></p>

<p><br>
<span style="font-size:18px"><strong>Expected Time Complexity:</strong>&nbsp;O(N)<br>
<strong>Expected Auxiliary Space:</strong>&nbsp;O(1)</span></p>

<p><br>
<span style="font-size:18px"><strong>Constraints:</strong><br>
1 ≤ N&nbsp;≤ 10<sup>5</sup><br>
0 ≤ arr<sub>i</sub> ≤ 10<sup>5</sup></span></p>
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
	void pushZerosToEnd(int arr[], int n) {
	    // code here
	    int count = 0;
	    for(int i = 0; i < n; i++) {
	        if(arr[i] != 0){
	        swap(arr[i], arr[count]);
	        count++;    
	        } 
	    }
	}
};

//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int n, i;
        cin >> n;
        int arr[n];
        for (i = 0; i < n; i++) {
            cin >> arr[i];
        }
        Solution ob;
        ob.pushZerosToEnd(arr, n);
        for (i = 0; i < n; i++) {
            cout << arr[i] << " ";
        }
        cout << "\n";
    }
    return 0;
}
// } Driver Code Ends
```
