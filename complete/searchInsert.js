// leet code challenge

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

var searchInsert = function (nums, target) {
  let count = 0;
  while (nums[count] < target && count < nums.length) {
    count++;
  }
  return count;
};

// Example 1:
// nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:
// nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:
// nums = [1,3,5,6], target = 7
// Output: 4

// Example 4:
// nums = [1,3,5,6], target = 0
// Output: 0

// Example 5:
(nums = [1]), (target = 0);
// Output: 0

console.log(searchInsert(nums, target));
