---
title: word ladder ii
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, word-ladder-ii solution
description: word ladder ii LeetCode Solution Explained
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


<h2>126. Word Ladder II</h2><h3>Hard</h3><hr><div><p>A <strong>transformation sequence</strong> from word <code>beginWord</code> to word <code>endWord</code> using a dictionary <code>wordList</code> is a sequence of words <code>beginWord -&gt; s<sub>1</sub> -&gt; s<sub>2</sub> -&gt; ... -&gt; s<sub>k</sub></code> such that:</p>

<ul>
	<li>Every adjacent pair of words differs by a single letter.</li>
	<li>Every <code>s<sub>i</sub></code> for <code>1 &lt;= i &lt;= k</code> is in <code>wordList</code>. Note that <code>beginWord</code> does not need to be in <code>wordList</code>.</li>
	<li><code>s<sub>k</sub> == endWord</code></li>
</ul>

<p>Given two words, <code>beginWord</code> and <code>endWord</code>, and a dictionary <code>wordList</code>, return <em>all the <strong>shortest transformation sequences</strong> from</em> <code>beginWord</code> <em>to</em> <code>endWord</code><em>, or an empty list if no such sequence exists. Each sequence should be returned as a list of the words </em><code>[beginWord, s<sub>1</sub>, s<sub>2</sub>, ..., s<sub>k</sub>]</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
<strong>Output:</strong> [["hit","hot","dot","dog","cog"],["hit","hot","lot","log","cog"]]
<strong>Explanation:</strong>&nbsp;There are 2 shortest transformation sequences:
"hit" -&gt; "hot" -&gt; "dot" -&gt; "dog" -&gt; "cog"
"hit" -&gt; "hot" -&gt; "lot" -&gt; "log" -&gt; "cog"
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
<strong>Output:</strong> []
<strong>Explanation:</strong> The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= beginWord.length &lt;= 5</code></li>
	<li><code>endWord.length == beginWord.length</code></li>
	<li><code>1 &lt;= wordList.length &lt;= 1000</code></li>
	<li><code>wordList[i].length == beginWord.length</code></li>
	<li><code>beginWord</code>, <code>endWord</code>, and <code>wordList[i]</code> consist of lowercase English letters.</li>
	<li><code>beginWord != endWord</code></li>
	<li>All the words in <code>wordList</code> are <strong>unique</strong>.</li>
</ul>
</div>

---




```cpp
class Solution {
public:
    vector<vector<string>>  ans;    //Stores all possible paths
    
    void DFS(string& beginWord, string& endWord, unordered_map<string, unordered_set<string>>& adj, vector<string> &path) {
        path.push_back(beginWord);  //Push current word
        if(beginWord == endWord)
        {
            ans.push_back(path);
            path.pop_back();
            return;
        }
        for(auto x : adj[beginWord])
            DFS(x, endWord, adj, path);
        
        path.pop_back();    //Pop current word to Backtrack
    }
    
    vector<vector<string>> findLadders(string beginWord, string endWord, vector<string>& wordList) {
        unordered_map<string, unordered_set<string>> adj;   //Adjacency List
        unordered_set<string> dict(wordList.begin(),wordList.end());   //Insert WordList in SET
        
        //STEP-1: Find min-depth using BFS
        queue<string> Q;    //For BFS traversal
        Q.push(beginWord);  //Push start node (beginWord)
        unordered_map<string, int> visited; //Key->String (Node)...Value->Level (Depth of traversal)
        visited[beginWord] = 0; //Start node will always be at level 0
        while(!Q.empty())
        {
            string curr = Q.front();
            Q.pop();
            string temp = curr;
            for(int i = 0; i < curr.size(); ++i)    //For all characters
            {
                for(char x = 'a'; x <= 'z'; ++x)    //Try all possible 26 letters
                {
                    if(temp[i] == x)    //Skip if letter is same as in original word
                        continue;

                    temp[i] = x;    
                    if(dict.count(temp) > 0)    //Check if new word is present in wordList
                    {
                        if(visited.count(temp) == 0)    //check if the new word was already visited
                        {
                            visited[temp] = visited[curr] + 1;
                            Q.push(temp);
                            adj[curr].insert(temp);
                        } 
                        else if(visited[temp] == visited[curr] + 1) //If already visited and new word is the child (We should always move down)
                            adj[curr].insert(temp);
                    }
                }
                temp[i] = curr[i];  //Revert back temp to curr
            }
        }
        //STEP-2: Find all possible paths at min-depth using DFS
        vector<string> path;
        DFS(beginWord, endWord, adj, path); //Find all possible paths with min-depth
        return ans; 
    }
};
```
