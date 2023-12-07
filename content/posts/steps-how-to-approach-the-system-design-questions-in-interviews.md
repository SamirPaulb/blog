---
title: "Steps how to approach the system design questions in interviews"
description: "Steps how to approach the system design questions in interviews"
tags: [blog, coding, computer-science, system-design, design-interview, preparation]
date: 2022-10-04T15:58:26+08:00
lastmod: 2022-03-04T15:58:26+08:00
draft: false
author: "Samir Paul"
authorLink: "https://twitter.com/intent/follow?screen_name=SamirPaulb"
license: "CC BY 4.0"
draft: false
---

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8274401353019049"
     crossorigin="anonymous"></script>
<!-- Display ads -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-8274401353019049"
     data-ad-slot="5522300086"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>


These are the steps to go through mentally in the interviews, followed by actual interview experiences:

* a) **Be absolutely sure you understand the problem being asked**, clarify on the onset rather than assuming anything 
* b) **Use-cases**. This is critical, you MUST know what is the system going to be used for, what is the scale it is going to be used for. Also, constraints like requests per second, requests types, data written per second, data read per second.
* c) Solve the problem for a **very small set**, say, 100 users. This will broadly help you figure out the data structures, components, abstract design of the overall model.
* d) Write down the various components figured out so far and how will they interact with each other.
* e)  As a rule of thumb remember at least these :
 * 1. processing and servers
 * 2. storage 
 * 3. caching 
 * 4. concurrency and communication
 * 5. security 
 * 6. load balancing and proxy 
 * 7. CDN 
 * 8.  Monetization: if relevant, how will you monetize?
 eg. What kind of DB (Is Postgres enough, if not why?), do you need caching and how much, is security a prime concern? 
* f) **Special cases** for the question asked. Say designing a system for storing thumbnails, will a file system be enough? What if you have to scale for facebook or google? Will a nosql based database work?
* g) After I have my components in place, what I generally try to do is look for minor optimization in various places according to the use-cases, various tradeoffs that will help in better scaling in 99% cases.
* h) [Scaling out or up]  (http://highscalability.com/blog/2014/5/12/4-architecture-issues-when-scaling-web-applications-bottlene.html)
* i) Check with the interviewer is there any other special case he is looking to solve? Also, it really helps if you know about the company you are interviewing with, what its architecture is, what will the interviewer have more interest in based on the company and what he works on? 

