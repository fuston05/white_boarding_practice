// leetcode challenge (easy)
// Check if it is a straight line

// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  //  determine increment used for both X and Y between the 1st 2 coords
  

  let firstX = coordinates[0][0];
  let firstY = coordinates[0][1];

  console.log(`firstX: ${firstX}, \nfirstY: ${firstY}`)

  //  check that same increment stays consistant throughout.
  //      if yes: it's straight
  //      if no: it's not straight
};

// Example 1:
let coordinates = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
];
// Output: true

// Example 2:
// let coordinates = [
//   [1, 1],
//   [2, 2],
//   [3, 4],
//   [4, 5],
//   [5, 6],
//   [7, 7],
// ];
// Output: false

// Constraints:
// 2 <= coordinates.length <= 1000
// coordinates[i].length == 2
// -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
// coordinates contains no duplicate point.

console.log("");
console.log(checkStraightLine(coordinates));
console.log("");
