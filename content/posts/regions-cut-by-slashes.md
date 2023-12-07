---
title: regions cut by slashes
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, regions-cut-by-slashes solution
description: regions cut by slashes LeetCode Solution Explained
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


[Discussion Post (created on 30/0/2021 at 13:22)](https://leetcode.com/problems/regions-cut-by-slashes/discuss/1041633/DFS-Solution-C%2B%2B)  
<h2>959. Regions Cut By Slashes</h2><h3>Medium</h3><hr><div><p>In a N x N&nbsp;<code>grid</code> composed of 1 x 1 squares, each 1 x 1 square consists of a <code>/</code>, <code>\</code>, or blank space.&nbsp; These characters divide the square into contiguous regions.</p>

<p>(Note that backslash characters are escaped, so a <code>\</code>&nbsp;is represented as <code>"\\"</code>.)</p>

<p>Return the number of regions.</p>

<p>&nbsp;</p>

<div>
<div>
<div>
<div>
<div>
<ol>
</ol>
</div>
</div>
</div>
</div>
</div>

<div>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:
</strong><span id="example-input-1-1">[
&nbsp; " /",
&nbsp; "/ "
]</span>
<strong>Output: </strong><span id="example-output-1">2</span>
<strong>Explanation: </strong>The 2x2 grid is as follows:
<img alt="" src="https://assets.leetcode.com/uploads/2018/12/15/1.png" style="width: 82px; height: 82px;">
</pre>

<div>
<p><strong>Example 2:</strong></p>

<pre><strong>Input:
</strong><span id="example-input-2-1">[
&nbsp; " /",
&nbsp; "  "
]</span>
<strong>Output: </strong><span id="example-output-2">1</span>
<strong>Explanation: </strong>The 2x2 grid is as follows:
<img alt="" src="https://assets.leetcode.com/uploads/2018/12/15/2.png" style="width: 82px; height: 82px;">
</pre>

<div>
<p><strong>Example 3:</strong></p>

<pre><strong>Input:
</strong><span id="example-input-3-1">[
&nbsp; "\\/",
&nbsp; "/\\"
]</span>
<strong>Output: </strong><span id="example-output-3">4</span>
<strong>Explanation: </strong>(Recall that because \ characters are escaped, "\\/" refers to \/, and "/\\" refers to /\.)
The 2x2 grid is as follows:
<img alt="" src="https://assets.leetcode.com/uploads/2018/12/15/3.png" style="width: 82px; height: 82px;">
</pre>

<div>
<p><strong>Example 4:</strong></p>

<pre><strong>Input:
</strong><span id="example-input-4-1">[
&nbsp; "/\\",
&nbsp; "\\/"
]</span>
<strong>Output: </strong><span id="example-output-4">5</span>
<strong>Explanation: </strong>(Recall that because \ characters are escaped, "/\\" refers to /\, and "\\/" refers to \/.)
The 2x2 grid is as follows:
<img alt="" src="https://assets.leetcode.com/uploads/2018/12/15/4.png" style="width: 82px; height: 82px;">
</pre>

<div>
<p><strong>Example 5:</strong></p>

<pre><strong>Input:
</strong><span id="example-input-5-1">[
&nbsp; "//",
&nbsp; "/ "
]</span>
<strong>Output: </strong><span id="example-output-5">3</span>
<strong>Explanation: </strong>The 2x2 grid is as follows:
<img alt="" src="https://assets.leetcode.com/uploads/2018/12/15/5.png" style="width: 82px; height: 82px;">
</pre>

<p>&nbsp;</p>

<p><strong>Note:</strong></p>

<ol>
	<li><code>1 &lt;= grid.length == grid[0].length &lt;= 30</code></li>
	<li><code>grid[i][j]</code> is either <code>'/'</code>, <code>'\'</code>, or <code>' '</code>.</li>
</ol>
</div>
</div>
</div>
</div>
</div></div>

---




```cpp


// idea is to split each single square into 4 squares and every subsquare into 4 triangles

class Solution {
public:
    int par[4*30*30];
    
int find(int u){
    if(u == par[u])
        return u;
    
    else
        return par[u]=find(par[u]);
}

void combine (int u, int v){
    u = find(u);
    v = find(v);
    
    if(u == v)
        return;
    
    par[u]=v;
    
    
}
    int regionsBySlashes(vector<string>& grid) {
        int n=grid.size();
        for(int i=0;i<4*n*n;i++){
            par[i]=i;
        }
        for(int i=0;i<n;i++){
            for(int j=0;j<n;j++){
                char c=grid[i][j];
                int root=4*(i*n+j);
                if(c!='\\'){
                    combine(root+0,root+1);
                    combine(root+2,root+3);
                }
                if(c!='/'){
                    combine(root+0,root+2);
                    combine(root+1,root+3);
                }
                //down
                if(i+1<n){
                    combine(root+3, root+(4*n)+0);
                }
                //up
                if(i-1>=0){
                    combine(root, root-(4*n)+3);
                }
                //right
                if(j+1<n){
                    combine(root+2, root+4+1);
                }
                //left
                if(j-1>=0){
                    combine(root+1, root-4+2);
                }
            }
        }
        int ans=0;
        for(int i=0;i<n*n*4;i++){
            if(i==find(i))
                ans++;
        }
        return ans;
    }
};
```
