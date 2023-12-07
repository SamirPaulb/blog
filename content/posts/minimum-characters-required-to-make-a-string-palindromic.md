---
title: minimum characters required to make a string palindromic
tags: [interviewbit]
keywords: interviewbit, interviewbit solution in Python3 C++ Java, minimum characters required to make a string palindromic solution
description: minimum characters required to make a string palindromic Interviewbit Solution Explained
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

# Minimum Characters Required To Make a String Palindromic

https://www.interviewbit.com/problems/minimum-characters-required-to-make-a-string-palindromic


You are given a string. The only operation allowed is to insert characters in the beginning of the string.
How many minimum characters are needed to be inserted to make the string a palindrome string

editorial:
## Solution

```cpp

int Solution::solve(string A) {
	int start = 0, end = A.length() - 1;
	int temp_end = end;

	/*Idea is to find longest palindrome length starting from index 0.
    Difference of this length from string length is the required value */

	while (start <= temp_end) {
		if (A[start] == A[temp_end]) {
			start++;
			temp_end--;
		} else {
			start = 0;
			temp_end = --end;
		}
	}

	return A.length() - (end + 1);
}

/* --- */

bool ispalindrome(string s) {
	int l = s.length();
	for (int i = 0, j = l - 1; i <= j; i++, j--)
		if (s[i] != s[j])
			return false;
	return true;
}

int Solution::solve(string s) {
	int cnt = 0;
	while (s.length() > 0) {
		if (ispalindrome(s))
			break;
		else {
			s.erase(s.begin() + s.length() - 1);
			cnt++;
		}
	}
	return cnt;
}
```