// leetCode challenge(easy)
//  Generate a String With Characters That Have Odd Counts

// Given an integer n, return a string with n characters such that each character in such string occurs an odd number of times.

// The returned string must contain only lowercase English letters. If there are multiples valid strings, return any of them.

/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (n) {
  // has to generate n chars
  // returns a String

  let resString = "";
  for (let i = 0; i < n; i++) {
    // generate a base string
    resString += "a";
  }
  console.log("N: ", n, "\nstarting string: ", resString);
  // if it's EVEN
  if (resString.length % 2 === 0) {
    console.log("EVEN");
    resString = resString.slice(0, resString.length - 1);
    resString += "b";
    console.log("str after slice: ", resString);
  }
  return resString;
};

// Example 1:
// let n = 4;
// Output: "pppz"
// Explanation: "pppz" is a valid string since the character 'p' occurs three times and the character 'z' occurs once. Note that there are many other valid strings such as "ohhh" and "love".

// Example 2:
// let n = 2
// Output: "xy"
// Explanation: "xy" is a valid string since the characters 'x' and 'y' occur once. Note that there are many other valid strings such as "ag" and "ur".

// Example 3:
let n = 7;
// Output: "holasss"

// Constraints:
// 1 <= n <= 500
console.log("");
console.log(generateTheString(n));
console.log("");
