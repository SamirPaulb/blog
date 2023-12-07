---
title: reverse the string
tags: [interviewbit]
keywords: interviewbit, interviewbit solution in Python3 C++ Java, reverse the string solution
description: reverse the string Interviewbit Solution Explained
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

# Reverse The String

https://www.interviewbit.com/problems/reverse-the-string

## Solution

### Mine

```cpp
void Solution::reverseWords(string &A) {
	stringstream ss(A);
	string word, res;
	while (ss.good()) {
		ss >> word;
		if (!res.empty())
			word += " ";
		res = word + res;
	}
	A = res;
}
```
### Editorial

```cpp
void Solution::reverseWords(string &a) {
	int n = a.size();
	int i = 0, in = 0;
	while (i < n) {
		int start;
		if (a[i] != ' ') {
			start = i;
			int end = start;
			i++;
			while (i < n && a[i] != ' ') {
				end++;
				i++;
			}
			while (start <= end) {
				char temp = a[start];
				a[start] = a[end];
				a[end] = temp;
				start++;
				end--;
			}

		} else
			i++;
	}
	//cout << a << endl;
	int start = 0, end = n - 1;
	while (start < end) {
		char temp = a[start];
		a[start] = a[end];
		a[end] = temp;
		start++;
		end--;
	}
	i = 0;
	while (i < n) {
		while (i < n && a[i] == ' ')
			i++;
		if (i != n && in != 0)
			a[in++] = ' ';
		while (i < n && a[i] != ' ') {
			a[in] = a[i];
			in++;
			i++;
		}
	}
	a.erase(a.begin() + in, a.end());
}
```
