---
title: minimum window substring
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, minimum-window-substring solution
description: minimum window substring LeetCode Solution Explained
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


<h2>76. Minimum Window Substring</h2><h3>Hard</h3><hr><div><p>Given two strings <code>s</code> and <code>t</code>, return <em>the minimum window in <code>s</code> which will contain all the characters in <code>t</code></em>. If there is no such window in <code>s</code> that covers all characters in <code>t</code>, return <em>the empty string <code>""</code></em>.</p>

<p><strong>Note</strong> that If there is such a window, it is&nbsp;guaranteed that there will always be only one unique minimum window in <code>s</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s = "ADOBECODEBANC", t = "ABC"
<strong>Output:</strong> "BANC"
</pre><p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> s = "a", t = "a"
<strong>Output:</strong> "a"
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length, t.length &lt;= 10<sup>5</sup></code></li>
	<li><code>s</code> and <code>t</code> consist of English letters.</li>
</ul>

<p>&nbsp;</p>
<strong>Follow up:</strong> Could you find an algorithm that runs in <code>O(n)</code> time?</div>

---




```cpp
class Solution {
public:
    string minWindow(string s, string t) {
        vector<int> fc(128, 0); // frequncy counter
        for(auto x : t){
            fc[x]++;
        }
        
        int tsize = t.size(); //overall counter
        int begin = 0, end = 0;
        string ans;
        int minl = INT_MAX; // minimum length of the substring of s that contains t.
        
        while(end < s.size()){
            char endchar = s[end];
            fc[endchar]--;
            if(fc[endchar] >= 0) // Important detail of the this algo.
                tsize--;
            
            end++;
            
            while(tsize == 0){
                int curlen = end - begin;
                if(curlen < minl) {
                    minl = curlen;
                    ans = s.substr(begin, minl);
                }
                
                
                char beginchar = s[begin];
                fc[beginchar]++;
                if(fc[beginchar] > 0)  // Another important detail of the this algo.
                    tsize++;
                begin++;
            }
        }
        
        return ans;
    }
};
```
