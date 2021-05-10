// leetCode challenge (easy)
// 1304. Find N Unique Integers Sum up to Zero

// Given an integer n, return any array containing n unique integers such that they add up to 0.

/**
 * @param {number} n
 * @return {number[]}
 */

// RunTime: O(n/2)= O(n)
var sumZero = function (n) {
  if (n === 1) {
    return 0;
  }

  // initialize our results arr;
  let arr = [];

  let loopTimes = n % 2 === 0 ? n/2 : Math.floor(n/2);

  for (let i = 1; i <= loopTimes; i++) {
    arr.push(i);
    arr.push(-i);
  }
  
  // if n is odd, add a 0 to the array
  if (n % 2 !== 0) {
    arr.push(0);
  }

  return arr;
};

// Example 1:
// let n = 5;
// Output: [-7,-1,1,3,4]
// Explanation: These arrays also are accepted[-5, -1, 1, 2, 3], [-3, -1, 2, -2, 4].

// Example 2:
let n = 3
// Output: [-1, 0, 1]

// Example 3:
// let n = 1
// Output: [0]

// Constraints:
// 1 <= n <= 1000

console.log(sumZero(n));
