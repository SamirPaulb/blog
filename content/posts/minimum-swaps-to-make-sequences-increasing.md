---
title: minimum swaps to make sequences increasing
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, minimum-swaps-to-make-sequences-increasing solution
description: minimum swaps to make sequences increasing LeetCode Solution Explained
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


<h2>801. Minimum Swaps To Make Sequences Increasing</h2><h3>Medium</h3><hr><div><p>We have two integer sequences <code>A</code> and <code>B</code> of the same non-zero length.</p>

<p>We are allowed to swap elements <code>A[i]</code> and <code>B[i]</code>.&nbsp; Note that both elements are in the same index position in their respective sequences.</p>

<p>At the end of some number of swaps, <code>A</code> and <code>B</code> are both strictly increasing.&nbsp; (A sequence is <em>strictly increasing</em> if and only if <code>A[0] &lt; A[1] &lt; A[2] &lt; ... &lt; A[A.length - 1]</code>.)</p>

<p>Given A and B, return the minimum number of swaps to make both sequences strictly increasing.&nbsp; It is guaranteed that the given input always makes it possible.</p>

<pre><strong>Example:</strong>
<strong>Input:</strong> A = [1,3,5,4], B = [1,2,3,7]
<strong>Output:</strong> 1
<strong>Explanation: </strong>
Swap A[3] and B[3].  Then the sequences are:
A = [1, 3, 5, 7] and B = [1, 2, 3, 4]
which are both strictly increasing.
</pre>

<p><strong>Note:</strong></p>

<ul>
	<li><code>A, B</code> are arrays with the same length, and that length will be in the range <code>[1, 1000]</code>.</li>
	<li><code>A[i], B[i]</code> are integer values in the range <code>[0, 2000]</code>.</li>
</ul>
</div>

---




```cpp
class Solution {
public:
 
    int minSwap(vector<int>& A, vector<int>& B) {
        int n=A.size();
        int swap=0,noswap=1;
        
        for(int i=1;i<n;i++){
            int x=INT_MAX, y=INT_MAX;
            if(A[i]>B[i-1] && B[i]>A[i-1]){
                x=min(x, noswap);
                y=min(y, swap+1);
            }
            if(A[i]>A[i-1] && B[i]>B[i-1]){
                x=min(x, swap);
                y=min(y, noswap+1);
            }
            swap=x;
            noswap=y;
        }
        return min(swap,noswap);
        
    }
};

```
