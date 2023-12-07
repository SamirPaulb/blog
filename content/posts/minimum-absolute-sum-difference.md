---
title: minimum absolute sum difference
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, minimum-absolute-sum-difference solution
description: minimum absolute sum difference LeetCode Solution Explained
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


<h2>1818. Minimum Absolute Sum Difference</h2><h3>Medium</h3><hr><div><p>You are given two positive integer arrays <code>nums1</code> and <code>nums2</code>, both of length <code>n</code>.</p>

<p>The <strong>absolute sum difference</strong> of arrays <code>nums1</code> and <code>nums2</code> is defined as the <strong>sum</strong> of <code>|nums1[i] - nums2[i]|</code> for each <code>0 &lt;= i &lt; n</code> (<strong>0-indexed</strong>).</p>

<p>You can replace <strong>at most one</strong> element of <code>nums1</code> with <strong>any</strong> other element in <code>nums1</code> to <strong>minimize</strong> the absolute sum difference.</p>

<p>Return the <em>minimum absolute sum difference <strong>after</strong> replacing at most one<strong> </strong>element in the array <code>nums1</code>.</em> Since the answer may be large, return it <strong>modulo</strong> <code>10<sup>9</sup> + 7</code>.</p>

<p><code>|x|</code> is defined as:</p>

<ul>
	<li><code>x</code> if <code>x &gt;= 0</code>, or</li>
	<li><code>-x</code> if <code>x &lt; 0</code>.</li>
</ul>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> nums1 = [1,7,5], nums2 = [2,3,5]
<strong>Output:</strong> 3
<strong>Explanation: </strong>There are two possible optimal solutions:
- Replace the second element with the first: [1,<u><strong>7</strong></u>,5] =&gt; [1,<u><strong>1</strong></u>,5], or
- Replace the second element with the third: [1,<u><strong>7</strong></u>,5] =&gt; [1,<u><strong>5</strong></u>,5].
Both will yield an absolute sum difference of <code>|1-2| + (|1-3| or |5-3|) + |5-5| = </code>3.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> nums1 = [2,4,6,8,10], nums2 = [2,4,6,8,10]
<strong>Output:</strong> 0
<strong>Explanation: </strong>nums1 is equal to nums2 so no replacement is needed. This will result in an 
absolute sum difference of 0.
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> nums1 = [1,10,4,4,2,7], nums2 = [9,3,5,1,7,4]
<strong>Output:</strong> 20
<strong>Explanation: </strong>Replace the first element with the second: [<u><strong>1</strong></u>,10,4,4,2,7] =&gt; [<u><strong>10</strong></u>,10,4,4,2,7].
This yields an absolute sum difference of <code>|10-9| + |10-3| + |4-5| + |4-1| + |2-7| + |7-4| = 20</code>
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == nums1.length</code></li>
	<li><code>n == nums2.length</code></li>
	<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums1[i], nums2[i] &lt;= 10<sup>5</sup></code></li>
</ul>
</div>

---




```cpp
class Solution {
public:
    int minAbsoluteSumDiff(vector<int>& nums1, vector<int>& nums2) {
        vector<int> n1s(nums1.begin(), nums1.end());
	sort(n1s.begin(), n1s.end());

	int mod = 1e9+7;
	int max_reduction = 0; // maximum reduction of difference that can be achieved for any element.
	int total_diff = 0; // Total absolute sum difference
	for (int i = 0; i < nums1.size(); i++) {
		int curr_diff = abs(nums1[i]-nums2[i]);
		total_diff += curr_diff;
		total_diff %= mod;

		// Don't bother optimizing this element, if we already found a better
		// optimization for another element.
		if (curr_diff <= max_reduction) {
			continue;
		}

		// Find two numbers that are closest to nums2[i] in nums1 array.
		// See if replacing nums1[i] with either one of them results in smaller absolute
		// difference for ith element.
		auto it = lower_bound(n1s.begin(), n1s.end(), nums2[i]);
		int new_diff = curr_diff;
		if (it != n1s.end()) {
			new_diff = min(new_diff, abs(nums2[i] - *it));
		}
		if (it != n1s.begin()) {
			new_diff = min(new_diff, abs(nums2[i] - *prev(it)));
		}

		max_reduction = max(max_reduction, (curr_diff - new_diff));
	}

	total_diff = (total_diff - max_reduction + mod) % mod;

	return total_diff;
    }
};
```
