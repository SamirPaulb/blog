---
title: number of enclaves
tags: [leetcode]
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, number-of-enclaves solution
description: number of enclaves LeetCode Solution Explained
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




---




```cpp
class Solution {
public:
    void dfs(int i, int j, vector<vector<int>>& A){
        if(i<0 || j<0 || i>=A.size() || j>=A[0].size() || A[i][j]==0)
            return;
        A[i][j]=0;
        dfs(i+1, j, A);
        dfs(i-1, j, A);
        dfs(i, j+1, A);
        dfs(i, j-1, A);
        
    }
    int numEnclaves(vector<vector<int>>& A) {
        int n=A.size();
        int m=A[0].size();
        for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){
              if((i==0 || j==0 || i==n-1 || j==m-1) && A[i][j]==1)
                dfs(i, j, A);
           }
        }
        int ans=0;
        for(int i=0;i<n;i++){
            for(int j=0;j<A[i].size();j++){
                if(A[i][j]==1){
                    ans++;
                }
            }
        }
        return ans;
    }
};
```
