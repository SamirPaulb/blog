---
title: arranging coins
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, arranging-coins solution
description: arranging coins LeetCode Solution Explained
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


<h2>441. Arranging Coins</h2><h3>Easy</h3><hr><div><p>You have a total of <i>n</i> coins that you want to form in a staircase shape, where every <i>k</i>-th row must have exactly <i>k</i> coins.</p>
 
<p>Given <i>n</i>, find the total number of <b>full</b> staircase rows that can be formed.</p>

<p><i>n</i> is a non-negative integer and fits within the range of a 32-bit signed integer.</p>

<p><b>Example 1:</b>
</p><pre>n = 5

The coins can form the following rows:
¤
¤ ¤
¤ ¤

Because the 3rd row is incomplete, we return 2.
</pre>
<p></p>

<p><b>Example 2:</b>
</p><pre>n = 8

The coins can form the following rows:
¤
¤ ¤
¤ ¤ ¤
¤ ¤

Because the 4th row is incomplete, we return 3.
</pre>
<p></p></div>

---




```cpp
class Solution {
public:
    
    int arrange(int n, int row){
        if(n<row)
            return row-1;
        return arrange(n-row, row+1);
    }
    
    int arrangeCoins(int n) {
        return arrange(n, 1);
    }
};

```
