---
title: shortest path in a grid with obstacles elimination
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, shortest-path-in-a-grid-with-obstacles-elimination solution
description: shortest path in a grid with obstacles elimination LeetCode Solution Explained
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


<h2>1293. Shortest Path in a Grid with Obstacles Elimination</h2><h3>Hard</h3><hr><div><p>You are given an <code>m x n</code> integer matrix <code>grid</code> where each cell is either <code>0</code> (empty) or <code>1</code> (obstacle). You can move up, down, left, or right from and to an empty cell in <strong>one step</strong>.</p>

<p>Return <em>the minimum number of <strong>steps</strong> to walk from the upper left corner </em><code>(0, 0)</code><em> to the lower right corner </em><code>(m - 1, n - 1)</code><em> given that you can eliminate <strong>at most</strong> </em><code>k</code><em> obstacles</em>. If it is not possible to find such walk return <code>-1</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> 
grid = 
[[0,0,0],
&nbsp;[1,1,0],
 [0,0,0],
&nbsp;[0,1,1],
 [0,0,0]], 
k = 1
<strong>Output:</strong> 6
<strong>Explanation: 
</strong>The shortest path without eliminating any obstacle is 10.&nbsp;
The shortest path with one obstacle elimination at position (3,2) is 6. Such path is <code>(0,0) -&gt; (0,1) -&gt; (0,2) -&gt; (1,2) -&gt; (2,2) -&gt; <strong>(3,2)</strong> -&gt; (4,2)</code>.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> 
grid = 
[[0,1,1],
&nbsp;[1,1,1],
&nbsp;[1,0,0]], 
k = 1
<strong>Output:</strong> -1
<strong>Explanation: 
</strong>We need to eliminate at least two obstacles to find such a walk.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == grid.length</code></li>
	<li><code>n == grid[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 40</code></li>
	<li><code>1 &lt;= k &lt;= m * n</code></li>
	<li><code>grid[i][j] == 0 <strong>or</strong> 1</code></li>
	<li><code>grid[0][0] == grid[m - 1][n - 1] == 0</code></li>
</ul>
</div>

---




```cpp
#define MAX 299999999

class Solution {
public:
    vector<vector<int>> dirs = {{0, -1}, {0, 1}, {1, 0}, {-1, 0}};
	int shortestPath(vector<vector<int>>& grid, int k) {
		int m = grid.size();
        int n = grid[0].size();
        //Following 2 lines improves performance from ~50% to ~98%.. When the same is incorporated in the main loop it will be ~100%
        int minSteps = m + n -2;
        if (k >= minSteps) 
            return minSteps;

		queue<vector<int>> q;
		int step = 0;
		vector<vector<int>> visited(m, vector<int>(n, k+1));
		q.push({0, 0, 0});
		visited[0][0]= 0;

		while (!q.empty()) { 
			int l = q.size();
			for (int i = 0; i < l; i++) { 
				vector<int> s = q.front();
				q.pop();
				if (s[2] == k + 1) { 
					continue;
				}

				if (s[0] == m - 1 && s[1] == n - 1) { 
					return step;
				}
                
				for (vector<int>& dir : dirs) { 
					int new_x = s[0] + dir[0];
					int new_y = s[1] + dir[1];
					//Note: validity, visited
					if (new_x >= 0 && new_x < m && new_y >= 0 && new_y < n) { 
                       if (visited[new_x][new_y] <= s[2] + grid[new_x][new_y]) continue; // came here with less obstancles removed.
                        visited[new_x][new_y] = s[2] +  grid[new_x][new_y];
 						q.push({new_x, new_y, s[2] +  grid[new_x][new_y]});

					}
				}
			}
			step++;
		}
		return -1;
    }
};
```
