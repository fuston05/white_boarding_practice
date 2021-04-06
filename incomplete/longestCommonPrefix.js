// leetcode challenge (easy)
// longestCommonPrefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Constraints:

// 0 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // strs could be empty
  // any item in strs could be empty.
  // gonna need a nested loop?? against length of the shortest word in strs.

  if (strs.length === 0) {
    return "";
  }

  // find  the shortest word and start that as longest so far??
  let shortest = [];
  for (let i = 0; i < strs.length - 1; i++) {
    if (strs[i].length < strs[i + 1].length) {
      shortest = strs[i].split("");
    }
  }

  let count = 0;
  while (count < (shortest.length * strs.length)) {
    let isNotCommon = true;
    strs.forEach((str) => {
      if (!str.includes(shortest.join(""))) {
        isNotCommon = true;
      } else {
        isNotCommon = false;
      }
    });
    isNotCommon ? shortest.pop() : null;
    count++;
  }
  return shortest.join("");
};

// Example 1:
let strs = ["flower", "flow", "flight"];
// Output: "fl"

// Example 2:
// let strs = ["dog", "racecar", "car"];
// Output: ""
// Explanation: There is no common prefix among the input strings.

console.log("result: ", longestCommonPrefix(strs));
