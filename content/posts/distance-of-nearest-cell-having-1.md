---
title: Distance of nearest cell having 1   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Distance of nearest cell having 1 - GFG solution
description: Distance of nearest cell having 1   GFG Solution Explained
cover:
    image: https://scdn.netlify.app/img/gfg.webp
    alt: leetcode-cover-img
    caption: leetcode-cover-img
images: https://scdn.netlify.app/img/gfg.webp
date: 2021-10-04T15:58:26+08:00
lastmod: 2022-03-04T15:58:26+08:00
draft: false
author: Samir Paul
authorLink: https://twitter.com/intent/follow?screen_name=SamirPaulb
license: CC BY 4.0
---


# Distance of nearest cell having 1
## Medium
<div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a binary grid of <strong>n*m</strong>. Find the distance of the nearest 1 in the grid&nbsp;for each cell.<br>
The distance is calculated as&nbsp;<strong>|i<sub>1</sub>&nbsp; - i<sub>2</sub>| + |j<sub>1</sub>&nbsp;- j<sub>2</sub>|</strong>, where i<sub>1</sub>, j<sub>1</sub>&nbsp;are the row number and column number of the current cell, and i<sub>2</sub>, j<sub>2</sub>&nbsp;are the row number and column number of the nearest cell having value 1.</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>grid = {{0,1,1,0},{1,1,0,0},{0,0,1,1}}
<strong>Output: </strong>{{1,0,0,1},{0,0,1,1},{1,1,0,0}}
<strong>Explanation: </strong>The grid is-
0 1 1 0&nbsp;
1 1 0 0&nbsp;
0 0 1 1&nbsp;
0's at (0,0), (0,3), (1,2), (1,3), (2,0) and
(2,1) are at a distance of 1 from 1's at (0,1),
(0,2), (0,2), (2,3), (1,0) and (1,1)
respectively.
<img alt="" src="https://media.geeksforgeeks.org/wp-content/uploads/20221107154436/WhatsAppImage20221107at34408PM.jpeg" style="height:168px; width:198px"></span>

</pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>grid = {{1,0,1},{1,1,0},{1,0,0}}
<strong>Output: </strong>{{0,1,0},{0,0,1},{0,1,2}}
<strong>Explanation:</strong></span><span style="font-size:18px">&nbsp;The grid is-
1 0 1
1 1 0
1 0 0
0's at (0,1), (1,2), (2,1) and (2,2) are at a 
distance of 1, 1, 1 and 2 from 1's at (0,0),
(0,2), (2,0) and (1,1) respectively.
<img alt="" src="https://media.geeksforgeeks.org/wp-content/uploads/20221107155306/WhatsAppImage20221107at35249PM.jpeg" style="height:153px; width:152px"></span>

</pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Yout Task:</strong><br>
You don't need to read or print anything, Your task is to complete the function&nbsp;<strong>nearest()&nbsp;</strong>which takes the grid as an input parameter and returns&nbsp;a matrix of the same dimensions where the value at index (i, j) in the resultant matrix signifies the minimum distance of 1 in the matrix from grid[i][j].</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:&nbsp;</strong>O(n*m)<br>
<strong>Expected Auxiliary Space:&nbsp;</strong>O(n*m)</span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 ≤ n, m ≤ 500</span></p>
</div>

---




```cpp
//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends
class Solution 
{
    private: 
    
            bool isValid(int x, int y, int n, int m){
                return x >= 0 && y >= 0 && x < n && y < m;
            }
    public:
    //Function to find distance of nearest 1 in the grid for each cell.
	vector<vector<int>>nearest(vector<vector<int>>grid)
	{
	    // Code here
	    int n = grid.size();
	    int m = grid[0].size();
	    vector<vector<int>> ans (n, vector<int> (m, -1));
	    queue<pair<int, int>> q;
	    for(int i = 0; i < n; i++){
	        for(int j = 0; j < m; j++){
	            if(grid[i][j] == 1){
	                ans[i][j] = 0;
	                q.push({i, j});
	            }
	        }
	    }
	    int dx[4] = {0, 0, 1, -1};
	    int dy[4] = {1, -1, 0, 0};
	    while(q.empty() == false){
	        int x = q.front().first;
	        int y = q.front().second;
	        q.pop();
	        for(int i = 0; i < 4; i++){
	            int newX = x + dx[i];
	            int newY = y + dy[i];
	            if(isValid(newX, newY, n,  m) && ans[newX][newY] == -1){
	                ans[newX][newY] = ans[x][y] + 1;
	                q.push({newX, newY});
	            }
	        }
	    }
	    return ans;
	}
};

//{ Driver Code Starts.
int main(){
	int tc;
	cin >> tc;
	while(tc--){
		int n, m;
		cin >> n >> m;
		vector<vector<int>>grid(n, vector<int>(m, -1));
		for(int i = 0; i < n; i++){
			for(int j = 0; j < m; j++){
				cin >> grid[i][j];
			}
		}
		Solution obj;
		vector<vector<int>> ans = obj.nearest(grid);
		for(auto i: ans){
			for(auto j: i){
				cout << j << " ";
			}
			cout << "\n";
		}
	}
	return 0;
}
// } Driver Code Ends
```
