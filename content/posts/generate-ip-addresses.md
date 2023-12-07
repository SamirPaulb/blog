---
title: Generate IP Addresses   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Generate IP Addresses - GFG solution
description: Generate IP Addresses   GFG Solution Explained
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


# Generate IP Addresses
## Easy
<div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a string <strong>S</strong>&nbsp;containing only digits, Your task is to complete the function <strong>genIp()&nbsp;</strong>which returns a vector containing all possible combinations&nbsp;of <strong>valid</strong> IPv4 IP addresses and takes only a string <strong>S</strong>&nbsp;as its only argument.<br>
<strong>Note: </strong>Order doesn't matter. A <strong>valid</strong> IP address must be in the form of A.B.C.D, where A, B, C, and D are numbers from 0-255. The numbers cannot be 0 prefixed unless they are 0.<br>
<br>
<br>
For string 11211 the IP address possible are&nbsp;<br>
1.1.2.11<br>
1.1.21.1<br>
1.12.1.1<br>
11.2.1.1</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>S = 1111
<strong>Output: </strong>1.1.1.1
</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
S = 55
<strong>Output:</strong> -1</span></pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:</strong></span></p>

<p><span style="font-size:18px">Your task is to complete the function <strong>genIp()&nbsp;</strong>which returns a vector containing all possible combinations&nbsp;of valid IPv4 IP addresses&nbsp;or <strong>-1 if no such IP address could be generated</strong> through the input string <strong>S</strong>,&nbsp;the only argument to the function.</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong>&nbsp;O(N * N * N)<br>
<strong>Expected Auxiliary Space:</strong>&nbsp;O(N * N * N * N)</span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1&lt;=N&lt;=16<br>
here, N = length of S.<br>
S only contains digits(i.e. 0-9)</span></p>
</div>

---




```cpp
//{ Driver Code Starts
#include <bits/stdc++.h>

using namespace std;


// } Driver Code Ends
/*You are required to complete this method*/

class Solution{
  public:
  
  bool isValid(const string& sub) {
    if (sub.length() > 1 && sub[0] == '0') {
        return false;
    }
    int num = stoi(sub);
    return num >= 0 && num <= 255;
}

void backtrack(const string& s, vector<string>& current, vector<string>& result) {
    if (s.empty() && current.size() == 4) {
        result.push_back(current[0] + "." + current[1] + "." + current[2] + "." + current[3]);
        return;
    }

    if (current.size() >= 4) {
        return;
    }

    for (int i = 1; i <= min(4, static_cast<int>(s.length())); i++) {
        string sub = s.substr(0, i);
        if (isValid(sub)) {
            current.push_back(sub);
            backtrack(s.substr(i), current, result);
            current.pop_back();
        }
    }
}
  
    vector<string> genIp(string &s) {
        // Your code here
    vector<string> result;
    vector<string> current;
    backtrack(s, current, result);
    return result;
    }

};

//{ Driver Code Starts.

int main() {
    int T;
    cin >> T;
    while (T--) {
        string s;
        cin >> s;

        /*generating naively*/
        Solution obj;
        vector<string> str = obj.genIp(s);
        sort(str.begin(), str.end());
        if(str.size()==0)
            cout << -1 << "\n";
        else{
            for (auto &u : str) {
                cout << u << "\n";
            }
        }
    }
}
// } Driver Code Ends
```
