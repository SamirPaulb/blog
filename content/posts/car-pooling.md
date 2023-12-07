---
title: car pooling
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, car-pooling solution
description: car pooling LeetCode Solution Explained
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


<h2>1094. Car Pooling</h2><h3>Medium</h3><hr><div><p>You are driving a vehicle that&nbsp;has <code>capacity</code> empty seats initially available for passengers.&nbsp; The vehicle <strong>only</strong> drives east (ie. it <strong>cannot</strong> turn around and drive west.)</p>

<p>Given a list of <code>trips</code>, <code>trip[i] = [num_passengers, start_location, end_location]</code>&nbsp;contains information about the <code>i</code>-th trip: the number of passengers that must be picked up, and the locations to pick them up and drop them off.&nbsp; The locations are given as the number of kilometers&nbsp;due east from your vehicle's initial location.</p>

<p>Return <code>true</code> if and only if&nbsp;it is possible to pick up and drop off all passengers for all the given trips.&nbsp;</p>

<p>&nbsp;</p>

<p><strong>Example 1:</strong></p>

<pre><strong>Input: </strong>trips = <span id="example-input-1-1">[[2,1,5],[3,3,7]]</span>, capacity = <span id="example-input-1-2">4</span>
<strong>Output: </strong><span id="example-output-1">false</span>
</pre>

<div>
<p><strong>Example 2:</strong></p>

<pre><strong>Input: </strong>trips = <span id="example-input-2-1">[[2,1,5],[3,3,7]]</span>, capacity = <span id="example-input-2-2">5</span>
<strong>Output: </strong><span id="example-output-2">true</span>
</pre>

<div>
<p><strong>Example 3:</strong></p>

<pre><strong>Input: </strong>trips = <span id="example-input-3-1">[[2,1,5],[3,5,7]]</span>, capacity = <span id="example-input-3-2">3</span>
<strong>Output: </strong><span id="example-output-3">true</span>
</pre>

<div>
<p><strong>Example 4:</strong></p>

<pre><strong>Input: </strong>trips = <span id="example-input-4-1">[[3,2,7],[3,7,9],[8,3,9]]</span>, capacity = <span id="example-input-4-2">11</span>
<strong>Output: </strong><span id="example-output-4">true</span>
</pre>
</div>
</div>
</div>

<div>
<div>
<div>
<div>&nbsp;</div>
</div>
</div>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ol>
	<li><code>trips.length &lt;= 1000</code></li>
	<li><code>trips[i].length == 3</code></li>
	<li><code>1 &lt;= trips[i][0] &lt;= 100</code></li>
	<li><code>0 &lt;= trips[i][1] &lt; trips[i][2] &lt;= 1000</code></li>
	<li><code>1 &lt;=&nbsp;capacity &lt;= 100000</code></li>
</ol>
</div>

---




```cpp
class Solution {
public:
    bool carPooling(vector<vector<int>>& trips, int capacity) {
        int n=trips.size();
        if(n==1)
            return trips[0][0]<=capacity;
        vector<int> m(1001);
        for(int i=0;i<n;i++){
            m[trips[i][1]]+=trips[i][0];;
            m[trips[i][2]]-=trips[i][0];
        }
        int maxc=0;
        for(int i=0;i<1001;i++){
            if(maxc+m[i]>capacity)
                return false;
            maxc=maxc+m[i];
        }
        return true;
    }
};
```
