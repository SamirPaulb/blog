---
title: interval list intersections
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, interval-list-intersections solution
description: interval list intersections LeetCode Solution Explained
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


[Discussion Post (created on 20/0/2021 at 20:55)](https://leetcode.com/problems/interval-list-intersections/discuss/1026297/Two-Pointer-or-C%2B%2B-or-Beats-100)  
<h2>986. Interval List Intersections</h2><h3>Medium</h3><hr><div><p>You are given two lists of closed intervals, <code>firstList</code> and <code>secondList</code>, where <code>firstList[i] = [start<sub>i</sub>, end<sub>i</sub>]</code> and <code>secondList[j] = [start<sub>j</sub>, end<sub>j</sub>]</code>. Each list of intervals is pairwise <strong>disjoint</strong> and in <strong>sorted order</strong>.</p>

<p>Return <em>the intersection of these two interval lists</em>.</p>

<p>A <strong>closed interval</strong> <code>[a, b]</code> (with <code>a &lt; b</code>) denotes the set of real numbers <code>x</code> with <code>a &lt;= x &lt;= b</code>.</p>

<p>The <strong>intersection</strong> of two closed intervals is a set of real numbers that are either empty or represented as a closed interval. For example, the intersection of <code>[1, 3]</code> and <code>[2, 4]</code> is <code>[2, 3]</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/01/30/interval1.png" style="width: 700px; height: 194px;">
<pre><strong>Input:</strong> firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]]
<strong>Output:</strong> [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> firstList = [[1,3],[5,9]], secondList = []
<strong>Output:</strong> []
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> firstList = [], secondList = [[4,8],[10,12]]
<strong>Output:</strong> []
</pre>

<p><strong>Example 4:</strong></p>

<pre><strong>Input:</strong> firstList = [[1,7]], secondList = [[3,10]]
<strong>Output:</strong> [[3,7]]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= firstList.length, secondList.length &lt;= 1000</code></li>
	<li><code>firstList.length + secondList.length &gt;= 1</code></li>
	<li><code>0 &lt;= start<sub>i</sub> &lt; end<sub>i</sub> &lt;= 10<sup>9</sup></code></li>
	<li><code>end<sub>i</sub> &lt; start<sub>i+1</sub></code></li>
	<li><code>0 &lt;= start<sub>j</sub> &lt; end<sub>j</sub> &lt;= 10<sup>9</sup> </code></li>
	<li><code>end<sub>j</sub> &lt; start<sub>j+1</sub></code></li>
</ul>
</div>

---




```cpp
class Solution {
public:
    vector<vector<int>> intervalIntersection(vector<vector<int>>& firstList, vector<vector<int>>& secondList) {
        vector<vector<int>> v;
        int i=0,j=0;
        while(i<firstList.size() && j<secondList.size()){
            int a=max(firstList[i][0], secondList[j][0]);
            int b=min(firstList[i][1], secondList[j][1]);
            if(a<=b) 
                v.push_back({a,b});
            if(firstList[i][1]<secondList[j][1])
                i++;
            else 
                j++;
        }
        return v;
    }
};

```
