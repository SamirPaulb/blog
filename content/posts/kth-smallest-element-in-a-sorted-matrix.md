---
title: kth smallest element in a sorted matrix
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, kth-smallest-element-in-a-sorted-matrix solution
description: kth smallest element in a sorted matrix LeetCode Solution Explained
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


[Discussion Post (created on 19/3/2021 at 15:44)](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/discuss/?currentPage=1&orderBy=most_votes&query=)  
<h2>378. Kth Smallest Element in a Sorted Matrix</h2><h3>Medium</h3><hr><div><p>Given an <code>n x n</code> <code>matrix</code> where each of the rows and columns are sorted in ascending order, return <em>the</em> <code>k<sup>th</sup></code> <em>smallest element in the matrix</em>.</p>

<p>Note that it is the <code>k<sup>th</sup></code> smallest element <strong>in the sorted order</strong>, not the <code>k<sup>th</sup></code> <strong>distinct</strong> element.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
<strong>Output:</strong> 13
<strong>Explanation:</strong> The elements in the matrix are [1,5,9,10,11,12,13,<u><strong>13</strong></u>,15], and the 8<sup>th</sup> smallest number is 13
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> matrix = [[-5]], k = 1
<strong>Output:</strong> -5
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == matrix.length</code></li>
	<li><code>n == matrix[i].length</code></li>
	<li><code>1 &lt;= n &lt;= 300</code></li>
	<li><code>-10<sup>9</sup> &lt;= matrix[i][j] &lt;= -10<sup>9</sup></code></li>
	<li>All the rows and columns of <code>matrix</code> are <strong>guaranteed</strong> to be sorted in <strong>non-degreasing order</strong>.</li>
	<li><code>1 &lt;= k &lt;= n<sup>2</sup></code></li>
</ul>
</div>

---




```cpp
class Solution {
public:
    int kthSmallest(vector<vector<int>>& A, int k) {
        int M = A.size() ;
        int N = A[0].size();
        int l = A[0][0] ;          // low 
        int h = A[M-1][N-1];       // high 
        
        if( l == h )return l ;     // base case 
       
        int t = N*M - k ;          // looking for number of elements greater than me 
       
        while( l <= h )             // simple binary search 
        {
            int m = (l+h)/2 ; 
            
            int cnt = 0 ; 
            
            for( auto x : A )
            {
                cnt += x.end() - upper_bound( x.begin() , x.end() , m )  ;  
            }
            
            if( cnt <= t )h = m-1; 
            else l = m+1; 
        }
       
        return l;
    }
};
```
