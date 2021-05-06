// leetcode challenge
// valid palindrome

// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // FIRST PASS:
  // copy data so we don't mutate it original
  // remove all non-alphanumeric chars and lowercase s
  const dataCopy = s.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();
  const reversed = dataCopy.split("").reverse().join("");
  console.log("reversed: ", reversed);
  console.log("final str: ", dataCopy);

  console.log("s integrity?: ", s);

  // compare reversed
  return dataCopy === reversed ? true : false;
};

// Example 1:
let s = "A man, a plan, a canal: Panama";
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// let s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Constraints:
// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

console.log(isPalindrome(s));
