---
title: 4 median of two sorted arrays
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 4-median-of-two-sorted-arrays solution
description: 4 median of two sorted arrays LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/median-of-two-sorted-arrays/">4. Median of Two Sorted Arrays</a></h2><h3>Hard</h3><hr><div><p>Given two sorted arrays <code>nums1</code> and <code>nums2</code> of size <code>m</code> and <code>n</code> respectively, return <strong>the median</strong> of the two sorted arrays.</p>

<p>The overall run time complexity should be <code>O(log (m+n))</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> nums1 = [1,3], nums2 = [2]
<strong>Output:</strong> 2.00000
<strong>Explanation:</strong> merged array = [1,2,3] and median is 2.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> nums1 = [1,2], nums2 = [3,4]
<strong>Output:</strong> 2.50000
<strong>Explanation:</strong> merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>nums1.length == m</code></li>
	<li><code>nums2.length == n</code></li>
	<li><code>0 &lt;= m &lt;= 1000</code></li>
	<li><code>0 &lt;= n &lt;= 1000</code></li>
	<li><code>1 &lt;= m + n &lt;= 2000</code></li>
	<li><code>-10<sup>6</sup> &lt;= nums1[i], nums2[i] &lt;= 10<sup>6</sup></code></li>
</ul>
</div>

---




```python
# https://www.youtube.com/watch?v=NTop3VTjmxk
class Solution:
    def findMedianSortedArrays(self, nums1, nums2):
        n1 = len(nums1);   n2 = len(nums2) 
        if n1 > n2: return self.findMedianSortedArrays(nums2, nums1) # WE SHALL DO BINARY SEARCH ON THE SMALLER ARRAY, NUMS1
        
        INT_MIN, INT_MAX = -2**64, 2**64  # SETUP INT_MIN AND INT_MAX FOR EMPTY LEFT / RIGHT PARTITION
        low = 0;   high = n1  # pointers for BINARY SEARCH ON THE SMALLER ARRAY NUMS1
        
        while low <= high:
            
            # GET THE PARITIONS POINTS OF BOTH ARRAYS
            cut1 = (low + high) // 2          # partition of nums1
            cut2 = (n1 + n2 + 1) // 2 - cut1  # partition of nums2
            
            # GET THE 4 BOUNDARY NUMBERS
            left1 = nums1[cut1-1] if cut1 > 0 else INT_MIN   # left1 is the left partition of cut1
            right1 = nums1[cut1] if cut1 < n1 else INT_MAX   # right1 is the right partition of cut1
            
            left2 = nums2[cut2-1] if cut2 > 0 else INT_MIN   # left2 is the left partition of cut2
            right2 = nums2[cut2] if cut2 < n2 else INT_MAX   # right2 is the right partition of cut2
            
            # CORRECT PARTITION FOUND
            if left1 <= right2 and left2 <= right1:  # Got the Answer => Median
                if (n1 + n2) % 2 == 0:
                    return (max(left1, left2) + min(right1, right2)) / 2
                else:
                    return max(left1, left2)
            
            # MOVE cut1 (mid of binary search) LEFTWARDS
            elif left1 > right2:
                high = cut1 - 1
                
            # MOVE cut1 (mid of binary search) RIGHTWARDS   
            else:
                low = cut1 + 1
        
        return 0.0  # For both empty arrays
    
'''
Time Complexity: O(min(n1, n2))  
Space Complexity: O(1)
'''



'''
Input:
[7,12,14,15]
[1,2,3,4,9,11]

Output:
8.00000
'''
```
