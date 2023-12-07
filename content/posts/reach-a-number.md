---
title: reach a number
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, reach-a-number solution
description: reach a number LeetCode Solution Explained
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


<h2>754. Reach a Number</h2><h3>Medium</h3><hr><div><p>You are standing at position <code>0</code> on an infinite number line. There is a destination at position <code>target</code>.</p>

<p>You can make some number of moves <code>numMoves</code> so that:</p>

<ul>
	<li>On each move, you can either go left or right.</li>
	<li>During the <code>i<sup>th</sup></code> move (starting from <code>i == 1</code> to <code>i == numMoves</code>), you take <code>i</code> steps in the chosen direction.</li>
</ul>

<p>Given the integer <code>target</code>, return <em>the <strong>minimum</strong> number of moves required (i.e., the minimum </em><code>numMoves</code><em>) to reach the destination</em>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> target = 2
<strong>Output:</strong> 3
<strong>Explanation:</strong>
On the 1<sup>st</sup> move, we step from 0 to 1 (1 step).
On the 2<sup>nd</sup> move, we step from 1 to -1 (2 steps).
On the 3<sup>rd</sup> move, we step from -1 to 2 (3 steps).
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> target = 3
<strong>Output:</strong> 2
<strong>Explanation:</strong>
On the 1<sup>st</sup> move, we step from 0 to 1 (1 step).
On the 2<sup>nd</sup> move, we step from 1 to 3 (2 steps).
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>-10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup></code></li>
	<li><code>target != 0</code></li>
</ul>
</div>

---




```cpp
class Solution {
public:
    
    int reachNumber(int target) {
        target=abs(target);
        int sum=0;
        int steps=0;
        while(sum<target){
            steps++;
            sum+=steps;
        }
        if(sum==target) //if n*(n+1)/2==target
            return steps;
        int diff=sum-target;
        if(diff%2==0) //if difference is even between target and current position, it can be a reverse step somewhere
            return steps;
        else{
            if(steps%2==0) //last step even, diff is odd (target 9, current 10) - next step difference even, can be a reverse step somewhere now  
                return steps+1;
            return steps+2; //last step odd, diff is odd (target 12, current 15) - after 2 steps difference even, can do a reverse step somewhere now 
        }
        return -1;
    }   
};
```
