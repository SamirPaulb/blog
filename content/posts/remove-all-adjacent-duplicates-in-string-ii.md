---
title: remove all adjacent duplicates in string ii
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, remove-all-adjacent-duplicates-in-string-ii solution
description: remove all adjacent duplicates in string ii LeetCode Solution Explained
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


<h2>1209. Remove All Adjacent Duplicates in String II</h2><h3>Medium</h3><hr><div><p>Given a string&nbsp;<code>s</code>, a <em>k</em>&nbsp;<em>duplicate removal</em>&nbsp;consists of choosing <code>k</code>&nbsp;adjacent and equal letters from&nbsp;<code>s</code> and removing&nbsp;them causing the left and the right side of the deleted substring to concatenate together.</p>

<p>We repeatedly make <code>k</code> duplicate removals on <code>s</code> until we no longer can.</p>

<p>Return the final string after all such duplicate removals have been made.</p>

<p>It is guaranteed that the answer is unique.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> s = "abcd", k = 2
<strong>Output:</strong> "abcd"
<strong>Explanation: </strong>There's nothing to delete.</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> s = "deeedbbcccbdaa", k = 3
<strong>Output:</strong> "aa"
<strong>Explanation: 
</strong>First delete "eee" and "ccc", get "ddbbbdaa"
Then delete "bbb", get "dddaa"
Finally delete "ddd", get "aa"</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> s = "pbbcggttciiippooaais", k = 2
<strong>Output:</strong> "ps"
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10^5</code></li>
	<li><code>2 &lt;= k &lt;= 10^4</code></li>
	<li><code>s</code> only contains lower case English letters.</li>
</ul>
</div>

---




```cpp
class Solution {
public:
    string removeDuplicates(string s, int k) {
        int n=s.size();
        if(k>n)
            return "";
        bool x=true;
        while(x){
            x=false;
            for(int i=1,c=1;i<s.size() && x==false; i++){
                if(s[i]!=s[i-1])
                    c=1;
                else{
                    c++;
                    if(c==k){
                        s=s.substr(0, i-k+1)+s.substr(i+1);
                        x=true;
                    }
                        
                }
            }
        }
        return s;
    }
};
```
