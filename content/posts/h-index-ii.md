---
title: h index ii
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, h-index-ii solution
description: h index ii LeetCode Solution Explained
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


<h2>275. H-Index II</h2><h3>Medium</h3><hr><div><p>Given an array of citations <strong>sorted&nbsp;in ascending order </strong>(each citation is a non-negative integer) of a researcher, write a function to compute the researcher's h-index.</p>

<p>According to the&nbsp;<a href="https://en.wikipedia.org/wiki/H-index" target="_blank">definition of h-index on Wikipedia</a>: "A scientist has index&nbsp;<i>h</i>&nbsp;if&nbsp;<i>h</i>&nbsp;of his/her&nbsp;<i>N</i>&nbsp;papers have&nbsp;<b>at least</b>&nbsp;<i>h</i>&nbsp;citations each, and the other&nbsp;<i>N − h</i>&nbsp;papers have&nbsp;<b>no more than</b>&nbsp;<i>h&nbsp;</i>citations each."</p>

<p><b>Example:</b></p>

<pre><b>Input:</b> <code>citations = [0,1,3,5,6]</code>
<b>Output:</b> 3 
<strong>Explanation: </strong><code>[0,1,3,5,6] </code>means the researcher has <code>5</code> papers in total and each of them had 
             received 0<code>, 1, 3, 5, 6</code> citations respectively. 
&nbsp;            Since the researcher has <code>3</code> papers with <b>at least</b> <code>3</code> citations each and the remaining 
&nbsp;            two with <b>no more than</b> <code>3</code> citations each, her h-index is <code>3</code>.</pre>

<p><strong>Note:</strong></p>

<p>If there are several possible values for&nbsp;<em>h</em>, the maximum one is taken as the h-index.</p>

<p><strong>Follow up:</strong></p>

<ul>
	<li>This is a follow up problem to&nbsp;<a href="/problems/h-index/description/">H-Index</a>, where <code>citations</code> is now guaranteed to be sorted in ascending order.</li>
	<li>Could you solve it in logarithmic time complexity?</li>
</ul>
</div>

---




```cpp
class Solution {
public:
    int hIndex(vector<int>& citations) {
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
