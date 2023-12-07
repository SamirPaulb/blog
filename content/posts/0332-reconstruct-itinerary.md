---
title: 0332 reconstruct itinerary
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 0332-reconstruct-itinerary solution
description: 0332 reconstruct itinerary LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/reconstruct-itinerary/">332. Reconstruct Itinerary</a></h2><h3>Hard</h3><hr><div><p>You are given a list of airline <code>tickets</code> where <code>tickets[i] = [from<sub>i</sub>, to<sub>i</sub>]</code> represent the departure and the arrival airports of one flight. Reconstruct the itinerary in order and return it.</p>

<p>All of the tickets belong to a man who departs from <code>"JFK"</code>, thus, the itinerary must begin with <code>"JFK"</code>. If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string.</p>

<ul>
	<li>For example, the itinerary <code>["JFK", "LGA"]</code> has a smaller lexical order than <code>["JFK", "LGB"]</code>.</li>
</ul>

<p>You may assume all tickets form at least one valid itinerary. You must use all the tickets once and only once.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/03/14/itinerary1-graph.jpg" style="width: 382px; height: 222px;">
<pre><strong>Input:</strong> tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
<strong>Output:</strong> ["JFK","MUC","LHR","SFO","SJC"]
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/03/14/itinerary2-graph.jpg" style="width: 222px; height: 230px;">
<pre><strong>Input:</strong> tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
<strong>Output:</strong> ["JFK","ATL","JFK","SFO","ATL","SFO"]
<strong>Explanation:</strong> Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"] but it is larger in lexical order.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= tickets.length &lt;= 300</code></li>
	<li><code>tickets[i].length == 2</code></li>
	<li><code>from<sub>i</sub>.length == 3</code></li>
	<li><code>to<sub>i</sub>.length == 3</code></li>
	<li><code>from<sub>i</sub></code> and <code>to<sub>i</sub></code> consist of uppercase English letters.</li>
	<li><code>from<sub>i</sub> != to<sub>i</sub></code></li>
</ul>
</div>

---




```python
class Solution:
    def findItinerary(self, tickets: List[List[str]]) -> List[str]:
        graph = {}
        # Create a graph for each airport and keep list of airport reachable from it
        for src, dst in tickets:
            if src in graph:
                graph[src].append(dst)
            else:
                graph[src] = [dst]

        for src in graph.keys():
            graph[src].sort(reverse=True)
            # Sort children list in descending order so that we can pop last element 
            # instead of pop out first element which is costly operation
        stack = []
        res = []
        stack.append("JFK")
        # Start with JFK as starting airport and keep adding the next child to traverse 
        # for the last airport at the top of the stack. If we reach to an airport from where 
        # we can't go further then add it to the result. This airport should be the last to go 
        # since we can't go anywhere from here. That's why we return the reverse of the result
        # After this backtrack to the top airport in the stack and continue to traaverse it's children

        while len(stack) > 0:
            elem = stack[-1]
            if elem in graph and len(graph[elem]) > 0: 
                # Check if elem in graph as there may be a case when there is no out edge from an airport 
                # In that case it won't be present as a key in graph
                stack.append(graph[elem].pop())
            else:
                res.append(stack.pop())
                # If there is no further children to traverse then add that airport to res
                # This airport should be the last to go since we can't anywhere from this
                # That's why we return the reverse of the result
        return res[::-1]

```
