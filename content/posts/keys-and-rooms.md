---
title: keys and rooms
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, keys-and-rooms solution
description: keys and rooms LeetCode Solution Explained
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


[Discussion Post (created on 29/0/2021 at 14:43)](https://leetcode.com/problems/keys-and-rooms/discuss/1040220/DFS-or-C%2B%2B-or-Simple-Solution)  
<h2>841. Keys and Rooms</h2><h3>Medium</h3><hr><div><p>There are <code>N</code> rooms and you start in room <code>0</code>.&nbsp; Each room has a distinct number in <code>0, 1, 2, ..., N-1</code>, and each room may have&nbsp;some keys to access the next room.&nbsp;</p>

<p>Formally, each room <code>i</code>&nbsp;has a list of keys <code>rooms[i]</code>, and each key <code>rooms[i][j]</code> is an integer in <code>[0, 1, ..., N-1]</code> where <code>N = rooms.length</code>.&nbsp; A key <code>rooms[i][j] = v</code>&nbsp;opens the room with number <code>v</code>.</p>

<p>Initially, all the rooms start locked (except for room <code>0</code>).&nbsp;</p>

<p>You can walk back and forth between rooms freely.</p>

<p>Return <code>true</code>&nbsp;if and only if you can enter&nbsp;every room.</p>

<ol>
</ol>

<p><strong>Example 1:</strong></p>

<pre><strong>Input: </strong>[[1],[2],[3],[]]
<strong>Output: </strong>true
<strong>Explanation:  </strong>
We start in room 0, and pick up key 1.
We then go to room 1, and pick up key 2.
We then go to room 2, and pick up key 3.
We then go to room 3.  Since we were able to go to every room, we return true.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input: </strong>[[1,3],[3,0,1],[2],[0]]
<strong>Output: </strong>false
<strong>Explanation: </strong>We can't enter the room with number 2.
</pre>

<p><b>Note:</b></p>

<ol>
	<li><code>1 &lt;= rooms.length &lt;=&nbsp;1000</code></li>
	<li><code>0 &lt;= rooms[i].length &lt;= 1000</code></li>
	<li>The number of keys in all rooms combined is at most&nbsp;<code>3000</code>.</li>
</ol>
</div>

---


