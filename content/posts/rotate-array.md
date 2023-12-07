---
title: Rotate Array   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Rotate Array - GFG solution
description: Rotate Array   GFG Solution Explained
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


# Rotate Array
## Easy
<div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given an unsorted array <strong>arr[]</strong> of size <strong>N.</strong>&nbsp;Rotate the array to the left (counter-clockwise direction) by <strong>D</strong> steps, where&nbsp;<strong>D</strong>&nbsp;is a positive integer.&nbsp;</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>N = 5, D = 2
arr[] = {1,2,3,4,5}
<strong>Output: </strong>3 4 5 1 2<strong>
</strong><strong>Explanation: </strong>1 2 3 4 5&nbsp; when rotated
by 2 elements, it becomes 3 4 5 1 2.</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>N = 10, D = 3
arr[] = {2,4,6,8,10,12,14,16,18,20}
<strong>Output: </strong>8 10 12 14 16 18 20 2 4 6<strong>
Explanation: </strong>2 4 6 8 10 12 14 16 18 20&nbsp;
when rotated by 3 elements, it becomes 
8 10 12 14 16 18 20 2 4 6.</span>
</pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your&nbsp;Task:</strong><br>
Complete the function <strong>rotateArr</strong>() which takes the array, D and N as input parameters and&nbsp;rotates the array by D elements. The array must be modified in-place without using extra space.&nbsp;</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:&nbsp;</strong>O(N)<br>
<strong>Expected Auxiliary Space:&nbsp;</strong>O(1)</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= N &lt;= 10</span><sup><span style="font-size:15px">6</span></sup><br>
<span style="font-size:18px">1 &lt;= D &lt;= 10<sup>6</sup></span><br>
<span style="font-size:18px">0 &lt;=&nbsp;arr[i] &lt;= 10</span><sup>5</sup></p>
</div>

---




```cpp
//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;


// } Driver Code Ends
class Solution{
    public:
    
    // void lRotateByOne(int arr[], int n) {
    //     int temp = arr[0];
    //     for(int i = 1; i < n; i++) 
    //         arr[i-1] = arr[i];
    //     arr[n-1] = temp;
    // }
    
    // //Function to rotate an array by d elements in counter-clockwise direction. 
    // void rotateArr(int arr[], int d, int n){
    //     // code here
    //     for(int i =0; i < d; i++) {
    //         lRotateByOne(arr, n);
    //     }
    // }
    
    /*==========================================================================*/
    
    //Function to rotate an array by d elements in counter-clockwise direction.
    // void rotateArr(int arr[], int d, int n) {
    //     // code here
    //     T.C. => O(N)
    //     S.C. => O(d)
    //     int temp[d];
    //     for(int i = 0; i < d; i++) {
    //         temp[i] = arr[i];
    //     }
    //     for(int i = d; i < n; i++) {
    //         arr[i-d] = arr[i];
    //     }
    //     for(int i = 0; i < d; i++) {
    //         arr[n-d+i] = temp[i];
    //     }
    // }
    
    /*==========================================================================*/
    
    //Function to rotate an array by d elements in counter-clockwise direction.
    // void rotateArr(int arr[], int d, int n) {
    //       // code here
    //       reverse(arr, 0, d-1);
    //       reverse(arr, d, n-1);
    //       reverse(arr, 0, n-1);
    // }
    // void reverse(int arr[], int low, int high) {
    //     while(low < high) {
    //         swap(arr[low], arr[high]);
    //         low++;
    //         high--;
    //     }
    // }
    
    void rotateArr(int arr[], int d, int n) {
        // code here
         int temp[n];
        for(int i=0; i<n; i++){
            temp[i] = arr[(i+d)%n]; 
        }
        for(int i=0; i<n; i++){
             arr[i] = temp[i];  
        }
    }
};

//{ Driver Code Starts.

int main() {
	int t;
	//taking testcases
	cin >> t;
	
	while(t--){
	    int n, d;
	    
	    //input n and d
	    cin >> n >> d;
	    
	    int arr[n];
	    
	    //inserting elements in the array
	    for(int i = 0; i < n; i++){
	        cin >> arr[i];
	    }
	    Solution ob;
	    //calling rotateArr() function
	    ob.rotateArr(arr, d,n);
	    
	    //printing the elements of the array
	    for(int i =0;i<n;i++){
	        cout << arr[i] << " ";
	    }
	    cout << endl;
	}
	return 0;
}
// } Driver Code Ends
```
