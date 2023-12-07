---
title: find right interval
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, find-right-interval solution
description: find right interval LeetCode Solution Explained
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


[Discussion Post (created on 21/0/2021 at 21:14)](https://leetcode.com/problems/find-right-interval/discuss/1027943/Using-Map-and-lower_bound-or-C%2B%2B)  
<h2>436. Find Right Interval</h2><h3>Medium</h3><hr><div><p>You are given an array of&nbsp;<code>intervals</code>, where <code>intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code>&nbsp;and each <code>start<sub>i</sub></code>&nbsp;is <strong>unique</strong>.</p>

<p>The <strong>r</strong><strong>ight</strong><strong>&nbsp;interval</strong>&nbsp;for an interval <code>i</code> is an interval&nbsp;<code>j</code>&nbsp;such that <code>start<sub>j</sub></code><code>&nbsp;&gt;= end<sub>i</sub></code>&nbsp;and&nbsp;<code>start<sub>j</sub></code>&nbsp;is&nbsp;<strong>minimized</strong>.</p>

<p>Return&nbsp;<em>an array of&nbsp;<strong>right interval</strong>&nbsp;indices for each interval&nbsp;<code>i</code></em>. If no&nbsp;<strong>right interval</strong>&nbsp;exists for interval&nbsp;<code>i</code>, then put&nbsp;<code>-1</code>&nbsp;at index <code>i</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> intervals = [[1,2]]
<strong>Output:</strong> [-1]
<strong>Explanation:</strong> There is only one interval in the collection, so it outputs -1.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> intervals = [[3,4],[2,3],[1,2]]
<strong>Output:</strong> [-1,0,1]
<strong>Explanation:</strong> There is no right interval for [3,4].
The right interval for [2,3] is [3,4] since start<sub>0</sub>&nbsp;= 3 is the smallest start that is &gt;= end<sub>1</sub>&nbsp;= 3.
The right interval for [1,2] is [2,3] since start<sub>1</sub>&nbsp;= 2 is the smallest start that is &gt;= end<sub>2</sub>&nbsp;= 2.
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> intervals = [[1,4],[2,3],[3,4]]
<strong>Output:</strong> [-1,2,-1]
<strong>Explanation:</strong> There is no right interval for [1,4] and [3,4].
The right interval for [2,3] is [3,4] since start<sub>2</sub> = 3 is the smallest start that is &gt;= end<sub>1</sub>&nbsp;= 3.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;=&nbsp;intervals.length &lt;= 2 * 10<sup>4</sup></code></li>
	<li><code>intervals[i].length == 2</code></li>
	<li><code>-10<sup>6</sup> &lt;= start<sub>i</sub> &lt;= end<sub>i</sub> &lt;= 10<sup>6</sup></code></li>
	<li>The start point&nbsp;of each interval is <strong>unique</strong>.</li>
</ul>
</div>

---




```cpp
class Solution {
public:
    vector<int> findRightInterval(vector<vector<int>>& intervals) {
        int n=intervals.size();
        if(n<=1)
            return {-1};
        vector<int> v(n);
        map<int,int> m;
         for(int i=0;i<n;i++)
            m[intervals[i][0]]=i;
             
        for(int i=0;i<n;i++){
            auto it=m.lower_bound(intervals[i][1]);
            if(it==m.end())
                v[i]=-1;
            else
                v[i]=(it->second);
        }
        return v;
    }
};

```
