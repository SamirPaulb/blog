---
title: number of burgers with no waste of ingredients
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, number-of-burgers-with-no-waste-of-ingredients solution
description: number of burgers with no waste of ingredients LeetCode Solution Explained
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


<h2>1276. Number of Burgers with No Waste of Ingredients</h2><h3>Medium</h3><hr><div><p>Given two integers <code>tomatoSlices</code>&nbsp;and <code>cheeseSlices</code>. The ingredients of different burgers are as follows:</p>

<ul>
	<li><strong>Jumbo Burger:</strong> 4 tomato slices&nbsp;and 1 cheese slice.</li>
	<li><strong>Small Burger:</strong> 2 Tomato slices&nbsp;and 1 cheese slice.</li>
</ul>

<p>Return <code>[total_jumbo, total_small]</code> so that the number of remaining <code>tomatoSlices</code>&nbsp;equal to 0 and the number of remaining <code>cheeseSlices</code> equal to 0. If it is not possible to make the remaining <code>tomatoSlices</code>&nbsp;and <code>cheeseSlices</code> equal to 0 return <code>[]</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> tomatoSlices = 16, cheeseSlices = 7
<strong>Output:</strong> [1,6]
<strong>Explantion:</strong> To make one jumbo burger and 6 small burgers we need 4*1 + 2*6 = 16 tomato and 1 + 6 = 7 cheese. There will be no remaining ingredients.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> tomatoSlices = 17, cheeseSlices = 4
<strong>Output:</strong> []
<strong>Explantion:</strong> There will be no way to use all ingredients to make small and jumbo burgers.
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> tomatoSlices = 4, cheeseSlices = 17
<strong>Output:</strong> []
<strong>Explantion:</strong> Making 1 jumbo burger there will be 16 cheese remaining and making 2 small burgers there will be 15 cheese remaining.
</pre>

<p><strong>Example 4:</strong></p>

<pre><strong>Input:</strong> tomatoSlices = 0, cheeseSlices = 0
<strong>Output:</strong> [0,0]
</pre>

<p><strong>Example 5:</strong></p>

<pre><strong>Input:</strong> tomatoSlices = 2, cheeseSlices = 1
<strong>Output:</strong> [0,1]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= tomatoSlices &lt;= 10^7</code></li>
	<li><code>0 &lt;= cheeseSlices &lt;= 10^7</code></li>
</ul></div>

---




```cpp
class Solution {
public:
    vector<int> numOfBurgers(int tomatoSlices, int cheeseSlices) {
        int total=cheeseSlices;
        for(int j=0;j<=total;j++){
            int s=total-j;
            if(4*j+2*s==tomatoSlices)
                return{j,s};
        }
        return {};
    }
};
```
