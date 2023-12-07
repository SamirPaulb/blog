---
title: validate ip address
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, validate-ip-address solution
description: validate ip address LeetCode Solution Explained
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


<h2>468. Validate IP Address</h2><h3>Medium</h3><hr><div><p>Given a string <code>IP</code>, return <code>"IPv4"</code> if IP is a valid IPv4 address,&nbsp;<code>"IPv6"</code> if&nbsp;IP is a valid IPv6 address or <code>"Neither"</code> if IP is not a correct IP of any type.</p>

<p><strong>A valid IPv4</strong> address&nbsp;is an IP in the form <code>"x<sub>1</sub>.x<sub>2</sub>.x<sub>3</sub>.x<sub>4</sub>"</code> where <code>0 &lt;=&nbsp;x<sub><span style="font-size: 10.8333px;">i</span></sub>&nbsp;&lt;= 255</code> and <code>x<sub>i</sub></code> <strong>cannot contain</strong> leading zeros. For example, <code>"192.168.1.1"</code> and&nbsp;<code>"192.168.1.0"</code> are valid IPv4 addresses but <code>"192.168.01.1"</code>, while <code>"192.168.1.00"</code>&nbsp;and <code>"192.168@1.1"</code> are invalid IPv4 addresses.</p>

<p><strong>A valid IPv6</strong> address&nbsp;is an IP in the form <code>"x<sub>1</sub>:x<sub>2</sub>:x<sub>3</sub>:x<sub>4:</sub>x<sub>5</sub>:x<sub>6</sub>:x<sub>7</sub>:x<sub>8</sub>"</code> where:</p>

<ul>
	<li><code>1 &lt;= x<sub>i</sub>.length &lt;= 4</code></li>
	<li><code>x<sub>i</sub></code> is a&nbsp;<strong>hexadecimal string</strong> which may contain digits, lower-case English letter (<code>'a'</code> to <code>'f'</code>) and upper-case English letters (<code>'A'</code> to <code>'F'</code>).</li>
	<li>Leading zeros are allowed in <code>x<sub>i</sub></code>.</li>
</ul>

<p>For example,&nbsp;"<code>2001:0db8:85a3:0000:0000:8a2e:0370:7334"</code>&nbsp;and "<code>2001:db8:85a3:0:0:8A2E:0370:7334"</code> are valid IPv6 addresses, while "<code>2001:0db8:85a3::8A2E:037j:7334"</code>&nbsp;and "<code>02001:0db8:85a3:0000:0000:8a2e:0370:7334"</code> are invalid IPv6 addresses.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> IP = "172.16.254.1"
<strong>Output:</strong> "IPv4"
<strong>Explanation:</strong> This is a valid IPv4 address, return "IPv4".
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> IP = "2001:0db8:85a3:0:0:8A2E:0370:7334"
<strong>Output:</strong> "IPv6"
<strong>Explanation:</strong> This is a valid IPv6 address, return "IPv6".
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> IP = "256.256.256.256"
<strong>Output:</strong> "Neither"
<strong>Explanation:</strong> This is neither a IPv4 address nor a IPv6 address.
</pre>

<p><strong>Example 4:</strong></p>

<pre><strong>Input:</strong> IP = "2001:0db8:85a3:0:0:8A2E:0370:7334:"
<strong>Output:</strong> "Neither"
</pre>

<p><strong>Example 5:</strong></p>

<pre><strong>Input:</strong> IP = "1e1.4.5.6"
<strong>Output:</strong> "Neither"
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>IP</code> consists only of English letters, digits and the characters <code>'.'</code> and <code>':'</code>.</li>
</ul>
</div>

---




```cpp
class Solution {
public:
    int helper1(string s){
        int n=s.size();
        if(s[n-1]=='.') return -1;
        vector<string>v;
        string temp;
        stringstream ss(s);
        while(getline(ss,temp,'.')){
            if(temp.size()==0) return -1;
            v.push_back(temp);
        }
        if(v.size()>4 || v.size() <4) return -1;
        for(auto i:v){
            if(i.size()>3 || i.size()<1) return -1;
            for(auto j:i){
                if(isalpha(j)) return -1;
            }
            int num=stoi(i);
            if(num==0 && i.size()>=2) return -1;
            if(num>0 && i[0]=='0') return -1;
            if(num>255 || num<0 ) return -1;
        }
        return 1;
    }
    bool ischaracter(char c){
        if(isdigit(c)) return true;
        if(isalpha(c)){
            if(c=='a' || c=='b'|| c=='c'||c=='d'||c=='e'||c=='f' || c=='A'|| c=='B'|| c=='C'||c=='D' ||c=='E'|| c=='F') return true;
            else return false;
        }
        return false;
    }
    int helper2(string s){
        if(s.size()<15) return -1;
        vector<string>v;
        string temp;
        stringstream ss(s);
        int n=s.size();
        if(s[n-1]==':') return -1;
        while(getline(ss,temp,':')){
            if(temp.size()==0) return -1;
            v.push_back(temp);
        }
        if(v.size()<8 || v.size()>8) return -1;
        for(auto i:v){
            if(i.size()>4 ||i.size()<1) return -1;
            for(auto j:i){
                if(!ischaracter(j)) return -1;
            }
        }
        return 1;
    }
    string validIPAddress(string IP) {
        if(IP.size()==0) return "Neither";
        if(helper1(IP)==1) return "IPv4";
        if(helper2(IP)==1) return "IPv6";
        return "Neither";
    }
};
```
