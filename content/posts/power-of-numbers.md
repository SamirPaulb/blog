---
title: Power Of Numbers   GFG
tags: [geeksforgeeks]
categories: geeksforgeeks
keywords: geeksforgeeks, geeksforgeeks solution in Python3 C++ Java, Power Of Numbers - GFG solution
description: Power Of Numbers   GFG Solution Explained
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


# Power Of Numbers
## Easy 
<div class="problem-statement">
                <p></p><p><span style="font-size:18px">Given a number and its reverse. Find that number raised to the power of its own reverse.<br>
<strong>Note:</strong> As answers can be very large, print the result modulo <strong>10<sup>9</sup> + 7</strong>.</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>N = 2
<strong>Output: </strong>4<strong>
Explanation: </strong>The reverse of 2 is 2
and after raising power of 2 by 2 
we get 4 which gives remainder as 
4 by dividing 1000000007.</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>N = 12
<strong>Output: </strong>864354781<strong>
Explanation: </strong>The reverse of 12 is 21
and 12<sup>21&nbsp;</sup>, when divided by 1000000007 
gives remainder as 864354781.</span></pre>

<p><strong><span style="font-size:18px">Your Task:</span></strong><br>
<span style="font-size:18px">You don't need to read input or print anything. You just need to complete the <strong>function pow()&nbsp;</strong>that takes two parameters <strong>N and R</strong>&nbsp;denoting the input number and its reverse and returns <strong>power </strong>of (N to R)mod(<strong>10<sup>9</sup> + 7</strong>).</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:&nbsp;</strong>O(LogN).<br>
<strong>Expected Auxiliary Space:&nbsp;</strong>O(LogN).</span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= N &lt;= 10<sup>9</sup></span></p>

<p>&nbsp;</p>
 <p></p>
            </div>

---




```cpp
// { Driver Code Starts
#include <bits/stdc++.h>
using namespace std;
# define mod 1000000007

 // } Driver Code Ends
class Solution{
    public:
    //You need to complete this fucntion
    
    long long power(int N,int R)
    {
       //Your code here
      if(N == 0)
      return 1;
      if(R == 0)
      return 1;
      long ans;
       if (R % 2 == 0) { 
           ans = power(N, R/2);  
           ans = (ans * ans) % 1000000007;
       }
       else
       {
           ans = N % 1000000007;
           ans = (ans * power(N, R - 1) % 1000000007) % 1000000007;
            
       }
       return ((ans + 1000000007) % 1000000007); 
   }

};

// { Driver Code Starts.

// compute reverse of a number 
long long rev(long long n)
{
    long long rev_num = 0;
     while(n > 0) 
      { 
        rev_num = rev_num*10 + n%10; 
        n = n/10; 
      } 
      return rev_num;
}




int main()
{
    int T;
    cin>>T;//testcases
    
    while(T--)
    {
        long long N;
        cin>>N;//input N
        
        long long R = 0; 
        
        // reverse the given number n
        R = rev(N);
        Solution ob;
        //power of the number to it's reverse
        long long ans =ob.power(N,R);
        cout << ans<<endl;
    }
}  // } Driver Code Ends
```
