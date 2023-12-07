---
title: Trailing zeroes in factorial   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Trailing zeroes in factorial - GFG solution
description: Trailing zeroes in factorial   GFG Solution Explained
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


# Trailing zeroes in factorial
## Easy 
<div class="problem-statement">
                <p></p><p><span style="font-size:18px">For an integer <strong>N</strong>&nbsp;find the number of trailing zeroes in <strong>N!.</strong></span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>N = 5</span>
<span style="font-size:18px"><strong>Output:
</strong>1</span>
<span style="font-size:18px"><strong>Explanation:
</strong>5! = 120 so the number of trailing zero is 1.</span></pre>

<p><strong><span style="font-size:18px">Example 2:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>N = 4</span>
<span style="font-size:18px"><strong>Output:
</strong></span><span style="font-size:18px">0</span>
<span style="font-size:18px"><strong>Explanation:
</strong>4! = 24 so the number of trailing zero is 0.</span></pre>

<p><span style="font-size:18px"><strong>Your Task:&nbsp;&nbsp;</strong><br>
You don't need to read input or print anything. Your task is to complete the function&nbsp;<strong>trailingZeroes()</strong>&nbsp;which take an integer N as an input parameter and returns the count of trailing zeroes in the N!.</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong>&nbsp;O(logN)<br>
<strong>Expected Auxiliary Space:</strong>&nbsp;O(1)</span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= N&nbsp;&lt;= 10<sup>9</sup></span></p>
 <p></p>
            </div>

---




```cpp
// { Driver Code Starts
#include<bits/stdc++.h> 
using namespace std; 

 // } Driver Code Ends
//User function Template for C++
class Solution
{
public:
    int trailingZeroes(int N)
    {
        // Write Your Code here
        int res = 0;
        for(int i = 5; i <= N; i = i*5) {
            res = res + N / i;
        }
        return res;
    }
};

// { Driver Code Starts.
int main()
{
    int t;
    cin >> t;
    while (t--)
    {
        int N;
        cin >> N;
        Solution ob;
        int ans  = ob.trailingZeroes(N);
        cout<<ans<<endl;
    }
    return 0;
}  // } Driver Code Ends
```
