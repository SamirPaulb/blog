---
title: remove k digits
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, remove-k-digits solution
description: remove k digits LeetCode Solution Explained
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


[Discussion Post (created on 1/1/2021 at 16:13)](https://leetcode.com/problems/remove-k-digits/discuss/1044925/Simple-C%2B%2B-or-Using-string-as-stack)  
<h2>402. Remove K Digits</h2><h3>Medium</h3><hr><div><p>Given a non-negative integer <i>num</i> represented as a string, remove <i>k</i> digits from the number so that the new number is the smallest possible.
</p>

<p><b>Note:</b><br>
</p><ul>
<li>The length of <i>num</i> is less than 10002 and will be ≥ <i>k</i>.</li>
<li>The given <i>num</i> does not contain any leading zero.</li>
</ul>

<p></p>

<p><b>Example 1:</b>
</p><pre>Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
</pre>
<p></p>

<p><b>Example 2:</b>
</p><pre>Input: num = "10200", k = 1
Output: "200"
Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
</pre>
<p></p>

<p><b>Example 3:</b>
</p><pre>Input: num = "10", k = 2
Output: "0"
Explanation: Remove all the digits from the number and it is left with nothing which is 0.
</pre>
<p></p></div>

---




```cpp
class Solution {
public:
    string removeKdigits(string num, int k) {
        string ans="";
        for(char c: num){
            while(ans.back()>c && ans.size()>0 && k>0){
                ans.pop_back();
                k--;
            }
            if(ans.size()!=0)
             ans.push_back(c);
            else if(c!='0')
             ans.push_back(c);
        }
        while(k>0 && ans.size()!=0){
            ans.pop_back();
            k--;
        }
        return (ans.size()==0)?"0":ans;
    }
};
```
