---
title: maximize distance to closest person
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, maximize-distance-to-closest-person solution
description: maximize distance to closest person LeetCode Solution Explained
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


<h2>849. Maximize Distance to Closest Person</h2><h3>Medium</h3><hr><div><p>You are given an array representing a row of <code>seats</code> where <code>seats[i] = 1</code> represents a person sitting in the <code>i<sup>th</sup></code> seat, and <code>seats[i] = 0</code> represents that the <code>i<sup>th</sup></code> seat is empty <strong>(0-indexed)</strong>.</p>

<p>There is at least one empty seat, and at least one person sitting.</p>

<p>Alex wants to sit in the seat such that the distance between him and the closest person to him is maximized.&nbsp;</p>

<p>Return <em>that maximum distance to the closest person</em>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/09/10/distance.jpg" style="width: 650px; height: 257px;">
<pre><strong>Input:</strong> seats = [1,0,0,0,1,0,1]
<strong>Output:</strong> 2
<strong>Explanation: </strong>
If Alex sits in the second open seat (i.e. seats[2]), then the closest person has distance 2.
If Alex sits in any other open seat, the closest person has distance 1.
Thus, the maximum distance to the closest person is 2.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> seats = [1,0,0,0]
<strong>Output:</strong> 3
<strong>Explanation: </strong>
If Alex sits in the last seat (i.e. seats[3]), the closest person is 3 seats away.
This is the maximum distance possible, so the answer is 3.
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> seats = [0,1]
<strong>Output:</strong> 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= seats.length &lt;= 2 * 10<sup>4</sup></code></li>
	<li><code>seats[i]</code>&nbsp;is <code>0</code> or&nbsp;<code>1</code>.</li>
	<li>At least one seat is <strong>empty</strong>.</li>
	<li>At least one seat is <strong>occupied</strong>.</li>
</ul>
</div>

---




```cpp
class Solution {
public:
    int maxDistToClosest(vector<int>& seats) {
        int n=seats.size();
        vector<int> l(n,n);
        vector<int> r(n,n);
        for(int i=0;i<n;i++){
            if(seats[i]==1)
                l[i]=0;
            else if(i>0)
                l[i]=l[i-1]+1;
        }
        for(int i=n-1;i>=0;i--){
            if(seats[i]==1)
                r[i]=0;
            else if(i+1<n)
                r[i]=r[i+1]+1;
        }
        int ans=0;
        for(int i=0;i<n;i++){
            if(seats[i]==0)
                ans=max(ans, min(l[i], r[i]));
        }
        return ans;
    }
};
```
