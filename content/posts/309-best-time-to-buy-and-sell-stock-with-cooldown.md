---
title: 309 best time to buy and sell stock with cooldown
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 309-best-time-to-buy-and-sell-stock-with-cooldown solution
description: 309 best time to buy and sell stock with cooldown LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/">309. Best Time to Buy and Sell Stock with Cooldown</a></h2><h3>Medium</h3><hr><div><p>You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i<sup>th</sup></code> day.</p>

<p>Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:</p>

<ul>
	<li>After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).</li>
</ul>

<p><strong>Note:</strong> You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> prices = [1,2,3,0,2]
<strong>Output:</strong> 3
<strong>Explanation:</strong> transactions = [buy, sell, cooldown, buy, sell]
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> prices = [1]
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= prices.length &lt;= 5000</code></li>
	<li><code>0 &lt;= prices[i] &lt;= 1000</code></li>
</ul>
</div>

---




```python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        obsp = - prices[0]
        ossp = 0
        ocsp = 0
        
        for i in range(len(prices)):
            nbsp = 0
            nssp = 0
            ncsp = 0
            
            nbsp = max(ocsp - prices[i], obsp)
            nssp = max(obsp + prices[i], ossp)
            ncsp = max(ocsp, ossp)
            
            obsp = nbsp
            ossp = nssp
            ocsp = ncsp
        
        return ossp
```
