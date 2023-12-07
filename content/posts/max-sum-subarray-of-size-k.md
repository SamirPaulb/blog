---
title: Max Sum Subarray of size K   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Max Sum Subarray of size K - GFG solution
description: Max Sum Subarray of size K   GFG Solution Explained
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


# Max Sum Subarray of size K
## Easy
<div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given an array of integers Arr of size <strong>N</strong> and a number <strong>K</strong>. Return&nbsp;the maximum sum of a subarray of size K.</span></p>

<p>&nbsp;</p>

<p><strong><span style="font-size:18px">Example 1:</span></strong></p>

<pre><strong><span style="font-size:18px">Input:</span></strong>
<span style="font-size:18px">N = 4, K = 2
Arr = [100, 200, 300, 400]</span>
<strong><span style="font-size:18px">Output:</span></strong>
<span style="font-size:18px">700</span>
<strong><span style="font-size:18px">Explanation:</span></strong>
<span style="font-size:18px">Arr<sub>3 </sub> + Arr<sub>4</sub> =700,</span>
<span style="font-size:18px">which is maximum.</span></pre>

<p>&nbsp;</p>

<p><strong><span style="font-size:18px">Example 2:</span></strong></p>

<pre><strong><span style="font-size:18px">Input:</span></strong>
<span style="font-size:18px">N = 4, K = 4</span>
<span style="font-size:18px">Arr = [100, 200, 300, 400]</span>
<strong><span style="font-size:18px">Output:</span></strong>
<span style="font-size:18px">1000</span>
<strong><span style="font-size:18px">Explanation:</span></strong>
<span style="font-size:18px">Arr<sub>1</sub> + Arr<sub>2</sub> + Arr<sub>3 </sub> 
+ Arr<sub>4</sub> =1000,</span>
<span style="font-size:18px">which is maximum.</span></pre>

<p>&nbsp;</p>

<p><strong><span style="font-size:18px">Your Task:</span></strong></p>

<p><span style="font-size:18px">You don't need to read input or print anything. Your task is to complete the function maximumSumSubarray() which takes the integer k, vector Arr with size N,&nbsp;containing the elements of the array and returns the&nbsp;maximum sum of a subarray of size K.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(N)<br>
<strong>Expected Auxiliary Space:</strong> O(1)</span><br>
&nbsp;</p>

<p><br>
<span style="font-size:18px"><strong>Constraints:</strong><br>
1&lt;=N&lt;=10<sup>6</sup></span><br>
<span style="font-size:18px">1&lt;=K&lt;=N</span><br>
&nbsp;</p>
</div>

---




```cpp
//{ Driver Code Starts
#include<bits/stdc++.h> 
using namespace std; 

// } Driver Code Ends
class Solution{   
public:
    long maximumSumSubarray(int K, vector<int> &Arr , int N){
        // code here 
        long max_sum = 0;
        long curr_sum = 0;
        for(int i = 0; i < K; i++) {
            curr_sum += Arr[i];
        }
        max_sum = curr_sum;
        for(int i = K; i < N; i++) {
            curr_sum += Arr[i] - Arr[i - K];
            max_sum = max(max_sum, curr_sum);
        }
        return max_sum;
    }
};

//{ Driver Code Starts.
int main() 
{ 
    int t;
    cin>>t;
    while(t--)
    {
        int N,K;
        cin >> N >> K;;
        vector<int>Arr;
        for(int i=0;i<N;++i){
            int x;
            cin>>x;
            Arr.push_back(x);
        }
        Solution ob;
        cout << ob.maximumSumSubarray(K,Arr,N) << endl;
    }
    return 0; 
} 
// } Driver Code Ends
```
