---
title: partition labels
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, partition-labels solution
description: partition labels LeetCode Solution Explained
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


<h2>763. Partition Labels</h2><h3>Medium</h3><hr><div><p>A string <code>S</code> of lowercase English letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.</p>

<p>&nbsp;</p>

<p><b>Example 1:</b></p>

<pre><b>Input:</b> S = "ababcbacadefegdehijhklij"
<b>Output:</b> [9,7,8]
<b>Explanation:</b>
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.
</pre>

<p>&nbsp;</p>

<p><b>Note:</b></p>

<ul>
	<li><code>S</code> will have length in range <code>[1, 500]</code>.</li>
	<li><code>S</code> will consist of lowercase English&nbsp;letters (<code>'a'</code> to <code>'z'</code>) only.</li>
</ul>

<p>&nbsp;</p>
</div>

---




```cpp
class Solution {
public:
    vector<int> partitionLabels(string S) {
        vector<int> ans;
        vector<int> l(26,0);
        int s=0,e=0;
        for(int i=0;i<S.size();i++)
            l[S[i]-'a']=i;
        for(int i=0;i<S.size();i++){
            e=max(e, l[S[i]-'a']);
            if(i==e){
                ans.push_back(i-s+1);
                s=i+1;
            }
        }
        return ans;
    }
};
```
