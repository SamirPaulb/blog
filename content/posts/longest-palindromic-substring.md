---
title: longest palindromic substring
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, longest-palindromic-substring solution
description: longest palindromic substring LeetCode Solution Explained
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


[Discussion Post (created on 27/2/2021 at 16:51)](https://leetcode.com/problems/longest-palindromic-substring/discuss/1129550/C%2B%2B-or-2D-DP)  
<h2>5. Longest Palindromic Substring</h2><h3>Medium</h3><hr><div><p>Given a string <code>s</code>, return&nbsp;<em>the longest palindromic substring</em> in <code>s</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> s = "babad"
<strong>Output:</strong> "bab"
<strong>Note:</strong> "aba" is also a valid answer.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> s = "cbbd"
<strong>Output:</strong> "bb"
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> s = "a"
<strong>Output:</strong> "a"
</pre>

<p><strong>Example 4:</strong></p>

<pre><strong>Input:</strong> s = "ac"
<strong>Output:</strong> "a"
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 1000</code></li>
	<li><code>s</code> consist of only digits and English letters (lower-case and/or upper-case),</li>
</ul></div>

---




```cpp
class Solution {
public:
    string longestPalindrome(string s) {
        int m=s.size();
        int dp[m][m];
        memset(dp,0,sizeof(dp));
        for(int i=0;i<m;i++){
            dp[i][i]=1;
        }
        int start=0,end=1;
        for(int i=0;i<m-1;i++){
            if(s[i]==s[i+1]){
                dp[i][i+1]=1;
                start=i;
                end=2;
            }
        }
        for(int i=2;i<m;i++){
            for(int j=0;j<m-i;j++){
              if(dp[j+1][i+j-1]==1 && s[j]==s[i+j]){
                  dp[j][i+j]=1;
                  start=j;
                  end=i+1;
              }   
           }
        }
        return s.substr(start,end);
    }
};
```
