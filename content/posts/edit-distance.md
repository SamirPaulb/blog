---
title: edit distance
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, edit-distance solution
description: edit distance LeetCode Solution Explained
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


<h2>72. Edit Distance</h2><h3>Hard</h3><hr><div><p>Given two strings <code>word1</code> and <code>word2</code>, return <em>the minimum number of operations required to convert <code>word1</code> to <code>word2</code></em>.</p>

<p>You have the following three operations permitted on a word:</p>

<ul>
	<li>Insert a character</li>
	<li>Delete a character</li>
	<li>Replace a character</li>
</ul>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> word1 = "horse", word2 = "ros"
<strong>Output:</strong> 3
<strong>Explanation:</strong> 
horse -&gt; rorse (replace 'h' with 'r')
rorse -&gt; rose (remove 'r')
rose -&gt; ros (remove 'e')
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> word1 = "intention", word2 = "execution"
<strong>Output:</strong> 5
<strong>Explanation:</strong> 
intention -&gt; inention (remove 't')
inention -&gt; enention (replace 'i' with 'e')
enention -&gt; exention (replace 'n' with 'x')
exention -&gt; exection (replace 'n' with 'c')
exection -&gt; execution (insert 'u')
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= word1.length, word2.length &lt;= 500</code></li>
	<li><code>word1</code> and <code>word2</code> consist of lowercase English letters.</li>
</ul>
</div>

---




```cpp
class Solution {
public:
    int t[501][501];
    
    int solve(string word1, string word2, int i, int j){
        if(i==0 && j==0)
            return 0;
        if(i==0)
            return j;
        if(j==0)
            return i;
        if(t[i][j]!=-1)
            return t[i][j];
        if(word1[i-1]==word2[j-1])
            return t[i][j]=solve(word1,word2,i-1,j-1);
        int x=min(min(solve(word1,word2,i-1,j),solve(word1,word2,i,j-1)),solve(word1,word2,i-1,j-1))+1;
        return t[i][j]=x;
    }
    
    
    int minDistance(string word1, string word2) {
        int n=word1.size();
        int m=word2.size();
        memset(t,-1,sizeof(t));
        return solve(word1, word2, n, m);
    }
};
```
