---
title: longest common prefix
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, longest-common-prefix solution
description: longest common prefix LeetCode Solution Explained
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


<h2>14. Longest Common Prefix</h2><h3>Easy</h3><hr><div><p>Write a function to find the longest common prefix string amongst an array of strings.</p>

<p>If there is no common prefix, return an empty string <code>""</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> strs = ["flower","flow","flight"]
<strong>Output:</strong> "fl"
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> strs = ["dog","racecar","car"]
<strong>Output:</strong> ""
<strong>Explanation:</strong> There is no common prefix among the input strings.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= strs.length &lt;= 200</code></li>
	<li><code>0 &lt;= strs[i].length &lt;= 200</code></li>
	<li><code>strs[i]</code> consists of only lower-case English letters.</li>
</ul>
</div>

---




```cpp
class Solution {
public:
    class Trie{
        public:
        Trie *child[26]; //child pointers
        bool isEnd;
        int count;
        
        Trie(){
            for(int i=0;i<26;i++)
                child[i]=NULL;
            isEnd=false;
            count=0;
        }
    };
    Trie* root=new Trie();
    
    void insert(string s){
        Trie* curr=root;
        for(int i=0;i<s.size();i++){
            char ch=s[i]-'a';
            if(curr->child[ch]==NULL)
                curr->child[ch]=new Trie();
            
            curr=curr->child[ch];
            curr->count++;
        }
        curr->isEnd=true;
        
    }
    
    string longestCommonPrefix(vector<string>& strs) {
        int n=strs.size();
        if(n==1)
            return strs[0];
        int c=0;
        for(int i=0;i<n;i++){
            string s=strs[i];
            int v=s.size();
            if(v!=0){
                insert(s);
            }
        }
        //lcp in all strings therefore, count must be n, first string ko reference le k soch skte hai kyuki agar lcp usse chota hua to theek h aur usse bda hua to sare string me waise hi ni aapayega
        string ref=strs[0];
        int sz=ref.size();
        Trie* temp=root;
        string ans;
        for(int i=0;i<sz;i++){
            char ch=ref[i]-'a';
            if(temp->child[ch]!=NULL && temp->child[ch]->count==n)
                ans.push_back(ref[i]);
            else break;
            temp=temp->child[ch];
        }
        return ans;
    }
};
```
