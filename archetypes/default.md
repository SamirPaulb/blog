---
title: "{{ replace .Name "-" " " | title }}"
summary: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
description: "{{ replace .Name "-" " " | title }}"
tags: [blog, coding, computer-science]
cover:
  image: "https://scdn.netlify.app/blog-featured-image-samirpaul-in-blog.webp"
  alt: "{{ replace .Name "-" " " | title }}"
  caption: "{{ replace .Name "-" " " | title }}"

images:
  - https://scdn.netlify.app/blog-featured-image-samirpaul-in-blog.webp

# videos: 
#   - filename01.mov
#   - filename02.avi

draft: false
author: "Samir Paul"
authorLink: "https://twitter.com/intent/follow?screen_name=SamirPaulb"
license: "CC BY 4.0"
draft: false

# editPost:
#   URL: "https://github.com/SamirPaulb/blog"
#   Text: "Suggest Changes" # edit text
#   appendFilePath: true # to append file path to Edit link

---
