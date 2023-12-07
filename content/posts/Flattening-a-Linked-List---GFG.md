---
title: Flattening a Linked List   GFG
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, Flattening a Linked List - GFG solution
description: Flattening a Linked List   GFG LeetCode Solution Explained
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


# Flattening a Linked List
## Medium
<div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a Linked List of size N, where every node represents a sub-linked-list and contains two pointers:<br>
(i) a<strong> next </strong>pointer to the next node,<br>
(ii) a<strong>&nbsp;bottom</strong>&nbsp;pointer&nbsp;to a linked list where this node is head.<br>
Each of the&nbsp;sub-linked-list is in sorted order.<br>
Flatten the Link List such that all the nodes appear in a single level while maintaining the sorted order.&nbsp;</span><br>
<br>
<span style="font-size:18px"><strong>Note:</strong> The flattened list will be printed using the bottom pointer instead of the next pointer.<br>
For more clarity have a look at the printList() function in the driver code.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>5 -&gt; 10 -&gt; 19 -&gt; 28
|     |     |     | 
7     20    22   35
|           |     | 
8          50    40
|                 | 
30               45<strong>
Output: </strong>&nbsp;5-&gt; 7-&gt; 8- &gt; 10 -&gt; 19-&gt; 20-&gt;
22-&gt; 28-&gt; 30-&gt; 35-&gt; 40-&gt; 45-&gt; 50.
<strong>Explanation</strong>:
The resultant linked lists has every 
node in a single level.<strong>
</strong>(<strong>Note: </strong>| represents the bottom pointer.)</span>
</pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
5 -&gt; 10 -&gt; 19 -&gt; 28
|          |                
7          22   
|          |                 
8          50 
|                           
30              
<strong>Output:</strong> 5-&gt;7-&gt;8-&gt;10-&gt;19-&gt;22-&gt;28-&gt;30-&gt;50
<strong>Explanation:</strong>
The resultant linked lists has every
node in a single level.

(<strong>Note: </strong>| represents the bottom pointer.)</span></pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You do not need to read input or print anything. Complete the function <strong>flatten()</strong></span><span style="font-size:18px"> that takes the&nbsp;<strong>head </strong>of the linked list as input&nbsp;parameter<strong> </strong>and returns the head of flattened link list.</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong>&nbsp;O(N*N*M)<br>
<strong>Expected Auxiliary Space:</strong>&nbsp;O(1)</span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong></span><br>
<span style="font-size:18px">0 &lt;= N &lt;= 50<br>
1 &lt;=<strong> M<sub>i</sub> </strong>&lt;= 20<br>
1 &lt;= Element of linked list &lt;= 10<sup>3</sup></span></p>
</div>

---




```python
#User function Template for python3

'''
5 -> 10 -> 19 -> 28
|     |     |     | 
7     20    22   35
|           |     | 
8          50    40
|                 | 
30               45
'''

'''

class Node:
    def __init__(self, d):
        self.data=d
        self.next=None
        self.bottom=None
        
'''

def flatten(root):
    head = root
    
    while head and head.next:
        if head.data <= head.next.data:
            a, b = head, head.next
        else:
            a, b = head.next, head
        
        while a:
            if not a.bottom:
                a.bottom = b 
                break
            if not b: break
            if a.bottom.data > b.data:
                tmp = a.bottom
                a.bottom = b
                b = tmp
            a = a.bottom
        head.next = head.next.next
    
    return head
        
    
    
    
    


#{ 
 # Driver Code Starts
#Initial Template for Python 3

class Node:
    def __init__(self, d):
        self.data=d
        self.next=None
        self.bottom=None
        
        

def printList(node):
    while(node is not None):
        print(node.data,end=" ")
        node=node.bottom
        
    print()


if __name__=="__main__":
    t=int(input())
    while(t>0):
        head=None
        N=int(input())
        arr=[]
        
        arr=[int(x) for x in input().strip().split()]
        temp=None
        tempB=None
        pre=None
        preB=None
        
        flag=1
        flag1=1
        listo=[int(x) for x in input().strip().split()]
        it=0
        for i in range(N):
            m=arr[i]
            m-=1
            a1=listo[it]
            it+=1
            temp=Node(a1)
            if flag == 1:
                head=temp
                pre=temp
                flag=0
                flag1=1
            else:
                pre.next=temp
                pre=temp
                flag1=1
                
            for j in range(m):
                a=listo[it]
                it+=1
                tempB=Node(a)
                if flag1 == 1:
                    temp.bottom=tempB
                    preB=tempB
                    flag1=0
                else:
                    preB.bottom=tempB
                    preB=tempB
        root=flatten(head)
        printList(root)
        
        t-=1
            
# } Driver Code Ends
```
