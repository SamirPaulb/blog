---
title: letter combinations of a phone number
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, letter-combinations-of-a-phone-number solution
description: letter combinations of a phone number LeetCode Solution Explained
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


<h2>  Letter Combinations of a Phone Number</h2><hr><div><p>Given a string containing digits from <code>2-9</code> inclusive, return all possible letter combinations that the number could represent. Return the answer in <strong>any order</strong>.</p>

<p>A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.</p>

<p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Telephone-keypad2.svg/200px-Telephone-keypad2.svg.png" style="width: 200px; height: 162px;"></p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> digits = "23"
<strong>Output:</strong> ["ad","ae","af","bd","be","bf","cd","ce","cf"]
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> digits = ""
<strong>Output:</strong> []
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> digits = "2"
<strong>Output:</strong> ["a","b","c"]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= digits.length &lt;= 4</code></li>
	<li><code>digits[i]</code> is a digit in the range <code>['2', '9']</code>.</li>
</ul>
</div>

---




```cpp
class Solution {
public:
    vector<string> ans;
    unordered_map<char, string> m;
    
    
    void backtrack(int p, string s, string d){
        if(s.size()==d.size()){
            ans.push_back(s);
            return;
        }
        for(int i=p;i<d.size();i++){
            char c=d[i];
            for(int j=0;j<m[c].size();j++){
                char ch=m[c][j];
                s.push_back(ch);
                backtrack(i+1, s, d);
                s.pop_back();
            }
        }
    }
    
    vector<string> letterCombinations(string digits) {
        string s="";
        m['2']="abc";
        m['3']="def";
        m['4']="ghi";
        m['5']="jkl";
        m['6']="mno";
        m['7']="pqrs";
        m['8']="tuv";
        m['9']="wxyz";
        if(digits.size()==0)
            return ans;
        backtrack(0, s, digits);
        return ans;
    }
};
```


```python
class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        digitToChar = {
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz",
        }
        
        res = []
        
        def dfs(i, curStr):
            if len(curStr) == len(digits):
                res.append(curStr)
                return
            
            for ch in digitToChar[digits[i]]:
                dfs(i+1, curStr + ch)
            
        dfs(0, "")
        return res if len(digits) != 0 else []

    
# Time: O(n 4^n)
# Space: O(n)
```
