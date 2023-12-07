---
title: Leaves to DLL   GFG
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, Leaves to DLL - GFG solution
description: Leaves to DLL   GFG LeetCode Solution Explained
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


# Leaves to DLL
## Medium
<div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a Binary Tree of size N, extract all its leaf nodes to form a Doubly Link List starting from the left most leaf. Modify the original tree to make the DLL thus removing the leaf nodes from the tree. Consider the left and right pointers of the tree to be the previous and next pointer of the DLL respectively.</span><br>
<br>
<span style="font-size:18px"><strong>Note:&nbsp;</strong>The generated output will contain the inorder traversal of the modified tree, the DLL from left to right and the DLL from right to left.</span></p>

<p><strong><span style="font-size:18px">Example 1:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input :</strong>
        1
      /   \
     2     3
    / \   / \
   4   5 6   7    </span>

<span style="font-size:18px"><strong>Output: </strong>
Modified Tree :
        1
      /   \
     2     3</span>

<span style="font-size:18px">Doubly Link List :
4 &lt;-&gt; 5 &lt;-&gt; 6 &lt;-&gt; 7</span>

<span style="font-size:18px"><strong>Explanation:</strong>
The leaf nodes are modified to form the DLL 
in-place. Thus their links are removed from 
the tree.</span></pre>

<p><strong><span style="font-size:18px">Example 2:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input :</strong>
        1
      /   \
     2     3
    / \   
   4   5 </span>

<span style="font-size:18px"><strong>Output: </strong>
Modified Tree :
        1
      /   
     2    </span>

<span style="font-size:18px">Doubly Link List :
4 &lt;-&gt; 5 &lt;-&gt; 3</span></pre>

<p><br>
<span style="font-size:18px"><strong>Your Task: &nbsp;</strong><br>
You don't need to read input or print anything. Complete the function <strong>convertToDLL()</strong> which takes the root of the given tree as input parameter and returns the head of the doubly link list.</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(N)<br>
<strong>Expected Auxiliary Space:</strong> O(height of tree)</span></p>

<p><br>
<span style="font-size:18px"><strong>Constraints:</strong><br>
1 ≤ N ≤ 10^4</span></p>
</div>

---




```python
#User function Template for python3

'''
# Node Class:
class Node:
    def __init__(self,val):
        self.data = val
        self.left = None
        self.right = None
'''

def convertToDLL(root):
    #return the head of the DLL and remove those node from the tree as well.
    
    notleaves = set()
    
    def isleave(root):
        return not root.left and not root.right and root not in notleaves
    
    dummy = Node(-1)
    head = dummy
    if isleave(root): 
        dll = root
        root = None
        return dll
    
    def solve(root):
        nonlocal head
        if not root: return None
        solve(root.left)
        if root.left and isleave(root.left):
            node = root.left
            root.left = None
            head.right = node
            node.left = head
            head = head.right
            notleaves.add(root)
        if root.right and isleave(root.right):
            node = root.right
            root.right = None
            head.right = node
            node.left = head
            head = head.right
            notleaves.add(root)
        solve(root.right)
    
    solve(root)
    res = dummy.right
    res.left = None
    return res
            
    
    
    
    
    

#{ 
 # Driver Code Starts
#Initial Template for Python 3

from collections import deque
# Tree Node
class Node:
    def __init__(self, val):
        self.right = None
        self.data = val
        self.left = None

def inOrder(root):
    '''
    :param root: root of the given tree.
    :return: None, print the space separated in order Traversal of the given tree.
    '''
    if root is None: # check if the root is none
        return
    inOrder(root.left) # do pre order of left child
    print(root.data, end=" ")  # print root of the given tree
    inOrder(root.right) # do pre order of right child
    
# Function to Build Tree   
def buildTree(s):
    #Corner Case
    if(len(s)==0 or s[0]=="N"):           
        return None
        
    # Creating list of strings from input 
    # string after spliting by space
    ip=list(map(str,s.split()))
    
    # Create the root of the tree
    root=Node(int(ip[0]))                     
    size=0
    q=deque()
    
    # Push the root to the queue
    q.append(root)                            
    size=size+1 
    
    # Starting from the second element
    i=1                                       
    while(size>0 and i<len(ip)):
        # Get and remove the front of the queue
        currNode=q[0]
        q.popleft()
        size=size-1
        
        # Get the current node's value from the string
        currVal=ip[i]
        
        # If the left child is not null
        if(currVal!="N"):
            
            # Create the left child for the current node
            currNode.left=Node(int(currVal))
            
            # Push it to the queue
            q.append(currNode.left)
            size=size+1
        # For the right child
        i=i+1
        if(i>=len(ip)):
            break
        currVal=ip[i]
        
        # If the right child is not null
        if(currVal!="N"):
            
            # Create the right child for the current node
            currNode.right=Node(int(currVal))
            
            # Push it to the queue
            q.append(currNode.right)
            size=size+1
        i=i+1
    return root

    
if __name__=="__main__":
    t=int(input())
    for _ in range(0,t):
        s=input()
        root = buildTree(s)
        head = convertToDLL(root)
        inOrder(root)
        print()
        temp = head
        last = None
        while(temp != None):
            print(temp.data,end=" ")
            last = temp
            temp = temp.right
            
        print()
        temp = last;
        
        while(temp!=None):
            print(temp.data,end=" ")
            temp = temp.left
        
        print();

        

# } Driver Code Ends
```
