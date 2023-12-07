---
title: Palindrome String   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Palindrome String - GFG solution
description: Palindrome String   GFG Solution Explained
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


# Palindrome String
## Easy 
<div class="problem-statement">
                <p></p><p><span style="font-size:18px">Given a string <strong>S</strong>, check if it is palindrome or not.</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong> S = "abba"
<strong>Output:</strong> 1
<strong>Explanation: </strong>S is a palindrome</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong> S = "abc" 
<strong>Output:</strong> 0
<strong>Explanation: </strong>S is not a palindrome</span></pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task: </strong><br>
You don't need to read input or print anything. Complete the function <strong>isPlaindrome()</strong>which accepts string S and returns an integervalue 1 or 0.</span></p>

<p><br>
<span style="font-size:18px"><strong>Expected Time Complexity: </strong>O(Length of S)<br>
<strong>Expected Auxiliary Space: </strong>O(1)</span></p>

<p><br>
<span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= Length of S&lt;= 10<sup>5</sup></span></p>
 <p></p>
            </div>

---




```cpp
// { Driver Code Starts
 
#include <bits/stdc++.h>
using namespace std;


 // } Driver Code Ends
//User function template for C++
class Solution{
public:	
	
	
	int isPalindrome(string S)
	{
	    // Your code goes here
	    int r = S.size();
	    int start = 0, end = (r - 1);
	    while(start <= end) {
	        if(S[start] != S[end]){
	        return 0;
	        }
	        else{
	        start++;
	        end--;
	        }
	    }
	return 1;
	}

};

// { Driver Code Starts.

int main() 
{
   	ios_base::sync_with_stdio(0);
    cin.tie(NULL);
    cout.tie(NULL);
   
   	int t;
   	cin >> t;
   	while(t--)
   	{
   		string s;
   		cin >> s;

   	    Solution ob;

   		cout << ob.isPalindrome(s) << "\n";
   	}

    return 0;
}  // } Driver Code Ends
```
