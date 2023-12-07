---
title: cat and mouse ii
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, cat-and-mouse-ii solution
description: cat and mouse ii LeetCode Solution Explained
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


<h2>1728. Cat and Mouse II</h2><h3>Hard</h3><hr><div><p>A game is played by a cat and a mouse named Cat and Mouse.</p>

<p>The environment is represented by a <code>grid</code> of size <code>rows x cols</code>, where each element is a wall, floor, player (Cat, Mouse), or food.</p>

<ul>
	<li>Players are represented by the characters <code>'C'</code>(Cat)<code>,'M'</code>(Mouse).</li>
	<li>Floors are represented by the character <code>'.'</code> and can be walked on.</li>
	<li>Walls are represented by the character <code>'#'</code> and cannot be walked on.</li>
	<li>Food is represented by the character <code>'F'</code> and can be walked on.</li>
	<li>There is only one of each character <code>'C'</code>, <code>'M'</code>, and <code>'F'</code> in <code>grid</code>.</li>
</ul>

<p>Mouse and Cat play according to the following rules:</p>

<ul>
	<li>Mouse <strong>moves first</strong>, then they take turns to move.</li>
	<li>During each turn, Cat and Mouse can jump in one of the four directions (left, right, up, down). They cannot jump over the wall nor outside of the <code>grid</code>.</li>
	<li><code>catJump, mouseJump</code> are the maximum lengths Cat and Mouse can jump at a time, respectively. Cat and Mouse can jump less than the maximum length.</li>
	<li>Staying in the same position is allowed.</li>
	<li>Mouse can jump over Cat.</li>
</ul>

<p>The game can end in 4 ways:</p>

<ul>
	<li>If Cat occupies the same position as Mouse, Cat wins.</li>
	<li>If Cat reaches the food first, Cat wins.</li>
	<li>If Mouse reaches the food first, Mouse wins.</li>
	<li>If Mouse cannot get to the food within 1000 turns, Cat wins.</li>
</ul>

<p>Given a <code>rows x cols</code> matrix <code>grid</code> and two integers <code>catJump</code> and <code>mouseJump</code>, return <code>true</code><em> if Mouse can win the game if both Cat and Mouse play optimally, otherwise return </em><code>false</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<p><strong><img alt="" src="https://assets.leetcode.com/uploads/2020/09/12/sample_111_1955.png" style="width: 580px; height: 239px;"></strong></p>

<pre><strong>Input:</strong> grid = ["####F","#C...","M...."], catJump = 1, mouseJump = 2
<strong>Output:</strong> true
<strong>Explanation:</strong> Cat cannot catch Mouse on its turn nor can it get the food before Mouse.
</pre>

<p><strong>Example 2:</strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2020/09/12/sample_2_1955.png" style="width: 580px; height: 175px;"></p>

<pre><strong>Input:</strong> grid = ["M.C...F"], catJump = 1, mouseJump = 4
<strong>Output:</strong> true
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> grid = ["M.C...F"], catJump = 1, mouseJump = 3
<strong>Output:</strong> false
</pre>

<p><strong>Example 4:</strong></p>

<pre><strong>Input:</strong> grid = ["C...#","...#F","....#","M...."], catJump = 2, mouseJump = 5
<strong>Output:</strong> false
</pre>

<p><strong>Example 5:</strong></p>

<pre><strong>Input:</strong> grid = [".M...","..#..","#..#.","C#.#.","...#F"], catJump = 3, mouseJump = 1
<strong>Output:</strong> true
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>rows == grid.length</code></li>
	<li><code>cols = grid[i].length</code></li>
	<li><code>1 &lt;= rows, cols &lt;= 8</code></li>
	<li><code>grid[i][j]</code> consist only of characters <code>'C'</code>, <code>'M'</code>, <code>'F'</code>, <code>'.'</code>, and <code>'#'</code>.</li>
	<li>There is only one of each character <code>'C'</code>, <code>'M'</code>, and <code>'F'</code> in <code>grid</code>.</li>
	<li><code>1 &lt;= catJump, mouseJump &lt;= 8</code></li>
</ul>
</div>

---




```cpp
class Solution {
public:
    //rows and cols are 8*8 atmax therefore, cat and mouse both can reach anywhere they want in at max 64 steps even if cj,mj=1.
    
    //let's indicate win as 1 and loss as 0.
    int n,m;
    
    int dp[71][9][9][9][9]; //turns, ci, cj, mi, mj
    
    int dx[4]={1,0,-1,0};
    int dy[4]={0,1,0,-1};
    
    int solve(int turns, int ci, int cj, int mi, int mj, int catJump, int mouseJump, vector<string>& grid){
        int x=turns%2;
        int ans=0;
        if(x==0){ //mouse
            if(turns>=70)
            return 0;
            if (mi==ci && mj==cj) 
                return 0;
            if (grid[mi][mj] == 'F') 
                return 1;//mouse got the food
            if (grid[ci][cj] == 'F') 
                return 0; 
            if(dp[turns][ci][cj][mi][mj]!=-1)
                return dp[turns][ci][cj][mi][mj];
             for(int i=0;i<4;i++){
                       for(int j=0;j<=mouseJump;j++){
                           int mx=mi+j*dx[i];
                           int my=mj+j*dy[i];
                           if(mx>=0 && my>=0 && mx<n && my<m && grid[mx][my]!='#'){
                               if(solve(turns+1, ci, cj, mx, my, catJump, mouseJump, grid)==0){
                                   ans=1;
                                   break;
                               }
                           }
                           else
                               break;
                     }
                    if(ans)
                        break;
             }
        }
        else{ //cat
            if(turns>=70)
            return 1;
            if (mi==ci && mj==cj) 
                return 1;
            if (grid[mi][mj] == 'F') 
                return 0;//mouse got the food
            if (grid[ci][cj] == 'F') 
                return 1; 
            if(dp[turns][ci][cj][mi][mj]!=-1)
                return dp[turns][ci][cj][mi][mj];
            for(int i=0;i<4;i++){
                for(int j=0;j<=catJump;j++){
                           int cx=ci+j*dx[i];
                           int cy=cj+j*dy[i];
                           if(cx>=0 && cy>=0 && cx<n && cy<m && grid[cx][cy]!='#'){
                               if(solve(turns+1, cx, cy, mi, mj, catJump, mouseJump, grid)==0){
                                   ans=1;
                                   break;
                               }
                           }
                           else
                               break;
                     }
                    if(ans)
                        break;
             }
        }
        return dp[turns][ci][cj][mi][mj]=ans;
        
    }
    
    bool canMouseWin(vector<string>& grid, int catJump, int mouseJump) {
        n=grid.size();
        m=grid[0].size();
        int ci,cj,mi,mj;
        memset(dp, -1, sizeof(dp));
        for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){
                if(grid[i][j]=='C'){
                    ci=i;
                    cj=j;
                }
                else if(grid[i][j]=='M'){
                    mi=i;
                    mj=j;
                }
            }
        }
        return solve(0, ci, cj, mi, mj, catJump, mouseJump, grid);
    }
};
```
