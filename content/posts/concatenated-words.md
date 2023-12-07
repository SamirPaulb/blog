---
title: concatenated words
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, concatenated-words solution
description: concatenated words LeetCode Solution Explained
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


<h2>472. Concatenated Words</h2><h3>Hard</h3><hr><div><p>Given an array of strings <code>words</code> (<strong>without duplicates</strong>), return <em>all the <strong>concatenated words</strong> in the given list of</em> <code>words</code>.</p>

<p>A <strong>concatenated word</strong> is defined as a string that is comprised entirely of at least two shorter words in the given array.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> words = ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]
<strong>Output:</strong> ["catsdogcats","dogcatsdog","ratcatdogcat"]
<strong>Explanation:</strong> "catsdogcats" can be concatenated by "cats", "dog" and "cats"; 
"dogcatsdog" can be concatenated by "dog", "cats" and "dog"; 
"ratcatdogcat" can be concatenated by "rat", "cat", "dog" and "cat".</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> words = ["cat","dog","catdog"]
<strong>Output:</strong> ["catdog"]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= words.length &lt;= 10<sup>4</sup></code></li>
	<li><code>0 &lt;= words[i].length &lt;= 1000</code></li>
	<li><code>words[i]</code> consists of only lowercase English letters.</li>
	<li><code>0 &lt;= sum(words[i].length) &lt;= 10<sup>5</sup></code></li>
</ul>
</div>

---




```cpp
struct TrieNode {
        bool isWord;
        unordered_map<char, TrieNode*> children;
        TrieNode(): isWord(false) {};
    };


    TrieNode* root=new TrieNode();
    
    void insert(string& word) {
        auto run = root;
        for(char c: word) {
            if(run->children.find(c) == run->children.end()) {
                TrieNode* newnode = new TrieNode();
                run->children[c] = newnode;
            }
            run = run->children[c];
        }
        run->isWord = true;
    }
    
    bool dfs(string& word, int pos, TrieNode* node, int nb) {
        if(pos == word.size()) {
            if(node->isWord && nb > 0) 
                return true;
            return false;
        }
        
        if(node->children.find(word[pos]) == node->children.end()) 
            return false;
        
        auto next = node->children[word[pos]];
        if(next->isWord) {
            if(dfs(word, pos+1, root, nb+1)) 
                return true;
        }
        if(dfs(word, pos+1, next, nb)) 
            return true;
        
        return false;
    }

    static bool mycomp(string &s1, string &s2){
        return s1.size()<s2.size();
    }


class Solution {
public:
    vector<string> findAllConcatenatedWordsInADict(vector<string>& words) {
        vector<string> result;
        if(words.empty()) return result; 
        
        sort(words.begin(), words.end(), mycomp);
        
        root = new TrieNode();
        for(auto& word: words) {
            if(dfs(word, 0, root, 0)) 
                result.push_back(word);
            else 
                insert(word);
        }
        return result;        
    }
};
```
