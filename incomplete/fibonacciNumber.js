// leetcode challenge (easy)
// fibonacci number

// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let curFib = 1;
  let prevFib = 0;
  let temp;

  while (n > 0) {
    console.log("N: ", n, "curFib: ", curFib, "prevFib: ", prevFib, "temp: ", temp);

    temp = curFib;
    curFib = curFib + prevFib;
    prevFib = temp;
    n--;
  }
  console.log("final: ", prevFib);
  return prevFib;
};

// Example 1:
// let n = 2;
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

// Example 2:
let n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

// Example 3:
// let n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

// Constraints:
// 0 <= n <= 30

console.log(fib(n));
