---
title: decode xored array
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, decode-xored-array solution
description: decode xored array LeetCode Solution Explained
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


[Discussion Post (created on 13/2/2021 at 13:18)](https://leetcode.com/problems/decode-xored-array/discuss/1107184/C%2B%2B-or-O(n))  
<h2>1720. Decode XORed Array</h2><h3>Easy</h3><hr><div><p>There is a <strong>hidden</strong> integer array <code>arr</code> that consists of <code>n</code> non-negative integers.</p>

<p>It was encoded into another integer array <code>encoded</code> of length <code>n - 1</code>, such that <code>encoded[i] = arr[i] XOR arr[i + 1]</code>. For example, if <code>arr = [1,0,2,1]</code>, then <code>encoded = [1,2,3]</code>.</p>

<p>You are given the <code>encoded</code> array. You are also given an integer <code>first</code>, that is the first element of <code>arr</code>, i.e. <code>arr[0]</code>.</p>

<p>Return <em>the original array</em> <code>arr</code>. It can be proved that the answer exists and is unique.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> encoded = [1,2,3], first = 1
<strong>Output:</strong> [1,0,2,1]
<strong>Explanation:</strong> If arr = [1,0,2,1], then first = 1 and encoded = [1 XOR 0, 0 XOR 2, 2 XOR 1] = [1,2,3]
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> encoded = [6,2,7,3], first = 4
<strong>Output:</strong> [4,2,0,7,4]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= n &lt;= 10<sup>4</sup></code></li>
	<li><code>encoded.length == n - 1</code></li>
	<li><code>0 &lt;= encoded[i] &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= first &lt;= 10<sup>5</sup></code></li>
</ul>
</div>

---




```cpp
class Solution {
public:
    vector<int> decode(vector<int>& encoded, int first) {
        int n=encoded.size();
        vector<int> ans(n+1);
        ans[0]=first;
        int k=first;
        for(int i=0;i<n;i++){
            ans[i+1]=k^encoded[i];
            k=ans[i+1];
        }
        return ans;
    }
};
```
