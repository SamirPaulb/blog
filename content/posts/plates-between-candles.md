---
title: plates between candles
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, plates-between-candles solution
description: plates between candles LeetCode Solution Explained
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


<h2>2055. Plates Between Candles</h2><h3>Medium</h3><hr><div><p>There is a long table with a line of plates and candles arranged on top of it. You are given a <strong>0-indexed</strong> string <code>s</code> consisting of characters <code>'*'</code> and <code>'|'</code> only, where a <code>'*'</code> represents a <strong>plate</strong> and a <code>'|'</code> represents a <strong>candle</strong>.</p>

<p>You are also given a <strong>0-indexed</strong> 2D integer array <code>queries</code> where <code>queries[i] = [left<sub>i</sub>, right<sub>i</sub>]</code> denotes the <strong>substring</strong> <code>s[left<sub>i</sub>...right<sub>i</sub>]</code> (<strong>inclusive</strong>). For each query, you need to find the <strong>number</strong> of plates <strong>between candles</strong> that are <strong>in the substring</strong>. A plate is considered <strong>between candles</strong> if there is at least one candle to its left <strong>and</strong> at least one candle to its right <strong>in the substring</strong>.</p>

<ul>
	<li>For example, <code>s = "||**||**|*"</code>, and a query <code>[3, 8]</code> denotes the substring <code>"*||<strong><u>**</u></strong>|"</code>. The number of plates between candles in this substring is <code>2</code>, as each of the two plates has at least one candle <strong>in the substring</strong> to its left <strong>and</strong> right.</li>
</ul>

<p>Return <em>an integer array</em> <code>answer</code> <em>where</em> <code>answer[i]</code> <em>is the answer to the</em> <code>i<sup>th</sup></code> <em>query</em>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="ex-1" src="https://assets.leetcode.com/uploads/2021/10/04/ex-1.png" style="width: 400px; height: 134px;">
<pre><strong>Input:</strong> s = "**|**|***|", queries = [[2,5],[5,9]]
<strong>Output:</strong> [2,3]
<strong>Explanation:</strong>
- queries[0] has two plates between candles.
- queries[1] has three plates between candles.
</pre>

<p><strong>Example 2:</strong></p>
<img alt="ex-2" src="https://assets.leetcode.com/uploads/2021/10/04/ex-2.png" style="width: 600px; height: 193px;">
<pre><strong>Input:</strong> s = "***|**|*****|**||**|*", queries = [[1,17],[4,5],[14,17],[5,11],[15,16]]
<strong>Output:</strong> [9,0,0,0,0]
<strong>Explanation:</strong>
- queries[0] has nine plates between candles.
- The other queries have zero plates between candles.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>3 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
	<li><code>s</code> consists of <code>'*'</code> and <code>'|'</code> characters.</li>
	<li><code>1 &lt;= queries.length &lt;= 10<sup>5</sup></code></li>
	<li><code>queries[i].length == 2</code></li>
	<li><code>0 &lt;= left<sub>i</sub> &lt;= right<sub>i</sub> &lt; s.length</code></li>
</ul>
</div>

---




```cpp
class Solution {
public:
    vector<int> platesBetweenCandles(string s, vector<vector<int>>& queries) {
        int n=s.size();
        int l[n];
        int r[n];
        int lind=0,rind=0;
        for(int i=0;i<n;i++){
            l[i]=-1;
            r[i]=-1;
        }
        l[0]=-1;
        for(int i=1;i<n;i++){
            if(s[i]=='|')
                l[i]=i;
            else
                l[i]=l[i-1];
        }
        r[n-1]=-1;
        for(int i=n-2;i>=0;i--){
            if(s[i]=='|')
                r[i]=i;
            else
                r[i]=r[i+1];
        }
        int count[n];
        int x=0;
        for(int i=0;i<n;i++){
            if(s[i]=='*')
                x++;
            count[i]=x;
        }
        vector<int> ans;
        for(auto x: queries){
            int ll=x[0];
            int rr=x[1];
            int prevInd=l[rr];
            int nextInd=r[ll];
            int c=0;
            if(prevInd>nextInd)
                c=count[prevInd]-count[nextInd];
            ans.push_back(c);
        }
        return ans;
    }
};
```
