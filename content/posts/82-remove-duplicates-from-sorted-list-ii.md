---
title: 82 remove duplicates from sorted list ii
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 82-remove-duplicates-from-sorted-list-ii solution
description: 82 remove duplicates from sorted list ii LeetCode Solution Explained
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


<h2><a href="https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/">82. Remove Duplicates from Sorted List II</a></h2><h3>Medium</h3><hr><div><p>Given the <code>head</code> of a sorted linked list, <em>delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list</em>. Return <em>the linked list <strong>sorted</strong> as well</em>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/01/04/linkedlist1.jpg" style="width: 500px; height: 142px;">
<pre><strong>Input:</strong> head = [1,2,3,3,4,4,5]
<strong>Output:</strong> [1,2,5]
</pre>

<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/01/04/linkedlist2.jpg" style="width: 500px; height: 205px;">
<pre><strong>Input:</strong> head = [1,1,1,2,3]
<strong>Output:</strong> [2,3]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the list is in the range <code>[0, 300]</code>.</li>
	<li><code>-100 &lt;= Node.val &lt;= 100</code></li>
	<li>The list is guaranteed to be <strong>sorted</strong> in ascending order.</li>
</ul>
</div>

---




```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next: return head
        dummy = ListNode(-103)
        dummy.next = head
        pre = dummy
        cur = dummy.next
        curPre = dummy
        
        while cur.next:
            if cur.val == cur.next.val:
                curPre = cur
                cur = cur.next
            else:
                if cur.val == curPre.val:
                    curPre = cur
                    cur = cur.next
                else:
                    curPre.next = None
                    pre.next = cur
                    pre = pre.next
                    curPre = cur
                    cur = cur.next
        
        if curPre.val == cur.val:
            cur = cur.next
            curPre.next = None
        pre.next = cur
             
        return dummy.next
```
