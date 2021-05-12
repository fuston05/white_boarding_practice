// leetcode challenge (easy)
// 942. DI String Match
// https://leetcode.com/problems/di-string-match/

// A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

// s[i] == 'I' if perm[i] < perm[i + 1], and
// s[i] == 'D' if perm[i] > perm[i + 1].
// Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.

/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  // perm= [0, 1, 2, 3, 4] for s= "I  D  I  D" : length= 4
  //           I and D equate to: <, >, <, >
  //        I  I  I  I  I .. this makes no sense? .. so, this is an invalid perm.. NEXT
  // how are they ordering the arr of ints????
  // I got it! it's compared to the string s to be valid or invalid perm

  // so I= <
  // D= >
  // numbers just need to fit the equation of <, >, <, > respectively

  // 1: form a perm
  for (let i = 0; i <= s.length; i++){
    console.log('I: ', i)
    let perm = [];
    perm.push(i)

    for (let j = 0; j <= s.length; j++){
      if (i !== j) {
        perm.push(j)
      }
    }
    console.log('perm: ', perm)
  }
  // 2: check it against the formula of <'s and >'s


  // for length+1 of perm:
    // if perm[0](0) < perm[0+1](1) : s[0]= 'I'
    // if perm[0](0) > perm[0+1](1) : s[0]= 'D'

};

// Example 1:
let s = "IDID";
// Output: [0, 4, 1, 3, 2]

// Example 2:
// let s = "III"
// Output: [0, 1, 2, 3]

// Example 3:
// let s = "DDI"
// Output: [3,2,0,1]

// Constraints:
// 1 <= s.length <= 105
// s[i] is either 'I' or 'D'.

console.log(diStringMatch(s));
