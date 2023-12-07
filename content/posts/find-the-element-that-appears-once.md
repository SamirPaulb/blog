---
title: Find the element that appears once   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Find the element that appears once - GFG solution
description: Find the element that appears once   GFG Solution Explained
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


# Find the element that appears once
## Medium 
<div class="problem-statement">
                <p></p><p><span style="font-size:18px">Given a sorted array <strong>A[]</strong> of <strong>N&nbsp;</strong>positive integers having all the numbers occurring exactly twice, except&nbsp;for one number which will occur only once. Find the number occurring only once.</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>N = 5
A = {1, 1, 2, 5, 5}<strong>
Output: </strong>2
<strong>Explanation: 
</strong>Since 2 occurs once, while
other numbers occur twice, 
2 is the answer.</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>N = 7
A = {2, 2, 5, 5, 20, 30, 30}
<strong>Output: </strong>20
<strong>Explanation:
</strong>Since 20 occurs once, while
other numbers occur twice, 
20 is the answer.</span></pre>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function&nbsp;<strong>search()&nbsp;</strong>which takes two&nbsp;arguments(array A and integer N) and returns the number occurring only once.</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:&nbsp;</strong>O(Log(N)).<br>
<strong>Expected Auxiliary Space:&nbsp;</strong>O(1).</span></p>

<p><span style="font-size:18px"><strong>Constraints</strong><br>
0 &lt; &nbsp; <strong>N</strong>&nbsp; &lt;= 10^6<br>
0 &lt;= <strong>A[i]</strong> &lt;= 10^9</span></p>
 <p></p>
            </div>

---




```cpp
// { Driver Code Starts
#include <bits/stdc++.h>

using namespace std;

 // } Driver Code Ends
//User function template for C++
class Solution{
public:	
	int search(int A[], int N){
	    //code
	    int count = 0;
	    for(int i = 0; i < N; i++) {
	        count = count^A[i];
	    }
	    return count;
	}
};

// { Driver Code Starts.

// Driver program
int main()
{
    int t,len;
    cin>>t;
    while(t--)
    {
        cin>>len;
        int arr[len];
        for(int i=0;i<len;i++){
            cin>>arr[i];
        }
        Solution ob;
        cout<<ob.search(arr, len)<<'\n';
    }
    return 0;
}
  // } Driver Code Ends
```
