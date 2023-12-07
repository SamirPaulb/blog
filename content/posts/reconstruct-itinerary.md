---
title: reconstruct itinerary
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, reconstruct-itinerary solution
description: reconstruct itinerary LeetCode Solution Explained
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


<h2>332. Reconstruct Itinerary</h2><h3>Medium</h3><hr><div><p>Given a list of airline tickets represented by pairs of departure and arrival airports <code>[from, to]</code>, reconstruct the itinerary in order. All of the tickets belong to a man who departs from <code>JFK</code>. Thus, the itinerary must begin with <code>JFK</code>.</p>

<p><b>Note:</b></p>

<ol>
	<li>If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string. For example, the itinerary <code>["JFK", "LGA"]</code> has a smaller lexical order than <code>["JFK", "LGB"]</code>.</li>
	<li>All airports are represented by three capital letters (IATA code).</li>
	<li>You may assume all tickets form at least one valid itinerary.</li>
	<li>One must use all the tickets once and only once.</li>
</ol>

<p><b>Example 1:</b></p>

<pre><code><strong>Input: </strong></code><code>[["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]</code>
<strong>Output: </strong><code>["JFK", "MUC", "LHR", "SFO", "SJC"]</code>
</pre>

<p><b>Example 2:</b></p>

<pre><code><strong>Input: </strong></code><code>[["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]</code>
<strong>Output: </strong><code>["JFK","ATL","JFK","SFO","ATL","SFO"]</code>
<strong>Explanation: </strong>Another possible reconstruction is <code>["JFK","SFO","ATL","JFK","ATL","SFO"]</code>.
&nbsp;            But it is larger in lexical order.
</pre>
</div>

---




```cpp
class Solution {
public:
    unordered_map<string, multiset<string>> adj;
    
    vector<string> findItinerary(vector<vector<string>>& tickets) {
        for(int i=0;i<tickets.size();i++)
            adj[tickets[i][0]].insert(tickets[i][1]);
        vector<string> ans;
        stack<string> st;
        st.push("JFK");
        while(!st.empty()){
            string s=st.top();
            if(adj[s].size()==0){
                ans.push_back(s);
                st.pop();
            }
            else{
                auto dst=adj[s].begin();
                st.push(*dst);
                adj[s].erase(dst);
            }
        }
        reverse(ans.begin(),ans.end());
        return ans;
    }
};
```
