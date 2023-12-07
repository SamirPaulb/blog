---
title: find k pairs with smallest sums
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, find-k-pairs-with-smallest-sums solution
description: find k pairs with smallest sums LeetCode Solution Explained
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


<h2>373. Find K Pairs with Smallest Sums</h2><h3>Medium</h3><hr><div><p>You are given two integer arrays <b>nums1</b> and <b>nums2</b> sorted in ascending order and an integer <b>k</b>.</p>

<p>Define a pair <b>(u,v)</b> which consists of one element from the first array and one element from the second array.</p>

<p>Find the k pairs <b>(u<sub>1</sub>,v<sub>1</sub>),(u<sub>2</sub>,v<sub>2</sub>) ...(u<sub>k</sub>,v<sub>k</sub>)</b> with the smallest sums.</p>

<p><strong>Example 1:</strong></p>

<pre><strong>Input: </strong>nums1 = <span id="example-input-1-1">[1,7,11]</span>, nums2 = <span id="example-input-1-2">[2,4,6]</span>, k = <span id="example-input-1-3">3</span>
<strong>Output: </strong><span id="example-output-1">[[1,2],[1,4],[1,6]] 
<strong>Explanation: </strong></span>The first 3 pairs are returned from the sequence: 
&nbsp;            [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input: </strong>nums1 = [1,1,2], nums2 = [1,2,3], k = 2
<strong>Output: </strong>[1,1],[1,1]<span>
<strong>Explanation: </strong></span>The first 2 pairs are returned from the sequence: 
&nbsp;            [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input: </strong>nums1 = [1,2], nums2 = [3], k = 3
<strong>Output: </strong>[1,3],[2,3]<span>
<strong>Explanation: </strong></span>All possible pairs are returned from the sequence: [1,3],[2,3]
</pre>
</div>

---




```cpp
class Solution {
    struct comp{
        bool operator()(pair<int,int> p1, pair<int,int> p2){
            return p1.first+p1.second < p2.first+p2.second;
        }
      };
public:
   vector<vector<int>> kSmallestPairs(vector<int>& nums1, vector<int>& nums2, int k) {
        vector<vector<int>> ans;
        priority_queue<pair<int,int>, vector<pair<int,int>>, comp> pq;
        for(int i=0;i<nums1.size();i++){
            for(int j=0;j<nums2.size();j++){
                pq.push({nums1[i], nums2[j]});
                if(pq.size()>k)
                    pq.pop();
            }
        }
        while(!pq.empty()){
            ans.push_back({pq.top().first, pq.top().second});
            pq.pop();
        }
        return ans;
    }
};
```
