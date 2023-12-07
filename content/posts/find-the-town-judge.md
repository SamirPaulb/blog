---
title: find the town judge
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, find-the-town-judge solution
description: find the town judge LeetCode Solution Explained
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


<h2>997. Find the Town Judge</h2><h3>Easy</h3><hr><div><p>In a town, there are <code>N</code> people labelled from&nbsp;<code>1</code> to <code>N</code>.&nbsp; There is a rumor that one of these people is secretly the town judge.</p>

<p>If the&nbsp;town judge exists, then:</p>

<ol>
	<li>The town judge trusts nobody.</li>
	<li>Everybody (except for the town judge) trusts the town judge.</li>
	<li>There is exactly one person that satisfies properties 1 and 2.</li>
</ol>

<p>You are given <code>trust</code>, an array of pairs <code>trust[i] = [a, b]</code> representing that the person labelled <code>a</code> trusts the person labelled <code>b</code>.</p>

<p>If the town judge exists and can be identified, return the label of the town judge.&nbsp; Otherwise, return <code>-1</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> N = 2, trust = [[1,2]]
<strong>Output:</strong> 2
</pre><p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> N = 3, trust = [[1,3],[2,3]]
<strong>Output:</strong> 3
</pre><p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> N = 3, trust = [[1,3],[2,3],[3,1]]
<strong>Output:</strong> -1
</pre><p><strong>Example 4:</strong></p>
<pre><strong>Input:</strong> N = 3, trust = [[1,2],[2,3]]
<strong>Output:</strong> -1
</pre><p><strong>Example 5:</strong></p>
<pre><strong>Input:</strong> N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
<strong>Output:</strong> 3
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= N &lt;= 1000</code></li>
	<li><code>0 &lt;= trust.length &lt;= 10^4</code></li>
	<li><code>trust[i].length == 2</code></li>
	<li><code>trust[i]</code> are all different</li>
	<li><code>trust[i][0] != trust[i][1]</code></li>
	<li><code>1 &lt;= trust[i][0], trust[i][1] &lt;= N</code></li>
</ul></div>

---


