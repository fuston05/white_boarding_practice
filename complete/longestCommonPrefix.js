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
  if (strs.length === 1) {
    return strs[0];
  }

  let shortest = strs[0].split("");

  for (let i = 1; i < strs.length - 1; i++) {
    console.log("strs[i]: ", strs[i], "strs[i+1]: ", strs[i + 1]);

    if (strs[i].length < shortest.length) {
      console.log("split: ", strs[i].split(""));
      shortest = strs[i].split("");
    }
  }
  console.log("shortest: ", shortest);
  console.log("strs: ", strs);

  while (shortest.length > 0) {
    let notFound = false;
    strs.forEach((str) => {
      if (!str.startsWith(shortest.join(""))) {
        notFound = true;
      }
    });

    if (notFound) {
      shortest.pop();
    } else {
      return shortest.join("");
    }
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

// Example 3:
// let strs = ["ab", "a"];
// Output: "a"

// Example 4:
// let strs = ["reflower","flow","flight"];
// Output: ""

console.log("result: ", longestCommonPrefix(strs));
