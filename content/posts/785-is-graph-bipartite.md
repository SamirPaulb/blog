---
title: 785 is graph bipartite
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 785-is-graph-bipartite solution
description: 785 is graph bipartite LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/is-graph-bipartite/">785. Is Graph Bipartite?</a></h2><h3>Medium</h3><hr><div><p>There is an <strong>undirected</strong> graph with <code>n</code> nodes, where each node is numbered between <code>0</code> and <code>n - 1</code>. You are given a 2D array <code>graph</code>, where <code>graph[u]</code> is an array of nodes that node <code>u</code> is adjacent to. More formally, for each <code>v</code> in <code>graph[u]</code>, there is an undirected edge between node <code>u</code> and node <code>v</code>. The graph has the following properties:</p>

<ul>
	<li>There are no self-edges (<code>graph[u]</code> does not contain <code>u</code>).</li>
	<li>There are no parallel edges (<code>graph[u]</code> does not contain duplicate values).</li>
	<li>If <code>v</code> is in <code>graph[u]</code>, then <code>u</code> is in <code>graph[v]</code> (the graph is undirected).</li>
	<li>The graph may not be connected, meaning there may be two nodes <code>u</code> and <code>v</code> such that there is no path between them.</li>
</ul>

<p>A graph is <strong>bipartite</strong> if the nodes can be partitioned into two independent sets <code>A</code> and <code>B</code> such that <strong>every</strong> edge in the graph connects a node in set <code>A</code> and a node in set <code>B</code>.</p>

<p>Return <code>true</code><em> if and only if it is <strong>bipartite</strong></em>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/21/bi2.jpg" style="width: 222px; height: 222px;">
<pre><strong>Input:</strong> graph = [[1,2,3],[0,2],[0,1,3],[0,2]]
<strong>Output:</strong> false
<strong>Explanation:</strong> There is no way to partition the nodes into two independent sets such that every edge connects a node in one and a node in the other.</pre>

<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/21/bi1.jpg" style="width: 222px; height: 222px;">
<pre><strong>Input:</strong> graph = [[1,3],[0,2],[1,3],[0,2]]
<strong>Output:</strong> true
<strong>Explanation:</strong> We can partition the nodes into two sets: {0, 2} and {1, 3}.</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>graph.length == n</code></li>
	<li><code>1 &lt;= n &lt;= 100</code></li>
	<li><code>0 &lt;= graph[u].length &lt; n</code></li>
	<li><code>0 &lt;= graph[u][i] &lt;= n - 1</code></li>
	<li><code>graph[u]</code>&nbsp;does not contain&nbsp;<code>u</code>.</li>
	<li>All the values of <code>graph[u]</code> are <strong>unique</strong>.</li>
	<li>If <code>graph[u]</code> contains <code>v</code>, then <code>graph[v]</code> contains <code>u</code>.</li>
</ul>
</div>

---




```python
'''
A graph is bipartite if the nodes can be partitioned into two independent sets A and B such that all the edges are connected across A and B. If there is a edge within A or B then that graph is Not bipartite.
            0
          /   \
         1     2
         |     |
         3-----4
A = {0, 3, 4}; B = {1, 2}    => node 3 and 4 are connected within set A. so not bipartite

1. All acyclic graphs are Bipartite.
2. Cyclic graph of elven length is Bipartite.
3. Acyclic graph of odd lenght is Not Bipartite.

To find cyclic and acyclic we will keep a dictionay with key as node and value as 
it's colour. If current node is seen previously and it's previous colour is different then it is a cyclic graph with Odd lenght.
'''
import collections

class Solution:
    def isBipartite(self, graph):
        seen = {}  # dictionay with key as node and value as it's colour
        
        for node in range(len(graph)):          # graph may have different disjoint components
            if node not in seen:
                q = collections.deque([(node, 1)])
                while q:
                    node, color = q.popleft()
                    
                    if node in seen:            # graph is cyclic
                        if seen[node] == color: # previour color is same as current color
                            continue            # cyclic graph with EVEN length
                        else:                   # previour color diffrent with current color
                            return False        # cyclic graph with ODD length
                    
                    seen[node] = color
                    # store neighbors nodes with opposit color
                    for nei in graph[node]:
                        q.append((nei, color * (-1)))

        return True  
    

# Time = number of nodes + number of edges
# Time: O(n) + O(n)
# Space: O(n) + o(n)  
# Auxiliary Space: O(n)
```
