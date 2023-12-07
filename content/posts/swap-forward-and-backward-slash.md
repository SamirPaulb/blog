---
title: swap forward and backward slash
tags: [interviewbit]
keywords: interviewbit, interviewbit solution in Python3 C++ Java, swap forward and backward slash solution
description: swap forward and backward slash Interviewbit Solution Explained
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

# Swap Forward And Backward Slash

https://www.interviewbit.com/problems/swap-forward-and-backward-slash/

Write a bash script to replace all the occurrences of / with \ and \ with / in a text file named input.

For simplicity sake, you may assume:

input contains only either forward slash / or backward slash \

Example:

Assume that input has the following content:

```
\\//
```
Your script should output the following:

```
//\\
```

## Hint 
Use sed command

## Solution Approach
Note that the input cannot contain #
Replace \ with # first, then replace / with \ and then finally # with /


## Solution

### Editorial
```bash
cat input | sed 's/\\/\#/g' | sed 's/\//\\/g' | sed 's/\#/\//g'

(or)

cat input | tr '/\\' '\\/'
```

### Mine
```bash
cat input|tr '\' 'x'|tr '/' '\'|tr 'x' '/'
```


