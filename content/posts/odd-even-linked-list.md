---
title: odd even linked list
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, odd-even-linked-list solution
description: odd even linked list LeetCode Solution Explained
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


<h2>328. Odd Even Linked List</h2><h3>Medium</h3><hr><div><p>Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.</p>

<p>You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.</p>

<p><b>Example 1:</b></p>

<pre><strong>Input: </strong><code>1-&gt;2-&gt;3-&gt;4-&gt;5-&gt;NULL</code>
<strong>Output: </strong><code>1-&gt;3-&gt;5-&gt;2-&gt;4-&gt;NULL</code>
</pre>

<p><b>Example 2:</b></p>

<pre><strong>Input: </strong>2<code>-&gt;1-&gt;3-&gt;5-&gt;6-&gt;4-&gt;7-&gt;NULL</code>
<strong>Output: </strong><code>2-&gt;3-&gt;6-&gt;7-&gt;1-&gt;5-&gt;4-&gt;NULL</code>
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The relative order inside both the even and odd groups should remain as it was in the input.</li>
	<li>The first node is considered odd, the second node even and so on ...</li>
	<li>The length of the linked list is between <code>[0, 10^4]</code>.</li>
</ul>
</div>

---




```cpp
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* oddEvenList(ListNode* head) {
        if(head==NULL)
            return NULL;
        ListNode* odd=head;
        ListNode* even=head->next;
        ListNode* evenstart=head->next;
        while(odd!=NULL && even!=NULL && even->next!=NULL){
            odd->next=even->next;
            odd=odd->next;
            even->next=odd->next;
            even=even->next;
        }
        odd->next=evenstart;
        return head;
    }
};

```
