// leetcode challenge "findLengthOfLCIS"

// Given an unsorted array of integers nums, return the length of the longest continuous increasing subsequence (i.e. subarray). The subsequence must be strictly increasing.

// A continuous increasing subsequence is defined by two indices l and r (l < r) such that it is [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] and for each l <= i < r, nums[i] < nums[i + 1].

// first pass solution O(n^2);
// var findLengthOfLCIS = function (nums) {
//   //  handle empty input edge case
//   if (!nums.length) {
//     return 0;
//   }

//   let globalCount = 1;

//   for (let i = 0; i < nums.length - 1; i++) {
//     let cur = nums[i];
//     let tempArr = [cur];
//     let count = i;

//     while (nums[count] < nums[count + 1]) {
//       tempArr.push(nums[i + 1]);
//       count++;
//     }

//     if (tempArr.length > globalCount) {
//       globalCount = tempArr.length;
//     }
//   }
//   return globalCount;
// };

// refactor to O(n) after some studying
var findLengthOfLCIS = function(nums) {
  //  handle empty input edge case
      if(!nums.length){return 0;}
      
      let globalCount= 1;
      let curMax= 1;
      
      for(let i= 0; i < nums.length; i++){
          if(nums[i] < nums[i+1]){
              curMax++;
          }else{
              curMax= 1;
          }
          
          if(curMax > globalCount) globalCount= curMax;
      }
      return globalCount;
  };

// Example 1:
nums = [1,3,5,4,7]
// Output: 3
// Explanation: The longest continuous increasing subsequence is [1,3,5] with length 3.
// Even though [1,3,5,7] is an increasing subsequence, it is not continuous as elements 5 and 7 are separated by element
// 4.

// Example 2:
// nums = [2,2,2,2,2]
// Output: 1
// Explanation: The longest continuous increasing subsequence is [2] with length 1. Note that it must be strictly
// increasing.

console.log(findLengthOfLCIS(nums));
