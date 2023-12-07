---
title: 692 top k frequent words
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 692-top-k-frequent-words solution
description: 692 top k frequent words LeetCode Solution Explained
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




---




```python
class Solution:
    def topKFrequent(self, words: List[str], k: int) -> List[str]:
        wordCount = {word:0 for word in words}
        countWord = {}
        
        for word in words:
            wordCount[word] += 1
        
        for word in wordCount:
            if wordCount[word] not in countWord:
                countWord[wordCount[word]] = [word]       
            else:
                countWord[wordCount[word]].append(word)
        
        counts = sorted(list(set(wordCount.values())), reverse = True)
        
        res = []
        for count in counts:
            arr = sorted(countWord[count])
            if len(arr) + len(res) > k:
                e = len(arr) + len(res) - k
                res += arr[:-e]
            else:
                res += arr
                
        return res
```
