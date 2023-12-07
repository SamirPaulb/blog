---
title: find all anagrams in a string
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, find-all-anagrams-in-a-string solution
description: find all anagrams in a string LeetCode Solution Explained
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


<h2>438. Find All Anagrams in a String</h2><h3>Medium</h3><hr><div><p>Given a string <b>s</b> and a <b>non-empty</b> string <b>p</b>, find all the start indices of <b>p</b>'s anagrams in <b>s</b>.</p>

<p>Strings consists of lowercase English letters only and the length of both strings <b>s</b> and <b>p</b> will not be larger than 20,100.</p>

<p>The order of output does not matter.</p>

<p><b>Example 1:</b>
</p><pre><b>Input:</b>
s: "cbaebabacd" p: "abc"

<b>Output:</b>
[0, 6]

<b>Explanation:</b>
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
</pre>
<p></p>

<p><b>Example 2:</b>
</p><pre><b>Input:</b>
s: "abab" p: "ab"

<b>Output:</b>
[0, 1, 2]

<b>Explanation:</b>
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
</pre>
<p></p></div>

---




```cpp
class Solution {
public:
    vector<int> findAnagrams(string s, string p) {
        vector<int> ans;
        if(p.size()>s.size())
            return ans;
        vector<int> a(26,0);
        vector<int> b(26,0);
        for(int i=0;i<p.size();i++)
        {
            a[p[i]-'a']++;
            b[s[i]-'a']++;
        }
        for(int i=p.size();i<s.size();i++)
        {
            if(a==b)
                ans.push_back(i-p.size());
            b[s[i-p.size()]-'a']--;
            b[s[i]-'a']++;
            
        }
        if(a==b)
           ans.push_back(s.size()-p.size());
        return ans;
    }
};

```
