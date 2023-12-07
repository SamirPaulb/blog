---
title: grep
tags: [interviewbit]
keywords: interviewbit, interviewbit solution in Python3 C++ Java, grep solution
description: grep Interviewbit Solution Explained
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

# Grep

https://www.interviewbit.com/problems/grep/

The following command prints all the lines of the file input which contains a number

`cat input | grep '[0-9]*'`

Example:
Assume that the input has the following content:
```
axes12
w143th
qwer
```
Then the given command prints the following ouput:
```
axes12
w143th
```

Now change the command slighly so that it prints only the number part of the lines.


Example:
Assume that the input has the following content:
```
axes12
w143th
qwer
```
Then your new command should ouput the following content
```
12
143
```

## Hint 1
Read about different flags of grep.

## Solution Approach
How do you print only the matched pattern using grep?

## Solution
```bash
cat input | grep -o '[0-9]*'
```

