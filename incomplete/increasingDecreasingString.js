// leet code challenge (easy)
// Increasing Decreasing String

// Given a string s. You should re-order the string using the following algorithm:

// Pick the smallest character from s and append it to the result.
// Pick the smallest character from s which is greater than the last appended character to the result and append it.
// Repeat step 2 until you cannot pick more characters.
// Pick the largest character from s and append it to the result.
// Pick the largest character from s which is smaller than the last appended character to the result and append it.
// Repeat step 5 until you cannot pick more characters.
// Repeat the steps from 1 to 6 until you pick all characters from s.
// In each step, If the smallest or the largest character appears more than once you can choose any occurrence and append it to the result.

// Return the result string after sorting s with this algorithm.

/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
  let str = s.split("").sort((a, b) => a.charCodeAt() - b.charCodeAt());
  console.log("str: ", str);
  let result = [str[0]];

  // iterate over s
  for (let i = 0; i < str.length; i++) {
    console.log("str[i]: ", str[i]);
    // compare current letter to whats on the end of result
    console.log("charcode: ", str[i].charCodeAt());
    if (str[i].charCodeAt() > result[result.length - 1].charCodeAt()) {
      // add letter to end of result
      result.push(str[i]);
    }
  }
  console.log('result: ', result)
};

// Example 1:
// let s = "aaaabbbbcccc"
// Output: "abccbaabccba"
// Explanation: After steps 1, 2 and 3 of the first iteration, result = "abc"
// After steps 4, 5 and 6 of the first iteration, result = "abccba"
// First iteration is done. Now s = "aabbcc" and we go back to step 1
// After steps 1, 2 and 3 of the second iteration, result = "abccbaabc"
// After steps 4, 5 and 6 of the second iteration, result = "abccbaabccba"

// Example 2:
let s = "rat";
// Output: "art"
// Explanation: The word "rat" becomes "art" after re-ordering it with the mentioned algorithm.

// Example 3:
// let s = "leetcode"
// Output: "cdelotee"

// Example 4:
// let s = "ggggggg"
// Output: "ggggggg"

// Example 5:
// let s = "spo"
// Output: "ops"

// Constraints:
// 1 <= s.length <= 500
// s contains only lower-case English letters.

console.log(sortString(s));
