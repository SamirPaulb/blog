---
title: "TCP vs UDP"
description: "TCP vs UDP"
tags: [blog, coding, computer-science]
date: 2022-10-04T15:58:26+08:00
lastmod: 2022-03-04T15:58:26+08:00
draft: false
author: "Samir Paul"
authorLink: "https://twitter.com/intent/follow?screen_name=SamirPaulb"
license: "CC BY 4.0"
draft: false
---


TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) are two of the most commonly used protocols for transmitting data over a network.

TCP is a reliable and connection-oriented protocol, meaning that a virtual connection must be established between the sender and the receiver before data can be transmitted. It ensures that data is delivered to the recipient in the same order it was sent, and that it is received without errors. If a packet of data is lost or corrupted during transmission, TCP will automatically retransmit the missing data until it is successfully received. This makes TCP a great choice for applications that require reliable data transfer, such as email and file transfers.

UDP, on the other hand, is a connectionless and unreliable protocol. Unlike TCP, it does not establish a virtual connection between the sender and the receiver, and it does not guarantee that the data will be delivered in the same order it was sent. It is faster than TCP because it has less overhead, but it is less reliable. UDP is often used for applications that do not require reliable data transfer and can tolerate some lost or corrupted data, such as video or audio streaming, online gaming, and voice over IP (VoIP).

In summary, TCP is best for applications that require reliable data transfer, while UDP is best for applications that can tolerate some loss and do not require reliable data transfer.



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