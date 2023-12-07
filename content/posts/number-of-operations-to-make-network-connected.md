---
title: number of operations to make network connected
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, number-of-operations-to-make-network-connected solution
description: number of operations to make network connected LeetCode Solution Explained
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


<h2>1319. Number of Operations to Make Network Connected</h2><h3>Medium</h3><hr><div><p>There are&nbsp;<code>n</code>&nbsp;computers numbered from&nbsp;<code>0</code>&nbsp;to&nbsp;<code>n-1</code>&nbsp;connected by&nbsp;ethernet cables&nbsp;<code>connections</code>&nbsp;forming a network where&nbsp;<code>connections[i] = [a, b]</code>&nbsp;represents a connection between computers&nbsp;<code>a</code>&nbsp;and&nbsp;<code>b</code>. Any computer&nbsp;can reach any other computer directly or indirectly through the network.</p>

<p>Given an initial computer network <code>connections</code>. You can extract certain cables between two directly connected computers, and place them between any pair of disconnected computers to make them directly connected. Return the <em>minimum number of times</em> you need to do this in order to make all the computers connected. If it's not possible, return -1.&nbsp;</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<p><strong><img alt="" src="https://assets.leetcode.com/uploads/2020/01/02/sample_1_1677.png" style="width: 570px; height: 167px;"></strong></p>

<pre><strong>Input:</strong> n = 4, connections = [[0,1],[0,2],[1,2]]
<strong>Output:</strong> 1
<strong>Explanation:</strong> Remove cable between computer 1 and 2 and place between computers 1 and 3.
</pre>

<p><strong>Example 2:</strong></p>

<p><strong><img alt="" src="https://assets.leetcode.com/uploads/2020/01/02/sample_2_1677.png" style="width: 660px; height: 167px;"></strong></p>

<pre><strong>Input:</strong> n = 6, connections = [[0,1],[0,2],[0,3],[1,2],[1,3]]
<strong>Output:</strong> 2
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> n = 6, connections = [[0,1],[0,2],[0,3],[1,2]]
<strong>Output:</strong> -1
<strong>Explanation:</strong> There are not enough cables.
</pre>

<p><strong>Example 4:</strong></p>

<pre><strong>Input:</strong> n = 5, connections = [[0,1],[0,2],[3,4],[2,3]]
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 10^5</code></li>
	<li><code>1 &lt;= connections.length &lt;= min(n*(n-1)/2, 10^5)</code></li>
	<li><code>connections[i].length == 2</code></li>
	<li><code>0 &lt;= connections[i][0], connections[i][1]&nbsp;&lt; n</code></li>
	<li><code>connections[i][0] != connections[i][1]</code></li>
	<li>There are no repeated connections.</li>
	<li>No two computers are connected by more than one cable.</li>
</ul>
</div>

---




```cpp
class Solution {
public:
    
    void dfs(int i, int n, vector<int> &vis, vector<int> adj[n]){
        vis[i]=1;
        for(auto u : adj[i]){
            if(!vis[u])
                dfs(u,n,vis,adj);
        }
    }
    
    int makeConnected(int n, vector<vector<int>>& connections) {
        vector<int> adj[n];
        vector<int> vis(n,0);
        for(int i=0;i<connections.size();i++){
            adj[connections[i][0]].push_back(connections[i][1]);
            adj[connections[i][1]].push_back(connections[i][0]);    
        }
        int c=0;
        for(int i=0;i<n;i++){
            if(!vis[i]){
                dfs(i, n, vis, adj);
                c++;
            }
        }
        int edges=connections.size();
        int ans=edges+c-n;
        if(edges<n-1 || ans<c-1)
            return -1;
        else 
            return c-1;
    }
};
```
