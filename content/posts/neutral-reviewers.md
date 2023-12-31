---
title: neutral reviewers
tags: [interviewbit]
keywords: interviewbit, interviewbit solution in Python3 C++ Java, neutral reviewers solution
description: neutral reviewers Interviewbit Solution Explained
cover:
    image: https://scdn.netlify.app/img/interviewbit-cover.jpg
    alt: interviewbit-cover
    caption: interviewbit-cover
image: https://scdn.netlify.app/img/interviewbit-cover.jpg
date: 2021-10-04T15:58:26+08:00
lastmod: 2022-03-04T15:58:26+08:00
draft: false
author: Samir Paul
authorLink: https://twitter.com/intent/follow?screen_name=SamirPaulb
license: CC BY 4.0
---

# Neutral Reviewers

https://www.interviewbit.com/problems/neutral-reviewers/

Write a SQL Query to find the name of all reviewers who have rated their ratings with a NULL value.

Output Schema:

reviewer_name

NOTE: Output column name has to match the given output schema.

Example Output:
```
reviewer_name
MaxPlank
NeilsBohr
Schrodinger
```

![](https://s3-us-west-2.amazonaws.com/ib-assessment-tests/problem_images/sql_course.jpg)

## Solution
### Editorial

```sql
SELECT r.reviewer_name as reviewer_name from reviewers r
INNER JOIN ratings rt
ON rt.reviewer_id = r.reviewer_id
WHERE rt.reviewer_stars IS NULL;
```

### Mine
```sql
select reviewers.reviewer_name
from reviewers
join ratings
on reviewers.reviewer_id = ratings.reviewer_id and ratings.reviewer_stars is null;
```


