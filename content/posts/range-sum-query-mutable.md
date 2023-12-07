---
title: range sum query mutable
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, range-sum-query-mutable solution
description: range sum query mutable LeetCode Solution Explained
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


<h2>307. Range Sum Query - Mutable</h2><h3>Medium</h3><hr><div><p>Given an integer array <code>nums</code>, handle multiple queries of the following types:</p>

<ol>
	<li><strong>Update</strong> the value of an element in <code>nums</code>.</li>
	<li>Calculate the <strong>sum</strong> of the elements of <code>nums</code> between indices <code>left</code> and <code>right</code> <strong>inclusive</strong> where <code>left &lt;= right</code>.</li>
</ol>

<p>Implement the <code>NumArray</code> class:</p>

<ul>
	<li><code>NumArray(int[] nums)</code> Initializes the object with the integer array <code>nums</code>.</li>
	<li><code>void update(int index, int val)</code> <strong>Updates</strong> the value of <code>nums[index]</code> to be <code>val</code>.</li>
	<li><code>int sumRange(int left, int right)</code> Returns the <strong>sum</strong> of the elements of <code>nums</code> between indices <code>left</code> and <code>right</code> <strong>inclusive</strong> (i.e. <code>nums[left] + nums[left + 1] + ... + nums[right]</code>).</li>
</ul>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input</strong>
["NumArray", "sumRange", "update", "sumRange"]
[[[1, 3, 5]], [0, 2], [1, 2], [0, 2]]
<strong>Output</strong>
[null, 9, null, 8]

<strong>Explanation</strong>
NumArray numArray = new NumArray([1, 3, 5]);
numArray.sumRange(0, 2); // return 1 + 3 + 5 = 9
numArray.update(1, 2);   // nums = [1, 2, 5]
numArray.sumRange(0, 2); // return 1 + 2 + 5 = 8
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 3 * 10<sup>4</sup></code></li>
	<li><code>-100 &lt;= nums[i] &lt;= 100</code></li>
	<li><code>0 &lt;= index &lt; nums.length</code></li>
	<li><code>-100 &lt;= val &lt;= 100</code></li>
	<li><code>0 &lt;= left &lt;= right &lt; nums.length</code></li>
	<li>At most <code>3 * 10<sup>4</sup></code> calls will be made to <code>update</code> and <code>sumRange</code>.</li>
</ul>
</div>

---




```cpp
class NumArray {
public:
    int n;
    int st[1200005];
    
    void build(int si, int ss, int se, vector<int>& nums){
    if(ss==se){
        st[si]=nums[ss];
        return;
    }
    int mid=(ss+se)/2;
    build(2*si+1, ss, mid, nums);
    build(2*si+2, mid+1, se, nums);

    st[si]=st[2*si+1] + st[2*si+2];
    }
    
    
    int query(int si,int ss,int se,int qs,int qe)
    {

        if(qs<=ss && qe>=se)  
        {
            return st[si];
        }
        if(qs>se || qe<ss) 
            return 0;   

        int mid=(ss+se)/2;
        int left=query(2*si+1,ss,mid,qs,qe);
        int right=query(2*si+2,mid+1,se,qs,qe);
        return left+right;
    }
    
    void up(int si,int ss,int se,int qi, int val){
        if(ss==se){
            st[si]=val;
            return;
        }
        int mid=(ss+se)/2;
        if(qi<=mid)
            up(2*si+1,ss,mid,qi,val);
        else
            up(2*si+2,mid+1,se,qi,val);
        st[si]=st[2*si+1]+st[2*si+2];
    }
    
    NumArray(vector<int>& nums) {
        n=nums.size();
        build(0,0,n-1, nums);
    }
    
    void update(int index, int val) {
        return up(0,0,n-1,index, val);
    }
    
    int sumRange(int left, int right) {
        return query(0,0,n-1,left,right);
    }
};

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray* obj = new NumArray(nums);
 * obj->update(index,val);
 * int param_2 = obj->sumRange(left,right);
 */
```
