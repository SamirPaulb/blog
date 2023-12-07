---
title: hotel reviews
tags: [interviewbit]
keywords: interviewbit, interviewbit solution in Python3 C++ Java, hotel reviews solution
description: hotel reviews Interviewbit Solution Explained
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

# Hotel Reviews

https://www.interviewbit.com/problems/hotel-reviews


## Solution

```cpp
struct TrieNode{
    bool isWord;
    unordered_map<char, TrieNode*> children;
    TrieNode(bool word): isWord(word) {}
};

struct res {
    int index, score;
};

void tokenize (string good_string, vector<string> &goodWords) {
    good_string += "_";
    string temp="";
    
    for (int i=0; i<good_string.length(); i++) {
        if (good_string[i]!='_') {
            temp += good_string[i];
        } else {
            if (temp.length()) {
                goodWords.push_back(temp);
                temp = "";
            }
        }
    }
}

bool sortByScore (res lhs, res rhs) {
    if (lhs.score > rhs.score) return true;
    else if (lhs.score == rhs.score) return lhs.index < rhs.index;
    return false;
}

void constructTrie(TrieNode* A, vector<string> goodWords) {
    TrieNode* current = A;
    
    for (int i=0; i<goodWords.size(); i++) {
        current = A;
        
        for (int j=0; j<goodWords[i].length(); j++) {
            auto it = (current->children).find(goodWords[i][j]);
            
            if (it != (current->children).end()) {
                current = it->second;
            } else {
                
                TrieNode* B = new TrieNode(false);
                (current->children)[goodWords[i][j]] = B;
                current = B;
                
            }
            
            if (j == goodWords[i].length()-1) current->isWord = true;
        }
    }
    
}

vector<int> sortReviews(vector<string> reviews, TrieNode* root) {
    int score;
    vector<res> result;
    TrieNode* current;
    
    vector<string> temp;
    
    
    
    for (int i=0; i<reviews.size(); i++) {
        res t;
        temp.clear();
        score = 0;
        reviews[i] +=  "_";
        tokenize(reviews[i], temp);
        
        for (int j=0; j<temp.size(); j++) {
            current = root;
            for (int k=0; k<temp[j].length(); k++) {
                
                auto it = (current->children).find(temp[j][k]);
                if (it == (current->children).end()) {
                    break;
                }
                
                current = it->second;
                
                if (k == temp[j].length()-1 && current->isWord) score++; 
            }
        }
        t.index = i;
        t.score = score;
        result.push_back(t);
    }
    
    sort(result.begin(), result.end(), sortByScore);
    
    vector<int> ret;
    
    for (int i=0; i<result.size(); i++) {
        ret.push_back(result[i].index);
    }
    
    return ret;
}

vector<int> Solution::solve(string A, vector<string> &B) {
    TrieNode* root = new TrieNode(false);
    vector<string> good_words;
    
    tokenize(A, good_words);
    
    constructTrie(root, good_words);
    
    vector<int> result = sortReviews(B, root);
    
    return result;
}
```