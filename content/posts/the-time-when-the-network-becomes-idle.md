---
title: the time when the network becomes idle
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, the-time-when-the-network-becomes-idle solution
description: the time when the network becomes idle LeetCode Solution Explained
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


<h2>2039. The Time When the Network Becomes Idle</h2><h3>Medium</h3><hr><div><p>There is a network of <code>n</code> servers, labeled from <code>0</code> to <code>n - 1</code>. You are given a 2D integer array <code>edges</code>, where <code>edges[i] = [u<sub>i</sub>, v<sub>i</sub>]</code> indicates there is a message channel between servers <code>u<sub>i</sub></code> and <code>v<sub>i</sub></code>, and they can pass <strong>any</strong> number of messages to <strong>each other</strong> directly in <strong>one</strong> second. You are also given a <strong>0-indexed</strong> integer array <code>patience</code> of length <code>n</code>.</p>

<p>All servers are <strong>connected</strong>, i.e., a message can be passed from one server to any other server(s) directly or indirectly through the message channels.</p>

<p>The server labeled <code>0</code> is the <strong>master</strong> server. The rest are <strong>data</strong> servers. Each data server needs to send its message to the master server for processing and wait for a reply. Messages move between servers <strong>optimally</strong>, so every message takes the <strong>least amount of time</strong> to arrive at the master server. The master server will process all newly arrived messages <strong>instantly</strong> and send a reply to the originating server via the <strong>reversed path</strong> the message had gone through.</p>

<p>At the beginning of second <code>0</code>, each data server sends its message to be processed. Starting from second <code>1</code>, at the <strong>beginning</strong> of <strong>every</strong> second, each data server will check if it has received a reply to the message it sent (including any newly arrived replies) from the master server:</p>

<ul>
	<li>If it has not, it will <strong>resend</strong> the message periodically. The data server <code>i</code> will resend the message every <code>patience[i]</code> second(s), i.e., the data server <code>i</code> will resend the message if <code>patience[i]</code> second(s) have <strong>elapsed</strong> since the <strong>last</strong> time the message was sent from this server.</li>
	<li>Otherwise, <strong>no more resending</strong> will occur from this server.</li>
</ul>

<p>The network becomes <strong>idle</strong> when there are <strong>no</strong> messages passing between servers or arriving at servers.</p>

<p>Return <em>the <strong>earliest second</strong> starting from which the network becomes <strong>idle</strong></em>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="example 1" src="https://assets.leetcode.com/uploads/2021/09/22/quiet-place-example1.png" style="width: 750px; height: 384px;">
<pre><strong>Input:</strong> edges = [[0,1],[1,2]], patience = [0,2,1]
<strong>Output:</strong> 8
<strong>Explanation:</strong>
At (the beginning of) second 0,
- Data server 1 sends its message (denoted 1A) to the master server.
- Data server 2 sends its message (denoted 2A) to the master server.

At second 1,
- Message 1A arrives at the master server. Master server processes message 1A instantly and sends a reply 1A back.
- Server 1 has not received any reply. 1 second (1 &lt; patience[1] = 2) elapsed since this server has sent the message, therefore it does not resend the message.
- Server 2 has not received any reply. 1 second (1 == patience[2] = 1) elapsed since this server has sent the message, therefore it resends the message (denoted 2B).

At second 2,
- The reply 1A arrives at server 1. No more resending will occur from server 1.
- Message 2A arrives at the master server. Master server processes message 2A instantly and sends a reply 2A back.
- Server 2 resends the message (denoted 2C).
...
At second 4,
- The reply 2A arrives at server 2. No more resending will occur from server 2.
...
At second 7, reply 2D arrives at server 2.

Starting from the beginning of the second 8, there are no messages passing between servers or arriving at servers.
This is the time when the network becomes idle.
</pre>

<p><strong>Example 2:</strong></p>
<img alt="example 2" src="https://assets.leetcode.com/uploads/2021/09/04/network_a_quiet_place_2.png" style="width: 100px; height: 85px;">
<pre><strong>Input:</strong> edges = [[0,1],[0,2],[1,2]], patience = [0,10,10]
<strong>Output:</strong> 3
<strong>Explanation:</strong> Data servers 1 and 2 receive a reply back at the beginning of second 2.
From the beginning of the second 3, the network becomes idle.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == patience.length</code></li>
	<li><code>2 &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li><code>patience[0] == 0</code></li>
	<li><code>1 &lt;= patience[i] &lt;= 10<sup>5</sup></code> for <code>1 &lt;= i &lt; n</code></li>
	<li><code>1 &lt;= edges.length &lt;= min(10<sup>5</sup>, n * (n - 1) / 2)</code></li>
	<li><code>edges[i].length == 2</code></li>
	<li><code>0 &lt;= u<sub>i</sub>, v<sub>i</sub> &lt; n</code></li>
	<li><code>u<sub>i</sub> != v<sub>i</sub></code></li>
	<li>There are no duplicate edges.</li>
	<li>Each server can directly or indirectly reach another server.</li>
</ul>
</div>

---




```cpp
class Solution {
public:
    int networkBecomesIdle(vector<vector<int>>& edges, vector<int>& patience) {
        int n=patience.size();
        vector<int> adj[n];
        for(int i=0;i<edges.size();i++){
            adj[edges[i][1]].push_back(edges[i][0]);
            adj[edges[i][0]].push_back(edges[i][1]);
        }
        vector<int> t(n, -1); //time
        queue<int> q;
        q.push(0);
        t[0]=0;
        while(!q.empty()){
            int curr=q.front();
            q.pop();
            for(auto u: adj[curr]){
                if(t[u]==-1){
                    t[u]=t[curr]+1;
                    q.push(u);
                }
            }
        }
        int ans=1;
        for(int i=1;i<=n-1;i++){
            int v=(2*t[i]-1)/patience[i];
            int lastSent=v*patience[i];
            int lastIn=lastSent+2*t[i];
            ans=max(ans, lastIn);
        }
        return ans+1;
    }
};
```
