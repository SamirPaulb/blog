---
title: Rearrange Array Alternately   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Rearrange Array Alternately - GFG solution
description: Rearrange Array Alternately   GFG Solution Explained
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


# Rearrange Array Alternately
## Medium
<div class="problems_problem_content__Xm_eO"><p>Given a <strong>sorted</strong> array of <strong>positive</strong> integers. Your task is to rearrange&nbsp;the array elements alternatively i.e first element should be max value, second should be min value, third should be second max, fourth should be second min and so on.<br>
<strong>Note:&nbsp;</strong>Modify the original array itself. Do it without using any extra space. You do not have to return anything.</p>

<p><strong>Example 1:</strong></p>

<pre><strong>Input:
</strong>n = 6
arr[] = {1,2,3,4,5,6}
<strong>Output: </strong>6 1 5 2 4 3<strong>
Explanation: </strong>Max element = 6, min = 1, 
second max = 5, second min = 2, and 
so on... Modified array is : 6 1 5 2 4 3.</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:
</strong>n = 11
arr[]={10,20,30,40,50,60,70,80,90,100,110}
<strong>Output:</strong>110 10 100 20 90 30 80 40 70 50 60<strong>
Explanation: </strong>Max element = 110, min = 10, 
second max = 100, second min = 20, and 
so on... Modified array is : 
110 10 100 20 90 30 80 40 70 50 60.
</pre>

<p><strong>Your&nbsp;Task:</strong><br>
The task is to complete the function <strong>rearrange</strong>() which rearranges elements as explained above. Printing of the modified array will be handled by driver code.</p>

<p><strong>Expected Time Complexity:</strong>&nbsp;O(N).<br>
<strong>Expected Auxiliary Space:</strong>&nbsp;O(1).</p>

<p><strong>Constraints:</strong><br>
1 &lt;= n &lt;= 10^6<br>
1 &lt;= arr[i] &lt;= 10^7</p>
</div>

---




```cpp
//{ Driver Code Starts
// C++ program to rearrange an array in minimum 
// maximum form 
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
class Solution{
    public:
    // This function wants you to modify the given input
    // array and no need to return anything
    // arr: input array
    // n: size of array
    //Function to rearrange  the array elements alternately.
    void rearrange(long long *arr, int n) 
    { 
    	
    	// Your code here
    vector <long long>v;
     for(long long i=0;i<n;i++){
      v.push_back(arr[n-1-i]);
      v.push_back(arr[i]);
     }
      for(long long i=0;i<n;i++){
          arr[i]=v[i];
      }
    }
};

//{ Driver Code Starts.

// Driver program to test above function 
int main() 
{
    int t;
    
    //testcases
    cin >> t;
    
    while(t--){
        
        //size of array
        int n;
        cin >> n;
        
        long long arr[n];
        
        //adding elements to the array
        for(int i = 0;i<n;i++){
            cin >> arr[i];
        }
        
        Solution ob;
        
        //calling rearrange() function
        ob.rearrange(arr, n);
        
        //printing the elements
        for (int i = 0; i < n; i++) 
		    cout << arr[i] << " ";
		
		cout << endl;
    }
	return 0; 
} 

// } Driver Code Ends
```
