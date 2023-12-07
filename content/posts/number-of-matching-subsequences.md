---
title: number of matching subsequences
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, number-of-matching-subsequences solution
description: number of matching subsequences LeetCode Solution Explained
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


<h2>792. Number of Matching Subsequences</h2><h3>Medium</h3><hr><div><p>Given string <code>S</code> and a&nbsp;dictionary of words <code>words</code>, find the number of <code>words[i]</code> that is a subsequence of <code>S</code>.</p>

<pre><strong>Example :</strong>
<strong>Input:</strong> 
S = "abcde"
words = ["a", "bb", "acd", "ace"]
<strong>Output:</strong> 3
<strong>Explanation:</strong> There are three words in <code>words</code> that are a subsequence of <code>S</code>: "a", "acd", "ace".
</pre>

<p><strong>Note:</strong></p>

<ul>
	<li>All words in <code>words</code> and <code>S</code> will only consists of lowercase letters.</li>
	<li>The length of <code>S</code> will be in the range of <code>[1, 50000]</code>.</li>
	<li>The length of <code>words</code> will be in the range of&nbsp;<code>[1, 5000]</code>.</li>
	<li>The length of <code>words[i]</code> will be in the range of <code>[1, 50]</code>.</li>
</ul>
</div>

---




```cpp
class Solution {
public:
    int numMatchingSubseq(string S, vector<string>& words) {
        map<string,int> m;
        for(int i=0;i<words.size();i++)
            m[words[i]]++;
        int c=0;
        map<string,int>::iterator it;
        for(it=m.begin(); it!=m.end();it++){
            int j=0;
            string s=it->first;
            for(int l=0;l<S.size() && j<s.size();l++){
                if(s[j]==S[l])
                    j++;
            }
            if(j==s.size())
                c+=it->second;
            
        }
        return c;
    }
};

```
