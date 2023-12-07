---
title: encode and decode tinyurl
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, encode-and-decode-tinyurl solution
description: encode and decode tinyurl LeetCode Solution Explained
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


[Discussion Post (created on 19/1/2021 at 0:54)](https://leetcode.com/problems/encode-and-decode-tinyurl/discuss/1071815/C%2B%2B-or-Map)  
<h2>535. Encode and Decode TinyURL</h2><h3>Medium</h3><hr><div><blockquote>Note: This is a companion problem to the <a href="https://leetcode.com/discuss/interview-question/system-design/" target="_blank">System Design</a> problem: <a href="https://leetcode.com/discuss/interview-question/124658/Design-a-URL-Shortener-(-TinyURL-)-System/" target="_blank">Design TinyURL</a>.</blockquote>

<p>TinyURL is a URL shortening service where you enter a URL such as <code>https://leetcode.com/problems/design-tinyurl</code> and it returns a short URL such as <code>http://tinyurl.com/4e9iAk</code>.</p>

<p>Design the <code>encode</code> and <code>decode</code> methods for the TinyURL service. There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.</p>
</div>

---




```cpp
class Solution {
public:
    string s="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    int id = 0;
    map<string, string> url;
    
    string solve(int n){
        string ans;
        if(n<62){
            return s.substr(0, s[n]);
        }
        while(n>0){
            ans+=s[n%62];
            n=n/62;
        }
        reverse(ans.begin(), ans.end());
        return ans;
    }
    
    // Encodes a URL to a shortened URL.
    string encode(string longUrl) {
        string s=solve(id);
        id++;
        url[s]=longUrl;
        return "http://tinyurl.com/" + s;
    }

    // Decodes a shortened URL to its original URL.
    string decode(string shortUrl) {
        int ind=shortUrl.size()-1;
        while(shortUrl[ind]!='/')
            ind--;
        string s=shortUrl.substr(ind+1);
        return url[s];
    }
};

// Your Solution object will be instantiated and called as such:
// Solution solution;
// solution.decode(solution.encode(url));
```
