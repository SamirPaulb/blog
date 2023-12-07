---
title: number of ways to stay in the same place after some steps
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, number-of-ways-to-stay-in-the-same-place-after-some-steps solution
description: number of ways to stay in the same place after some steps LeetCode Solution Explained
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


<h2>1269. Number of Ways to Stay in the Same Place After Some Steps</h2><h3>Hard</h3><hr><div><p>You have a pointer at index <code>0</code> in an array of size <code><font face="monospace">arrLen</font></code>. At each step, you can move 1 position to the left, 1 position to the right&nbsp;in the array or stay in the same place&nbsp; (The pointer should not be placed outside the array at any time).</p>

<p>Given two integers&nbsp;<code>steps</code> and <code>arrLen</code>, return the number of&nbsp;ways such that your pointer still at index <code>0</code> after <strong>exactly </strong><code><font face="monospace">steps</font></code>&nbsp;steps.</p>

<p>Since the answer&nbsp;may be too large,&nbsp;return it <strong>modulo</strong>&nbsp;<code>10^9 + 7</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> steps = 3, arrLen = 2
<strong>Output:</strong> 4
<strong>Explanation: </strong>There are 4 differents ways to stay at index 0 after 3 steps.
Right, Left, Stay
Stay, Right, Left
Right, Stay, Left
Stay, Stay, Stay
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> steps = 2, arrLen = 4
<strong>Output:</strong> 2
<strong>Explanation:</strong> There are 2 differents ways to stay at index 0 after 2 steps
Right, Left
Stay, Stay
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> steps = 4, arrLen = 2
<strong>Output:</strong> 8
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= steps &lt;= 500</code></li>
	<li><code>1 &lt;= arrLen&nbsp;&lt;= 10^6</code></li>
</ul>
</div>

---




```cpp
class Solution {
public:
    int t[502][502];
    int m=1e9+7;
    
    int solve(int ind, int steps, int n){
        if(steps==0){
            if(ind==0)
                return 1;
            else
                return 0;
        }
            
        if(ind<0 || ind>=n)
            return 0;
        if(t[ind][steps]!=-1)
            return t[ind][steps];
        long long int p=solve(ind-1, steps-1, n);
        long long int q=solve(ind+1, steps-1, n);
        long long int r=solve(ind, steps-1, n);
        return t[ind][steps]=(p%m + q%m + r%m)%m;
    }
    
    int numWays(int steps, int arrLen) {
        int ind=0;
        memset(t,-1,sizeof(t));
        return solve(0, steps, arrLen);
    }
};
```
