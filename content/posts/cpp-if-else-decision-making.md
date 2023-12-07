---
title: C++ if else (Decision Making)   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, C++ if-else (Decision Making) - GFG solution
description: C++ if else (Decision Making)   GFG Solution Explained
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


# C++ if-else (Decision Making)
## Easy
<div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given an integer N.&nbsp;Your task is to check if the integer is greater than, less than or equal to 5.<br>
If the integer is greater than 5, then print "Greater than 5" (without quotes).<br>
If the integer is less than 5, then print "Less than 5".<br>
If the integer is equal to 5, then print "Equal&nbsp;to 5".</span><br>
&nbsp;</p>

<p><strong><span style="font-size:18px">Example 1:</span></strong></p>

<pre><strong><span style="font-size:18px">Input:</span></strong>
<span style="font-size:18px">N = 8</span>
<strong><span style="font-size:18px">Output:</span></strong>
<span style="font-size:18px">Greater than 5</span>
</pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong></span>
<span style="font-size:18px">N = 4</span>
<span style="font-size:18px"><strong>Output:</strong></span>
<span style="font-size:18px">Less than 5</span>
</pre>

<p>&nbsp;</p>

<p><strong><span style="font-size:18px">Your Task:</span></strong></p>

<p><span style="font-size:18px">You don't need to read input or print anything. Your task is to complete the function compareFive() which takes the number N and returns&nbsp;"Greater than 5" if the integer is greater than 5 or "Less than 5" if the integer is less than 5 otherwise print "Equal&nbsp;to 5" if the integer equals to 5.</span></p>

<p><strong><span style="font-size:18px">Note :-&nbsp;</span></strong><span style="font-size:18px">Do not print the next line after the result.</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(1)<br>
<strong>Expected Auxiliary Space: </strong>O(1)</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= N &lt;= 100000</span></p>

<p>&nbsp;</p>
</div>

---




```cpp
//{ Driver Code Starts
#include<bits/stdc++.h> 
using namespace std; 

// } Driver Code Ends
class Solution{   
public:
    string compareFive(int n){
        // code here 
        if(n > 5) return "Greater than 5";
        if(n < 5) return "Less than 5";
        if( n == 5) return "Equal to 5";
    }
};

//{ Driver Code Starts.
int main() 
{ 
    int t;
    cin>>t;
    while(t--)
    {
        int N;
        cin >> N;
        Solution ob;
        cout << ob.compareFive(N) << endl;
    }
    return 0; 
} 

// } Driver Code Ends
```
