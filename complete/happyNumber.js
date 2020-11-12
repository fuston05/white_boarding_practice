// leet code challenge

// Write an algorithm to determine if a number n is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// Return True if n is a happy number, and False if not.

var isHappy = function (n) {
  let outPut = n;
  let cache = {};

  while (outPut > 1) {
    if (outPut in cache) {
      return false;
    } else {
      cache[outPut] = 1;
      let total = 0;
      let arr = outPut.toString().split("");
      for (let i = 0; i < arr.length; i++) {
        total += arr[i] ** 2;
      }
      outPut = total;
    }
  }
  return true ? outPut === 1 : false;
};

// Example:
n = 19;
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

console.log(isHappy(n));
