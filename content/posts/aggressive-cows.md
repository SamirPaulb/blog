---
title: Aggressive Cows   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Aggressive Cows - GFG solution
description: Aggressive Cows   GFG Solution Explained
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


# Aggressive Cows
## Medium
<div class="problems_problem_content__Xm_eO"><p>You are given an <strong>array</strong>&nbsp;consisting of <strong>n&nbsp;integers</strong> which denote the position of a <strong>stall</strong>. You are also given an <strong>integer</strong> <strong>k</strong> which denotes the number of aggressive cows. You are given the task of <strong>assigning stalls to k&nbsp;cows</strong> such that the <strong>minimum distance between any two of them is the maximum possible</strong>.<br>
The first line of input contains two&nbsp;space-separated integers <strong>n</strong> and <strong>k</strong>.<br>
The second line contains <strong>n</strong> space-separated integers denoting the position of the stalls.</p>

<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong>
n=5 
k=3
stalls = [1 2 4 8 9]
<strong>Output:</strong>
3
<strong>Explanation:</strong>
The first cow can be placed at stalls[0], 
the second cow can be placed at stalls[2] and 
the third cow can be placed at stalls[3]. 
The minimum distance between cows, in this case, is 3, 
which also is the largest among all possible ways.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong>
n=5 
k=3
stalls = [10 1 2 7 5]
<strong>Output:</strong>
4
<strong>Explanation:</strong>
The first cow can be placed at stalls[0],
the second cow can be placed at stalls[1] and
the third cow can be placed at stalls[4].
The minimum distance between cows, in this case, is 4,
which also is the largest among all possible ways.</pre>

<p><strong>Your Task:</strong><br>
Complete the function int solve(), which takes integer n, k, and a vector&nbsp;stalls&nbsp;with n&nbsp;integers as input and returns the largest possible minimum distance between cows.</p>

<p><strong>Expected Time Complexity:</strong> O(n*log(10^9)).<br>
<strong>Expected Auxiliary Space:</strong> O(1).<br>
<br>
<strong>Constraints:</strong><br>
2 &lt;= n&nbsp;&lt;= 10^5<br>
2 &lt;= k &lt;= n<br>
0 &lt;= stalls[i] &lt;= 10^9</p>
</div>

---




```cpp
//{ Driver Code Starts
// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
// User function Template for C++

class Solution {
public:
 bool check(vector<int> &stalls, int n, int cows,int dis)
    {
        int curr_cow_pos = stalls[0];  
       // inially taking current postion of cow as 1st one
        int cnt = 1;                   // taking count of cow
        for(int i=1;i<n;i++)
        {
         // if any cow at dis more than our mid value                                              
         //present then we will keep next cow to that postion
            if(stalls[i]-curr_cow_pos >= dis)
            {
                cnt++;
                curr_cow_pos = stalls[i];
            }
            if(cnt>=cows) 
            return true;
        }
        return false;
    }

    int solve(int n, int k, vector<int> &stalls) {
    
        // Write your code here
        sort(stalls.begin(),stalls.end());
        
        int l=1,h=stalls[n-1]-stalls[0];
        int ans=0;
        while(l<=h)
        {
            int mid= (l+h)/2;
           // if all cow can be placed at more than mid distance then updating our ans
            if(check(stalls,n,k,mid)) 
            {
                ans = mid;
                l = mid + 1;
            }
            else
            {
                h = mid - 1;
            }
        }
        return ans;
    }
};

//{ Driver Code Starts.

int main() {
    int t = 1;
    cin >> t;

    // freopen ("output_gfg.txt", "w", stdout);

    while (t--) {
        // Input

        int n, k;
        cin >> n >> k;

        vector<int> stalls(n);
        for (int i = 0; i < n; i++) {
            cin >> stalls[i];
        }
        // char ch;
        // cin >> ch;

        Solution obj;
        cout << obj.solve(n, k, stalls) << endl;

        // cout << "~\n";
    }
    // fclose(stdout);

    return 0;
}
// } Driver Code Ends
```
