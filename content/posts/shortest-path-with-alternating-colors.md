---
title: shortest path with alternating colors
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, shortest-path-with-alternating-colors solution
description: shortest path with alternating colors LeetCode Solution Explained
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


<h2>1129. Shortest Path with Alternating Colors</h2><h3>Medium</h3><hr><div><p>Consider a directed graph, with nodes labelled <code>0, 1, ..., n-1</code>.&nbsp; In this graph, each edge is either red or blue, and there could&nbsp;be self-edges or parallel edges.</p>

<p>Each <code>[i, j]</code> in <code>red_edges</code> denotes a red directed edge from node <code>i</code> to node <code>j</code>.&nbsp; Similarly, each <code>[i, j]</code> in <code>blue_edges</code> denotes a blue directed edge from node <code>i</code> to node <code>j</code>.</p>

<p>Return an array <code>answer</code>&nbsp;of length <code>n</code>,&nbsp;where each&nbsp;<code>answer[X]</code>&nbsp;is&nbsp;the length of the shortest path from node <code>0</code>&nbsp;to node <code>X</code>&nbsp;such that the edge colors alternate along the path (or <code>-1</code> if such a path doesn't exist).</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> n = 3, red_edges = [[0,1],[1,2]], blue_edges = []
<strong>Output:</strong> [0,1,-1]
</pre><p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> n = 3, red_edges = [[0,1]], blue_edges = [[2,1]]
<strong>Output:</strong> [0,1,-1]
</pre><p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> n = 3, red_edges = [[1,0]], blue_edges = [[2,1]]
<strong>Output:</strong> [0,-1,-1]
</pre><p><strong>Example 4:</strong></p>
<pre><strong>Input:</strong> n = 3, red_edges = [[0,1]], blue_edges = [[1,2]]
<strong>Output:</strong> [0,1,2]
</pre><p><strong>Example 5:</strong></p>
<pre><strong>Input:</strong> n = 3, red_edges = [[0,1],[0,2]], blue_edges = [[1,0]]
<strong>Output:</strong> [0,1,1]
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 100</code></li>
	<li><code>red_edges.length &lt;= 400</code></li>
	<li><code>blue_edges.length &lt;= 400</code></li>
	<li><code>red_edges[i].length == blue_edges[i].length == 2</code></li>
	<li><code>0 &lt;= red_edges[i][j], blue_edges[i][j] &lt; n</code></li>
</ul></div>

---




```cpp
class Solution {
public:
    vector<int> shortestAlternatingPaths(int n, vector<vector<int>>& red, vector<vector<int>>& blue) {
        vector<vector<pair<int, int>>> adj(n);
        for(int i=0;i<red.size();i++){
            adj[red[i][0]].push_back({red[i][1],0});
        }
        for(int i=0;i<blue.size();i++){
            adj[blue[i][0]].push_back({blue[i][1],1});
        }
        vector<vector<int>> vis(n, vector<int>(2, 0));
        queue<pair<int,int>> q;
        vector<int> ans(n,-1);
        int currl=0;
        q.push({0,-1});
        while(!q.empty()){
            int k=q.size();
            for(int i=0;i<k;i++){
                int curr=q.front().second;
                int currn=q.front().first;
                q.pop();
                if(ans[currn]==-1)
                    ans[currn]=currl;
                for(auto u: adj[currn]){
                    if(u.second!=curr && !vis[u.first][u.second]){
                        vis[u.first][u.second]=1;
                        q.push({u});
                    }
                }
            }
            currl++;
        }
        return ans;
    }
};
```
