// leetcode challenge (easy)
// heightChecker

// Students are asked to stand in non-decreasing order of heights for an annual photo.

// Return the minimum number of students that must move in order for all students to be standing in non-decreasing order of height.

// Notice that when a group of students is selected they can reorder in any possible way between themselves and the non selected students remain on their seats.

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  //     resCount= 0;
  //     store a sorted copy of 'heights'
  //     iterate height:
  //         if height[i] !== sortedHeight[i]:
  //             rescount++
  //
  //     [5,1,2,3,4]
  //     [1,2,3,4,5]

  const sortedHeights = Array(...heights).sort((a, b) => a - b);

  if (heights === sortedHeights) return 0;

  let resCount = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== sortedHeights[i]) {
      resCount++;
    }
  }
  return resCount;
};

// Example 1:
let heights = [1, 1, 4, 2, 1, 3];
// Output: 3
// Explanation:
// Current array : [1,1,4,2,1,3]
// Target array  : [1,1,1,2,3,4]
// On index 2 (0-based) we have 4 vs 1 so we have to move this student.
// On index 4 (0-based) we have 1 vs 3 so we have to move this student.
// On index 5(0 - based) we have 3 vs 4 so we have to move this student.

// Example 2:
// let heights = [5,1,2,3,4]
// Output: 5

// Example 3:
// let heights = [1,2,3,4,5]
// Output: 0

// Constraints:
// 1 <= heights.length <= 100
// 1 <= heights[i] <= 100

console.log(heightChecker(heights));
