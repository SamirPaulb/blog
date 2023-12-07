---
title: reverse substrings between each pair of parentheses
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, reverse-substrings-between-each-pair-of-parentheses solution
description: reverse substrings between each pair of parentheses LeetCode Solution Explained
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


<h2>1190. Reverse Substrings Between Each Pair of Parentheses</h2><h3>Medium</h3><hr><div><p>You are given a string <code>s</code> that consists of lower case English letters and brackets.&nbsp;</p>

<p>Reverse the strings&nbsp;in each&nbsp;pair of matching parentheses, starting&nbsp;from the innermost one.</p>

<p>Your result should <strong>not</strong> contain any brackets.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> s = "(abcd)"
<strong>Output:</strong> "dcba"
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> s = "(u(love)i)"
<strong>Output:</strong> "iloveu"
<strong>Explanation:</strong>&nbsp;The substring "love" is reversed first, then the whole string is reversed.
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> s = "(ed(et(oc))el)"
<strong>Output:</strong> "leetcode"
<strong>Explanation:</strong>&nbsp;First, we reverse the substring "oc", then "etco", and finally, the whole string.
</pre>

<p><strong>Example 4:</strong></p>

<pre><strong>Input:</strong> s = "a(bcdefghijkl(mno)p)q"
<strong>Output:</strong> "apmnolkjihgfedcbq"
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= s.length &lt;= 2000</code></li>
	<li><code>s</code> only contains lower case English characters and parentheses.</li>
	<li>It's guaranteed that all parentheses are balanced.</li>
</ul>
</div>

---




```cpp
class Solution {
public:
    string reverseParentheses(string s) {
        int n=s.size();
        int o=0, c=n-1;
        for(int i=0;i<n;i++){
            if(s[i]=='(')
               o=i;
            if(s[i]==')'){
               c=i;
               string ss=s.substr(o+1, c-o-1);
               reverse(ss.begin(), ss.end());
               string t=s.substr(0,o)+ss+s.substr(c+1);
               return reverseParentheses(t);
            }
                
        }
        return s;
    }
};
```
