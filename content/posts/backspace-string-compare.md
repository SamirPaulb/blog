---
title: backspace string compare
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, backspace-string-compare solution
description: backspace string compare LeetCode Solution Explained
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


<h2>844. Backspace String Compare</h2><h3>Easy</h3><hr><div><p>Given two&nbsp;strings&nbsp;<code>S</code>&nbsp;and <code>T</code>,&nbsp;return if they are equal when both are typed into empty text editors. <code>#</code> means a backspace character.</p>

<p>Note that after&nbsp;backspacing an empty text, the text will continue empty.</p>

<div>
<p><strong>Example 1:</strong></p>

<pre><strong>Input: </strong>S = <span id="example-input-1-1">"ab#c"</span>, T = <span id="example-input-1-2">"ad#c"</span>
<strong>Output: </strong><span id="example-output-1">true
</span><span><strong>Explanation</strong>: Both S and T become "ac".</span>
</pre>

<div>
<p><strong>Example 2:</strong></p>

<pre><strong>Input: </strong>S = <span id="example-input-2-1">"ab##"</span>, T = <span id="example-input-2-2">"c#d#"</span>
<strong>Output: </strong><span id="example-output-2">true
</span><span><strong>Explanation</strong>: Both S and T become "".</span>
</pre>

<div>
<p><strong>Example 3:</strong></p>

<pre><strong>Input: </strong>S = <span id="example-input-3-1">"a##c"</span>, T = <span id="example-input-3-2">"#a#c"</span>
<strong>Output: </strong><span id="example-output-3">true
</span><span><strong>Explanation</strong>: Both S and T become "c".</span>
</pre>

<div>
<p><strong>Example 4:</strong></p>

<pre><strong>Input: </strong>S = <span id="example-input-4-1">"a#c"</span>, T = <span id="example-input-4-2">"b"</span>
<strong>Output: </strong><span id="example-output-4">false
</span><span><strong>Explanation</strong>: S becomes "c" while T becomes "b".</span>
</pre>

<p><span><strong>Note</strong>:</span></p>

<ul>
	<li><code><span>1 &lt;= S.length &lt;= 200</span></code></li>
	<li><code><span>1 &lt;= T.length &lt;= 200</span></code></li>
	<li><span><code>S</code>&nbsp;and <code>T</code> only contain&nbsp;lowercase letters and <code>'#'</code> characters.</span></li>
</ul>

<p><strong>Follow up:</strong></p>

<ul>
	<li>Can you solve it in <code>O(N)</code> time and <code>O(1)</code> space?</li>
</ul>
</div>
</div>
</div>
</div>
</div>

---




```cpp
class Solution {
public:
    bool backspaceCompare(string s, string t) {
        int n=s.size(), m=t.size();
        int i=n-1, j=m-1;
        int skips=0, skipt=0;
        while(i>=0 || j>=0){
            while(i>=0){
                if(s[i]=='#'){
                    skips++;
                    i--;
                }
                else if(skips>0){
                    skips--;
                    i--;
                }
                else
                    break;
            }
            while(j>=0){
                if(t[j]=='#'){
                    skipt++;
                    j--;
                }
                else if(skipt>0){
                    skipt--;
                    j--;
                }
                else
                    break;
            }
            if(i>=0 && j>=0 && s[i]!=t[j])
                return false;
            if((i>=0) != (j>=0))
                return false;
            i--;
            j--;
        }
        return true;
    }
};
```
