---
title: best time to buy and sell stock with cooldown
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, best-time-to-buy-and-sell-stock-with-cooldown solution
description: best time to buy and sell stock with cooldown LeetCode Solution Explained
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


[Discussion Post (created on 14/0/2021 at 14:6)](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/discuss/1016185/2D-DP-C%2B%2B)  
<h2>309. Best Time to Buy and Sell Stock with Cooldown</h2><h3>Medium</h3><hr><div><p>Say you have an array for which the <i>i</i><sup>th</sup> element is the price of a given stock on day <i>i</i>.</p>

<p>Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times) with the following restrictions:</p>

<ul>
	<li>You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).</li>
	<li>After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)</li>
</ul>

<p><b>Example:</b></p>

<pre><strong>Input:</strong> [1,2,3,0,2]
<strong>Output: </strong>3 
<strong>Explanation:</strong> transactions = [buy, sell, cooldown, buy, sell]
</pre></div>

---




```cpp
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int n=prices.size();
        int t[n+1];
        memset(t,0,sizeof(t));
        for(int i=1;i<n+1;i++){
            for(int j=1;j<=i;j++){
                t[i]=max(t[i-1], max(t[i],prices[i-1]-prices[j-1]));
                if(j-2>=0)
                   t[i]=max(t[i],t[j-2]+prices[i-1]-prices[j-1]); 
            }
        }
        return t[n];
    }
};

```
