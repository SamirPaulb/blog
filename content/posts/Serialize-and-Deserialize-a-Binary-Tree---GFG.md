---
title: Serialize and Deserialize a Binary Tree   GFG
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, Serialize and Deserialize a Binary Tree - GFG solution
description: Serialize and Deserialize a Binary Tree   GFG LeetCode Solution Explained
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


# Serialize and Deserialize a Binary Tree
## Medium
<div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Serialization is to store a tree in an array&nbsp;so that it can be later restored and&nbsp;Deserialization is reading tree back from the array. Now your task is to complete the function<strong> serialize</strong> which stores the tree into an array A[ ] and <strong>deSerialize</strong> which deserializes&nbsp;the array to the tree and returns it.<br>
<strong>Note:&nbsp;</strong>The structure of the tree must be maintained. Multiple nodes can have the same data.</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>&nbsp; &nbsp;&nbsp; &nbsp;1
 &nbsp; &nbsp;/&nbsp; &nbsp;\
 &nbsp;&nbsp;2&nbsp; &nbsp;&nbsp;&nbsp;3
<strong>Output: </strong>2 1 3</span>
</pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;10
 &nbsp; &nbsp; &nbsp;&nbsp;/ &nbsp; &nbsp;\
 &nbsp; &nbsp;  20&nbsp; &nbsp; 30
 &nbsp;  /&nbsp;&nbsp; \
 &nbsp; 40&nbsp; 60
<strong>Output: </strong>40 20 60 10 30
</span></pre>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
The task is to complete two&nbsp;functions<strong> serialize</strong> which takes the root node of the tree as input and stores the tree into an array&nbsp;and <strong>deSerialize</strong> which deserializes&nbsp;the array to the original tree and returns the root of it.</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:&nbsp;</strong>O(N).<br>
<strong>Expected Auxiliary Space:&nbsp;</strong>O(N).</span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= Number of nodes &lt;= 1000<br>
1 &lt;= Data of a node &lt;= 1000</span></p>
</div>

---




```python
#User function Template for python3


'''
class Node:
    def __init__(self,val):
        self.data = val
        self.left = None
        self.right = None
'''

#Function to serialize a tree and return a list containing nodes of tree.
def serialize(root, A):
    def solve(root):
        if not root:
            A.append(-1)
            return 
        A.append(root.data)
        solve(root.left)
        solve(root.right)
    solve(root)
    return A

#Function to deserialize a list and construct the tree.   
def deSerialize(A):
    i = 0
    def solve(A):
        nonlocal i
        if i >= len(A): return None
        if A[i] == -1: 
            i += 1
            return None
        root = Node(A[i])
        i += 1
        root.left = solve(A)
        root.right = solve(A)
        return root
        
    return solve(A)
    
        
    


#{ 
 # Driver Code Starts
#Initial Template for Python 3


#Initial Template for Python 3

#Contributed by Suman Rana
from collections import deque
# Tree Node
class Node:
    def __init__(self, val):
        self.right = None
        self.data = val
        self.left = None

    
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
    

def inorder(root):
    if not root:
        return
    inorder(root.left)
    print(root.data, end=" ")
    inorder(root.right)

def _deleteTree(node): 
    if (node == None): 
        return
  
    # first delete both subtrees  
    _deleteTree(node.left) 
    _deleteTree(node.right) 
    node.left=None
    node.right=None
    # then delete the node  
     
    
      
# Deletes a tree and sets the root as NULL 
def deleteTree(node_ref): 
    _deleteTree(node_ref) 
    node_ref = None
    
if __name__=="__main__":
    t=int(input())
    for _ in range(0,t):
        root=buildTree(input())
        A=[]
        serialize(root, A)
        deleteTree(root)
        root = None
        r=deSerialize(A)
        inorder(r)
        print()
        

# } Driver Code Ends
```
