---
title: fruit into baskets
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, fruit-into-baskets solution
description: fruit into baskets LeetCode Solution Explained
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


<h2>904. Fruit Into Baskets</h2><h3>Medium</h3><hr><div><p>In a row of trees, the <code>i</code>-th tree&nbsp;produces&nbsp;fruit with type&nbsp;<code>tree[i]</code>.</p>

<p>You <strong>start at any tree&nbsp;of your choice</strong>, then repeatedly perform the following steps:</p>

<ol>
	<li>Add one piece of fruit from this tree to your baskets.&nbsp; If you cannot, stop.</li>
	<li>Move to the next tree to the right of the current tree.&nbsp; If there is no tree to the right, stop.</li>
</ol>

<p>Note that you do not have any choice after the initial choice of starting tree:&nbsp;you must perform step 1, then step 2, then back to step 1, then step 2, and so on until you stop.</p>

<p>You have two baskets, and each basket can carry any quantity of fruit, but you want each basket to only carry one type of fruit each.</p>

<p>What is the total amount of fruit you can collect with this procedure?</p>

<p>&nbsp;</p>

<p><strong>Example 1:</strong></p>

<pre><strong>Input: </strong><span id="example-input-1-1">[1,2,1]</span>
<strong>Output: </strong><span id="example-output-1">3</span>
<strong><span>Explanation: </span></strong><span>We can collect [1,2,1].</span>
</pre>

<div>
<p><strong>Example 2:</strong></p>

<pre><strong>Input: </strong><span id="example-input-2-1">[0,1,2,2]</span>
<strong>Output: </strong><span id="example-output-2">3
</span><strong><span>Explanation: </span></strong><span>We can collect [1,2,2].
If we started at the first tree, we would only collect [0, 1].</span>
</pre>

<div>
<p><strong>Example 3:</strong></p>

<pre><strong>Input: </strong><span id="example-input-3-1">[1,2,3,2,2]</span>
<strong>Output: </strong><span id="example-output-3">4
</span><strong><span>Explanation: </span></strong><span>We can collect [2,3,2,2].</span>
<span>If we started at the first tree, we would only collect [1, 2].</span>
</pre>

<div>
<p><strong>Example 4:</strong></p>

<pre><strong>Input: </strong><span id="example-input-4-1">[3,3,3,1,2,1,1,2,3,3,4]</span>
<strong>Output: </strong>5<span id="example-output-4">
</span><strong><span>Explanation: </span></strong><span>We can collect [1,2,1,1,2].</span>
<span>If we started at the first tree or the eighth tree, we would only collect 4 fruits.</span>
</pre>

<p>&nbsp;</p>
</div>
</div>
</div>

<p><strong>Note:</strong></p>

<ol>
	<li><code>1 &lt;= tree.length &lt;= 40000</code></li>
	<li><code>0 &lt;= tree[i] &lt; tree.length</code></li>
</ol>
</div>

---




```cpp
class Solution {
public:
    int totalFruit(vector<int>& tree) {
        int n=tree.size();
        unordered_map<int, int> m;
        int i=0,j=0;
        for(i=0;i<n;i++){
            m[tree[i]]++;
            if(m.size()>2){
                m[tree[j]]--;
                if(m[tree[j]]==0){
                    m.erase(tree[j]);
                }  
                j++;
            }
        }
        return i-j;
    }
};
```
