// leetcode challenge (medium)
// count numbers with unique digits

// Given an integer n, return the count of all numbers with unique digits, x, where 0 <= x < 10n.

/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
  let count = 1;

  console.log(`\n10^${n}: `, 10 ** n, "\n");

  for (let i = count; i < 10 ** n; i++) {
    console.log("\nloopCount: ", i, "\n");
    // check if digits are unique for given number

    let tempSet = new Set(i.toString().split(""));
    let curNumStr = i.toString();

    console.log("curNumStr: ", curNumStr, "len: ", curNumStr.length);
    console.log("tempSet: ", tempSet, "len: ", tempSet.size);

    if (i >= 10) {
      if (tempSet.size === curNumStr.length) {
        count++;
      }
    } else {
      count++;
    }
  }
  return count;
};

// Example 1:
// let n = 2;
// Output: 91
// Explanation: The answer should be the total numbers in the range of 0 ≤ x < 100, excluding 11,22,33,44,55,66,77,88,99

// Example 2:
// let n = 0;
// Output: 1

// Example 3:
let n = 1;
// Output: 10

// Constraints:
// 0 <= n <= 8

console.log(countNumbersWithUniqueDigits(n));
