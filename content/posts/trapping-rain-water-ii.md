---
title: trapping rain water ii
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, trapping-rain-water-ii solution
description: trapping rain water ii LeetCode Solution Explained
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


<h2>407. Trapping Rain Water II</h2><h3>Hard</h3><hr><div><p>Given an <code>m x n</code> integer matrix <code>heightMap</code> representing the height of each unit cell in a 2D elevation map, return <em>the volume of water it can trap after raining</em>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/04/08/trap1-3d.jpg" style="width: 361px; height: 321px;">
<pre><strong>Input:</strong> heightMap = [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]
<strong>Output:</strong> 4
<strong>Explanation:</strong> After the rain, water is trapped between the blocks.
We have two small ponds 1 and 3 units trapped.
The total volume of water trapped is 4.
</pre>

<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/04/08/trap2-3d.jpg" style="width: 401px; height: 321px;">
<pre><strong>Input:</strong> heightMap = [[3,3,3,3,3],[3,2,2,2,3],[3,2,1,2,3],[3,2,2,2,3],[3,3,3,3,3]]
<strong>Output:</strong> 10
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == heightMap.length</code></li>
	<li><code>n == heightMap[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 200</code></li>
	<li><code>0 &lt;= heightMap[i][j] &lt;= 2 * 10<sup>4</sup></code></li>
</ul>
</div>

---




```cpp
class Solution {
public:
    int trapRainWater(vector<vector<int>>& heightMap) {
        typedef pair<int,int> cell;
        priority_queue<cell, vector<cell>, greater<cell>> q;
        int m = heightMap.size();
        if (m == 0) return 0;
        int n = heightMap[0].size();
        vector<int> visited(m*n, false);
        
        for (int i = 0; i < m; ++i)
        for (int j = 0; j < n; ++j) {
            if (i == 0 || i == m-1 || j == 0  || j == n-1) {
                if (!visited[i*n+j])
                    q.push(cell(heightMap[i][j], i*n+j));
                visited[i*n+j] = true;
            }
        }
        
        int dir[4][2] = {{0,1}, {0, -1}, {1, 0}, {-1, 0}};
        int ans = 0;
        while(!q.empty()) {
            cell c = q.top();
            q.pop();
            int i = c.second/n, j = c.second%n;
            
            for (int r = 0; r < 4; ++r) {
                int ii = i+dir[r][0], jj = j+dir[r][1];
                if (ii < 0 || ii >= m || jj < 0 || jj >= n || visited[ii*n+jj])
                    continue;
                ans += max(0, c.first - heightMap[ii][jj]);
                q.push(cell(max(c.first, heightMap[ii][jj]), ii*n+jj));
                visited[ii*n+jj] = true;
            }
        }
        return ans;
    }
};
```
