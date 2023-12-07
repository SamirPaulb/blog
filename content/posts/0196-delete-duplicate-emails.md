---
title: 0196 delete duplicate emails
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 0196-delete-duplicate-emails solution
description: 0196 delete duplicate emails LeetCode Solution Explained
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




```sql
# Please write a DELETE statement and DO NOT write a SELECT statement.
# Write your MySQL query statement below


delete from Person where id not in 
(select * from (select min(id) from Person group by email) as p);



```
