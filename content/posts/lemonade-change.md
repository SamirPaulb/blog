---
title: lemonade change
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, lemonade-change solution
description: lemonade change LeetCode Solution Explained
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


[Discussion Post (created on 3/1/2021 at 13:37)](https://leetcode.com/problems/lemonade-change/discuss/1047647/C%2B%2B-or-96-faster)  
<h2>860. Lemonade Change</h2><h3>Easy</h3><hr><div><p>At a lemonade stand, each lemonade costs <code>$5</code>.&nbsp;</p>

<p>Customers are standing in a queue to buy from you, and order one at a time (in the order specified by <code>bills</code>).</p>

<p>Each customer will only buy one lemonade and&nbsp;pay with either a <code>$5</code>, <code>$10</code>, or <code>$20</code> bill.&nbsp; You must provide the correct change to each customer, so that the net transaction is that the customer pays $5.</p>

<p>Note that you don't have any change&nbsp;in hand at first.</p>

<p>Return <code>true</code>&nbsp;if and only if you can provide every customer with correct change.</p>

<p>&nbsp;</p>

<div>
<p><strong>Example 1:</strong></p>

<pre><strong>Input: </strong><span id="example-input-1-1">[5,5,5,10,20]</span>
<strong>Output: </strong><span id="example-output-1">true</span>
<strong>Explanation: </strong>
From the first 3 customers, we collect three $5 bills in order.
From the fourth customer, we collect a $10 bill and give back a $5.
From the fifth customer, we give a $10 bill and a $5 bill.
Since all customers got correct change, we output true.
</pre>

<div>
<p><strong>Example 2:</strong></p>

<pre><strong>Input: </strong><span id="example-input-2-1">[5,5,10]</span>
<strong>Output: </strong><span id="example-output-2">true</span>
</pre>

<div>
<p><strong>Example 3:</strong></p>

<pre><strong>Input: </strong><span id="example-input-3-1">[10,10]</span>
<strong>Output: </strong><span id="example-output-3">false</span>
</pre>

<div>
<p><strong>Example 4:</strong></p>

<pre><strong>Input: </strong><span id="example-input-4-1">[5,5,10,10,20]</span>
<strong>Output: </strong><span id="example-output-4">false</span>
<strong>Explanation: </strong>
From the first two customers in order, we collect two $5 bills.
For the next two customers in order, we collect a $10 bill and give back a $5 bill.
For the last customer, we can't give change of $15 back because we only have two $10 bills.
Since not every customer received correct change, the answer is false.
</pre>

<p>&nbsp;</p>

<p><strong><span>Note:</span></strong></p>

<ul>
	<li><code>0 &lt;= bills.length &lt;= 10000</code></li>
	<li><code>bills[i]</code>&nbsp;will be either&nbsp;<code>5</code>, <code>10</code>, or <code>20</code>.</li>
</ul>
</div>
</div>
</div>
</div>
</div>

---




```cpp
class Solution {
public:
    bool lemonadeChange(vector<int>& bills) {
        int n=bills.size();
        if(n==0)
            return false;
        int f=0,t=0;
        for(int i=0;i<n;i++){
            if(bills[i]==5){
               f++;
            }
            else if(bills[i]==10){
                if(f==0)
                    return false;
                t++;
                f--;
            }
            else{
                if(t>0 && f>=1)
                {
                    t--;
                    f--;
                }
                else if(f>=3){
                    f-=3;
                }
                else
                    return false;
            }
        }
        return true;
        
    }
};
```
