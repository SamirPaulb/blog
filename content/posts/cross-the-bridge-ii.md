---
title: cross the bridge ii
tags: [interviewbit]
keywords: interviewbit, interviewbit solution in Python3 C++ Java, cross the bridge ii solution
description: cross the bridge ii Interviewbit Solution Explained
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

# Cross the Bridge II

https://www.interviewbit.com/problems/cross-the-bridge-ii/

A farmer is returning from market, where he bought a she-goat, a wolf and cabbage. 
On the way home he must cross a river.

His boat is little, allowing him to take only one of the three things. 
He can’t keep the she-goat and the cabbage together (because the she-goat would eat it), nor the she-goat with the wolf (because the she-goat would be eaten).

How many minimum trips for the farmer to get everything on the other side (without any harm)? 
Crossing the river counts as one trip.

Answer is a integer. Just put the number without any decimal places if its an integer.
If the answer is Infinity, output Infinity. Feel free to get in touch with us if you have any questions.


## Solution 

The answer is 7:

1. farmer crosses with goat
2. farmer returns alone
3. farmer crosses with cabbage or wolf
4. farmer returns with goat
5. farmer crosses with whichever (cabbage or wolf) he didn’t take the first time
6. farmer returns alone
7. farmer crosses with goat

they are all on the other side
