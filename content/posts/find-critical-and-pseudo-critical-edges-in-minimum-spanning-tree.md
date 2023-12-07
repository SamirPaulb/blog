---
title: find critical and pseudo critical edges in minimum spanning tree
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree solution
description: find critical and pseudo critical edges in minimum spanning tree LeetCode Solution Explained
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


<h2>1489. Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree</h2><h3>Hard</h3><hr><div><p>Given a weighted undirected connected graph with <code>n</code>&nbsp;vertices numbered from <code>0</code> to <code>n - 1</code>,&nbsp;and an array <code>edges</code>&nbsp;where <code>edges[i] = [a<sub>i</sub>, b<sub>i</sub>, weight<sub>i</sub>]</code> represents a bidirectional and weighted edge between nodes&nbsp;<code>a<sub>i</sub></code>&nbsp;and <code>b<sub>i</sub></code>. A minimum spanning tree (MST) is a subset of the graph's edges that connects all vertices without cycles&nbsp;and with the minimum possible total edge weight.</p>

<p>Find <em>all the critical and pseudo-critical edges in the given graph's minimum spanning tree (MST)</em>. An MST edge whose deletion from the graph would cause the MST weight to increase is called a&nbsp;<em>critical edge</em>. On&nbsp;the other hand, a pseudo-critical edge is that which can appear in some MSTs but not all.</p>

<p>Note that you can return the indices of the edges in any order.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2020/06/04/ex1.png" style="width: 259px; height: 262px;"></p>

<pre><strong>Input:</strong> n = 5, edges = [[0,1,1],[1,2,1],[2,3,2],[0,3,2],[0,4,3],[3,4,3],[1,4,6]]
<strong>Output:</strong> [[0,1],[2,3,4,5]]
<strong>Explanation:</strong> The figure above describes the graph.
The following figure shows all the possible MSTs:
<img alt="" src="https://assets.leetcode.com/uploads/2020/06/04/msts.png" style="width: 540px; height: 553px;">
Notice that the two edges 0 and 1 appear in all MSTs, therefore they are critical edges, so we return them in the first list of the output.
The edges 2, 3, 4, and 5 are only part of some MSTs, therefore they are considered pseudo-critical edges. We add them to the second list of the output.
</pre>

<p><strong>Example 2:</strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2020/06/04/ex2.png" style="width: 247px; height: 253px;"></p>

<pre><strong>Input:</strong> n = 4, edges = [[0,1,1],[1,2,1],[2,3,1],[0,3,1]]
<strong>Output:</strong> [[],[0,1,2,3]]
<strong>Explanation:</strong> We can observe that since all 4 edges have equal weight, choosing any 3 edges from the given 4 will yield an MST. Therefore all 4 edges are pseudo-critical.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= n &lt;= 100</code></li>
	<li><code>1 &lt;= edges.length &lt;= min(200, n * (n - 1) / 2)</code></li>
	<li><code>edges[i].length == 3</code></li>
	<li><code>0 &lt;= a<sub>i</sub> &lt; b<sub>i</sub> &lt; n</code></li>
	<li><code>1 &lt;= weight<sub>i</sub>&nbsp;&lt;= 1000</code></li>
	<li>All pairs <code>(a<sub>i</sub>, b<sub>i</sub>)</code> are <strong>distinct</strong>.</li>
</ul>
</div>

---




```cpp


class Solution {
public:
struct DSU
    {
        vector<int>parent;
        DSU(int n)
        {
            parent.resize(n);
            for(int i=0;i<n;i++)
                parent[i]=i;
        }
        int find(int x)
        {
            if(parent[x]!=x)
                parent[x]=find(parent[x]);
            return parent[x];
        }
        void unite(int x,int y)
        {
            parent[y]=x;
        }
    };
    int MST(int n,vector<vector<int>>& edges,int del_edge,int add_edge)
    {
        DSU dsu(n);
        int res=0,m=edges.size();
        if(add_edge!=-1)
        {
            res+=edges[add_edge][2];
            dsu.unite(edges[add_edge][0],edges[add_edge][1]);
        }
        for(int i=0;i<m;i++)
        {
            if(i==del_edge || i==add_edge)
                continue;
            int a=edges[i][0],b=edges[i][1];
            int pa=dsu.find(a),pb=dsu.find(b);
            if(pa!=pb)
            {
                dsu.unite(pa,pb);
                res+=edges[i][2];
            }
        }
        for(int i=0;i<n;i++)  //Check disconnection
        {
            if(dsu.find(i)!=dsu.find(0))
                return INT_MAX;
        }
        return res;
    }
    vector<vector<int>> findCriticalAndPseudoCriticalEdges(int n, vector<vector<int>>& edges) 
    {
        int m=edges.size();
        for(int i=0;i<m;i++)
            edges[i].push_back(i);
        sort(edges.begin(),edges.end(),[](vector<int>&a,vector<int>&b){
            return a[2]<b[2];
        });
        int original=MST(n,edges,-1,-1);
        
        vector<int>critical,pseudo;
        for(int i=0;i<m;i++)
        {
            int c1=MST(n,edges,i,-1);
            if(c1>original)
                critical.push_back(edges[i][3]);
            else
            {
                int c2=MST(n,edges,-1,i);
                if(c2==original)
                    pseudo.push_back(edges[i][3]);
            }
        }
        return {critical,pseudo};
    }
};
```
