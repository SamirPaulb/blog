---
title: heaters
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, heaters solution
description: heaters LeetCode Solution Explained
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


<h2>475. Heaters</h2><h3>Medium</h3><hr><div><p>Winter is coming! During the contest, your first job is to design a standard heater with a fixed warm radius to warm all the houses.</p>

<p>Every house can be warmed, as long as the house is within the heater's warm radius range.&nbsp;</p>

<p>Given the positions of <code>houses</code> and <code>heaters</code> on a horizontal line, return <em>the minimum radius standard of heaters&nbsp;so that those heaters could cover all houses.</em></p>

<p><strong>Notice</strong> that&nbsp;all the <code>heaters</code> follow your radius standard, and the warm radius will the same.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> houses = [1,2,3], heaters = [2]
<strong>Output:</strong> 1
<strong>Explanation:</strong> The only heater was placed in the position 2, and if we use the radius 1 standard, then all the houses can be warmed.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> houses = [1,2,3,4], heaters = [1,4]
<strong>Output:</strong> 1
<strong>Explanation:</strong> The two heater was placed in the position 1 and 4. We need to use radius 1 standard, then all the houses can be warmed.
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> houses = [1,5], heaters = [2]
<strong>Output:</strong> 3
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= houses.length, heaters.length &lt;= 3 * 10<sup>4</sup></code></li>
	<li><code>1 &lt;= houses[i], heaters[i] &lt;= 10<sup>9</sup></code></li>
</ul>
</div>

---




```cpp
class Solution {
public:
    int findRadius(vector<int>& houses, vector<int>& heaters) {
        sort(houses.begin(), houses.end());
        sort(heaters.begin(), heaters.end());
        int n=houses.size();
        int m=heaters.size();
        vector<int> a(n, INT_MAX);
        
        for(int i=0,j=0;i<n && j<m;){
            if(houses[i]<=heaters[j]){
                a[i]=heaters[j]-houses[i];
                i++;
            }
            else
                j++;
        }
        
        for(int i=n-1,j=m-1;i>=0 && j>=0;){
            if(houses[i]>=heaters[j]){
                a[i]=min(houses[i]-heaters[j],a[i]);
                i--;
            }
            else
                j--;
        }
        
        int ans=0;
        for(int i=0;i<n;i++)
            ans=max(ans,a[i]);
        return ans;
    }
};

```
