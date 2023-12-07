---
title: palindrome integer
tags: [interviewbit]
keywords: interviewbit, interviewbit solution in Python3 C++ Java, palindrome integer solution
description: palindrome integer Interviewbit Solution Explained
cover:
    image: https://scdn.netlify.app/img/interviewbit-cover.jpg
    alt: interviewbit-cover
    caption: interviewbit-cover
image: https://scdn.netlify.app/img/interviewbit-cover.jpg
date: 2021-10-04T15:58:26+08:00
lastmod: 2022-03-04T15:58:26+08:00
draft: false
author: Samir Paul
authorLink: https://twitter.com/intent/follow?screen_name=SamirPaulb
license: CC BY 4.0
---

# Palindrome Integer

https://www.interviewbit.com/problems/palindrome-integer


## Solution

```cpp
int Solution::isPalindrome(int A) {

    if(A<0)
        return false;

    long int temp = 0, temp2 = A;

    while(A) {
        temp = temp*10 + A%10;
        A /=10;
    }

    return temp==temp2;
}

/*
int Solution::isPalindrome(int A) {
    // 1 determine the bounds (number of digits)
    // 2 check all digits from edge to the middle
    
    if (A<0)
        return 0;
    
    int digits = 0, n=A;
    do {
        n/=10;
        digits++;
    } while(n);
    
    for (int i=0; i<digits/2; i++) {
        int leftpos = digits-i-1;
        int rightpos = i;
        
        int left = A/int(pow(10, leftpos))%10;
        int right = A/int(pow(10, rightpos))%10;
        
        //cout << "digits " << digits << " left " << left << " right " << right << endl;
        
        if (left != right)
            return 0;
    }
    return 1;
}
*/
```