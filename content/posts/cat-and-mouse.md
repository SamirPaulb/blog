---
title: cat and mouse
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, cat-and-mouse solution
description: cat and mouse LeetCode Solution Explained
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


<h2>913. Cat and Mouse</h2><h3>Hard</h3><hr><div><p>A game on an <strong>undirected</strong> graph is played by two players, Mouse and Cat, who alternate turns.</p>

<p>The graph is given as follows: <code>graph[a]</code> is a list of all nodes <code>b</code> such that <code>ab</code> is an edge of the graph.</p>

<p>The mouse starts at node <code>1</code> and goes first, the cat starts at node <code>2</code> and goes second, and there is a hole at node <code>0</code>.</p>

<p>During each player's turn, they <strong>must</strong> travel along one&nbsp;edge of the graph that meets where they are.&nbsp; For example, if the Mouse is at node 1, it <strong>must</strong> travel to any node in <code>graph[1]</code>.</p>

<p>Additionally, it is not allowed for the Cat to travel to the Hole (node 0.)</p>

<p>Then, the game can end in three&nbsp;ways:</p>

<ul>
	<li>If ever the Cat occupies the same node as the Mouse, the Cat wins.</li>
	<li>If ever the Mouse reaches the Hole, the Mouse wins.</li>
	<li>If ever a position is repeated (i.e., the players are in the same position as a previous turn, and&nbsp;it is the same player's turn to move), the game is a draw.</li>
</ul>

<p>Given a <code>graph</code>, and assuming both players play optimally, return</p>

<ul>
	<li><code>1</code>&nbsp;if the mouse wins the game,</li>
	<li><code>2</code>&nbsp;if the cat wins the game, or</li>
	<li><code>0</code>&nbsp;if the game is a draw.</li>
</ul>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/11/17/cat1.jpg" style="width: 300px; height: 300px;">
<pre><strong>Input:</strong> graph = [[2,5],[3],[0,4,5],[1,4,5],[2,3],[0,2,3]]
<strong>Output:</strong> 0
</pre>

<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/11/17/cat2.jpg" style="width: 200px; height: 200px;">
<pre><strong>Input:</strong> graph = [[1,3],[0],[3],[0,2]]
<strong>Output:</strong> 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>3 &lt;= graph.length &lt;= 50</code></li>
	<li><code>1&nbsp;&lt;= graph[i].length &lt; graph.length</code></li>
	<li><code>0 &lt;= graph[i][j] &lt; graph.length</code></li>
	<li><code>graph[i][j] != i</code></li>
	<li><code>graph[i]</code> is unique.</li>
	<li>The mouse and the cat can always move.&nbsp;</li>
</ul>
</div>

---




```cpp
class Solution {
public:
    int n,m;
    int dp[104][52][52]; //turns, mouse, cat
    //let's indicate draw as 0, mouse's win as 1 and cat's win as 2.
    int solve(int turns, int m, int c, vector<vector<int>>& graph){
        if(turns==2*n)
            return 0;
        if(c==m)
            return dp[turns][m][c]=2;
        if(m==0)
            return dp[turns][m][c]=1;
        if(dp[turns][m][c]!=-1)
            return dp[turns][m][c];
        int x=turns%2;
        int ans=0;
        if(x==0){ //mouse
            ans=true; //cat's win
            for(int i=0;i<graph[m].size();i++){
                int nextTurn=solve(turns+1, graph[m][i], c, graph);
                if(nextTurn==1)
                {
                    return dp[turns][m][c]=1;
                }
                else if(nextTurn!=2){
                    ans=false;
                } 
            }
            if(ans)
                return dp[turns][m][c]=2;
            return dp[turns][m][c]=0;
        }
        else{
            ans=true; //mouse's win
            for(int i=0;i<graph[c].size();i++){
                if(graph[c][i]!=0){
                    int nextTurn=solve(turns+1, m, graph[c][i], graph);
                    if(nextTurn==2){
                        return dp[turns][m][c]=2;
                    }
                    else if(nextTurn!=1){
                        ans=false;
                    }
                }
            }
            if(ans)
                return dp[turns][m][c]=1;
            return dp[turns][m][c]=0;
        }
        return dp[turns][m][c]=0;
    }
    
    int catMouseGame(vector<vector<int>>& graph) {
        n=graph.size();
        memset(dp,-1,sizeof(dp));
        return solve(0,1,2,graph);
    }
};
```
