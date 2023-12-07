---
title: 2 keys keyboard
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 2-keys-keyboard solution
description: 2 keys keyboard LeetCode Solution Explained
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


<h2>650. 2 Keys Keyboard</h2><h3>Medium</h3><hr><div><p>There is only one character <code>'A'</code> on the screen of a notepad. You can perform two operations on this notepad for each step:</p>

<ul>
	<li>Copy All: You can copy all the characters present on the screen (a partial copy is not allowed).</li>
	<li>Paste: You can paste the characters which are copied last time.</li>
</ul>

<p>Given an integer <code>n</code>, return <em>the minimum number of operations to get the character</em> <code>'A'</code> <em>exactly</em> <code>n</code> <em>times on the screen</em>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> n = 3
<strong>Output:</strong> 3
<strong>Explanation:</strong> Intitally, we have one character 'A'.
In step 1, we use Copy All operation.
In step 2, we use Paste operation to get 'AA'.
In step 3, we use Paste operation to get 'AAA'.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> n = 1
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 1000</code></li>
</ul>
</div>

---




```cpp
class Solution {
public:
    int t[1001][1001];
    
    int solve(int n, int st, int val, int copy){
        if(val==n)
            return st;
        if(st>n || val>n)
            return INT_MAX;
        if(t[st][val]!=-1)
            return t[st][val];
        return t[st][val]=min(solve(n, st+1, val+copy, copy), solve(n, st+2,val+val, val));
        
    }
    
    int minSteps(int n) {
        int ans=0;
        memset(t,-1,sizeof(t));
        if(n>1)
        return solve(n, 1, 1,1);
        return ans;
    }
};
```
