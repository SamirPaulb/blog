---
title: permutation in string
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, permutation-in-string solution
description: permutation in string LeetCode Solution Explained
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


<h2>567. Permutation in String</h2><h3>Medium</h3><hr><div><p>Given two strings <b>s1</b> and <b>s2</b>, write a function to return true if <b>s2</b> contains the permutation of <b>s1</b>. In other words, one of the first string's permutations is the <b>substring</b> of the second string.</p>

<p>&nbsp;</p>

<p><b>Example 1:</b></p>

<pre><b>Input: </b>s1 = "ab" s2 = "eidbaooo"
<b>Output: </b>True
<b>Explanation:</b> s2 contains one permutation of s1 ("ba").
</pre>

<p><b>Example 2:</b></p>

<pre><b>Input:</b>s1= "ab" s2 = "eidboaoo"
<b>Output:</b> False
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The input strings only contain lower case letters.</li>
	<li>The length of both given strings is in range [1, 10,000].</li>
</ul>
</div>

---




```cpp
class Solution {
public:
    
    bool checkInclusion(string s1, string s2) {
        if(s1.size()>s2.size())
            return false;
        vector<int> a(26,0);
        vector<int> b(26,0);
        for(int i=0;i<s1.size();i++)
        {
            a[s1[i]-'a']++;
            b[s2[i]-'a']++;
        }
        bool ans=true;
        for(int i=s1.size();i<s2.size();i++)
        {
            if(a==b)
                return true;
            b[s2[i-s1.size()]-'a']--;
            b[s2[i]-'a']++;
            
        }
        if(a==b)
           return true;
        return false;
    }
};

```
