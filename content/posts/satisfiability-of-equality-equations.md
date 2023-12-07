---
title: satisfiability of equality equations
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, satisfiability-of-equality-equations solution
description: satisfiability of equality equations LeetCode Solution Explained
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


<h2>990. Satisfiability of Equality Equations</h2><h3>Medium</h3><hr><div><p>Given an array <font face="monospace">equations</font>&nbsp;of strings that represent relationships between variables, each string <code>equations[i]</code>&nbsp;has length <code>4</code> and takes one of two different forms: <code>"a==b"</code> or <code>"a!=b"</code>.&nbsp; Here, <code>a</code> and <code>b</code> are lowercase letters (not necessarily different) that represent one-letter variable names.</p>

<p>Return <code>true</code>&nbsp;if and only if it is possible to assign integers to variable names&nbsp;so as to satisfy all the given equations.</p>

<p>&nbsp;</p>

<ol>
</ol>

<div>
<p><strong>Example 1:</strong></p>

<pre><strong>Input: </strong><span id="example-input-1-1">["a==b","b!=a"]</span>
<strong>Output: </strong><span id="example-output-1">false</span>
<strong>Explanation: </strong>If we assign say, a = 1 and b = 1, then the first equation is satisfied, but not the second.  There is no way to assign the variables to satisfy both equations.
</pre>

<div>
<p><strong>Example 2:</strong></p>

<pre><strong>Input: </strong><span id="example-input-2-1">["b==a","a==b"]</span>
<strong>Output: </strong><span id="example-output-2">true</span>
<strong>Explanation: </strong>We could assign a = 1 and b = 1 to satisfy both equations.
</pre>

<div>
<p><strong>Example 3:</strong></p>

<pre><strong>Input: </strong><span id="example-input-3-1">["a==b","b==c","a==c"]</span>
<strong>Output: </strong><span id="example-output-3">true</span>
</pre>

<div>
<p><strong>Example 4:</strong></p>

<pre><strong>Input: </strong><span id="example-input-4-1">["a==b","b!=c","c==a"]</span>
<strong>Output: </strong><span id="example-output-4">false</span>
</pre>

<div>
<p><strong>Example 5:</strong></p>

<pre><strong>Input: </strong><span id="example-input-5-1">["c==c","b==d","x!=z"]</span>
<strong>Output: </strong><span id="example-output-5">true</span>
</pre>

<p>&nbsp;</p>

<p><strong>Note:</strong></p>

<ol>
	<li><code>1 &lt;= equations.length &lt;= 500</code></li>
	<li><code>equations[i].length == 4</code></li>
	<li><code>equations[i][0]</code> and <code>equations[i][3]</code> are lowercase letters</li>
	<li><code>equations[i][1]</code> is either <code>'='</code> or <code>'!'</code></li>
	<li><code>equations[i][2]</code> is&nbsp;<code>'='</code></li>
</ol>
</div>
</div>
</div>
</div>
</div>
</div>

---




```cpp
class Solution {
public:
    vector<int> adj[26];
    int vis[26];
    int col[26];
    
    void dfs(int i, int c){
        vis[i]=1;
        col[i]=c;
        for(int u: adj[i]){
            if(!vis[u])
            dfs(u, c);
        }
    }
    bool equationsPossible(vector<string>& equations) {
        int n=equations.size();
        for(int i=0;i<n;i++){
            if(equations[i][1]=='='){
                char x=equations[i][0];
                char y=equations[i][3];
                adj[x-'a'].push_back(y-'a');
                adj[y-'a'].push_back(x-'a');
            }
        }
        int c=0;
        for(int i=0;i<26;i++){
            if(!vis[i]){
                dfs(i, c);
                c++;
            }
        }
        for(int i=0;i<n;i++){
            if(equations[i][1]=='!'){
                char x=equations[i][0];
                char y=equations[i][3];
                if(col[x-'a']==col[y-'a'])
                    return false;
            }
        }
        return true;
        
    }
};
```
