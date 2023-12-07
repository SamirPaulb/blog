---
title: C++ Strings   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, C++ Strings - GFG solution
description: C++ Strings   GFG Solution Explained
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


# C++ Strings
## Easy
<div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given two strings&nbsp; S1 and S2 .&nbsp;You have to concatenate both the strings and print the concatenated string.</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
S1 = "Geeksfor"
S2 = "Geeks"
<strong>Output:</strong> GeeksforGeeks
<strong>Explanation: </strong>Combined "Geeksfor" and "Geeks"</span></pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
S1 = "Practice"
S2 = "Hard"
<strong>Output:</strong> PracticeHard
<strong>Explanation: </strong>Combined "Practice" and "Hard"</span></pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task: &nbsp;</strong><br>
You dont need to read input or print anything. Complete the function <strong>conCat()</strong>&nbsp;which accepts two strings S1 and S2 as input parameter and returns concatenated string.</span></p>

<p><br>
<span style="font-size:18px"><strong>Expected Time Complexity: </strong>O(|S1| + |S2|) .<br>
<strong>Expected Auxiliary Space: </strong>O(|S1| + |S2|) .<br>
where N is the length of a&nbsp;String</span></p>

<p><br>
<span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= |S1| , |S2|&nbsp;&lt;= 10<sup>5</sup></span><br>
<span style="font-size:18px">|S| denotes the length of the string S.</span></p>
</div>

---




```cpp
//{ Driver Code Starts
#include<iostream>
#include<string>
using namespace std;

string conCat(string a , string b);

int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        string a,b;
        cin>>a>>b;
        cout<<conCat(a,b)<<endl;
    }
    return 0;
}

// } Driver Code Ends


string conCat(string s1 , string s2)
{
    // code here.
    return s1+s2;
}

```
