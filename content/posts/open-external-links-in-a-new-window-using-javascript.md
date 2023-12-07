---
title: "Open External Links in a New Window Using Javascript"
summary: "Open External Links in a New Window Using Javascript"
date: 2022-12-27T10:54:35Z
description: "Open External Links in a New Window Using Javascript"
tags: [blog, coding, computer-science, external-links-in-a-new-tab, jekyll, hugo, external-links-in-a-new-tab-jekyll, external-links-in-a-new-tab-hugo, javascript, external-links-in-a-new-tab-using-javascript, target-blank, jekyll-target-blank, jekyll-target-blank-using-javascript, open-external-links, open-external-links-javascript]

cover:
  image: "/assets/img/open-external-links-in-a-new-window-using-javascript.webp"
  alt: "Open External Links in a New Window Using Javascript"
  caption: "Open External Links in a New Window Using Javascript"

images:
  - /assets/img/open-external-links-in-a-new-window-using-javascript.webp

# videos:
#   - filename01.mov
#   - filename02.avi

draft: false
author: "Samir Paul"
authorLink: "https://twitter.com/intent/follow?screen_name=SamirPaulb"
license: "CC BY 4.0"
draft: false

# editPost:
#   URL: "https://github.com/SamirPaul1/blog"
#   Text: "Suggest Changes" # edit text
#   appendFilePath: true # to append file path to Edit link

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


This is a quick post showing how to use JavaScript to make links to external websites open in a new window (or tab) instead of in the current window. This is useful for ```Jekyll``` blogs because the Markdown converters don’t do this for you. I included two versions: one that uses straight JavaScript, and one that requires ```jQuery``` but is shorter.

Both versions work basically the same way: grab all anchor tags ```<a href="#">``` that are linking to somewhere other than your development environment or a page on your site and then attribute ```target="_blank"``` to those tags. Because this is JavaScript, users with JavaScript disabled will still experience the old behavior, but otherwise won’t be adversely affected.


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


### Straight JavaScript
This version does not require any jQuery (or any other libraries):

```js
function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState != 'loading')
        fn();
    });
  }
}

ready(function() {

  var website = window.location.hostname;

  var internalLinkRegex = new RegExp('^((((http:\\/\\/|https:\\/\\/)(www\\.)?)?'
                                     + website
                                     + ')|(localhost:\\d{4})|(\\/.*))(\\/.*)?$', '');

  var anchorEls = document.querySelectorAll('a');
  var anchorElsLength = anchorEls.length;

  for (var i = 0; i < anchorElsLength; i++) {
    var anchorEl = anchorEls[i];
    var href = anchorEl.getAttribute('href');

    if (!internalLinkRegex.test(href)) {
      anchorEl.setAttribute('target', '_blank');
    }
  }
});

```

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


### jQuery
This version requires jQuery in order to work, but if you’re using jQuery on your site anyway, it avoids reinventing the wheel:

```js
$(document).ready(function() {

  var website = window.location.hostname;

  var internalLinkRegex = new RegExp('^((((http:\\/\\/|https:\\/\\/)(www\\.)?)?'
                                     + website
                                     + ')|(localhost:\\d{4})|(\\/.*))(\\/.*)?$', '');

  $('a').filter(function() {
    var href = $(this).attr('href');
    return !internalLinkRegex.test(href);
  })
  .each(function() {
    $(this).attr('target', '_blank');
  });

});

```

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


### My Implementation for Jekyll Blog
I have created a file called [external-links-new-window.html](https://raw.githubusercontent.com/SamirPaulb/assets/main/external-links-new-window.html) inside ```_includes``` directory and referred it from ```_layouts/default.html``` as ```{% include external-links-new-window.html %}```.


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

