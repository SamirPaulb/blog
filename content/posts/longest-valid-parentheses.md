---
title: longest valid parentheses
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, longest-valid-parentheses solution
description: longest valid parentheses LeetCode Solution Explained
cover:
    image: https://scdn.netlify.app/img/leetcode-cover-img.webp
    alt: leetcode-cover-img
    caption: leetcode-cover-img
images: https://scdn.netlify.app/img/leetcode-cover-img.webp
date: 2021-10-04T15:58:26+08:00
lastmod: 2022-03-04T15:58:26+08:00
draft: false
author: Samir Paul
authorLink: https://twitter.com/intent/follow?screen_name=SamirPaulb
license: CC BY 4.0
---


<h2>32. Longest Valid Parentheses</h2><h3>Hard</h3><hr><div><p>Given a string containing just the characters <code>'('</code> and <code>')'</code>, find the length of the longest valid (well-formed) parentheses substring.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> s = "(()"
<strong>Output:</strong> 2
<strong>Explanation:</strong> The longest valid parentheses substring is "()".
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> s = ")()())"
<strong>Output:</strong> 4
<strong>Explanation:</strong> The longest valid parentheses substring is "()()".
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> s = ""
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= s.length &lt;= 3 * 10<sup>4</sup></code></li>
	<li><code>s[i]</code> is <code>'('</code>, or <code>')'</code>.</li>
</ul>
</div>

---




```cpp
class Solution {
public:
    int longestValidParentheses(string s) {
        int n=s.size();
        if(n==0)
            return 0;
        int dp[n];  // dp[i] denotes longestValidParentheses till i
        int ans=0;
        for(int i=0;i<n;i++)
            dp[i]=0;
        for(int i=1;i<n;i++){
            if(s[i]=='(')
                dp[i]=0;
            else{
                if(s[i-1]=='('){
                    if(i>=2){
                        dp[i]=dp[i-2]+2;
                    }
                    else
                        dp[i]=2;
                }
                else if(i-dp[i-1]>0 && s[i-dp[i-1]-1]=='('){
                    if(i-dp[i-1]>=2)
                        dp[i]=dp[i-1]+dp[i-dp[i-1]-2]+2;
                    else
                        dp[i]=dp[i-1]+2;   
                }
                ans=max(ans,dp[i]);
            }
        }
        return ans;
    }
};
```
