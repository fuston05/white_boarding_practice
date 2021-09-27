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

// ITERATIVE SOLUTION #1
const fib = (n) => {
    let fibArr = [0, 1, 1];
    if (n < 3) return 1;

    for (let i = 3; i <= n; i++) {
        fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
    }
    console.log("fibArr: ", fibArr);
    return fibArr[n];
};

// RECURSIVE SOLUTION
// const fib = (n) => {
//     if (n < 3) return 1;

//     return fib(n - 1) + fib(n - 2);
// };

// Example 1:
// let n = 2;
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

// Example 2:
// let n = 3;
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

// Example 3:
// let n = 4;
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

// Example 4:
let n = 5;
// Output: 5

// Constraints:
// 0 <= n <= 30

console.log(fib(n));
