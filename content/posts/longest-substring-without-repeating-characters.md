---
title: longest substring without repeating characters
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, longest-substring-without-repeating-characters solution
description: longest substring without repeating characters LeetCode Solution Explained
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


<h2>3. Longest Substring Without Repeating Characters</h2><h3>Medium</h3><hr><div><p>Given a string <code>s</code>, find the length of the <b>longest substring</b> without repeating characters.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> s = "abcabcbb"
<strong>Output:</strong> 3
<strong>Explanation:</strong> The answer is "abc", with the length of 3.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> s = "bbbbb"
<strong>Output:</strong> 1
<strong>Explanation:</strong> The answer is "b", with the length of 1.
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> s = "pwwkew"
<strong>Output:</strong> 3
<strong>Explanation:</strong> The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
</pre>

<p><strong>Example 4:</strong></p>

<pre><strong>Input:</strong> s = ""
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= s.length &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>s</code> consists of English letters, digits, symbols and spaces.</li>
</ul>
</div>

---




```cpp
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        int i=0,j=0;
	    int n=s.size();
	    map<char, int> m;
	    int ans=0;
	    while(j<n){
	        m[s[j]]++;
	        if(m.size()>j-i+1)
	        j++;
	        else if(m.size()==j-i+1){
	            ans=max(ans,j-i+1);
	            j++;
	        }
	        else{
	            while(m.size()<j-i+1){
	                m[s[i]]--;
	                if(m[s[i]]==0)
	                  m.erase(s[i]);
	                i++;
	            }
	            j++;
	        }
	    }
	    
	    return ans;
	    
    }
};
```
