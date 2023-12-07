---
title: Sum Of Digits   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Sum Of Digits - GFG solution
description: Sum Of Digits   GFG Solution Explained
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


# Sum Of Digits
## Easy
<div class="problem-statement">
                <p></p><p><span style="font-size:18px">Given a number,&nbsp;<strong>N</strong>. Find the sum of all the digits of N</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>N = 12<strong>
Output:
</strong>3<strong>
Explanation:</strong>
Sum of 12's digits:
1 + 2 = 3</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>N = 23<strong>
Output
</strong>5<strong>
Explanation:
</strong>Sum of 23's digits:
2 + 3 = 5
</span></pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function <strong>sumOfDigits()</strong>&nbsp;which takes&nbsp;an integer&nbsp;<strong>N</strong>&nbsp;as input parameters&nbsp;and returns an integer, total sum of digits of N.</span></p>

<p><br>
<span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(log<sub>10</sub>N)<br>
<strong>Expected Space Complexity:</strong> O(1)</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1&lt;=N&lt;=10<sup>5</sup></span></p>
 <p></p>
            </div>

---




```cpp
// { Driver Code Starts
#include<bits/stdc++.h> 
using namespace std;

 // } Driver Code Ends
class Solution{
public:
    int sumOfDigits(int N){
        //code here
        int res = 0;
        int temp = N;
        while(temp != 0) {
            int lastDigit = temp % 10;
            res = res + lastDigit;
            temp = temp / 10;
        }
        return res;
    }
};

// { Driver Code Starts.
int main() 
{ 
    int t;
    cin>>t;
    while(t--)
    {
        int N;
        cin>>N;
        Solution ob;
        cout << ob.sumOfDigits(N) << endl;
    }
    return 0; 
}  // } Driver Code Ends
```
