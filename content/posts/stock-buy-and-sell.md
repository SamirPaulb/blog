---
title: Stock buy and sell   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Stock buy and sell - GFG solution
description: Stock buy and sell   GFG Solution Explained
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


# Stock buy and sell
## Easy
<div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">The cost of stock on each day is given in an array <strong>A</strong>[] of size <strong>N</strong>. Find all the segments of days on which you buy and sell the stock so that in between those days your profit is maximum.<br>
<br>
<strong>Note:</strong></span>&nbsp;<span style="font-size:18px">Since there can be multiple solutions</span>, <span style="font-size:18px">the driver code will print 1 if your answer is correct, otherwise, it will return 0. In case there's no profit the driver code will print the string "<strong>No Profit</strong>" for a correct solution.<br>
<br>
<strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
N = 7
A[] = {100,180,260,310,40,535,695}
<strong>Output:</strong>
1
<strong>Explanation:
</strong>One possible solution is (0 3) (4 6)
We can buy stock on day 0,
and sell it on 3rd day, which will 
give us maximum profit. Now, we buy 
stock on day 4 and sell it on day 6.</span>
</pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
N = 5
A[] = {4,2,2,2,4}
<strong>Output:</strong>
1
<strong>Explanation:
</strong>There are multiple possible solutions.
one of them is (3 4)<strong>
</strong>We can buy stock on day 3,
and sell it on 4th day, which will 
give us maximum profit.</span></pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:</strong><br>
The task is to complete the function <strong>stockBuySell()</strong> which takes an array A[] and N as input parameters and finds the days of buying and selling stock. The function must return a 2D list of integers containing all the buy-sell pairs i.e. first value of pair will represent the day on which you buy&nbsp;the stock and second value represent the day on which you sell that stock. If there is No Profit, return an empty list. </span></p>

<p><br>
<span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(N)<br>
<strong>Expected Auxiliary Space:</strong> O(N)</span></p>

<p><br>
<span style="font-size:18px"><strong>Constraints:</strong><br>
2 ≤&nbsp;N ≤&nbsp;10<sup>6</sup><br>
0 ≤&nbsp;A[i] ≤&nbsp;10<sup>6</sup></span></p>
</div>

---




```cpp
//{ Driver Code Starts
//Initial template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
//User function template for C++

class Solution{
public:
    //Function to find the days of buying and selling stock for max profit.
    vector<vector<int> > stockBuySell(vector<int> A, int n){
        // code here
        vector<vector<int> >x;
        for(int i=1;i<n;i++){
            if(A[i]>A[i-1]){
                x.push_back({i-1,i});
            }
        }
        return x;
    }
};

//{ Driver Code Starts.

int check(vector<vector<int>> ans, vector<int> A, int p)
{
    int c = 0;
    for(int i=0; i<ans.size(); i++)
        c += A[ans[i][1]]-A[ans[i][0]];
    return (c==p) ? 1 : 0;
}

int main()
{   
    int t;
    cin>>t;
    while(t--){
        int n;
        cin>>n;
        vector<int> A(n);
        for (int i=0; i<n; ++i){
            cin>>A[i];
        }
        Solution ob;
        vector<vector<int> > ans = ob.stockBuySell(A, n);
        int p = 0;
        for(int i=0; i<n-1; i++)
        {
            int x = A[i+1]-A[i];
            if(x>0)
                p += x;
        }
        if(ans.size()==0)
            cout<<"No Profit";
        else{
            cout<<check(ans,A,p);
        }cout<<endl;
    }
    return 0;
}


// } Driver Code Ends
```
