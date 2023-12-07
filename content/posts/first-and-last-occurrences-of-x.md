---
title: First and last occurrences of x   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, First and last occurrences of x - GFG solution
description: First and last occurrences of x   GFG Solution Explained
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


# First and last occurrences of x
## Easy
<div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a sorted array <strong>arr</strong> containing <strong>n</strong> elements with possibly duplicate elements, the task is to find indexes of first and last occurrences of an element <strong>x</strong> in the given array.</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
n=9, x=5
arr[] = { 1, 3, 5, 5, 5, 5, 67, 123, 125 }
<strong>Output:</strong>  2 5
<strong>Explanation</strong>: First occurrence of 5 is at index 2 and last
&nbsp;            occurrence of 5 is at index 5. 
</span></pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>n=9, x=7
arr[] = { 1, 3, 5, 5, 5, 5, 7, 123, 125 }
<strong>Output:</strong>  6 6 

</span></pre>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
Since, this is a function problem. You don't need to take any input, as it is already accomplished by the driver code. You just need to complete the function <strong>find</strong>() that takes <strong>array arr, integer n and integer x</strong> as parameters and returns the required answer.<br>
<strong>Note:</strong> If the number <strong>x</strong> is not found in the array just return both index as -1.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(logN)<br>
<strong>Expected Auxiliary Space:</strong> O(1).</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 ≤ N ≤ 10<sup>7</sup></span></p>

<p>&nbsp;</p>
</div>

---




```cpp
//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends
vector<int> find(int arr[], int n , int x )
{
    // code here
    vector<int> ans;
    for(int i = 0; i < n ; i++) {
        if(arr[i] ==  x) 
        ans.push_back(i);
    }
    if(ans.size() == 0) 
    return {-1, -1};
    else 
    return {ans[0], ans[ans.size() - 1]};
}

//{ Driver Code Starts.

int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        int n,x;
        cin>>n>>x;
        int arr[n],i;
        for(i=0;i<n;i++)
        cin>>arr[i];
        vector<int> ans;
        ans=find(arr,n,x);
        cout<<ans[0]<<" "<<ans[1]<<endl;
    }
    return 0;
}



// } Driver Code Ends
```
