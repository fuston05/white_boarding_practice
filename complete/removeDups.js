// leet code challenge

// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Clarification:

// Confused why the returned value is an integer but your answer is an array?

// Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller as well.

// Internally you can think of this:

// // nums is passed in by reference. (i.e., without making a copy)
// int len = removeDuplicates(nums);

// // any modification to nums in your function would be known by the caller.
// // using the length returned by your function, it prints the first len elements.
// for (int i = 0; i < len; i++) {
//     print(nums[i]);
// }
 

// Example 1:
// nums = [1,1,2]
// Output: 2, nums = [1,2]
// Explanation: Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the returned length.

// Example 2:
nums = [0,0,1,1,1,2,2,3,3,4] //length 10
// Output: 5, nums = [0,1,2,3,4]
// Explanation: Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively. It doesn't matter what values are set beyond the returned length.


var removeDuplicates = function (nums) {
  // remove dups
  // 2 pointers:
    // p1= nums[i] ??
    // p2= nums[1+1] ??
  // for loop ???
  // if p1 >= p2
    // splice changes in place without making a copy
    //p1.splice(i, 1)
  
  let i = 0;
  
  while (i < nums.length - 1) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
  return nums.length;
};

console.log(removeDuplicates(nums));