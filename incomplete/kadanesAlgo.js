// kadane's algorithm practice

// Largest Sum Contiguous Subarray
// Write an efficient program to find the sum of contiguous subarray within a one-dimensional array of numbers which has the largest sum.

// Given an array arr of N integers. Find the contiguous sub-array with maximum sum.

// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(1)

const maxSubarraySum = (arr) => {
  let maxSoFar = arr[0];
  let maxEndingHere = arr[0];

  for (let i = 1; i < arr.length; i++) {
    console.log("maxEndingHere before: ", maxEndingHere);
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    console.log("maxEndingHere after: ", maxEndingHere);

    if (maxSoFar < maxEndingHere) {
      maxSoFar = maxEndingHere;
    }
    console.log("maxSoFar: ", maxSoFar);
  }
  return maxSoFar;
};

// Example 1:
// N = 5
// arr = [1, 2, 3, -2, 5];
// Output: 9
// Explanation: Max subarray sum is 9
// of elements (1, 2, 3, -2, 5) which
// is a contiguous subarray.

// Example 2:
// N = 4
arr= [-1,-2,-3,-4]
// Output: -1
// Explanation: Max subarray sum is -1

console.log(maxSubarraySum(arr));
