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
  let result = [];

  let w1 = word1.split("");
  let w2 = word2.split("");

  while (w1.length > 0 && w2.length > 0) {
    //      alternately add letters to the result
    let slice1 = w1.shift();
    let slice2 = w2.shift();
    result.push(slice1);
    result.push(slice2);
  }
  //     append the remaining string to result
  if (w1.length > 0) {
    let remaining= w1.join('')
    result.push(remaining);
    return result.join('');
  }
  if (w2.length > 0) {
    let remaining = w2.join('');
    result.push(remaining);
    return result.join('');
  }
  return result.join("");
};

// Example 1:
// let word1 = "abc";
// let word2 = "pqr";
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r

// Example 2:
// let word1 = "ab";
// let word2 = "pqrs;";
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

// Example 4:
let word1 = "ab";
let word2 = "pqrs";
// Output: "apbqrs"

// Constraints:
// 1 <= word1.length, word2.length <= 100
// word1 and word2 consist of lowercase English letters.

console.log(mergeAlternately(word1, word2));
