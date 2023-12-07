---
title: valid phone number
tags: [interviewbit]
keywords: interviewbit, interviewbit solution in Python3 C++ Java, valid phone number solution
description: valid phone number Interviewbit Solution Explained
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

# Valid phone number

https://www.interviewbit.com/problems/valid-phone-number/

Given a text file input that contains list of phone numbers (one per line).

Write a bash script to print all valid phone numbers.You may assume that a valid phone number must appear in one of the following two formats:

1. (xxx) xxx-xxxx
2. xxx-xxx-xxxx

You may also assume each line in the text file must not contain leading or trailing white spaces.

### Sample Input
```
987-123-4567
123 456 7890
(123) 456-7890
```
### Sample output
```
987-123-4567
(123) 456-7890
```

## Hint 1

you need to use grep

## Solution Approach

you need to use grep along with a regular expression.

## Solution
### Tutorial

```bash
grep -P '^(\d{3}-|\(\d{3}\) )\d{3}-\d{4}$' input

```

### Mine
```bash
cat input | tr -s ' ' | grep "^(*[0-9]\{3,3\})*[ -][0-9]\{3,3\}-[0-9]\{4,4\}$"
```
