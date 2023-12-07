---
title: Check if it is possible to convert one string into another with given constraints   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Check if it is possible to convert one string into another with given constraints - GFG solution
description: Check if it is possible to convert one string into another with given constraints   GFG Solution Explained
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


# Check if it is possible to convert one string into another with given constraints
## Easy
<div class="problems_problem_content__Xm_eO"><p>Given two strings S and T, which&nbsp;contains three characters i.e <strong>'A', 'B'</strong> and <strong>'#'&nbsp;</strong>only. Check&nbsp;whether it is possible to convert the first string into another string by performing following operations on string first.<br>
1- A can move towards Left only<br>
2- B can move towards Right only<br>
3- Neither A nor B should&nbsp;cross each other<br>
<strong>Note:</strong> Moving i'th character&nbsp;towards Left one step means swap i'th with (i-1)'th charecter [ i-1&gt;=0 ].&nbsp;Moving i'th character&nbsp;towards Right one step means swap i'th with (i+1)'th charecter [ i+1&lt; string's length ].&nbsp;</p>

<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong>
S=#A#B#B#   
T=A###B#B
<strong>Output:</strong>
1
<strong>Explanation:</strong>
A in S is right to the A in T 
so A of S can move easily towards
the left because there is no B on
its left positions and for first B 
in S is left to the B in T so B 
of T can move easily towards the 
right because there is no A on its
right positions and it is same for 
next B so S can be easily converted
into T.</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong>
S=#A#B# 
T=#B#A#
<strong>Output:</strong>
0
<strong>Explanation:</strong>
Here first A in S is left to the 
A in T and according to the condition,
A cant move towards right,so S cant 
be converted into T.</pre>

<p><br>
<strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function <strong>isItPossible() </strong>which takes the two strings S, T and their respective lengths M and N as input parameters and returns 1 if S can be converted into T. Otherwise, it returns 0.</p>

<p><br>
<strong>Expected Time Complexity:&nbsp;</strong>O(M+N) where M is size of string S and N is size of string T.<br>
<strong>Expected Auxillary Space:&nbsp;</strong>O(1)<br>
&nbsp;</p>

<p><strong>Constraints:</strong><br>
1&lt;=M,N&lt;=100000</p>
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
    int isItPossible(string S, string T, int M, int N) {
        // code here
        if(M!=N) return 0;
        string S1="",S2="";
        for(int i=0;i<S.size();i++){
            if(S[i]!='#'){
                S1+=S[i];
            }
        }
        
          for(int i=0;i<T.size();i++){
            if(T[i]!='#'){
                S2+=T[i];
            }
        }
        return (int)(S1==S2);
    }
};

//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    while (t--) {
        string S, T;
        cin >> S >> T;
        int M = S.length(), N = T.length();
        Solution ob;
        cout << ob.isItPossible(S, T, M, N);
        cout << "\n";
    }
}
// } Driver Code Ends
```
