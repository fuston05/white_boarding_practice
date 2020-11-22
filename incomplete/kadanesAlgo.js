// kadane's algorithm practice

// Largest Sum Contiguous Subarray
// Write an efficient program to find the sum of contiguous subarray within a one-dimensional array of numbers which has the largest sum.

// Given an array arr of N integers. Find the contiguous sub-array with maximum sum.

// Your Task:
// You don't need to read input or print anything. The task is to complete the function maxSubarraySum() which takes arr and N as input parameters and returns the sum of subarray with maximum sum.

// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(1)

const maxSubarraySum = (arr) => {
  let maxSoFar = 0;
  let maxEndingHere = 0;

  // loop
  for (let i = 0; i < arr.length; i++){
    // add first element to maxEndingHere
    maxEndingHere = maxEndingHere + arr[i];
    // compare maxSoFar with maxEngingHere, reassign maxSoFar if needed
    if (maxSoFar < maxEndingHere) { 
      maxSoFar = maxEndingHere;
    }
    // case where maxEndingHere goes negative
    if (maxEndingHere < 0) { 
      maxEndingHere = 0;
    }
  }
  return maxSoFar;
}

// Example 1:
// N = 5
// arr= [1,2,3,-2,5]
// Output: 9
// Explanation: Max subarray sum is 9
// of elements (1, 2, 3, -2, 5) which 
// is a contiguous subarray.

// Example 2:
// N = 4
arr= [-1,-2,-3,-4]
// Output: -1
// Explanation: Max subarray sum is -1 
// of element (-1)

console.log(maxSubarraySum(arr));