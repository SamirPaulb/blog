---
title: unique paths
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, unique-paths solution
description: unique paths LeetCode Solution Explained
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


<h2>62. Unique Paths</h2><h3>Medium</h3><hr><div><p>A robot is located at the top-left corner of a <code>m x n</code> grid (marked 'Start' in the diagram below).</p>

<p>The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).</p>

<p>How many possible unique paths are there?</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img src="https://assets.leetcode.com/uploads/2018/10/22/robot_maze.png" style="width: 400px; height: 183px;">
<pre><strong>Input:</strong> m = 3, n = 7
<strong>Output:</strong> 28
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> m = 3, n = 2
<strong>Output:</strong> 3
<strong>Explanation:</strong>
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -&gt; Down -&gt; Down
2. Down -&gt; Down -&gt; Right
3. Down -&gt; Right -&gt; Down
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> m = 7, n = 3
<strong>Output:</strong> 28
</pre>

<p><strong>Example 4:</strong></p>

<pre><strong>Input:</strong> m = 3, n = 3
<strong>Output:</strong> 6
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= m, n &lt;= 100</code></li>
	<li>It's guaranteed that the answer will be less than or equal to <code>2 * 10<sup>9</sup></code>.</li>
</ul>
</div>

---




```cpp
class Solution {
public:
    int uniquePaths(int m, int n) {
       int t[m][n];
       memset(t,0,sizeof(t));
      for(int i=0;i<n;i++)
       t[m-1][i]=1;
      for(int i=0;i<m;i++)
       t[i][n-1]=1;
        for(int i=m-2;i>=0;i--){
            for(int j=n-2;j>=0;j--){
                t[i][j]+=t[i+1][j]+t[i][j+1];
            }
        }
        return t[0][0];
    }
};
```
