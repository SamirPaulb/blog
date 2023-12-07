---
title: Reverse a String   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Reverse a String - GFG solution
description: Reverse a String   GFG Solution Explained
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


# Reverse a String
## Easy
<div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a String S , print the reverse of the string as output.</span><br>
<br>
<span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input</strong>: S = "GeeksforGeeks</span><span style="font-size:18px">"
<strong>Output:</strong>&nbsp;"skeeGrofskeeG</span><span style="font-size:18px">"&nbsp;
<strong>Explanation</strong>: Element at first is at last and
last is at first, second is at second last and 
second last is at second position and so on .
</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>S = "ReversE"
<strong>Output:&nbsp;</strong>"EsreveR"
<strong>Explanation</strong>: "E" at first and "R" at last and
"e" at second last and "s" at second and
so on .</span></pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:&nbsp;&nbsp;</strong><br>
You dont need to read input or print anything. Complete the function <strong>revStr</strong><strong>()&nbsp;</strong>which takes S&nbsp;as input parameter and returns the reversed string .<br>
<br>
<strong>Expected Time Complexity:</strong> O(|S|)<br>
<strong>Expected Auxiliary Space:</strong> O(|S|)<br>
<br>
<strong>Constraints:</strong><br>
1&lt;= |S|&nbsp;&lt;=1000</span></p>
</div>

---




```cpp
//{ Driver Code Starts
// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends
// User function Template for C++
class Solution {
  public:
    string revStr(string S) {
        // code here
        // reverse(S.begin(), S.end());
        // return S;
        
        int s = 0, e = S.length() - 1;
        while(s < e) {
        swap(S[s], S[e]);
        s++;
        e--;
    }
    return S;
    }
};

//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        string S;
        cin >> S;
        Solution ob;
        cout << ob.revStr(S) << endl;
    }
    return 0;
}

// } Driver Code Ends
```
