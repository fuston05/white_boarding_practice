// leetcode challenge (easy)
// Is Subsequene

// Given two strings s and t, check if s is a subsequence of t.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Constraints:
// 0 <= s.length <= 100
// 0 <= t.length <= 104
// s and t consist only of lowercase English letters.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  //     iterate over s against a in a nested loop.
  //     when you find 'a' from 'abc' mark its index.
  //     now check for 'b' starting at index of a +1
  //     if b occurs before a return false
  //     or if not found return false

  let latestInd = -1;

  for (let i = 0; i < s.length; i++) {
    let curS = s[i];

    // if curS is not found in 't'
    if (t.search(curS) === -1) {
      console.log('curS NOT found in "t"')
      return false;
    } else if(t.indexOf(curS) > latestInd){
      // if curs is found, and it's index is > index of last found char
      console.log('curS found: ', curS, ' at index: ', t.indexOf(curS))
      latestInd = t.indexOf(curS);
    } else {
      console.log('curS found, but in wrong order')
      // if curS is found, but it's index is < index of last found char
      return false;
    }
  }
  return true;
};

// Example 1:
let s = "abc";
let t = "ahbgdc";
// Output: true

// Example 2:
// let s = "axc";
// let t = "ahbgdc";
// Output: false

console.log(isSubsequence(s, t));
