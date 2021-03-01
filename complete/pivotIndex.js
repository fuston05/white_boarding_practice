// leet code challenge (easy)
// pivot index

/*
  Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  // 1ST METHOD
  // loop left to right over nums,
  // store current left sum, and right sums
  // check if sums are equal, if not: move to right 1 and repeat
  // let result = -1;

  // for (let i = 0; i < nums.length; i++) {
  //   let left = nums.slice(0, i);
  //   let right = nums.slice(i + 1);

  //   let leftSum = left.length > 0 ? left.reduce((acc, cur) => acc + cur) : 0;

  //   let rightSum = right.length > 0 ? right.reduce((acc, cur) => acc + cur) : 0;

  //   if (leftSum === rightSum) return result= i;

  //   console.log("current: ", i);
  //   console.log("left: ", left);
  //   console.log('left sum: ', leftSum)
  //   console.log("right: ", right);
  //   console.log('right sum: ', rightSum)
  // }
  // return result;

  // 2ND METHOD
  let total = nums.reduce((acc, cur) => acc + cur);
  console.log('total: ', total);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++){
    if (leftSum === total - leftSum - nums[i]) {
      return i;
    }
    leftSum+= nums[i]
  }
  return -1;
};

// Example 1:
let nums = [1, 7, 3, 6, 5, 6];
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11

// Example 2:
// let nums = [1, 2, 3];
// Output: -1
// Explanation:
// There is no index that satisfies the conditions in the problem statement.

// Example 3:
// let nums = [2,1,-1]
// Output: 0
// Explanation:
// The pivot index is 0.
// Left sum = 0 (no elements to the left of index 0)
// Right sum = nums[1] + nums[2] = 1 + -1 = 0

// Constraints:
// 1 <= nums.length <= 104
// -1000 <= nums[i] <= 1000

console.log(pivotIndex(nums));
