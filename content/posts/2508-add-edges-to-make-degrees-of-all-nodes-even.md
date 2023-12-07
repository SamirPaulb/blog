---
title: 2508 add edges to make degrees of all nodes even
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 2508-add-edges-to-make-degrees-of-all-nodes-even solution
description: 2508 add edges to make degrees of all nodes even LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/add-edges-to-make-degrees-of-all-nodes-even/">2508. Add Edges to Make Degrees of All Nodes Even</a></h2><h3>Hard</h3><hr><div><p>There is an <strong>undirected</strong> graph consisting of <code>n</code> nodes numbered from <code>1</code> to <code>n</code>. You are given the integer <code>n</code> and a <strong>2D</strong> array <code>edges</code> where <code>edges[i] = [a<sub>i</sub>, b<sub>i</sub>]</code> indicates that there is an edge between nodes <code>a<sub>i</sub></code> and <code>b<sub>i</sub></code>. The graph can be disconnected.</p>

<p>You can add <strong>at most</strong> two additional edges (possibly none) to this graph so that there are no repeated edges and no self-loops.</p>

<p>Return <code>true</code><em> if it is possible to make the degree of each node in the graph even, otherwise return </em><code>false</code><em>.</em></p>

<p>The degree of a node is the number of edges connected to it.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2022/10/26/agraphdrawio.png" style="width: 500px; height: 190px;">
<pre><strong>Input:</strong> n = 5, edges = [[1,2],[2,3],[3,4],[4,2],[1,4],[2,5]]
<strong>Output:</strong> true
<strong>Explanation:</strong> The above diagram shows a valid way of adding an edge.
Every node in the resulting graph is connected to an even number of edges.
</pre>

<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2022/10/26/aagraphdrawio.png" style="width: 400px; height: 120px;">
<pre><strong>Input:</strong> n = 4, edges = [[1,2],[3,4]]
<strong>Output:</strong> true
<strong>Explanation:</strong> The above diagram shows a valid way of adding two edges.</pre>

<p><strong>Example 3:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2022/10/26/aaagraphdrawio.png" style="width: 150px; height: 158px;">
<pre><strong>Input:</strong> n = 4, edges = [[1,2],[1,3],[1,4]]
<strong>Output:</strong> false
<strong>Explanation:</strong> It is not possible to obtain a valid graph with adding at most 2 edges.</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>3 &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li><code>2 &lt;= edges.length &lt;= 10<sup>5</sup></code></li>
	<li><code>edges[i].length == 2</code></li>
	<li><code>1 &lt;= a<sub>i</sub>, b<sub>i</sub> &lt;= n</code></li>
	<li><code>a<sub>i</sub> != b<sub>i</sub></code></li>
	<li>There are no repeated edges.</li>
</ul>
</div>

---




```python
# https://leetcode.com/problems/add-edges-to-make-degrees-of-all-nodes-even/
'''
Intuition
The number of odd degree node must be even: 0,2,4,...
if odd.size() == 0, return True
if odd.size() == 2, TODO
if odd.size() == 4, TODO
if odd.size() > 4, return false


Explanation
find the adjList where adjList[i] is the neighbour set of node i.
Find out the list of nodes with odd degree.

In case if we have 2 odds:
option1:
we can link them together, if they are not neighbour.
option2:
we can link both them to node i, if node i is not neighbour of either of them.
otherwise return false.

In case if we have 4 odds a,b,c,d
option1: We can link (a,b) and (c,d)
option2: We can link (a,c) and (b,d)
option3: We can link (a,d) and (c,b)
otherwise return false.
'''

class Solution:
    def isPossible(self, n: int, edges: List[List[int]]) -> bool:
        adjList = {i:set() for i in range(1, n+1)}
        for a, b in edges:
            adjList[a].add(b)
            adjList[b].add(a)
        
        odd = [i for i in adjList if len(adjList[i]) % 2]
        
        def noLink(a, b):
            # return True if a not in adjList[b] else False
            return (a not in adjList[b]) 
                
        if len(odd) == 2:
            a, b = odd
            return any(noLink(a, i) and noLink(b, i) for i in adjList)
        
        if len(odd) == 4:
            a, b, c, d = odd
            return noLink(a, b) and noLink(c, d) or \
                   noLink(a, c) and noLink(b, d) or \
                   noLink(a, d) and noLink(b, c)
        
        return len(odd) == 0
    
    
'''
Complexity

Time: O(edges)
Space: O(edges)
'''
```
