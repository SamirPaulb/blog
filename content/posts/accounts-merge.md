---
title: accounts merge
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, accounts-merge solution
description: accounts merge LeetCode Solution Explained
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


<h2>721. Accounts Merge</h2><h3>Medium</h3><hr><div><p>Given a list <code>accounts</code>, each element <code>accounts[i]</code> is a list of strings, where the first element <code>accounts[i][0]</code> is a <i>name</i>, and the rest of the elements are <i>emails</i> representing emails of the account.</p>

<p>Now, we would like to merge these accounts.  Two accounts definitely belong to the same person if there is some email that is common to both accounts.  Note that even if two accounts have the same name, they may belong to different people as people could have the same name.  A person can have any number of accounts initially, but all of their accounts definitely have the same name.</p>

<p>After merging the accounts, return the accounts in the following format: the first element of each account is the name, and the rest of the elements are emails <b>in sorted order</b>.  The accounts themselves can be returned in any order.</p>

<p><b>Example 1:</b><br>
</p><pre style="white-space: pre-wrap"><b>Input:</b> 
accounts = [["John", "johnsmith@mail.com", "john00@mail.com"], ["John", "johnnybravo@mail.com"], ["John", "johnsmith@mail.com", "john_newyork@mail.com"], ["Mary", "mary@mail.com"]]
<b>Output:</b> [["John", 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com'],  ["John", "johnnybravo@mail.com"], ["Mary", "mary@mail.com"]]
<b>Explanation:</b> 
The first and third John's are the same person as they have the common email "johnsmith@mail.com".
The second John and Mary are different people as none of their email addresses are used by other accounts.
We could return these lists in any order, for example the answer [['Mary', 'mary@mail.com'], ['John', 'johnnybravo@mail.com'], 
['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com']] would still be accepted.
</pre>
<p></p>

<p><b>Note:</b>
</p><li>The length of <code>accounts</code> will be in the range <code>[1, 1000]</code>.</li>
<li>The length of <code>accounts[i]</code> will be in the range <code>[1, 10]</code>.</li>
<li>The length of <code>accounts[i][j]</code> will be in the range <code>[1, 30]</code>.</li>
<p></p></div>

---




```cpp
class Solution {
public:
    unordered_map<string, vector<string>> adj;
    
    void dfs(unordered_set<string> &vis, string s, vector<string> &abc){
        if(vis.find(s)!=vis.end())
            return;
        vis.insert(s);
        abc.push_back(s);
        
        for(int i=0;i<adj[s].size();i++){
            dfs(vis, adj[s][i], abc);
        }
        
    }
    vector<vector<string>> accountsMerge(vector<vector<string>>& accounts) {
        unordered_map<string, string> m;
        vector<vector<string>> ans;
        for(int i=0;i<accounts.size();i++){
            for(int j=1;j<accounts[i].size();j++){
               adj[accounts[i][1]].push_back(accounts[i][j]);
               adj[accounts[i][j]].push_back(accounts[i][1]);
               m[accounts[i][j]]=accounts[i][0];
           }
        }
        unordered_set<string> vis;
        for(int i=0;i<accounts.size();i++){
            for(int j=1;j<accounts[i].size();j++){
                if(vis.find(accounts[i][j])==vis.end()){
                    vector<string> abc;
                    dfs(vis, accounts[i][j], abc);
                    sort(abc.begin(), abc.end());
                    abc.insert(abc.begin(), m[accounts[i][j]]);
                    ans.push_back(abc);
                }
            }
        }
        return ans;
    }
};
```
