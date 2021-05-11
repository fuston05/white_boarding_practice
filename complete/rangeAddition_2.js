// leetcode challenge (easy)
// 598. Range Addition II
// https://leetcode.com/problems/range-addition-ii/

// You are given an m x n matrix M initialized with all 0's and an array of operations ops, where ops[i] = [ai, bi] means M[x][y] should be incremented by one for all 0 <= x < ai and 0 <= y < bi.

// Count and return the number of maximum integers in the matrix after performing all the operations.

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
  if (ops.length === 0) {
    return m * n;
  }

  let min_first = ops[0][0];
  let min_second = ops[0][1];

  for (op of ops) {
    if (op[0] < min_first) {
      min_first= op[0]
    }

    if (op[1] < min_second) {
      min_second= op[1]
    }
  }

  return min_first * min_second;
};

// Example 1:
// let m = 3,
//   n = 3,
//   ops = [
//     [2, 2],
//     [3, 3],
//   ];
// Output: 4
// Explanation: The maximum integer in M is 2, and there are four of it in M.So return 4.

// Example 2:
// let m = 3,
//   n = 3,
//   ops = [
//     [2, 2],
//     [3, 3],
//     [3, 3],
//     [3, 3],
//     [2, 2],
//     [3, 3],
//     [3, 3],
//     [3, 3],
//     [2, 2],
//     [3, 3],
//     [3, 3],
//     [3, 3],
//   ];
// Output: 4

// Example 3:
let m = 3,
  n = 3,
  ops = [];
// Output: 9

// Example 4:
// let m = 40000,
//   n = 40000,
//   ops = [];
// Output: 1600000000

// Constraints:
// 1 <= m, n <= 4 * 104
// 1 <= ops.length <= 104
// ops[i].length == 2
// 1 <= ai <= m
// 1 <= bi <= n

console.log(maxCount(m, n, ops));
