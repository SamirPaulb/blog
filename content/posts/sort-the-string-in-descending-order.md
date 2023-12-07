---
title: Sort the string in descending order   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Sort the string in descending order - GFG solution
description: Sort the string in descending order   GFG Solution Explained
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


# Sort the string in descending order
## Easy
<div class="problem-statement">
                <p></p><p><span style="font-size:18px">Given a string <strong>str&nbsp;</strong>containing only lower case alphabets, the task is to sort it in lexicographically-descending order. </span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>str = "geeks"
<strong>Output:</strong> "skgee"
<strong>Explanation</strong>: It's the lexicographically</span>-
<span style="font-size:18px">descending order.</span>
</pre>

<p><span style="font-size:18px">â€‹<strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input</strong>: str = "for"
<strong>Output:</strong> "rof"
<strong>Explanation</strong>: "rof" is in
lexicographically-descending order.</span>
</pre>

<p><span style="font-size:18px"><strong>Your Task:&nbsp;&nbsp;</strong><br>
You don't need to read input or print anything. Your task is to complete the function&nbsp;<strong>ReverseSort()</strong>&nbsp;which takes the string str<strong>&nbsp;</strong>as inputs and returns the modified string.<br>
<br>
<strong>Expected Time Complexity:</strong>&nbsp;O(|str|)<br>
<strong>Expected Auxiliary Space:</strong>&nbsp;O(1)<br>
<br>
<strong>Constraints:</strong><br>
1 ≤ |str| ≤ 10<sup>5</sup></span></p>
 <p></p>
            </div>

---




```cpp
// { Driver Code Starts

#include <bits/stdc++.h>
using namespace std;
string ReverseSort(string str);

int main(){
    int t;
    cin >> t;
    while(t--){

        string s;
        cin >> s;
        cout << ReverseSort(s) << endl;
    }
return 0;
}
// } Driver Code Ends



string ReverseSort(string str){
    //complete the function here
    sort(str.rbegin(), str.rend());
    return str;
    
}
```
