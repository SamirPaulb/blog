---
title: Largest BST   GFG
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, Largest BST - GFG solution
description: Largest BST   GFG LeetCode Solution Explained
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


# Largest BST
## Medium
<div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a binary tree. Find the size of its largest subtree that is a Binary Search Tree.<br>
<strong>Note: </strong>Here Size is equal to the number of nodes in the subtree.</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
&nbsp;       1
&nbsp;     /   \
&nbsp;    4     4
&nbsp;  /   \
&nbsp; 6     8<strong>
Output: </strong>1<strong>
Explanation: </strong>There's no sub-tree with size
greater than 1 which forms a BST. All the
leaf Nodes are the BSTs with size equal
to 1.</span>
</pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: </strong>6 6 3 N 2 9 3 N 8 8 2
&nbsp;           6
&nbsp;       /       \
&nbsp;      6         3
&nbsp;       \      /   \
&nbsp;        2    9     3
&nbsp;         \  /  \
&nbsp;         8 8    2 <strong>
Output: </strong>2<strong>
Explanation: </strong>The following sub-tree is a
BST of size 2:&nbsp;
&nbsp; &nbsp; &nbsp;  2
&nbsp; &nbsp; /&nbsp; &nbsp; \&nbsp;
&nbsp;  N&nbsp; &nbsp; &nbsp; 8</span></pre>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function</span><span style="font-size:18px"><strong> largestBst()&nbsp;</strong>that takes the root node of the Binary Tree<strong>&nbsp;</strong>as its input&nbsp;and returns the size&nbsp;of the largest subtree which is also the BST. If the complete Binary Tree is a BST, return the size of the complete Binary Tree.&nbsp;</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:&nbsp;</strong>O(N).<br>
<strong>Expected Auxiliary Space:&nbsp;</strong>O(Height of the BST).</span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 ≤ Number of nodes ≤ 10<sup>5</sup><br>
1 ≤ Data of a node ≤ 10<sup>6</sup></span></p>
</div>

---




```python
#User function Template for python3

class Solution:
    # Return the size of the largest sub-tree which is also a BST
    def largestBst(self, root):
        #code here
        def solve(root):  # isBST, lmax, rmin, cnt 
            if not root: 
                return True, float("-inf"), float("inf"), 0
            lbst, lmax, lmin, lcnt = solve(root.left)
            rbst, rmax, rmin, rcnt = solve(root.right)
            if lbst and rbst and lmax < root.data < rmin:
                return True, max(root.data, rmax), min(root.data, lmin), 1 + lcnt + rcnt
            else:
                return False, 0, 0, max(lcnt, rcnt)
        
        return solve(root)[3]
        
        
        


#{ 
 # Driver Code Starts
import sys
sys.setrecursionlimit(1000000)

from collections import deque

# Tree Node
class Node:
    def __init__(self, val):
        self.right = None
        self.data = val
        self.left = None

# Function to Build Tree
def buildTree(s):
    # Corner Case
    if (len(s) == 0 or s[0] == "N"):
        return None

    # Creating list of strings from input
    # string after spliting by space
    ip = list(map(str, s.split()))

    # Create the root of the tree
    root = Node(int(ip[0]))
    size = 0
    q = deque()

    # Push the root to the queue
    q.append(root)
    size = size + 1

    # Starting from the second element
    i = 1
    while size > 0 and i < len(ip):
        # Get and remove the front of the queue
        currNode = q[0]
        q.popleft()
        size = size - 1

        # Get the current node's value from the string
        currVal = ip[i]

        # If the left child is not null
        if (currVal != "N"):
            # Create the left child for the current node
            currNode.left = Node(int(currVal))

            # Push it to the queue
            q.append(currNode.left)
            size = size + 1
        # For the right child
        i = i + 1
        if (i >= len(ip)):
            break
        currVal = ip[i]

        # If the right child is not null
        if (currVal != "N"):
            # Create the right child for the current node
            currNode.right = Node(int(currVal))

            # Push it to the queue
            q.append(currNode.right)
            size = size + 1
        i = i + 1
    return root



if __name__ == "__main__":
    t = int(input())
    for _ in range(0, t):
        s = input()

        root = buildTree(s)
        ob = Solution()
        print(ob.largestBst(root))

# } Driver Code Ends
```
