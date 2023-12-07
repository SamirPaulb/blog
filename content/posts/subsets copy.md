---
title: Subsets   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Subsets - GFG solution
description: Subsets   GFG Solution Explained
cover:
    image: https://scdn.netlify.app/img/gfg.webp
    alt: leetcode-cover-img
    caption: leetcode-cover-img
images: https://scdn.netlify.app/img/gfg.webp
date: 2021-10-04T15:58:26+08:00
lastmod: 2022-03-04T15:58:26+08:00
draft: false
author: Samir Paul
authorLink: https://twitter.com/intent/follow?screen_name=SamirPaulb
license: CC BY 4.0
---


# Subsets
## Medium 
<div class="problem-statement">
                <p></p><p><span style="font-size:18px">Given a set of positive integers, find all its subsets.</span></p>

<p><strong><span style="font-size:18px">Example 1 :</span></strong></p>

<pre><span style="font-size:18px"><strong>Input :</strong> </span>
<span style="font-size:18px">array = {1, 2, 3}</span>
<strong><span style="font-size:18px">Output :</span></strong>
<span style="font-size:18px">// this space denotes null element. 
1
1 2
1 2 3
1 3
2
2 3
3</span>
<strong><span style="font-size:18px">Explanation: </span></strong>
<span style="font-size:18px">The following are the subsets 
of the array {1, 2, 3}.</span></pre>

<p><strong><span style="font-size:18px">Example 2 :</span></strong></p>

<pre><strong><span style="font-size:18px">Input :</span></strong>
<span style="font-size:18px">array = {1, 2}</span>
<strong><span style="font-size:18px">Output :
</span></strong><span style="font-size:18px">
1 
1 2
2</span>
<strong><span style="font-size:18px">Explanation :</span></strong>
<span style="font-size:18px">The following are the 
subsets of {1, 2}.</span></pre>

<div><strong><span style="font-size:18px">Your task :</span></strong></div>

<div><span style="font-size:18px">You don't have to read input or print anything. Your task is to complete the function <strong>subsets()</strong> which takes the array of integers as input and returns the list of list containing the subsets of the given set of numbers in lexicographical order.</span></div>

<div>&nbsp;</div>

<div><span style="font-size:18px"><strong>Expected Time Complexity :</strong> O(2^n)))</span></div>

<div><span style="font-size:18px"><strong>Expected Auxiliary Space :</strong> O(2^n*length of each subset)</span></div>

<div>&nbsp;</div>

<div><strong><span style="font-size:18px">Constraints :</span></strong></div>

<div><span style="font-size:18px">1 &lt;= n &lt;= 20</span></div>

<div><span style="font-size:18px">1 &lt;= arr[i] &lt;=10</span></div>
 <p></p>
            </div>

---




```cpp
// { Driver Code Starts
//Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


 // } Driver Code Ends
//User function Template for C++

class Solution
{
    public:
    vector<vector<int> > subsets(vector<int>& A)
    {
        //code here
        int n = A.size();
        vector<vector<int>>ans;
        
        for(int i = 0; i < (1 << n); i++) {
            vector<int>t;
            for(int j = 0; j < n; j++) {
                if(i & (1 << j)) {
                    t.push_back(A[j]);
                }
            }
            ans.push_back(t);
        }
        sort(ans.begin(), ans.end());
        return ans;
    }
};

// { Driver Code Starts.

int main()
{
	int t;
	cin >> t;

	while (t--)
	{
		int n, x;
		cin >> n;

		vector<int> array;
		for (int i = 0; i < n; i++)
		{
			cin >> x;
			array.push_back(x);
		}
        
        
        Solution ob;
		vector<vector<int> > res = ob.subsets(array);

		// Print result
		for (int i = 0; i < res.size(); i++) {
			for (int j = 0; j < res[i].size(); j++)
				cout << res[i][j] << " ";
			cout << endl;
		}

		
	}

	return 0;
}  // } Driver Code Ends
```
