---
title: remove sub folders from the filesystem
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, remove-sub-folders-from-the-filesystem solution
description: remove sub folders from the filesystem LeetCode Solution Explained
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


<h2>1233. Remove Sub-Folders from the Filesystem</h2><h3>Medium</h3><hr><div><p>Given a list of folders, remove all sub-folders in those folders and return in <strong>any order</strong> the folders after removing.</p>

<p>If a <code>folder[i]</code> is located within&nbsp;another <code>folder[j]</code>, it is called a&nbsp;sub-folder&nbsp;of it.</p>

<p>The format of a path is&nbsp;one or more concatenated strings of the form:&nbsp;<code>/</code>&nbsp;followed by one or more lowercase English letters. For example,&nbsp;<code>/leetcode</code>&nbsp;and&nbsp;<code>/leetcode/problems</code>&nbsp;are valid paths while an empty string and&nbsp;<code>/</code>&nbsp;are not.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> folder = ["/a","/a/b","/c/d","/c/d/e","/c/f"]
<strong>Output:</strong> ["/a","/c/d","/c/f"]
<strong>Explanation:</strong> Folders "/a/b/" is a subfolder of "/a" and "/c/d/e" is inside of folder "/c/d" in our filesystem.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> folder = ["/a","/a/b/c","/a/b/d"]
<strong>Output:</strong> ["/a"]
<strong>Explanation:</strong> Folders "/a/b/c" and "/a/b/d/" will be removed because they are subfolders of "/a".
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> folder = ["/a/b/c","/a/b/ca","/a/b/d"]
<strong>Output:</strong> ["/a/b/c","/a/b/ca","/a/b/d"]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= folder.length&nbsp;&lt;= 4 * 10^4</code></li>
	<li><code>2 &lt;= folder[i].length &lt;= 100</code></li>
	<li><code>folder[i]</code> contains only&nbsp;lowercase letters and '/'</li>
	<li><code>folder[i]</code> always starts with character '/'</li>
	<li>Each folder name is unique.</li>
</ul>
</div>

---




```cpp
class Solution {
public:
    vector<string> removeSubfolders(vector<string>& folder) {
        sort(folder.begin(), folder.end());
        vector<string> ans;
        ans.push_back(folder[0]);
        for(int i=1;i<folder.size();i++){
            if(folder[i].find(ans[ans.size()-1]+"/")==string::npos)
                ans.push_back(folder[i]);
        }
        return ans;
    }
};
```
