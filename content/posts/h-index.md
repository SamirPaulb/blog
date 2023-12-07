---
title: h index
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, h-index solution
description: h index LeetCode Solution Explained
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


[Discussion Post (created on 21/0/2021 at 20:12)](https://leetcode.com/problems/h-index/discuss/1027868/Easy-C%2B%2B)  
<h2>274. H-Index</h2><h3>Medium</h3><hr><div><p>Given an array of citations (each citation is a non-negative integer) of a researcher, write a function to compute the researcher's h-index.</p>

<p>According to the <a href="https://en.wikipedia.org/wiki/H-index" target="_blank">definition of h-index on Wikipedia</a>: "A scientist has index <i>h</i> if <i>h</i> of his/her <i>N</i> papers have <b>at least</b> <i>h</i> citations each, and the other <i>N − h</i> papers have <b>no more than</b> <i>h</i> citations each."</p>

<p><b>Example:</b></p>

<pre><b>Input:</b> <code>citations = [3,0,6,1,5]</code>
<b>Output:</b> 3 
<strong>Explanation: </strong><code>[3,0,6,1,5] </code>means the researcher has <code>5</code> papers in total and each of them had 
             received <code>3, 0, 6, 1, 5</code> citations respectively. 
&nbsp;            Since the researcher has <code>3</code> papers with <b>at least</b> <code>3</code> citations each and the remaining 
&nbsp;            two with <b>no more than</b> <code>3</code> citations each, her h-index is <code>3</code>.</pre>

<p><strong>Note:&nbsp;</strong>If there are several possible values for <em>h</em>, the maximum one is taken as the h-index.</p>
</div>

---




```cpp
class Solution {
public:
    int hIndex(vector<int>& citations) {
        sort(citations.begin(), citations.end());
        int n=citations.size();
        int l=0,h=n-1;
        while(l<=h){
            int mid=l+(h-l)/2;
            if(citations[mid]==(n-mid))
                return citations[mid];
            else if(citations[mid]>(n-mid))
                h=mid-1;
            else
                l=mid+1;
        }
        return n-l;
        
    }
};

```
