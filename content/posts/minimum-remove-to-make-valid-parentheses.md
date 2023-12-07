---
title: minimum remove to make valid parentheses
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, minimum-remove-to-make-valid-parentheses solution
description: minimum remove to make valid parentheses LeetCode Solution Explained
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


<h2>1249. Minimum Remove to Make Valid Parentheses</h2><h3>Medium</h3><hr><div><p>Given a string <font face="monospace">s</font>&nbsp;of&nbsp;<code>'('</code>&nbsp;,&nbsp;<code>')'</code>&nbsp;and lowercase English characters.&nbsp;</p>

<p>Your task is to remove the minimum number of parentheses (&nbsp;<code>'('</code>&nbsp;or&nbsp;<code>')'</code>,&nbsp;in any positions ) so that the resulting <em>parentheses string</em> is valid and return <strong>any</strong> valid string.</p>

<p>Formally, a <em>parentheses string</em> is valid if and only if:</p>

<ul>
	<li>It is the empty string, contains only lowercase characters, or</li>
	<li>It can be written as&nbsp;<code>AB</code>&nbsp;(<code>A</code>&nbsp;concatenated with&nbsp;<code>B</code>), where&nbsp;<code>A</code>&nbsp;and&nbsp;<code>B</code>&nbsp;are valid strings, or</li>
	<li>It can be written as&nbsp;<code>(A)</code>, where&nbsp;<code>A</code>&nbsp;is a valid string.</li>
</ul>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> s = "lee(t(c)o)de)"
<strong>Output:</strong> "lee(t(c)o)de"
<strong>Explanation:</strong> "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> s = "a)b(c)d"
<strong>Output:</strong> "ab(c)d"
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> s = "))(("
<strong>Output:</strong> ""
<strong>Explanation:</strong> An empty string is also valid.
</pre>

<p><strong>Example 4:</strong></p>

<pre><strong>Input:</strong> s = "(a(b(c)d)"
<strong>Output:</strong> "a(b(c)d)"
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10^5</code></li>
	<li><code>s[i]</code>&nbsp;is one&nbsp;of&nbsp;&nbsp;<code>'('</code> , <code>')'</code> and&nbsp;lowercase English letters<code>.</code></li>
</ul></div>

---




```cpp
class Solution {
public:
    string minRemoveToMakeValid(string s) {
        int l=0, r=0;
        for(int i=0; i<s.size();i++){
            if(s[i]=='(')
                l++;
            if(s[i]==')')
                r++;
            if(r>l){
                s[i]='#';
                l=0;
                r=0;
            }      
        }
        l=0;
        r=0;
        for(int i=s.size()-1; i>=0;i--){
            if(s[i]=='(')
                l++;
            if(s[i]==')')
                r++;
            if(l>r){
                s[i]='#';
                l=0;
                r=0;
            }      
        }
        string ans="";
        for(char c: s){
            if(c!='#')
                 ans+=c;
        }
        return ans;
    }
};
```
