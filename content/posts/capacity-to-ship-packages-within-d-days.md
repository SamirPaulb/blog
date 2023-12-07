---
title: capacity to ship packages within d days
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, capacity-to-ship-packages-within-d-days solution
description: capacity to ship packages within d days LeetCode Solution Explained
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


<h2>1011. Capacity To Ship Packages Within D Days</h2><h3>Medium</h3><hr><div><p>A conveyor belt has packages that must be shipped from one port to another within <code>D</code> days.</p>

<p>The i<sup>th</sup> package on the conveyor belt has a weight of <code>weights[i]</code>. Each day, we load the ship with packages on the conveyor belt (in the order given by <code>weights</code>). We may not load more weight than the maximum weight capacity of the ship.</p>

<p>Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within <code>D</code> days.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> weights = [1,2,3,4,5,6,7,8,9,10], D = 5
<strong>Output:</strong> 15
<strong>Explanation:</strong> A ship capacity of 15 is the minimum to ship all the packages in 5 days like this:
1st day: 1, 2, 3, 4, 5
2nd day: 6, 7
3rd day: 8
4th day: 9
5th day: 10

Note that the cargo must be shipped in the order given, so using a ship of capacity 14 and splitting the packages into parts like (2, 3, 4, 5), (1, 6, 7), (8), (9), (10) is not allowed.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> weights = [3,2,2,4,1,4], D = 3
<strong>Output:</strong> 6
<strong>Explanation:</strong> A ship capacity of 6 is the minimum to ship all the packages in 3 days like this:
1st day: 3, 2
2nd day: 2, 4
3rd day: 1, 4
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> weights = [1,2,3,1,1], D = 4
<strong>Output:</strong> 3
<strong>Explanation:</strong>
1st day: 1
2nd day: 2
3rd day: 3
4th day: 1, 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= D &lt;= weights.length &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>1 &lt;= weights[i] &lt;= 500</code></li>
</ul>
</div>

---




```cpp
class Solution {
public:
    
    bool isValid(vector<int>& weights, int D, int k){
        int n=weights.size();
        int ans=1,sum=0;
        for(int i=0;i<n;i++){
            if(sum+weights[i]>k){
                ans++;
                sum=0;
            }
            sum+=weights[i];
        }
        return (ans<=D);
    }
    
    int shipWithinDays(vector<int>& weights, int D) {
        int l=1;
        for(int i=0;i<weights.size();i++)
            l=max(l,weights[i]);
        int r=25000001;
        while(l<=r){
            int mid=l+(r-l)/2;
            if(isValid(weights, D, mid))
                r=mid-1;
            else
                l=mid+1;
        }
        return l;
    }
};

```
