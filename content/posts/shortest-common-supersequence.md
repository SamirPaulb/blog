---
title: shortest common supersequence
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, shortest-common-supersequence solution
description: shortest common supersequence LeetCode Solution Explained
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


<h2>1092. Shortest Common Supersequence </h2><h3>Hard</h3><hr><div><p>Given two strings <code>str1</code> and <code>str2</code>,&nbsp;return the shortest string that has both <code>str1</code>&nbsp;and <code>str2</code>&nbsp;as subsequences.&nbsp;&nbsp;If multiple answers exist, you may return any of them.</p>

<p><em>(A string S is a subsequence of string T if deleting some number of characters from T (possibly 0, and the characters are chosen <u>anywhere</u> from T) results in the string S.)</em></p>

<p>&nbsp;</p>

<p><strong>Example 1:</strong></p>

<pre><strong>Input: </strong>str1 = <span id="example-input-1-1">"abac"</span>, str2 = <span id="example-input-1-2">"cab"</span>
<strong>Output: </strong><span id="example-output-1">"cabac"</span>
<strong>Explanation: </strong>
str1 = "abac" is a subsequence of "cabac" because we can delete the first "c".
str2 = "cab" is a subsequence of "cabac" because we can delete the last "ac".
The answer provided is the shortest such string that satisfies these properties.
</pre>

<p>&nbsp;</p>

<p><strong>Note:</strong></p>

<ol>
	<li><code>1 &lt;= str1.length, str2.length &lt;= 1000</code></li>
	<li><code>str1</code> and <code>str2</code> consist of lowercase English letters.</li>
</ol>
</div>

---




```cpp
class Solution {
public:
    string shortestCommonSupersequence(string a, string b) {
        int m=a.size();
        int n=b.size();
        int t[m+1][n+1];
        for(int i=0;i<=m;i++)
            t[i][0]=0;
        for(int i=0;i<=n;i++)
            t[0][i]=0;
        for(int i=1;i<=m;i++){
            for(int j=1;j<=n;j++){
                if(a[i-1]==b[j-1])
                    t[i][j]=1+t[i-1][j-1];
                else
                    t[i][j]=max(t[i-1][j], t[i][j-1]);
            }
        }
        int i=m,j=n;
        string ans;
        while(i>0 && j>0){
            if(a[i-1]==b[j-1]){
                ans.push_back(a[i-1]);
                i--;
                j--;
            }
            else if(t[i-1][j]>t[i][j-1]){
                ans.push_back(a[i-1]);
                i--;
            }
            else{
                ans.push_back(b[j-1]);
                j--;
            }   
        }
        while(i>0){
           ans.push_back(a[i-1]);
           i--; 
        }
         while(j>0){
           ans.push_back(b[j-1]);
           j--; 
        }
        reverse(ans.begin(), ans.end());
        return ans;
    }
};
```
