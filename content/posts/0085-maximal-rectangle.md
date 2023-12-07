---
title: 0085 maximal rectangle
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 0085-maximal-rectangle solution
description: 0085 maximal rectangle LeetCode Solution Explained
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
# https://leetcode.com/problems/maximal-rectangle/
# https://youtu.be/tOylVCugy9k


class Solution:
    def maximalRectangle(self, matrix: List[List[str]]) -> int:
        if not matrix: return 0
        arr = [0 for i in range(len(matrix[0]))]
        ans = 0
        for i in range(len(matrix)):
            for j in range(len(matrix[0])):
                if matrix[i][j] == "1":
                    arr[j] = arr[j] + 1
                else: arr[j] = 0
            ans = max(ans, self.largestRectangleArea(arr))
        
        return ans
        
    def largestRectangleArea(self, heights):
        stack, lb = [], []
        for i in range(len(heights)):
            while stack:
                if heights[stack[-1]] >= heights[i]: 
                    stack.pop()
                else:
                    lb.append(stack[-1] + 1)
                    stack.append(i)
                    break
            if not stack:
                stack.append(i)
                lb.append(0)
                
        stack, rb = [], []
        for i in range(len(heights) - 1, -1, -1):
            while stack:
                if heights[stack[-1]] >= heights[i]: 
                    stack.pop()
                else:
                    rb.append(stack[-1] - 1)
                    stack.append(i)
                    break
            if not stack:
                stack.append(i)
                rb.append(len(heights) - 1)
        rb = rb[::-1]
        
        res = 0
        for i in range(len(heights)):
            width = abs(lb[i] - rb[i]) + 1
            res = max(res, width * heights[i])
        
        return res
            
            
            
# Time: O(R * C)
# Space: O(C)
```
