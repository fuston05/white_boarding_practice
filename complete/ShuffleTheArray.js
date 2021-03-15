// leetcode challenge (easy)
// Shuffle the Array

// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
// only ever gonna be 2 sub arrays???
  // move 2 pointers, 1 at 0, 2 at nums[n]
  // add val at each pointer to result
  let result = [];
  let A = 0;
  let B = n;

  for (let i = 0; i < n; i++){
    result.push(nums[A]);
    result.push(nums[B]);
    A += 1;
    B += 1;
  }

  return result;
};

// Example 1:
// let nums = [2, 5, 1, 3, 4, 7];
// let n = 3;
// Output: [2,3,5,4,1,7]
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

// Example 2:
// let nums = [1,2,3,4,4,3,2,1];
// let n = 4;
// Output: [1,4,2,3,3,2,4,1]

// Example 3:
// let nums = [1,1,2,2];
// let n = 2;
// Output: [1,2,1,2]

// Example 4:
let nums = [0];
let n = 0;
// Output: []

// Constraints:
// 1 <= n <= 500
// nums.length == 2n
// 1 <= nums[i] <= 10^3

console.log(shuffle(nums, n));
