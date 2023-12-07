---
title: decode xored permutation
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, decode-xored-permutation solution
description: decode xored permutation LeetCode Solution Explained
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


[Discussion Post (created on 13/2/2021 at 13:37)](https://leetcode.com/problems/decode-xored-permutation/discuss/1107203/O(n)-or-C%2B%2B)  
<h2>1734. Decode XORed Permutation</h2><h3>Medium</h3><hr><div><p>There is an integer array <code>perm</code> that is a permutation of the first <code>n</code> positive integers, where <code>n</code> is always <strong>odd</strong>.</p>

<p>It was encoded into another integer array <code>encoded</code> of length <code>n - 1</code>, such that <code>encoded[i] = perm[i] XOR perm[i + 1]</code>. For example, if <code>perm = [1,3,2]</code>, then <code>encoded = [2,1]</code>.</p>

<p>Given the <code>encoded</code> array, return <em>the original array</em> <code>perm</code>. It is guaranteed that the answer exists and is unique.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> encoded = [3,1]
<strong>Output:</strong> [1,2,3]
<strong>Explanation:</strong> If perm = [1,2,3], then encoded = [1 XOR 2,2 XOR 3] = [3,1]
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> encoded = [6,5,4,6]
<strong>Output:</strong> [2,4,1,5,3]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>3 &lt;= n &lt;&nbsp;10<sup>5</sup></code></li>
	<li><code>n</code>&nbsp;is odd.</li>
	<li><code>encoded.length == n - 1</code></li>
</ul>
</div>

---




```cpp
class Solution {
public:
    vector<int> decode(vector<int>& encoded) {
        int n=encoded.size();
        int x=n+1;
        int tot=0;
        for(int i=1;i<=x;i++)
            tot^=i;
        int p=0;
        for(int i=0;i<n;i++){
            p^=encoded[i];
            tot^=p;
        }
        //Now tot contains the first number;
        vector<int> ans(n+1);
        ans[0]=tot;
        for(int i=0;i<n;i++){
            ans[i+1]=(tot^encoded[i]);
            tot=ans[i+1];
        }
        return ans;
    }
};
```
