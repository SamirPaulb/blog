---
title: soup servings
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, soup-servings solution
description: soup servings LeetCode Solution Explained
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


<h2>808. Soup Servings</h2><h3>Medium</h3><hr><div><p>There are two types of soup: type A and type B. Initially we have <code>n</code> ml of each type of soup. There are four kinds of operations:</p>

<ol>
	<li>Serve 100 ml of soup A and 0 ml of soup B</li>
	<li>Serve 75 ml of soup A and 25&nbsp;ml of soup B</li>
	<li>Serve 50 ml of soup A and 50 ml of soup B</li>
	<li>Serve 25&nbsp;ml of soup A and 75&nbsp;ml of soup B</li>
</ol>

<p>When we serve some soup, we give it to someone and we no longer have it. Each turn, we will choose from the four operations with equal probability 0.25. If the remaining volume of soup is not enough to complete the operation, we will serve&nbsp;as much as we can. We stop once we no longer have some quantity of both types of soup.</p>

<p>Note that we do not have the operation where all 100 ml's of soup B are used first.</p>

<p>Return the probability that soup A will be empty first, plus half the probability that A and B become empty at the same time.</p>

<p>&nbsp;</p>

<pre><strong>Example:</strong>
<strong>Input:</strong> n = 50
<strong>Output:</strong> 0.625
<strong>Explanation:</strong> 
If we choose the first two operations, A will become empty first. For the third operation, A and B will become empty at the same time. For the fourth operation, B will become empty first. So the total probability of A becoming empty first plus half the probability that A and B become empty at the same time, is 0.25 * (1 + 1 + 0.5 + 0) = 0.625.

</pre>

<p><strong>Notes:</strong></p>

<ul>
	<li><code>0 &lt;= n &lt;= 10<sup>9</sup></code>.</li>
	<li>Answers within <code>10<sup>-6</sup></code> of the true value will be accepted as correct.</li>
</ul>
</div>

---




```cpp
class Solution {
public:
    vector<vector<double>> t;
    
    double solve(int a, int b){
        if(a<=0 && b<=0)
            return 0.50;
        if(a<=0 && b>0)
            return 1.0;
        if(a>0 && b<=0)
            return 0.0;
        if(t[a][b]!=-1)
            return t[a][b];
        return t[a][b]=0.25*(solve(a-100,b)+solve(a-75,b-25)+solve(a-50,b-50)+solve(a-25,b-75));
        
    }
    
    double soupServings(int n) {
        if(n>=5000)
            return 1.0;
        t.resize(n+1, vector<double>(n+1,-1));
        return solve(n,n);
    }
};
```
