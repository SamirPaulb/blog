---
title: substring with concatenation of all words
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, substring-with-concatenation-of-all-words solution
description: substring with concatenation of all words LeetCode Solution Explained
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


<h2>30. Substring with Concatenation of All Words</h2><h3>Hard</h3><hr><div><p>You are given a string <code>s</code> and an array of strings <code>words</code> of <strong>the same length</strong>. Return&nbsp;all starting indices of substring(s) in <code>s</code>&nbsp;that is a concatenation of each word in <code>words</code> <strong>exactly once</strong>, <strong>in any order</strong>,&nbsp;and <strong>without any intervening characters</strong>.</p>

<p>You can return the answer in <strong>any order</strong>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> s = "barfoothefoobarman", words = ["foo","bar"]
<strong>Output:</strong> [0,9]
<strong>Explanation:</strong> Substrings starting at index 0 and 9 are "barfoo" and "foobar" respectively.
The output order does not matter, returning [9,0] is fine too.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
<strong>Output:</strong> []
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
<strong>Output:</strong> [6,9,12]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>4</sup></code></li>
	<li><code>s</code> consists of lower-case English letters.</li>
	<li><code>1 &lt;= words.length &lt;= 5000</code></li>
	<li><code>1 &lt;= words[i].length &lt;= 30</code></li>
	<li><code>words[i]</code>&nbsp;consists of lower-case English letters.</li>
</ul>
</div>

---




```cpp
class Solution {
public:
    vector<int> findSubstring(string s, vector<string>& words) {
        map<string,int> m1;
        vector<int> ans;
        for(int i=0;i<words.size();i++)
            m1[words[i]]++;
        int l=words[0].size();
        int n=l*words.size();
        if(s.size()<n)
            return ans;
        for(int i=0;i<=s.size()-n;i++){
            string t=s.substr(i, n);
            map<string,int> m2;
            int j=0;
            for(;j<t.size();j+=l){
                string v=t.substr(j,l);
                if(m1.find(v)==m1.end())
                    break;
                if(m2[v]==m1[v])
                    break;
                m2[v]++;
            }
            if(j==t.size())
                ans.push_back(i);
        }
        return ans;
    }
};

```
