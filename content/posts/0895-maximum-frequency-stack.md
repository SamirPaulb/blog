---
title: 0895 maximum frequency stack
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 0895-maximum-frequency-stack solution
description: 0895 maximum frequency stack LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/maximum-frequency-stack/">895. Maximum Frequency Stack</a></h2><h3>Hard</h3><hr><div><p>Design a stack-like data structure to push elements to the stack and pop the most frequent element from the stack.</p>

<p>Implement the <code>FreqStack</code> class:</p>

<ul>
	<li><code>FreqStack()</code> constructs an empty frequency stack.</li>
	<li><code>void push(int val)</code> pushes an integer <code>val</code> onto the top of the stack.</li>
	<li><code>int pop()</code> removes and returns the most frequent element in the stack.
	<ul>
		<li>If there is a tie for the most frequent element, the element closest to the stack's top is removed and returned.</li>
	</ul>
	</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input</strong>
["FreqStack", "push", "push", "push", "push", "push", "push", "pop", "pop", "pop", "pop"]
[[], [5], [7], [5], [7], [4], [5], [], [], [], []]
<strong>Output</strong>
[null, null, null, null, null, null, null, 5, 7, 5, 4]

<strong>Explanation</strong>
FreqStack freqStack = new FreqStack();
freqStack.push(5); // The stack is [5]
freqStack.push(7); // The stack is [5,7]
freqStack.push(5); // The stack is [5,7,5]
freqStack.push(7); // The stack is [5,7,5,7]
freqStack.push(4); // The stack is [5,7,5,7,4]
freqStack.push(5); // The stack is [5,7,5,7,4,5]
freqStack.pop();   // return 5, as 5 is the most frequent. The stack becomes [5,7,5,7,4].
freqStack.pop();   // return 7, as 5 and 7 is the most frequent, but 7 is closest to the top. The stack becomes [5,7,5,4].
freqStack.pop();   // return 5, as 5 is the most frequent. The stack becomes [5,7,4].
freqStack.pop();   // return 4, as 4, 5 and 7 is the most frequent, but 4 is closest to the top. The stack becomes [5,7].
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= val &lt;= 10<sup>9</sup></code></li>
	<li>At most <code>2 * 10<sup>4</sup></code> calls will be made to <code>push</code> and <code>pop</code>.</li>
	<li>It is guaranteed that there will be at least one element in the stack before calling <code>pop</code>.</li>
</ul>
</div>

---




```python
# https://leetcode.com/problems/maximum-frequency-stack/
# https://youtu.be/Z6idIicFDOE

'''
import heapq
class FreqStack:

    def __init__(self):
        self.cnt = collections.Counter()
        self.maxHeap = []
        self.indx = 0

    def push(self, val):
        self.cnt[val] += 1
        self.indx += 1
        heapq.heappush(self.maxHeap, (-self.cnt[val], -self.indx, val))
        
    def pop(self):
        val = self.maxHeap[0][2]
        self.cnt[val] -= 1
        heapq.heappop(self.maxHeap)
        return val
        
# Time: O(log(N))
# Space: O(N)
'''

class FreqStack:

    def __init__(self):
        self.cnt = {}
        self.stacks = {}
        self.maxCnt = 0

    def push(self, val):
        valCnt = 1 + self.cnt.get(val, 0)
        self.cnt[val] = valCnt
        if self.maxCnt < valCnt:
            self.maxCnt = valCnt
            self.stacks[valCnt] = []
        self.stacks[valCnt].append(val)

    def pop(self):
        # print(self.stacks)
        res = self.stacks[self.maxCnt].pop()
        self.cnt[res] -= 1
        if not self.stacks[self.maxCnt]: 
            self.maxCnt -= 1
        return res
```
