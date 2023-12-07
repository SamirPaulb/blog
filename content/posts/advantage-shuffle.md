---
title: advantage shuffle
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, advantage-shuffle solution
description: advantage shuffle LeetCode Solution Explained
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


[Discussion Post (created on 3/1/2021 at 14:3)](https://leetcode.com/problems/advantage-shuffle/discuss/1047675/C%2B%2B-or-Using-multiset)  
<h2>870. Advantage Shuffle</h2><h3>Medium</h3><hr><div><p>Given two arrays <code>A</code> and <code>B</code> of equal size, the <em>advantage of <code>A</code> with respect to <code>B</code></em> is the number of indices <code>i</code>&nbsp;for which <code>A[i] &gt; B[i]</code>.</p>

<p>Return <strong>any</strong> permutation of <code>A</code> that maximizes its advantage with respect to <code>B</code>.</p>

<p>&nbsp;</p>

<div>
<p><strong>Example 1:</strong></p>

<pre><strong>Input: </strong>A = <span id="example-input-1-1">[2,7,11,15]</span>, B = <span id="example-input-1-2">[1,10,4,11]</span>
<strong>Output: </strong><span id="example-output-1">[2,11,7,15]</span>
</pre>

<div>
<p><strong>Example 2:</strong></p>

<pre><strong>Input: </strong>A = <span id="example-input-2-1">[12,24,8,32]</span>, B = <span id="example-input-2-2">[13,25,32,11]</span>
<strong>Output: </strong><span id="example-output-2">[24,32,8,12]</span>
</pre>

<p>&nbsp;</p>

<p><strong>Note:</strong></p>

<ol>
	<li><code>1 &lt;= A.length = B.length &lt;= 10000</code></li>
	<li><code>0 &lt;= A[i] &lt;= 10^9</code></li>
	<li><code>0 &lt;= B[i] &lt;= 10^9</code></li>
</ol>
</div>
</div>
</div>

---




```cpp
class Solution {
public:
    vector<int> advantageCount(vector<int>& A, vector<int>& B) {
        multiset<int> m(A.begin(), A.end());
        vector<int> ans(A.size());
        for(int i=0;i<B.size();i++){
            auto it=m.upper_bound(B[i]);
            if(it==m.end()){
                ans[i]=*(m.begin());
                m.erase(m.begin());
            }
            else{
                ans[i]=*it;
                m.erase(it);
            }
        }
        return ans;
    }
};
```
