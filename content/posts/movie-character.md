---
title: movie character
tags: [interviewbit]
keywords: interviewbit, interviewbit solution in Python3 C++ Java, movie character solution
description: movie character Interviewbit Solution Explained
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

# Movie Character

https://www.interviewbit.com/problems/movie-character/


Write a SQL Query to find the movie_title and name of director (first and last names combined) who directed a movie that casted a role as 'SeanMaguire'.

### Output Schema
```
director_name,movie_title
```
NOTE:

Output column name has to match the given output schema.
Any name is the concatenation(without any delimiter) of first and last name if present
(E.g. if director_first_name is 'Alfred' and director_last_name is 'Hitchcock' then director_name is 'AlfredHitchcock')

### Example Output

```
director_name,movie_title
AlfredHitchcock,Vertigo
```

### Schema Design

![](https://s3-us-west-2.amazonaws.com/ib-assessment-tests/problem_images/sql_course.jpg)

## Solution
```sql
select concat(directors.director_first_name,director_last_name) as director_name,movies.movie_title
from movies join movies_directors on movies.movie_id=movies_directors.movie_id
join movies_cast on movies_cast.movie_id=movies.movie_id
join directors on movies_directors.director_id=directors.director_id
where movies_cast.role="SeanMaguire";
```
