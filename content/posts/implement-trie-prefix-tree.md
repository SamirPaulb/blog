---
title: implement trie prefix tree
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, implement-trie-prefix-tree solution
description: implement trie prefix tree LeetCode Solution Explained
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


<h2>208. Implement Trie (Prefix Tree)</h2><h3>Medium</h3><hr><div><p>A <a href="https://en.wikipedia.org/wiki/Trie" target="_blank"><strong>trie</strong></a> (pronounced as "try") or <strong>prefix tree</strong> is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.</p>

<p>Implement the Trie class:</p>

<ul>
	<li><code>Trie()</code> Initializes the trie object.</li>
	<li><code>void insert(String word)</code> Inserts the string <code>word</code> into the trie.</li>
	<li><code>boolean search(String word)</code> Returns <code>true</code> if the string <code>word</code> is in the trie (i.e., was inserted before), and <code>false</code> otherwise.</li>
	<li><code>boolean startsWith(String prefix)</code> Returns <code>true</code> if there is a previously inserted string <code>word</code> that has the prefix <code>prefix</code>, and <code>false</code> otherwise.</li>
</ul>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input</strong>
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
<strong>Output</strong>
[null, null, true, false, true, null, true]

<strong>Explanation</strong>
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // return True
trie.search("app");     // return False
trie.startsWith("app"); // return True
trie.insert("app");
trie.search("app");     // return True
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= word.length, prefix.length &lt;= 2000</code></li>
	<li><code>word</code> and <code>prefix</code> consist only of lowercase English letters.</li>
	<li>At most <code>3 * 10<sup>4</sup></code> calls <strong>in total</strong> will be made to <code>insert</code>, <code>search</code>, and <code>startsWith</code>.</li>
</ul>
</div>

---




```cpp
class Trie {
public:
    struct Node{
        Node* arr[26];
        bool isEnd=false;
    };
    
    Node* root=new Node();
    
    Trie() {
        
    }
    
    void insert(string word) {
        int n=word.size();
        Node* temp=root;
        for(int i=0;i<n;i++){
            char ch=word[i];
            if(temp->arr[ch-'a']==NULL){
                Node* newNode = new Node();
                temp->arr[ch-'a']=newNode;
            }
            temp=temp->arr[ch-'a'];
        }
        temp->isEnd=true;
    }
    
    bool search(string word) {
        int n=word.size();
        Node* temp=root;
        for(int i=0;i<n;i++){
            char ch=word[i];
            if(temp->arr[ch-'a']==NULL)
                return false;
            temp=temp->arr[ch-'a'];
        }
        return (temp->isEnd==true);
    }
    
    bool startsWith(string word) {
        int n=word.size();
        Node* temp=root;
        for(int i=0;i<n;i++){
            char ch=word[i];
            if(temp->arr[ch-'a']==NULL)
                return false;
            temp=temp->arr[ch-'a'];
        }
        return true;
    }
};

/**
 * Your Trie object will be instantiated and called as such:
 * Trie* obj = new Trie();
 * obj->insert(word);
 * bool param_2 = obj->search(word);
 * bool param_3 = obj->startsWith(prefix);
 */
```
