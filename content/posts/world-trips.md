---
title: world trips
tags: [interviewbit]
keywords: interviewbit, interviewbit solution in Python3 C++ Java, world trips solution
description: world trips Interviewbit Solution Explained
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

# World Trips

https://www.interviewbit.com/problems/world-trips


Consider three identical airplanes starting at the same airport. Each plane has a fuel tank that holds just enough fuel to allow the plane to travel half the distance around the world. These airplanes possess the special ability to transfer fuel between their tanks in mid-flight. 
What are the maximum around the world trips that airplane1 can make?

```
Case 1: Answer is a integer. Just put the number without any decimal places if its an integer.
If the answer is Infinity, output Infinity.

Case 2: Floating point number. Round it off to 2 decimal places and output it as I.xx
where I is the integer part of the answer, and xx are 2 decimal digits after rounding off.
```

Feel free to get in touch with us if you have any questions.

## Solution Approach

Use the fact that earth is round to your benefit.


## Solution

Planes 1 and 2 take off eastbound, and travel a quarter of the way around the world.
At this point, both their tanks are half empty, so 2 transfers all of its fuel to plane 1 and lands.
Now plane 1 has a full tank.Once plane 1 is halfway around the world, plane 3 takes off
westbound and meets plane 1 when plane 1 is three quarters of the way around the world.
At this point, plane 1's tank is empty and plane 3's is half empty.
Plane 3 then transfers all its fuel to plane 1, who is thus able to finish the last quarter of the journey.

Answer: 1

