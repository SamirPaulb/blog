---
title: longest substring with at least k repeating characters
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, longest-substring-with-at-least-k-repeating-characters solution
description: longest substring with at least k repeating characters LeetCode Solution Explained
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


<h2>395. Longest Substring with At Least K Repeating Characters</h2><h3>Medium</h3><hr><div><p>Given a string <code>s</code> and an integer <code>k</code>, return <em>the length of the longest substring of</em> <code>s</code> <em>such that the frequency of each character in this substring is greater than or equal to</em> <code>k</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> s = "aaabb", k = 3
<strong>Output:</strong> 3
<strong>Explanation:</strong> The longest substring is "aaa", as 'a' is repeated 3 times.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> s = "ababbc", k = 2
<strong>Output:</strong> 5
<strong>Explanation:</strong> The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>4</sup></code></li>
	<li><code>s</code> consists of only lowercase English letters.</li>
	<li><code>1 &lt;= k &lt;= 10<sup>5</sup></code></li>
</ul>
</div>

---




```cpp
class Solution {
public:
    
    
//     int solve(string s, int s, int e, int k){
//         if(e<k)
//             return 0;
        
//     }
    
    int longestSubstring(string s, int k) {
        int n=s.size();
        if(n==0 || k>n)
            return 0;
        unordered_map<char, int> c;
        if(k<=1)
            return n;
        for(char ch:s)
            c[ch]++;
        int l=0;
        while(l<n && c[s[l]]>=k)
            l++;
        if(l>=n-1)
            return l;
        int ls1=longestSubstring(s.substr(0, l), k);
        while(l<n && c[s[l]]<k)
            l++;
        int ls2;
        if(l<n)
        ls2=longestSubstring(s.substr(l), k);
        else
        ls2=0;
        return max(ls1,ls2);
    }
};
```
