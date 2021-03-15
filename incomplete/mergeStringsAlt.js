// leetcode challenge (easy)
// merge strings alternately

// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let result = "";
  let count = 0;
  console.log("word1: ", word1);
  console.log("word1[0]: ", word1[1]);
  //     while both strings have length left
  while (word1.length > 0 && word2.length > 0) {
    //      alternately add letters to the result
    let slice1 = word1.slice(word1.length - 1);
    let slice2 = word2.slice(word2.length - 1);
    result += slice1 + slice2;
    count++;
    console.log('w1: ', word1, 'w2: ', word2)
  }
  return result;
  //  when one runs out, break while loop:
  //     append the remaining string to result
};

// Example 1:
let word1 = "abc";
let word2 = "pqr";
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r

// Example 2:
// let word1 = "ab";
// let word2 = "pqrs;"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b
// word2:    p   q   r   s
// merged: a p b q   r   s

// Example 3:
// let word1 = "abcd";
// let word2 = "pq";
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q
// merged: a p b q c   d

// Constraints:
// 1 <= word1.length, word2.length <= 100
// word1 and word2 consist of lowercase English letters.

console.log(mergeAlternately(word1, word2));
