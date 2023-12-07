---
title: Data Type   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Data Type - GFG solution
description: Data Type   GFG Solution Explained
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


# Data Type
## Easy
<div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Geek is learning a new programming language. As data type forms the most fundamental part of a language, Geek is learning them with focus and needs your help. Given a data type, help Geek in finding the size of it in byte.</span></p>

<p><span style="font-size:18px">Data Type - <strong>Character, Integer, Long, Float and Double</strong></span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong> Character</span>
<span style="font-size:18px"><strong>Output:</strong> 1</span>
</pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong> Integer</span>
<span style="font-size:18px"><strong>Output:</strong> 4</span></pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong></span></p>

<p><span style="font-size:18px">Complete the function <strong>dataTypeSize()</strong> which takes a string as input and returns&nbsp;the size of the data type represented by the given string in byte unit.</span></p>
</div>

---




```cpp
//{ Driver Code Starts
// Initial Template for C++

// {Driver Code Starts
#include <bits/stdc++.h>
using namespace std;
// } Driver Code Ends


// } Driver Code Ends
// User function Template for C++

class Solution {
  public:
    int dataTypeSize(string str) {
        // your code here
        if (str == "Character")
        return sizeof(char);
        
        if(str == "Integer") 
        return sizeof(int);
        
        if(str == "Long")
        return sizeof(long);
        
        if(str == "Float")
        return sizeof(float);
        
        if(str == "Double")
        return sizeof(double);
    }
};

//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    while (t--) {
        string str;
        cin >> str;
        Solution ob;
        cout << ob.dataTypeSize(str);
        cout << "\n";
    }
    return 0;
}

// } Driver Code Ends
```
