---
title: "Common Design questions"
description: "Common Design questions"
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


It generally depends what you are and you will be working on. Also what your level is but these are some of the more frequent interview questions.

* Design amazon's frequently viewed product page (eg. which shows the last 5 items you saw)
* Design an online poker game for multiplayer. Solve for persistence, concurrency, scale. Draw the ER diagram for this 
* Design a [url compression system] (http://www.hiredintech.com/system-design/the-system-design-process/)
* [Search engine](http://infolab.stanford.edu/~backrub/google.html) (generally asked with people who have some domain knowledge): basic crawling, collection, hashing etc. Depends on your expertise on this topic
* Design dropbox's architecture. [good talk on this](https://www.youtube.com/watch?v=PE4gwstWhmc)
* Design a [picture sharing website](http://highscalability.com/blog/2011/12/6/instagram-architecture-14-million-users-terabytes-of-photos.html). How will you store thumbnails, photos? Usage of CDNS? caching at various layers etc.
* * Design a news feed (eg. Facebook , Twitter): [news feed](http://www.quora.com/Software-Engineering-Best-Practices/What-are-best-practices-for-building-something-like-a-News-Feed)
* Design a product based on maps, eg hotel / ATM finder given a location. 
* Design malloc, free and [garbage collection system](http://courses.cs.washington.edu/courses/csep521/07wi/prj/rick.pdf). What data structures to use? decorator pattern over malloc etc.
* Design a site like [junglee.com](http://www.junglee.com/) i.e price comparision, availability on e-commerce websites. When and will you cache, how much to query, how to crawl efficiently over e-commerce sites, sharding of databases, basic database design
* A web application for instant messaging, eg [whatsapp](http://highscalability.com/blog/2014/2/26/the-whatsapp-architecture-facebook-bought-for-19-billion.html), facebook chat. Issues of each, scaling problems, status and availability notification etc.
* Design a system for collaborating over a document simultaneously (eg [google docs](https://neil.fraser.name/writing/sync/))
* (very common:) top 'n' or most frequent items of a running stream of data
* Design election commission architecture :
 Let's say we work with the Election Commission. On Counting day, we want to collate the votes received at the lakhs of voting booths all over the country. Each booth has a voting machine, which, when connected to the network, returns an array of the form {[party_id, num_votes],[party_id_2, num_votes_2],...}. We want to collect these and get the current scores in real time. The report we need continuously is how many seats is each party leading in. Please design a system for this.
* Design a logging system
 (For web applications, it is common to have a large number of servers running the same application, with a load balancer in front to distribute the incoming requests. In this scenario, we want to check and alarm in case an exception is thrown in any of the servers. We want a system that checks for the appearance of specific words, "Exception", "Disk Full" etc. in the logs of any of the servers. How would you design this system?)
