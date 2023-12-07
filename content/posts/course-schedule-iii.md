---
title: course schedule iii
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, course-schedule-iii solution
description: course schedule iii LeetCode Solution Explained
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


[Discussion Post (created on 14/0/2021 at 19:43)](https://leetcode.com/problems/course-schedule-iii/discuss/1016569/Priority-Queue-or-C%2B%2B)  
<h2>630. Course Schedule III</h2><h3>Hard</h3><hr><div><p>There are <code>n</code> different online courses numbered from <code>1</code> to <code>n</code>. Each course has some duration(course length) <code>t</code> and closed on <code>d<sub>th</sub></code> day. A course should be taken <b>continuously</b> for <code>t</code> days and must be finished before or on the <code>d<sub>th</sub></code> day. You will start at the <code>1<sub>st</sub></code> day.</p>

<p>Given <code>n</code> online courses represented by pairs <code>(t,d)</code>, your task is to find the maximal number of courses that can be taken.</p>

<p><b>Example:</b></p>

<pre><b>Input:</b> [[100, 200], [200, 1300], [1000, 1250], [2000, 3200]]
<b>Output:</b> 3
<b>Explanation:</b> 
There're totally 4 courses, but you can take 3 courses at most:
First, take the 1st course, it costs 100 days so you will finish it on the 100th day, and ready to take the next course on the 101st day.
Second, take the 3rd course, it costs 1000 days so you will finish it on the 1100th day, and ready to take the next course on the 1101st day. 
Third, take the 2nd course, it costs 200 days so you will finish it on the 1300th day. 
The 4th course cannot be taken now, since you will finish it on the 3300th day, which exceeds the closed date.
</pre>

<p>&nbsp;</p>

<p><b>Note:</b></p>

<ol>
	<li>The integer 1 &lt;= d, t, n &lt;= 10,000.</li>
	<li>You can't take two courses simultaneously.</li>
</ol>

<p>&nbsp;</p>
</div>

---




```cpp
class Solution {
    static bool comp(vector<int> a, vector<int> b){
         return a[1] < b[1];
    }
public:
    int scheduleCourse(vector<vector<int>>& courses) {
       if(courses.size() <= 0) return 0;
        sort(courses.begin(), courses.end(), comp);
        priority_queue<int> q;
        int sum = 0;
        for(auto i : courses) {
            sum += i[0];
            q.push(i[0]);
            if(sum > i[1]) {
                sum -= q.top();
                q.pop();
            }
        }
        return q.size(); 
    }
};

```
