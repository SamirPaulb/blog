---
title: 0565 array nesting
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 0565-array-nesting solution
description: 0565 array nesting LeetCode Solution Explained
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
    def arrayNesting(self, nums: List[int]) -> int:
        visited_index = set()
        res = 0
        for i in range(len(nums)):
            visited_num = set()
            cur = nums[i]
            cnt = 0
            while cur not in visited_num:
                visited_num.add(cur)
                cnt += 1
                res = max(res, cnt)
                cur = nums[cur]
                if cur in visited_index: break
                visited_index.add(cur)
        return res
    
    
    
```
