---
title: palindromic substrings
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, palindromic-substrings solution
description: palindromic substrings LeetCode Solution Explained
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


[Discussion Post (created on 14/0/2021 at 19:11)](https://leetcode.com/problems/palindromic-substrings/solution/)  
[Discussion Post (created on 14/0/2021 at 19:1)](https://leetcode.com/problems/palindromic-substrings/discuss/1016504/Expand-Around-Center-or-100-faster-100-memory-or-C%2B%2B)  
<h2>647. Palindromic Substrings</h2><h3>Medium</h3><hr><div><p>Given a string, your task is to count how many palindromic substrings in this string.</p>

<p>The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.</p>

<p><b>Example 1:</b></p>

<pre><b>Input:</b> "abc"
<b>Output:</b> 3
<b>Explanation:</b> Three palindromic strings: "a", "b", "c".
</pre>

<p>&nbsp;</p>

<p><b>Example 2:</b></p>

<pre><b>Input:</b> "aaa"
<b>Output:</b> 6
<b>Explanation:</b> Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
</pre>

<p>&nbsp;</p>

<p><b>Note:</b></p>

<ol>
	<li>The input string length won't exceed 1000.</li>
</ol>

<p>&nbsp;</p></div>

---




```cpp
class Solution {
public:
    
    int countSubstrings(string s) {
        int n=s.size(),ans=0;
        if(n<=0)
            return 0;
        int t[n][n];
        memset(t,0,sizeof(t));
        for(int i=0;i<n;i++){
            t[i][i]=1;
        }
        for(int i=0;i<n-1;i++){
            if(s[i]==s[i+1])
              t[i][i+1]=1;
        }
            
        for(int i=2;i<n;i++){
           for(int j=0;j<n-i;j++){
               if(t[j+1][i+j-1]==1 && s[j]==s[i+j])
                   t[j][i+j]=1;
           }
        }
        for(int i=0;i<n;i++){
           for(int j=0;j<n;j++){
                   if(t[i][j])
                       ans++;
           }
        }
        return ans;
    }
};
```
