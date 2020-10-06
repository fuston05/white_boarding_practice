// leetcode challenge 'Maximum Subarray'

// Given an integer array nums, find the contiguous subarray(containing at least one number) which has the largest sum and return its sum.

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

// Example 1:
// nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Example 2:
// nums = [1]
// Output: 1

// Example 3:
// nums = [0]
// Output: 0

// Example 4:
// nums = [-1]
// Output: -1

// Example 5:
// nums = [-2147483647]
// Output: -2147483647

// Example 6:
nums = [-2,1]
// Output: 1


var maxSubArray = function (nums) {
  let max_current = max_global = nums[0];
  console.log('original max_current: ', max_current)
  for (let i = 1; i < nums.length; i++) {

    if(nums[i] >= max_current + nums[i]){
      max_current= nums[i];
    }else{
      max_current+= nums[i]
    }

    console.log('nums[i]: ', nums[i]);
    console.log('current + nums[i]: ', max_current + nums[i]);
    if (max_global < max_current) {
      max_global = max_current;
    }
    if (max_current < 0) {
      max_current = nums[i];
    }
  };
  return max_global;
}

console.log('result: ', maxSubArray(nums));