---
title: maximum xor with an element from array
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, maximum-xor-with-an-element-from-array solution
description: maximum xor with an element from array LeetCode Solution Explained
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


<h2>1707. Maximum XOR With an Element From Array</h2><h3>Hard</h3><hr><div><p>You are given an array <code>nums</code> consisting of non-negative integers. You are also given a <code>queries</code> array, where <code>queries[i] = [x<sub>i</sub>, m<sub>i</sub>]</code>.</p>

<p>The answer to the <code>i<sup>th</sup></code> query is the maximum bitwise <code>XOR</code> value of <code>x<sub>i</sub></code> and any element of <code>nums</code> that does not exceed <code>m<sub>i</sub></code>. In other words, the answer is <code>max(nums[j] XOR x<sub>i</sub>)</code> for all <code>j</code> such that <code>nums[j] &lt;= m<sub>i</sub></code>. If all elements in <code>nums</code> are larger than <code>m<sub>i</sub></code>, then the answer is <code>-1</code>.</p>

<p>Return <em>an integer array </em><code>answer</code><em> where </em><code>answer.length == queries.length</code><em> and </em><code>answer[i]</code><em> is the answer to the </em><code>i<sup>th</sup></code><em> query.</em></p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [0,1,2,3,4], queries = [[3,1],[1,3],[5,6]]
<strong>Output:</strong> [3,3,7]
<strong>Explanation:</strong>
1) 0 and 1 are the only two integers not greater than 1. 0 XOR 3 = 3 and 1 XOR 3 = 2. The larger of the two is 3.
2) 1 XOR 2 = 3.
3) 5 XOR 2 = 7.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [5,2,4,6,6,3], queries = [[12,4],[8,1],[6,3]]
<strong>Output:</strong> [15,-1,5]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length, queries.length &lt;= 10<sup>5</sup></code></li>
	<li><code>queries[i].length == 2</code></li>
	<li><code>0 &lt;= nums[j], x<sub>i</sub>, m<sub>i</sub> &lt;= 10<sup>9</sup></code></li>
</ul>
</div>

---




```cpp
class Solution {
   
    class TrieNode {
        public:
        TrieNode* child[2];
        TrieNode (){
            child[0]=NULL;
            child[1]=NULL;
        };
    };
    TrieNode* build(vector<int>& nums){
        int n=nums.size();
        TrieNode* root=new TrieNode();
        TrieNode* temp;
        for(int i=0;i<n;i++){
            temp=root;
            for(int j=31;j>=0;j--){
                int k = (nums[i]>>j) & 1;
                if(temp->child[k]==NULL)
                    temp->child[k]=new TrieNode();
                temp=temp->child[k];
            }
        }
        return root;
    }
    int dfs(TrieNode* root, int x, int maxl, int ans, int bit){
        if(ans>maxl)
            return -1;
        if(bit==-1)
            return x^ans;
        int bitt= (x >> bit) & 1;
        if(root->child[1-bitt]!=NULL){
            int v=dfs(root->child[1-bitt], x, maxl, (ans | (1-bitt) << bit), bit-1);
            if(v>=0)
                return v;
        }
        if(root->child[bitt]!=NULL){
            int v=dfs(root->child[bitt], x, maxl, (ans | (bitt) << bit), bit-1);
            if(v>=0)
                return v;
        }
        return -1;   
    }
public:
    vector<int> maximizeXor(vector<int>& nums, vector<vector<int>>& queries) {
        int n=nums.size();
        vector<int> ans;
        TrieNode* root=build(nums);
        sort(nums.begin(),nums.end());
        for(int i=0;i<queries.size();i++){
            int x=queries[i][0];
            int m=queries[i][1];
            int k=dfs(root,x,m,0,31);
            ans.push_back(k);
        }
        return ans;
    }
};
```
