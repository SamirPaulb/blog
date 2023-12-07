---
title: maximum score from removing substrings
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, maximum-score-from-removing-substrings solution
description: maximum score from removing substrings LeetCode Solution Explained
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


<h2>1717. Maximum Score From Removing Substrings</h2><h3>Medium</h3><hr><div><p>You are given a string <code>s</code> and two integers <code>x</code> and <code>y</code>. You can perform two types of operations any number of times.</p>

<ul>
	<li>Remove substring <code>"ab"</code> and gain <code>x</code> points.

	<ul>
		<li>For example, when removing <code>"ab"</code> from <code>"c<u>ab</u>xbae"</code> it becomes <code>"cxbae"</code>.</li>
	</ul>
	</li>
	<li>Remove substring <code>"ba"</code> and gain <code>y</code> points.
	<ul>
		<li>For example, when removing <code>"ba"</code> from <code>"cabx<u>ba</u>e"</code> it becomes <code>"cabxe"</code>.</li>
	</ul>
	</li>
</ul>

<p>Return <em>the maximum points you can gain after applying the above operations on</em> <code>s</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> s = "cdbcbbaaabab", x = 4, y = 5
<strong>Output:</strong> 19
<strong>Explanation:</strong>
- Remove the "ba" underlined in "cdbcbbaaa<u>ba</u>b". Now, s = "cdbcbbaaab" and 5 points are added to the score.
- Remove the "ab" underlined in "cdbcbbaa<u>ab</u>". Now, s = "cdbcbbaa" and 4 points are added to the score.
- Remove the "ba" underlined in "cdbcb<u>ba</u>a". Now, s = "cdbcba" and 5 points are added to the score.
- Remove the "ba" underlined in "cdbc<u>ba</u>". Now, s = "cdbc" and 5 points are added to the score.
Total score = 5 + 4 + 5 + 5 = 19.</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> s = "aabbaaxybbaabb", x = 5, y = 4
<strong>Output:</strong> 20
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= x, y &lt;= 10<sup>4</sup></code></li>
	<li><code>s</code> consists of lowercase English letters.</li>
</ul>
</div>

---




```cpp
class Solution {
public:
    
    int solve(string &s, char a, char b){
        stack<char> st;
        int n=s.size();
        int ans=0;
        for(int i=0;i<n;i++){
            if(st.empty()){
                st.push(s[i]);
            }
            else{
                if(st.top()==a && s[i]==b){
                    st.pop();
                    ans++;
                }
                else{
                    st.push(s[i]);
                }
            }
        }
        string str;
        while(!st.empty()){
            str+=st.top();
            st.pop();
        }
        reverse(str.begin(), str.end());
        s=str;
        return ans;
    }
    
    int maximumGain(string s, int x, int y) {
        int n=s.size();
        int xx,yy;
        if(x>y){
            xx=solve(s, 'a', 'b');
            yy=solve(s, 'b', 'a');
        }
        else{
            yy=solve(s, 'b', 'a');
            xx=solve(s, 'a', 'b');
        }
        return xx*x+yy*y;
    }
};
```
