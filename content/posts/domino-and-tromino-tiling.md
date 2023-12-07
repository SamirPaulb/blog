---
title: domino and tromino tiling
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, domino-and-tromino-tiling solution
description: domino and tromino tiling LeetCode Solution Explained
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


<h2>790. Domino and Tromino Tiling</h2><h3>Medium</h3><hr><div><p>We have two types of tiles: a 2x1 domino shape, and an "L" tromino shape. These shapes may be rotated.</p>

<pre>XX  &lt;- domino

XX  &lt;- "L" tromino
X
</pre>

<p>Given N, how many ways are there to tile a 2 x N board? <strong>Return your answer modulo 10^9 + 7</strong>.</p>

<p>(In a tiling, every square must be covered by a tile. Two tilings are different if and only if there are two 4-directionally adjacent cells on the board such that exactly one of the tilings has both squares occupied by a tile.)</p>


<pre><strong>Example:</strong>
<strong>Input:</strong> 3
<strong>Output:</strong> 5
<strong>Explanation:</strong> 
The five different ways are listed below, different letters indicates different tiles:
XYZ XXZ XYY XXY XYY
XYZ YYZ XZZ XYY XXY</pre>

<p><strong>Note:</strong></p>

<ul>
	<li>N&nbsp; will be in range <code>[1, 1000]</code>.</li>
</ul>

<p>&nbsp;</p>
</div>

---




```cpp
class Solution {
public:
    int mod=1e9+7;
    vector<int> t;
    int solve(int i){
        if(i<=1)
            return 1;
        
        if(i==2)
            return 2;
        
        if(t[i]!=-1)
            return t[i];
        
        int ans=0;
        ans=((2*solve(i-1))%mod+(solve(i-3))%mod)%mod;
        
        return t[i]=ans;
    }
    
    int numTilings(int N) {
        t.resize(N+1,-1);
        return solve(N);
    }
};

```
