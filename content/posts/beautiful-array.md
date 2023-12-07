---
title: beautiful array
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, beautiful-array solution
description: beautiful array LeetCode Solution Explained
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


<h2>932. Beautiful Array</h2><h3>Medium</h3><hr><div><p>For some fixed <code>n</code>, an array <code>nums</code> is <em>beautiful</em> if it is a permutation of the integers <code>1, 2, ..., n</code>, such that:</p>

<p>For every <code>i &lt; j</code>, there is <strong>no</strong>&nbsp;<code>k</code> with <code>i &lt; k &lt; j</code>&nbsp;such that <code>nums[k] * 2 = nums[i] + nums[j]</code>.</p>

<p>Given <code>n</code>, return <strong>any</strong> beautiful array <code>nums</code>.&nbsp; (It is guaranteed that one exists.)</p>

<p>&nbsp;</p>

<p><strong>Example 1:</strong></p>

<pre><strong>Input: </strong>n = <span id="example-input-1-1">4</span>
<strong>Output: </strong><span id="example-output-1">[2,1,4,3]</span>
</pre>

<div>
<p><strong>Example 2:</strong></p>

<pre><strong>Input: </strong>n = <span id="example-input-2-1">5</span>
<strong>Output: </strong><span>[3,1,2,5,4]</span></pre>

<p>&nbsp;</p>
</div>

<p><strong>Note:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 1000</code></li>
</ul>

<div>
<div>&nbsp;</div>
</div>
</div>

---




```cpp
class Solution {
public:
    //EXPLANATION
/*
start with 1 size array called result= [1]
while(size<=N){
    make a temp array for this iteration
    PUSH ODD NUMBERS from result array
    for(extract numbers from result array){
        let i = extracted number,say 1 and 2*i-1<N
        push(2*1-1)into temp array, temp = {1}
    }
    PUSH EVEN NUMBERS from result array
    for(extract numbers from result array){
        let i = extracted number,say 1 and 2*i<N
        push(2*1)into temp array, temp = {1,2}
    }
    new result array = temp 
}
NEXT ITERATIONS
[1,2]=>Enter while loop =>first for loop, push 2*i-1=1(i=1),then 2*i-1=2*2-1=3 =>{1,3}
    Enter second while loop => (2*1=2),(2*2=4)={1,3,2,4}
[1,3,2,4] => {2*1-1,2*3-1,2*2-1,2*4-1}={1,5,3,7} and even=>{2*1,2*2,2*2,2*4}=>{2,6,4,8}
            => {1,5,3,7,2,6,4,8}
[1,5,3,7,2,4,6,8]......................and so on



*/
    vector<int> beautifulArray(int n) {
        vector<int> ans;
        ans.push_back(1);
        while(ans.size()<n){
            vector<int> t;
            for(int x: ans)
                if(x*2-1<=n)
                    t.push_back(x*2-1);
            for(int x: ans)
                if(x*2<=n)
                    t.push_back(x*2);
            ans=t;
        }
        return ans;
    }
};
```
