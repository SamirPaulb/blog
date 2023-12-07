---
title: minesweeper
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, minesweeper solution
description: minesweeper LeetCode Solution Explained
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


[Discussion Post (created on 25/1/2021 at 12:49)](https://leetcode.com/problems/minesweeper/discuss/1081962/C%2B%2B-or-DFS)  
<h2>529. Minesweeper</h2><h3>Medium</h3><hr><div><p>Let's play the minesweeper game (<a href="https://en.wikipedia.org/wiki/Minesweeper_(video_game)">Wikipedia</a>, <a href="http://minesweeperonline.com">online game</a>)!</p>

<p>You are given a 2D char matrix representing the game board. <b>'M'</b> represents an <b>unrevealed</b> mine, <b>'E'</b> represents an <b>unrevealed</b> empty square, <b>'B'</b> represents a <b>revealed</b> blank square that has no adjacent (above, below, left, right, and all 4 diagonals) mines, <b>digit</b> ('1' to '8') represents how many mines are adjacent to this <b>revealed</b> square, and finally <b>'X'</b> represents a <b>revealed</b> mine.</p>

<p>Now given the next click position (row and column indices) among all the <b>unrevealed</b> squares ('M' or 'E'), return the board after revealing this position according to the following rules:</p>

<ol>
	<li>If a mine ('M') is revealed, then the game is over - change it to <b>'X'</b>.</li>
	<li>If an empty square ('E') with <b>no adjacent mines</b> is revealed, then change it to revealed blank ('B') and all of its adjacent <b>unrevealed</b> squares should be revealed recursively.</li>
	<li>If an empty square ('E') with <b>at least one adjacent mine</b> is revealed, then change it to a digit ('1' to '8') representing the number of adjacent mines.</li>
	<li>Return the board when no more squares will be revealed.</li>
</ol>

<p>&nbsp;</p>

<p><b>Example 1:</b></p>

<pre><b>Input:</b> 

[['E', 'E', 'E', 'E', 'E'],
 ['E', 'E', 'M', 'E', 'E'],
 ['E', 'E', 'E', 'E', 'E'],
 ['E', 'E', 'E', 'E', 'E']]

Click : [3,0]

<b>Output:</b> 

[['B', '1', 'E', '1', 'B'],
 ['B', '1', 'M', '1', 'B'],
 ['B', '1', '1', '1', 'B'],
 ['B', 'B', 'B', 'B', 'B']]

<b>Explanation:</b>
<img src="https://assets.leetcode.com/uploads/2018/10/12/minesweeper_example_1.png" style="width: 100%; max-width: 400px">
</pre>

<p><b>Example 2:</b></p>

<pre><b>Input:</b> 

[['B', '1', 'E', '1', 'B'],
 ['B', '1', 'M', '1', 'B'],
 ['B', '1', '1', '1', 'B'],
 ['B', 'B', 'B', 'B', 'B']]

Click : [1,2]

<b>Output:</b> 

[['B', '1', 'E', '1', 'B'],
 ['B', '1', 'X', '1', 'B'],
 ['B', '1', '1', '1', 'B'],
 ['B', 'B', 'B', 'B', 'B']]

<b>Explanation:</b>
<img src="https://assets.leetcode.com/uploads/2018/10/12/minesweeper_example_2.png" style="width: 100%; max-width: 400px">
</pre>

<p>&nbsp;</p>

<p><b>Note:</b></p>

<ol>
	<li>The range of the input matrix's height and width is [1,50].</li>
	<li>The click position will only be an unrevealed square ('M' or 'E'), which also means the input board contains at least one clickable square.</li>
	<li>The input board won't be a stage when game is over (some mines have been revealed).</li>
	<li>For simplicity, not mentioned rules should be ignored in this problem. For example, you <b>don't</b> need to reveal all the unrevealed mines when the game is over, consider any cases that you will win the game or flag any squares.</li>
</ol>
</div>

---




```cpp
class Solution {
public:
    int dx[8]={-1,-1,-1,0,0,1,1,1};
    int dy[8]={0,-1,1,-1,1,-1,0,1};
    
    bool isValid(vector<vector<char>>& board, int x, int y){
        return x>=0 && x<board.size() && y>=0 && y<board[0].size();
    }
    
    void solve(vector<vector<char>>& board, int x, int y){
        if(!isValid(board,x,y))
            return;
        if(board[x][y]=='E'){
            int c=0;
            for(int i=0;i<8;i++){
                int xx=x+dx[i];
                int yy=y+dy[i];
                if(isValid(board,xx,yy) && board[xx][yy]=='M'){
                    c++;
                }
            }
            if(c>0)
                board[x][y]='0'+c;
            else{
                board[x][y]='B';
                for(int i=0;i<8;i++){
                int xx=x+dx[i];
                int yy=y+dy[i];
                solve(board,xx,yy);
                }
            }
        }
    }
    
    vector<vector<char>> updateBoard(vector<vector<char>>& board, vector<int>& click) {
        if(board[click[0]][click[1]]=='M'){
                board[click[0]][click[1]]='X';
                return board;
        }
        solve(board, click[0], click[1]);
        return board;
    }
};
```
