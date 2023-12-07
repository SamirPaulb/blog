---
title: robot bounded in circle
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, robot-bounded-in-circle solution
description: robot bounded in circle LeetCode Solution Explained
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


<h2>1041. Robot Bounded In Circle</h2><h3>Medium</h3><hr><div><p>On an infinite plane, a robot initially stands at <code>(0, 0)</code> and faces north. The robot can receive one of three instructions:</p>

<ul>
	<li><code>"G"</code>: go straight 1 unit;</li>
	<li><code>"L"</code>: turn 90 degrees to the left;</li>
	<li><code>"R"</code>: turn 90 degrees to the right.</li>
</ul>

<p>The robot performs the <code>instructions</code> given in order, and repeats them forever.</p>

<p>Return <code>true</code> if and only if there exists a circle in the plane such that the robot never leaves the circle.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> instructions = "GGLLGG"
<strong>Output:</strong> true
<strong>Explanation:</strong> The robot moves from (0,0) to (0,2), turns 180 degrees, and then returns to (0,0).
When repeating these instructions, the robot remains in the circle of radius 2 centered at the origin.</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> instructions = "GG"
<strong>Output:</strong> false
<strong>Explanation:</strong> The robot moves north indefinitely.</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> instructions = "GL"
<strong>Output:</strong> true
<strong>Explanation:</strong> The robot moves from (0, 0) -&gt; (0, 1) -&gt; (-1, 1) -&gt; (-1, 0) -&gt; (0, 0) -&gt; ...</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= instructions.length &lt;= 100</code></li>
	<li><code>instructions[i]</code>&nbsp;is&nbsp;<code>'G'</code>, <code>'L'</code> or, <code>'R'</code>.</li>
</ul>
</div>

---




```cpp
class Solution {
public:
    bool isRobotBounded(string instructions) {
        int x=0,y=0,dx=0,dy=1;
        for (int i = 0; i<instructions.size(); i++)
        {
            if(instructions[i]=='L'){
                int t=dx;
                dx=-dy;
                dy=t;
            }
            else if(instructions[i]=='R'){
                int t=dx;
                dx=dy;
                dy=-t;
            }
            else{
                x+=dx;
                y+=dy;
            }
        }
        if(x==0 && y==0)
            return true;
        if(dx!=0 || dy!=1)
            return true;
        return false;
    }
};
```
