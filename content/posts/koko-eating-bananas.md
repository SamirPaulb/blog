---
title: koko eating bananas
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, koko-eating-bananas solution
description: koko eating bananas LeetCode Solution Explained
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


<h2>875. Koko Eating Bananas</h2><h3>Medium</h3><hr><div><p>Koko loves to eat bananas.&nbsp; There are <code>N</code>&nbsp;piles of bananas, the <code>i</code>-th&nbsp;pile has <code>piles[i]</code> bananas.&nbsp; The guards have gone and will come back in <code>H</code> hours.</p>

<p>Koko can decide her bananas-per-hour eating speed of <code>K</code>.&nbsp; Each hour, she chooses some pile of bananas, and eats K bananas from that pile.&nbsp; If the pile has less than <code>K</code> bananas, she eats all of them instead, and won't eat any more bananas during this hour.</p>

<p>Koko likes to eat slowly, but still wants to finish eating all the bananas before the guards come back.</p>

<p>Return the minimum integer <code>K</code> such that she can eat all the bananas within <code>H</code> hours.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> piles = [3,6,7,11], H = 8
<strong>Output:</strong> 4
</pre><p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> piles = [30,11,23,4,20], H = 5
<strong>Output:</strong> 30
</pre><p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> piles = [30,11,23,4,20], H = 6
<strong>Output:</strong> 23
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= piles.length &lt;= 10^4</code></li>
	<li><code>piles.length &lt;= H &lt;= 10^9</code></li>
	<li><code>1 &lt;= piles[i] &lt;= 10^9</code></li>
</ul>
</div>

---




```cpp
class Solution {
public:
    
    bool isValid(vector<int>& piles, int H, int k){
        int n=piles.size();
        int ans=0;
        for(int i=0;i<n;i++){
            int x=piles[i]/k;
            int y=piles[i]%k;
            if(y>0)
                x++;
            ans+=x;
        }
        return (ans<=H);
    }
    
    int minEatingSpeed(vector<int>& piles, int H) {
        int l=1;
        int r=1e9+1;
        while(l<=r){
            int mid=l+(r-l)/2;
            if(isValid(piles, H, mid))
                r=mid-1;
            else
                l=mid+1;
        }
        return l;
    }
};

```
