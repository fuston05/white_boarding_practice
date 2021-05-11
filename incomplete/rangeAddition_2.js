// leetcode challenge (easy)
// 598. Range Addition II

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
    return m*n;
  }

  let M = {};
  // buld table
  for (let j = 0; j < m; j++) {
    let row = j;
    for (let k = 0; k < n; k++) {
      let col = k;
      M[[row, col]] = 0;
    }
  }
  console.log("starting M: ", M);

  ops.forEach((op) => {
    console.log("op: ", op);
    let opsRow = op[0];
    let opsCol = op[1];

    for (let i = 0; i < opsRow; i++) {
      for (let l = 0; l < opsCol; l++) {
        M[[i, l]] += 1;
        console.log(`M[${i}, ${l}]: `, M[[i, l]]);
      }
    }
  });

  const maxNum = Math.max(...Object.values(M));

  let result = 0;

  for (let y = 0; y < Object.values(M).length; y++) {
    Object.values(M)[y] === maxNum ? result++ : null;
  }

  console.log("result: ", result);
  console.log("maxNum: ", maxNum);
  console.log("ending M: ", M);
  return result;
};

// Example 1:
let m = 3,
  n = 3,
  ops = [
    [2, 2],
    [3, 3],
  ];
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
// let m = 3,
//   n = 3,
//   ops = [];
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
