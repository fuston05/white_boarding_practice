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
  if (s.length === 1) {
    return s;
  }

  let str = s.split("").sort((a, b) => a.charCodeAt() - b.charCodeAt());
  console.log("starting str: ", str);

  let result = [];
  while (str.length > 0) {
    // step 1, add smallest letter from s to result
    console.log("step 1, added smallest");
    result.push(str[0]);
    str.splice(0, 1);

    // step 2-3, (incrementing)
    console.log("starting 1st loop");
    for (let i = 0; i < str.length; i++) {
      console.log("I: ", i);

      if (str[i].charCodeAt() > result[result.length - 1].charCodeAt()) {
        console.log("removed: ", str[i]);
        result.push(str[i]);
        str.splice(i, 1);
        console.log("new str: ", str);
        i--;
      }
    }
    // step 4. add the largest letter from s to result
    result.push(str[str.length - 1]);
    str.splice(str.length - 1, 1);
    console.log("step 4, added largest");

    console.log("starting 2nd loop");
    // step 5-6, (decrementing)
    for (let i = str.length - 1; i > 0; i--) {
      console.log("I: ", i);

      if (
        str[i] &&
        str[i].charCodeAt() < result[result.length - 1].charCodeAt()
      ) {
        console.log("removed: ", str[i]);
        result.push(str[i]);
        str.splice(i, 1);
        console.log("new str: ", str);
        i++;
      }
    }

    console.log("final str: ", str);
    console.log("result: ", result.join(""));
  }
  return result.join("");
};

// Example 1:
// let s = "aaaabbbbcccc";
// Out: "abccbaabccba"
// Explanation: After steps 1, 2 and 3 of the first iteration, result = "abc"
// After steps 4, 5 and 6 of the first iteration, result = "abccba"
// First iteration is done. Now s = "aabbcc" and we go back to step 1
// After steps 1, 2 and 3 of the second iteration, result = "abccbaabc"
// After steps 4, 5 and 6 of the second iteration, result = "abccbaabccba"

// Example 2:
// let s = "rat";
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

// example 6:
// let s = "L";
// output: 'L'

// Constraints:
// 1 <= s.length <= 500
// s contains only lower-case English letters.

console.log(sortString(s));
