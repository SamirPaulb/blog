---
title: Left most and right most index   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Left most and right most index - GFG solution
description: Left most and right most index   GFG Solution Explained
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


# Left most and right most index
## Easy
<div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a sorted array with possibly duplicate elements. The task is to find indexes of first and last occurrences of an element <strong>X</strong> in the given array.</span></p>

<p><strong><span style="font-size:18px">Note: </span></strong><span style="font-size:18px">If the element is not present in the array <strong>return {-1,-1} as pair</strong>.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
N = 9
v[] = {1, 3, 5, 5, 5, 5, 67, 123, 125}
X = 5</span>
<span style="font-size:18px"><strong>Output:</strong>
2 5</span>
<span style="font-size:18px"><strong>Explanation:
</strong>Index of first occurrence of 5 is 2
and index of last occurrence of 5 is 5.</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
N = 9
v[] = {1, 3, 5, 5, 5, 5, 7, 123, 125}
X = 7
<strong>Output:</strong>
6 6</span></pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:&nbsp;&nbsp;</strong><br>
You don't need to read input or print anything. Your task is to complete the function&nbsp;<strong>indexes()</strong>&nbsp;which takes the array <strong>v[]</strong><strong>&nbsp;</strong>and an integer <strong>X&nbsp;</strong>as inputs and returns &nbsp;the first and last occurrence of the element <strong>X</strong>. If the element is not present in the array <strong>return {-1,-1} as pair</strong>.<br>
<br>
Can you solve the problem in expected time complexity?</span></p>

<p><br>
<span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(Log(N))<br>
<strong>Expected Auxiliary Space:</strong> O(1)</span></p>

<p><br>
<span style="font-size:18px"><strong>Constraints:</strong><br>
1 ≤ N ≤ 10<sup>5</sup><br>
1 ≤ v[i], X ≤ 10<sup>18</sup></span></p>
</div>

---




```cpp
//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
class Solution
{
    public:
    pair<long,long> indexes(vector<long long> v, long long x)
    {
        // code here
        int n = v.size();
        int first = lower_bound(v.begin(), v.end(), x) - v.begin();
        int last = upper_bound(v.begin(), v.end(), x) - v.begin();
        
        if(first < n && v[first] == x) {
            return{first, last - 1};
        }
        return {-1, -1};
    }
};

//{ Driver Code Starts.

int main()
 {
    long long t;
    cin>>t;
    while(t--)
    {
        long long n, k;
        vector<long long>v;
        cin>>n;
        for(long long i=0;i<n;i++)
        {
            cin>>k;
            v.push_back(k);
        }
        long long x;
        cin>>x;
        Solution obj;
        pair<long,long> pair = obj.indexes(v, x);
        
        if(pair.first==pair.second and pair.first==-1)
        cout<< -1 <<endl;
        else
        cout<<pair.first<<" "<<pair.second<<endl;

    }
	return 0;
}

// } Driver Code Ends
```
