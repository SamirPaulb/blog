---
title: longest palindromic subsequence
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, longest-palindromic-subsequence solution
description: longest palindromic subsequence LeetCode Solution Explained
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


<h2>516. Longest Palindromic Subsequence</h2><h3>Medium</h3><hr><div><p>Given a string s, find the longest palindromic subsequence's length in s. You may assume that the maximum length of s is 1000.</p>

<p><b>Example 1:</b><br>
Input:</p>

<pre>"bbbab"
</pre>
Output:

<pre>4
</pre>
One possible longest palindromic subsequence is "bbbb".

<p>&nbsp;</p>

<p><b>Example 2:</b><br>
Input:</p>

<pre>"cbbd"
</pre>
Output:

<pre>2
</pre>
One possible longest palindromic subsequence is "bb".
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 1000</code></li>
	<li><code>s</code> consists only of lowercase English letters.</li>
</ul>
</div>

---




```cpp
class Solution {
public:
    int longestPalindromeSubseq(string s) {
        string a=s;
        string str=s;
        reverse(str.begin(), str.end());
        string b=str;
        int n=s.size();
        int t[n+1][n+1];
        for(int i=0;i<=n;i++)
            t[i][0]=0;
        for(int i=0;i<=n;i++)
            t[0][i]=0;
        for(int i=1;i<=n;i++){
            for(int j=1;j<=n;j++){
              if(a[i-1]==b[j-1])
                  t[i][j]=1+t[i-1][j-1];
              else
                  t[i][j]=max(t[i-1][j],t[i][j-1]);
           }
        }
        return t[n][n];
    }
};
```
