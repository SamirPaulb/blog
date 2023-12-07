---
title: find and replace pattern
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, find-and-replace-pattern solution
description: find and replace pattern LeetCode Solution Explained
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


<h2>890. Find and Replace Pattern</h2><h3>Medium</h3><hr><div><p>Given a list of strings <code>words</code> and a string <code>pattern</code>, return <em>a list of</em> <code>words[i]</code> <em>that match</em> <code>pattern</code>. You may return the answer in <strong>any order</strong>.</p>

<p>A word matches the pattern if there exists a permutation of letters <code>p</code> so that after replacing every letter <code>x</code> in the pattern with <code>p(x)</code>, we get the desired word.</p>

<p>Recall that a permutation of letters is a bijection from letters to letters: every letter maps to another letter, and no two letters map to the same letter.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"
<strong>Output:</strong> ["mee","aqq"]
<strong>Explanation:</strong> "mee" matches the pattern because there is a permutation {a -&gt; m, b -&gt; e, ...}. 
"ccc" does not match the pattern because {a -&gt; c, b -&gt; c, ...} is not a permutation, since a and b map to the same letter.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> words = ["a","b","c"], pattern = "a"
<strong>Output:</strong> ["a","b","c"]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= pattern.length &lt;= 20</code></li>
	<li><code>1 &lt;= words.length &lt;= 50</code></li>
	<li><code>words[i].length == pattern.length</code></li>
	<li><code>pattern</code> and <code>words[i]</code> are lowercase English letters.</li>
</ul>
</div>

---




```cpp
class Solution {
public:
    vector<string> findAndReplacePattern(vector<string>& w, string p) {
        vector<string> ans;
        for(int i=0;i<w.size();i++){
            map<char,char> m1;
            map<char,char> m2;
            bool f=false;
            for(int j=0;j<w[i].size();j++){
                char a=w[i][j];
                char b=p[j];
                if(m1.find(a)==m1.end())
                    m1[a]=b;
                if(m2.find(b)==m2.end())
                    m2[b]=a;
                if(m1[a]!=b || m2[b]!=a){
                    f=true;
                    break;
                }   
            }
            if(!f)
                ans.push_back(w[i]);
        }
        return ans;
    }
};
```
