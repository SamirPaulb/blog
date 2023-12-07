---
title: sort list
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, sort-list solution
description: sort list LeetCode Solution Explained
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


[Discussion Post (created on 24/0/2021 at 2:34)](https://leetcode.com/problems/sort-list/discuss/1031646/C%2B%2B-or-BEATS-96)  
<h2>148. Sort List</h2><h3>Medium</h3><hr><div><p>Given the <code>head</code> of a linked list, return <em>the list after sorting it in <strong>ascending order</strong></em>.</p>

<p><strong>Follow up:</strong> Can you sort the linked list in <code>O(n logn)</code> time and <code>O(1)</code>&nbsp;memory (i.e. constant space)?</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/09/14/sort_list_1.jpg" style="width: 450px; height: 194px;">
<pre><strong>Input:</strong> head = [4,2,1,3]
<strong>Output:</strong> [1,2,3,4]
</pre>

<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/09/14/sort_list_2.jpg" style="width: 550px; height: 184px;">
<pre><strong>Input:</strong> head = [-1,5,3,4,0]
<strong>Output:</strong> [-1,0,3,4,5]
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> head = []
<strong>Output:</strong> []
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the list is in the range <code>[0, 5 * 10<sup>4</sup>]</code>.</li>
	<li><code>-10<sup>5</sup> &lt;= Node.val &lt;= 10<sup>5</sup></code></li>
</ul>
</div>

---




```cpp
public:
    
    ListNode* merge(ListNode* l1, ListNode* l2){
        if( l1 == NULL && l2 == NULL)
        return NULL;
        if( l1 == NULL)
        return l2;
        if( l2 == NULL)
        return l1;
        
        ListNode* a=l1;
        ListNode* b=l2;
        ListNode* p;
        
        if(a->val < b->val)
        {
        p = a;
        a = p->next;
        }
        else
        {
        p = b;
        b = p->next;
        }
        
        ListNode* head = p;
        while(a && b)
         {
          if(a->val < b->val)
          {
            p->next = a;
            p = a;
            a = p->next;
         }
          else
          {
            p->next = b;
            p = b;
            b = p->next;
          }
        }
        if(a == NULL)
          p->next = b;
        else if(b== NULL)
          p->next = a;
        return head;    
    }
    
    ListNode* sortList(ListNode* head){
        if(head==NULL || head->next==NULL)
            return head;
        ListNode* t=head;
        ListNode* fast=head;
        ListNode* slow=head;
        
        while(fast!=NULL && fast->next!=NULL){
            t=slow;
            slow=slow->next;
            fast=fast->next->next;
        }
        
        t->next=NULL;
        ListNode* left=sortList(head);
        ListNode* right=sortList(slow);
        
        return merge(left,right);
    }
    
    
};

```
