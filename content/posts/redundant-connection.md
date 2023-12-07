---
title: redundant connection
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, redundant-connection solution
description: redundant connection LeetCode Solution Explained
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


<h2>684. Redundant Connection</h2><h3>Medium</h3><hr><div><p>
In this problem, a tree is an <b>undirected</b> graph that is connected and has no cycles.
</p><p>
The given input is a graph that started as a tree with N nodes (with distinct values 1, 2, ..., N), with one additional edge added.  The added edge has two different vertices chosen from 1 to N, and was not an edge that already existed.
</p><p>
The resulting graph is given as a 2D-array of <code>edges</code>.  Each element of <code>edges</code> is a pair <code>[u, v]</code> with <code>u &lt; v</code>, that represents an <b>undirected</b> edge connecting nodes <code>u</code> and <code>v</code>.
</p><p>
Return an edge that can be removed so that the resulting graph is a tree of N nodes.  If there are multiple answers, return the answer that occurs last in the given 2D-array.  The answer edge <code>[u, v]</code> should be in the same format, with <code>u &lt; v</code>.
</p><p><b>Example 1:</b><br>
</p><pre><b>Input:</b> [[1,2], [1,3], [2,3]]
<b>Output:</b> [2,3]
<b>Explanation:</b> The given undirected graph will be like this:
  1
 / \
2 - 3
</pre>
<p></p>
<p><b>Example 2:</b><br>
</p><pre><b>Input:</b> [[1,2], [2,3], [3,4], [1,4], [1,5]]
<b>Output:</b> [1,4]
<b>Explanation:</b> The given undirected graph will be like this:
5 - 1 - 2
    |   |
    4 - 3
</pre>
<p></p>
<p><b>Note:</b><br>
</p><li>The size of the input 2D-array will be between 3 and 1000.</li>
<li>Every integer represented in the 2D-array will be between 1 and N, where N is the size of the input array.</li>
<p></p>

<br>

<p>
<b><font color="red">Update (2017-09-26):</font></b><br>
We have overhauled the problem description + test cases and specified clearly the graph is an <b><i>undirected</i></b> graph. For the <b><i>directed</i></b> graph follow up please see <b><a href="https://leetcode.com/problems/redundant-connection-ii/description/">Redundant Connection II</a></b>). We apologize for any inconvenience caused.
</p></div>

---




```cpp
class Solution {
public:
    vector<int> adj[1001];
    
    bool dfs(int u, int v, int p){
        if(u==v)
            return true;
        for(int k: adj[u]){
            if(k==p)
                continue;
            if(dfs(k,v,u))
                return true;
        }
        return false;
    }
    
    vector<int> findRedundantConnection(vector<vector<int>>& edges) {
        vector<int> ans;
        int n=edges.size();
        for(vector<int> i: edges){
            int u=i[0];
            int v=i[1];
            if(dfs(u,v,0)){
                ans.push_back(u);
                ans.push_back(v);
            }
            else{
                adj[u].push_back(v);
                adj[v].push_back(u);
            }
        }
        return ans;
    }
    
};
```
