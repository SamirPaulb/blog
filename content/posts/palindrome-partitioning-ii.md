---
title: palindrome partitioning ii
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, palindrome-partitioning-ii solution
description: palindrome partitioning ii LeetCode Solution Explained
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


<h2>132. Palindrome Partitioning II</h2><h3>Hard</h3><hr><div><p>Given a string <code>s</code>, partition <code>s</code> such that every substring of the partition is a palindrome.</p>

<p>Return <em>the minimum cuts needed</em> for a palindrome partitioning of <code>s</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> s = "aab"
<strong>Output:</strong> 1
<strong>Explanation:</strong> The palindrome partitioning ["aa","b"] could be produced using 1 cut.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> s = "a"
<strong>Output:</strong> 0
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> s = "ab"
<strong>Output:</strong> 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 2000</code></li>
	<li><code>s</code> consists of lower-case English letters only.</li>
</ul>
</div>

---




```cpp
class Solution {
public:
    int t[2002][2002];
    
    bool isPalindrome(string &s, int i, int j){
        while(i<=j){
            if(s[i]!=s[j])
                return false;
            i++;
            j--;
        }
        return true;
    }
    
    int solve(string s, int i, int j){
        if(t[i][j]!=-1)
            return t[i][j];
        if(i>=j)
            return 0;
        if(isPalindrome(s,i,j))
            return t[i][j]=0;
        int ans=INT_MAX;
        for(int k=i;k<=j-1;k++){
            int temp=0;
            if(isPalindrome(s,i,k)){
                temp=solve(s,k+1,j)+1;
            }
            else{
                t[i][j]=0;
                continue;
            }
            ans=min(ans,temp);
        }
        return t[i][j]=ans;
    }
    
    
    int minCut(string s) {
        int n=s.size();
        memset(t,-1,sizeof(t));
        return solve(s,0,n-1);
    }
};
```
