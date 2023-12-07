---
title: unique email addresses
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, unique-email-addresses solution
description: unique email addresses LeetCode Solution Explained
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


<h2>929. Unique Email Addresses</h2><h3>Easy</h3><hr><div><p>Every <strong>valid email</strong> consists of a <strong>local name</strong> and a <strong>domain name</strong>, separated by the <code>'@'</code> sign. Besides lowercase letters, the email may contain one or more <code>'.'</code> or <code>'+'</code>.</p>

<ul>
	<li>For example, in <code>"alice@leetcode.com"</code>, <code>"alice"</code> is the <strong>local name</strong>, and <code>"leetcode.com"</code> is the <strong>domain name</strong>.</li>
</ul>

<p>If you add periods <code>'.'</code> between some characters in the <strong>local name</strong> part of an email address, mail sent there will be forwarded to the same address without dots in the local name. Note that this rule <strong>does not apply</strong> to <strong>domain names</strong>.</p>

<ul>
	<li>For example, <code>"alice.z@leetcode.com"</code> and <code>"alicez@leetcode.com"</code> forward to the same email address.</li>
</ul>

<p>If you add a plus <code>'+'</code> in the <strong>local name</strong>, everything after the first plus sign <strong>will be ignored</strong>. This allows certain emails to be filtered. Note that this rule <strong>does not apply</strong> to <strong>domain names</strong>.</p>

<ul>
	<li>For example, <code>"m.y+name@email.com"</code> will be forwarded to <code>"my@email.com"</code>.</li>
</ul>

<p>It is possible to use both of these rules at the same time.</p>

<p>Given an array of strings <code>emails</code> where we send one email to each <code>email[i]</code>, return <em>the number of different addresses that actually receive mails</em>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
<strong>Output:</strong> 2
<strong>Explanation:</strong> "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]
<strong>Output:</strong> 3
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= emails.length &lt;= 100</code></li>
	<li><code>1 &lt;= emails[i].length &lt;= 100</code></li>
	<li><code>email[i]</code> consist of lowercase English letters, <code>'+'</code>, <code>'.'</code> and <code>'@'</code>.</li>
	<li>Each <code>emails[i]</code> contains exactly one <code>'@'</code> character.</li>
	<li>All local and domain names are non-empty.</li>
	<li>Local names do not start with a <code>'+'</code> character.</li>
</ul>
</div>

---




```cpp
class Solution {
public:
    int numUniqueEmails(vector<string>& emails) {
        int n=emails.size();
        map<string, int> m;
        for(int i=0;i<n;i++){
            string s=emails[i];
            int sz=s.size();
            string k="";
            int ind=-1;
            for(int j=0;j<sz;j++){
                if(s[j]=='@'){
                    ind=j;
                    break;
                }
            }
            for(int j=0;j<ind;j++){
                if(s[j]=='+'){
                    break;
                }
                else if(s[j]!='.')
                    k+=s[j];
            }
            for(int j=ind;j<sz;j++){
                    k+=s[j];
            }
            m[k]++;
        }
        return m.size();
    }
};
```
