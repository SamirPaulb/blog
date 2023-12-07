---
title: best time to buy and sell stock iii
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, best-time-to-buy-and-sell-stock-iii solution
description: best time to buy and sell stock iii LeetCode Solution Explained
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


<h2>123. Best Time to Buy and Sell Stock III</h2><h3>Hard</h3><hr><div><p>Say you have an array for which the <em>i</em><sup>th</sup> element is the price of a given stock on day <em>i</em>.</p>

<p>Design an algorithm to find the maximum profit. You may complete at most <em>two</em> transactions.</p>

<p><strong>Note:&nbsp;</strong>You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> prices = [3,3,5,0,0,3,1,4]
<strong>Output:</strong> 6
<strong>Explanation:</strong> Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> prices = [1,2,3,4,5]
<strong>Output:</strong> 4
<strong>Explanation:</strong> Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> prices = [7,6,4,3,1]
<strong>Output:</strong> 0
<strong>Explanation:</strong> In this case, no transaction is done, i.e. max profit = 0.
</pre>

<p><strong>Example 4:</strong></p>

<pre><strong>Input:</strong> prices = [1]
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;=&nbsp;prices.length &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;=&nbsp;prices[i] &lt;=&nbsp;10<sup>5</sup></code></li>
</ul>
</div>

---




```cpp
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int n=prices.size();
        // int left[n],right[n];
        // int ans=0,mini=INT_MAX;
        // for(int i=0;i<n;i++){
        //     mini=min(mini,prices[i]);
        //     ans=max(ans,prices[i]-mini);
        //     left[i]=ans;
        // }
        // int maxi=INT_MIN;
        // ans=0;
        // for(int i=n-1;i>=0;i--){
        //     maxi=max(maxi,prices[i]);
        //     ans=max(ans,maxi-prices[i]);
        //     right[i]=ans;
        // }
        // for(int i=0;i<n;i++) {
        //     ans = max(ans, left[i] + right[i]);
        // }
        // return ans;
        
        int b1=INT_MAX, b2=INT_MAX;
        int s1=0,s2=0;
        for(int i=0;i<n;i++){
            b1=min(b1, prices[i]);
            s1=max(s1, prices[i]-b1);
            b2=min(b2, prices[i]-s1);
            s2=max(s2, prices[i]-b2);
        }
        return s2;
    }
};
```
