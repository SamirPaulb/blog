---
title: equal sum arrays with minimum number of operations
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, equal-sum-arrays-with-minimum-number-of-operations solution
description: equal sum arrays with minimum number of operations LeetCode Solution Explained
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


<h2>1775. Equal Sum Arrays With Minimum Number of Operations</h2><h3>Medium</h3><hr><div><p>You are given two arrays of integers <code>nums1</code> and <code><font face="monospace">nums2</font></code>, possibly of different lengths. The values in the arrays are between <code>1</code> and <code>6</code>, inclusive.</p>

<p>In one operation, you can change any integer's value in <strong>any </strong>of the arrays to <strong>any</strong> value between <code>1</code> and <code>6</code>, inclusive.</p>

<p>Return <em>the minimum number of operations required to make the sum of values in </em><code>nums1</code><em> equal to the sum of values in </em><code>nums2</code><em>.</em> Return <code>-1</code>​​​​​ if it is not possible to make the sum of the two arrays equal.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> nums1 = [1,2,3,4,5,6], nums2 = [1,1,2,2,2,2]
<strong>Output:</strong> 3
<strong>Explanation:</strong> You can make the sums of nums1 and nums2 equal with 3 operations. All indices are 0-indexed.
- Change nums2[0] to 6. nums1 = [1,2,3,4,5,6], nums2 = [<u><strong>6</strong></u>,1,2,2,2,2].
- Change nums1[5] to 1. nums1 = [1,2,3,4,5,<strong><u>1</u></strong>], nums2 = [6,1,2,2,2,2].
- Change nums1[2] to 2. nums1 = [1,2,<strong><u>2</u></strong>,4,5,1], nums2 = [6,1,2,2,2,2].
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> nums1 = [1,1,1,1,1,1,1], nums2 = [6]
<strong>Output:</strong> -1
<strong>Explanation:</strong> There is no way to decrease the sum of nums1 or to increase the sum of nums2 to make them equal.
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> nums1 = [6,6], nums2 = [1]
<strong>Output:</strong> 3
<strong>Explanation:</strong> You can make the sums of nums1 and nums2 equal with 3 operations. All indices are 0-indexed. 
- Change nums1[0] to 2. nums1 = [<strong><u>2</u></strong>,6], nums2 = [1].
- Change nums1[1] to 2. nums1 = [2,<strong><u>2</u></strong>], nums2 = [1].
- Change nums2[0] to 4. nums1 = [2,2], nums2 = [<strong><u>4</u></strong>].
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums1.length, nums2.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums1[i], nums2[i] &lt;= 6</code></li>
</ul>
</div>

---




```cpp
class Solution {
public:
    int minOperations(vector<int>& nums1, vector<int>& nums2) {
        int n1=nums1.size();
        int n2=nums2.size();
        int s1=0,s2=0;
        if(min(n1,n2) * 6 < max(n1, n2))
            return -1;
        for(int i=0;i<n1;i++)
            s1+=nums1[i];
        for(int i=0;i<n2;i++)
            s2+=nums2[i];
        if(s1<s2){
            swap(nums1, nums2); //nums1 zada sum wala chahiye
        }
        int diff=abs(s1-s2);
        map<int, int> m;
        for(int i=0;i<nums2.size();i++){
            m[6-nums2[i]]++;
        }
        for(int i=0;i<nums1.size();i++){
            m[nums1[i]-1]++;
        }
        int c=0;
        map<int, int>::reverse_iterator it;
        for(it=m.rbegin(); it!=m.rend(); it++){
            int k=it->second;
            int ele=it->first;
            while(k-->0 && diff>0){
                diff-=ele;
                c++;
            }
            if(diff<=0)
                return c;
        }
        return -1;
    }
};
```
