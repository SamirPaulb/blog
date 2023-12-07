---
title: 1581 customer who visited but did not make any transactions
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 1581-customer-who-visited-but-did-not-make-any-transactions solution
description: 1581 customer who visited but did not make any transactions LeetCode Solution Explained
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
# Write your MySQL query statement below
select distinct customer_id, count(visit_id) as count_no_trans from Visits where visit_id not in (select distinct visit_id from Transactions) group by customer_id;


```
