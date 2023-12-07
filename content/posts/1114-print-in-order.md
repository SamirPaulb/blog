---
title: 1114 print in order
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 1114-print-in-order solution
description: 1114 print in order LeetCode Solution Explained
cover:
    image: https://scdn.netlify.app/img/leetcode-cover-img.webp
    alt: leetcode-cover-img
    caption: leetcode-cover-img
images: https://scdn.netlify.app/img/leetcode-cover-img.webp
date: 2021-10-04T15:58:26+08:00
lastmod: 2022-03-04T15:58:26+08:00
draft: false
author: Samir Paul
authorLink: https://twitter.com/intent/follow?screen_name=SamirPaulb
license: CC BY 4.0
---


<h2><a href="https://leetcode.com/problems/print-in-order/">1114. Print in Order</a></h2><h3>Easy</h3><hr><div><p>Suppose we have a class:</p>

<pre>public class Foo {
  public void first() { print("first"); }
  public void second() { print("second"); }
  public void third() { print("third"); }
}
</pre>

<p>The same instance of <code>Foo</code> will be passed to three different threads. Thread A will call <code>first()</code>, thread B will call <code>second()</code>, and thread C will call <code>third()</code>. Design a mechanism and modify the program to ensure that <code>second()</code> is executed after <code>first()</code>, and <code>third()</code> is executed after <code>second()</code>.</p>

<p><strong>Note:</strong></p>

<p>We do not know how the threads will be scheduled in the operating system, even though the numbers in the input seem to imply the ordering. The input format you see is mainly to ensure our tests' comprehensiveness.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [1,2,3]
<strong>Output:</strong> "firstsecondthird"
<strong>Explanation:</strong> There are three threads being fired asynchronously. The input [1,2,3] means thread A calls first(), thread B calls second(), and thread C calls third(). "firstsecondthird" is the correct output.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [1,3,2]
<strong>Output:</strong> "firstsecondthird"
<strong>Explanation:</strong> The input [1,3,2] means thread A calls first(), thread B calls third(), and thread C calls second(). "firstsecondthird" is the correct output.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>nums</code> is a permutation of <code>[1, 2, 3]</code>.</li>
</ul>
</div>

---




```python
# Method 1 -------------------------------------------------------------------

class Foo:
    def __init__(self):
        self.firstDone = False
        self.secondDone = False

    def first(self, printFirst: 'Callable[[], None]') -> None:
        printFirst()
        self.firstDone = True

    def second(self, printSecond: 'Callable[[], None]') -> None:
        while not self.firstDone:
            continue
        printSecond()
        self.secondDone = True

    def third(self, printThird: 'Callable[[], None]') -> None:
        while not self.secondDone:
            continue
        printThird()
        
        
# Method 2 -------------------------------------------------------------------
        
import threading
class Foo:
    def __init__(self):
		# create lock to control sequence between first and second functions
        self.lock1 = threading.Lock()
        self.lock1.acquire()
		# create another lock to control sequence between second and third functions
        self.lock2 = threading.Lock()
        self.lock2.acquire()

    def first(self, printFirst: 'Callable[[], None]') -> None:
        printFirst()
		# since second function is waiting for the lock1, let's release it
        self.lock1.release()

    def second(self, printSecond: 'Callable[[], None]') -> None:
		# wait for first funtion to finish
        self.lock1.acquire()
        printSecond()
		# let's release lock2, so third function can run
        self.lock2.release()

    def third(self, printThird: 'Callable[[], None]') -> None:
		# wait for second funtion to finish
        self.lock2.acquire()
        printThird()


# Method 3 -------------------------------------------------------------------
        
import threading
class Foo:
    def __init__(self):
        self.event1 = threading.Event()
        self.event2 = threading.Event()

    def first(self, printFirst: 'Callable[[], None]') -> None:
        printFirst()
        self.event1.set()

    def second(self, printSecond: 'Callable[[], None]') -> None:
        self.event1.wait()
        printSecond()
        self.event2.set()

    def third(self, printThird: 'Callable[[], None]') -> None:
        self.event2.wait()
        printThird()

```
