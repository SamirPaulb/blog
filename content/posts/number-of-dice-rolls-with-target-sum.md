---
title: number of dice rolls with target sum
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, number-of-dice-rolls-with-target-sum solution
description: number of dice rolls with target sum LeetCode Solution Explained
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


<h2>1155. Number of Dice Rolls With Target Sum</h2><h3>Medium</h3><hr><div><p>You have <code>d</code> dice, and each die has <code>f</code> faces numbered <code>1, 2, ..., f</code>.</p>

<p>Return the number of possible ways (out of <code>f<sup>d</sup></code>&nbsp;total ways) <strong>modulo <code>10^9 + 7</code></strong> to roll the dice so the sum of the face up numbers equals <code>target</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> d = 1, f = 6, target = 3
<strong>Output:</strong> 1
<strong>Explanation: </strong>
You throw one die with 6 faces.  There is only one way to get a sum of 3.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> d = 2, f = 6, target = 7
<strong>Output:</strong> 6
<strong>Explanation: </strong>
You throw two dice, each with 6 faces.  There are 6 ways to get a sum of 7:
1+6, 2+5, 3+4, 4+3, 5+2, 6+1.
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> d = 2, f = 5, target = 10
<strong>Output:</strong> 1
<strong>Explanation: </strong>
You throw two dice, each with 5 faces.  There is only one way to get a sum of 10: 5+5.
</pre>

<p><strong>Example 4:</strong></p>

<pre><strong>Input:</strong> d = 1, f = 2, target = 3
<strong>Output:</strong> 0
<strong>Explanation: </strong>
You throw one die with 2 faces.  There is no way to get a sum of 3.
</pre>

<p><strong>Example 5:</strong></p>

<pre><strong>Input:</strong> d = 30, f = 30, target = 500
<strong>Output:</strong> 222616187
<strong>Explanation: </strong>
The answer must be returned modulo 10^9 + 7.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= d, f &lt;= 30</code></li>
	<li><code>1 &lt;= target &lt;= 1000</code></li>
</ul></div>

---




```cpp
class Solution {
public:
    int t[32][1001]; //dices and target
    int mod=1e9+7;
    int solve(int d, int f, int target){
        if(d==0){
            if(target==0)
                return 1;
            return 0;
        }
        if(target<0)
                return 0;
        if(d*f<target)
            return 0;
        if(d*f==target)
            return 1;
        if(t[d][target]!=-1)
            return t[d][target];
        long long ans=0;
        for(int i=1;i<=f;i++){
            ans=(ans+solve(d-1, f, target-i))%mod;
        }
        return t[d][target]=ans;
    }
    
    
    int numRollsToTarget(int d, int f, int target) {
        memset(t,-1,sizeof(t));
        return solve(d,f,target);
    }
};
```
