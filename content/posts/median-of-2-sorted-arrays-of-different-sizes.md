---
title: Median of 2 Sorted Arrays of Different Sizes   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Median of 2 Sorted Arrays of Different Sizes - GFG solution
description: Median of 2 Sorted Arrays of Different Sizes   GFG Solution Explained
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


# Median of 2 Sorted Arrays of Different Sizes
## Hard
<div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given two sorted arrays array1 and array2 of size <strong>m</strong> and<strong> n</strong>&nbsp;respectively. Find the median of the two sorted arrays.</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>m = 3, n = 4
array1[] = {1,5,9}
array2[] = {2,3,6,7}
<strong>Output: </strong>5<strong>
Explanation: </strong>The middle&nbsp;element for
{1,2,3,5,6,7,9} is 5</span>
</pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>m = 2, n = 4
array1[] = {4,6}
array2[] = {1,2,3,5}
<strong>Output: </strong>3.5</span></pre>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
The task is to complete the function <strong>MedianOfArrays()</strong> that takes array1 and array2 as input and returns their median.&nbsp;<br>
<br>
Can you solve the problem in expected time complexity?</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong>&nbsp;O(min(log n, log m)).<br>
<strong>Expected Auxiliary Space:</strong>&nbsp;O((n+m)/2).</span></p>

<p><span style="font-size:18px"><strong>Constraints:&nbsp;</strong><br>
0 ≤ m,n ≤ 10<sup>4</sup><br>
1 ≤ array1[i], array2[i] ≤ 10<sup>5</sup></span></p>
</div>

---




```cpp
//{ Driver Code Starts
//Initial Template for C++

#include <bits/stdc++.h>
using namespace std;
double MedianOfArrays(vector<int>& array1, vector<int>& array2);


// } Driver Code Ends
//User function Template for C++

class Solution{
    public:
    double MedianOfArrays(vector<int>& array1, vector<int>& array2)
    {
        // Your code goes here
        //Using Binary Search
        
        if(array2.size() < array1.size()) return MedianOfArrays(array2, array1);
        
        int n1 = array1.size();
        int n2 = array2.size();
        
        int low = 0, high = n1;
        
        while(low <= high) {
            int cut1 = (low+high) / 2;
            int cut2 = (n1+n2+1)/2 - cut1;
            
            int left1 = cut1 == 0 ? INT_MIN : array1[cut1 - 1];
            int left2 = cut2 == 0 ? INT_MIN : array2[cut2 - 1];
            
            int right1 = cut1 == n1 ? INT_MAX : array1[cut1];
            int right2 = cut2 == n2 ? INT_MAX : array2[cut2];
            
            if(left1 <= right2 && left2 <= right1) {
                if((n1 + n2) % 2 == 0)
                return (max(left1, left2) + min(right1, right2)) / 2.0;
            else 
                return max(left1, left2);
            }
            
            else if(left1 > right2) {
                high = cut1 - 1;
            }else {
                low = cut1 + 1;
            }
        }
    return 0.0;
    }
};

//{ Driver Code Starts.

int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        int m,n;
        cin>>m;
        vector<int> array1(m);
        for (int i = 0; i < m; ++i){
            cin>>array1[i];
        }
        cin>>n;
        vector<int> array2(n);
        for (int i = 0; i < n; ++i){
            cin>>array2[i];
        }
        Solution ob;
        cout<<ob.MedianOfArrays(array1, array2)<<endl;
    }
    return 0; 
}



// } Driver Code Ends
```
