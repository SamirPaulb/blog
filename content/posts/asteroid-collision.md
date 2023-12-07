---
title: asteroid collision
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, asteroid-collision solution
description: asteroid collision LeetCode Solution Explained
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


<h2>735. Asteroid Collision</h2><h3>Medium</h3><hr><div><p>We are given an array <code>asteroids</code> of integers representing asteroids in a row.</p>

<p>For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.</p>

<p>Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> asteroids = [5,10,-5]
<strong>Output:</strong> [5,10]
<b>Explanation:</b> The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> asteroids = [8,-8]
<strong>Output:</strong> []
<b>Explanation:</b> The 8 and -8 collide exploding each other.
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> asteroids = [10,2,-5]
<strong>Output:</strong> [10]
<b>Explanation:</b> The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.
</pre>

<p><strong>Example 4:</strong></p>

<pre><strong>Input:</strong> asteroids = [-2,-1,1,2]
<strong>Output:</strong> [-2,-1,1,2]
<b>Explanation:</b> The -2 and -1 are moving left, while the 1 and 2 are moving right. Asteroids moving the same direction never meet, so no asteroids will meet each other.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= asteroids.length &lt;= 10<sup>4</sup></code></li>
	<li><code>-1000 &lt;= asteroids[i] &lt;= 1000</code></li>
	<li><code>asteroids[i] != 0</code></li>
</ul>
</div>

---




```cpp
class Solution {
public:
    vector<int> asteroidCollision(vector<int>& asteroids) {
        int n=asteroids.size();
        vector<int> ans;
        stack<int> s;
        //cases
        // stack top --- incoming asteroid
        // left          left         nothing happens
        // left          right        nothing happens
        // right         left         collision (+-)
        // right          right       nothing happens
        for(int i=0;i<n;i++){
            if(s.empty()){
                s.push(asteroids[i]);
            }
            else{
                if(s.top()>0 && asteroids[i]<0){
                    bool f=false;
                    while(!s.empty() && s.top()>0 && asteroids[i]<0 && abs(asteroids[i])>abs(s.top())){
                        s.pop();
                        f=true;
                    }
                    bool g=false;
                    if(!s.empty() && s.top()>0 && asteroids[i]<0 && abs(asteroids[i])==abs(s.top())){
                        s.pop();
                        g=true;
                    }
                    if(!s.empty() && s.top()>0 && asteroids[i]<0 && abs(asteroids[i])<abs(s.top())){
                        g=true;
                    }
                    if(f && !g)
                        s.push(asteroids[i]);
                }
                else {
                    s.push(asteroids[i]);
                }
            }
        }
        while(!s.empty()){
            ans.push_back(s.top());
            s.pop();
        }
        reverse(ans.begin(), ans.end());
        return ans;
    }
};
```
