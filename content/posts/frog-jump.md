---
title: frog jump
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, frog-jump solution
description: frog jump LeetCode Solution Explained
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


<h2>403. Frog Jump</h2><h3>Hard</h3><hr><div><p>A frog is crossing a river. The river is divided into some number of units, and at each unit, there may or may not exist a stone. The frog can jump on a stone, but it must not jump into the water.</p>

<p>Given a list of <code>stones</code>' positions (in units) in sorted <strong>ascending order</strong>, determine if the frog can cross the river by landing on the last stone. Initially, the frog is on the first stone and assumes the first jump must be <code>1</code> unit.</p>

<p>If the frog's last jump was <code>k</code> units, its next jump must be either <code>k - 1</code>, <code>k</code>, or <code>k + 1</code> units. The frog can only jump in the forward direction.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> stones = [0,1,3,5,6,8,12,17]
<strong>Output:</strong> true
<strong>Explanation:</strong> The frog can jump to the last stone by jumping 1 unit to the 2nd stone, then 2 units to the 3rd stone, then 2 units to the 4th stone, then 3 units to the 6th stone, 4 units to the 7th stone, and 5 units to the 8th stone.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> stones = [0,1,2,3,4,8,9,11]
<strong>Output:</strong> false
<strong>Explanation:</strong> There is no way to jump to the last stone as the gap between the 5th and 6th stone is too large.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= stones.length &lt;= 2000</code></li>
	<li><code>0 &lt;= stones[i] &lt;= 2<sup>31</sup> - 1</code></li>
	<li><code>stones[0] == 0</code></li>
</ul>
</div>

---




```cpp
class Solution {
public:
    int t[2001][2001];
    unordered_map<int, int> m;
    int n;
    
    bool solve(int value, int index, int k, vector<int> a){
        if(index==n-1)
            return true;
        
        if(t[index][k]!=-1)
            return false;
        
        int x=0,y=0,z=0;
        if(k-1>0 && m.count(value+k-1)>0)
            x=solve(value+k-1, m[value+k-1], k-1, a);
        
        if(m.count(value+k)>0)
            y=solve(value+k, m[value+k], k, a);
        
        if(m.count(value+k+1)>0)
            z=solve(value+k+1, m[value+k+1], k+1, a);
        
        return t[index][k]=(x|(y|z));
        
    }
    
    bool canCross(vector<int>& stones) {
        n=stones.size();
        memset(t,-1,sizeof(t));
        for(int i=0;i<n;i++)
            m[stones[i]]=i;
        if(stones[1]==1 && solve(stones[1], 1, 1, stones)) // value, index, k
            return true;
        return false;
    }
};
```
