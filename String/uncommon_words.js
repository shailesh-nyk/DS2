// We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)

// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

// Return a list of all uncommon words. 

// You may return the list in any order.

// Example 1:

// Input: A = "this apple is sweet", B = "this apple is sour"
// Output: ["sweet","sour"]
// Example 2:

// Input: A = "apple apple", B = "banana"
// Output: ["banana"]

var uncommonFromSentences = function(A, B) {
    let hashmap = {};
    for(let word of A.concat(' ',B).split(' ')) {
        hashmap[word] = (hashmap[word] || 0) + 1;
    }
    let res = [];
    for(let word in hashmap) {
        if(hashmap[word] == 1) res.push(word)
    }
    return res;
};

console.log(uncommonFromSentences("apple apple","banana"));