---
title: previous permutation with one swap
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, previous-permutation-with-one-swap solution
description: previous permutation with one swap LeetCode Solution Explained
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


[Discussion Post (created on 15/1/2021 at 15:20)](https://leetcode.com/problems/previous-permutation-with-one-swap/discuss/1066611/C%2B%2B-or-With-Explanation)  
<h2>1053. Previous Permutation With One Swap</h2><h3>Medium</h3><hr><div><p>Given an array&nbsp;of positive integers <code>arr</code> (not necessarily distinct), return <em>the lexicographically largest permutation that is smaller than</em> <code>arr</code>, that can be <strong>made with exactly one swap</strong> (A <em>swap</em> exchanges the positions of two numbers <code>arr[i]</code> and <code>arr[j]</code>). If it cannot be done, then return the same array.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> arr = [3,2,1]
<strong>Output:</strong> [3,1,2]
<strong>Explanation:</strong> Swapping 2 and 1.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> arr = [1,1,5]
<strong>Output:</strong> [1,1,5]
<strong>Explanation:</strong> This is already the smallest permutation.
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> arr = [1,9,4,6,7]
<strong>Output:</strong> [1,7,4,6,9]
<strong>Explanation:</strong> Swapping 9 and 7.
</pre>

<p><strong>Example 4:</strong></p>

<pre><strong>Input:</strong> arr = [3,1,1,3]
<strong>Output:</strong> [1,3,1,3]
<strong>Explanation:</strong> Swapping 1 and 3.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= arr.length &lt;= 10<sup>4</sup></code></li>
	<li><code>1 &lt;= arr[i] &lt;= 10<sup>4</sup></code></li>
</ul>
</div>

---




```cpp
class Solution {
public:
    vector<int> prevPermOpt1(vector<int>& arr) {
        bool f=true;
        for(int i=0;i<arr.size()-1;i++){
            if(arr[i]>arr[i+1]){
                f=false;
                break;
            }
        }
        if(f==true)
            return arr;
        int n=arr.size();
        int x=-1;
        int p=-1;
        for(int i=n-2;i>=0;i--){
            if(arr[i]>arr[i+1]){
                x=i;
                break;
            }    
        }
        if(x==-1)
            return arr;
        int maxi=INT_MIN;
        for(int i=x+1;i<n;i++){
            if(arr[i]<arr[x] && arr[i]>maxi){
                maxi=arr[i];
                p=i;
            }    
        }
        swap(arr[x],arr[p]);
        return arr;
    }
};
```
