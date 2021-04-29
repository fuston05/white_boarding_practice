// leetcode challenge (easy)
// Check if it is a straight line

// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  //  determine increment used for both X and Y between the 1st 2 coords
  let X_incPattern= coordinates[1][0] - coordinates[0][0];
  let Y_incPattern= coordinates[1][1] - coordinates[0][1];
  
  console.log(`X_incPattern: ${X_incPattern}, \n Y_incPattern: ${Y_incPattern}`)
  
  //  check that same increment stays consistant throughout.
  //      if yes: it's straight
  //      if no: it's not straight
  for (let i = 0; i < coordinates.length-1; i++){
    // if 2nd x - 1st X not = increment pattern or 2nd Y - 1st Y not == pattern
      // return false
    // console.log(`2nd X: ${coordinates[i + 1][0]}, 1st X: ${coordinates[i][0]}, Diff: ${coordinates[i + 1][0] - coordinates[i][0]}`)
    // console.log('');
    // console.log(`2nd Y: ${coordinates[i + 1][1]}, 1st Y: ${coordinates[i][1]}, Diff: ${coordinates[i + 1][1] - coordinates[i][1]}`)
    // console.log('*****');

    if (coordinates[i+1][0] - coordinates[i][0] !== X_incPattern
      || coordinates[i+1][1] - coordinates[i][1] !== Y_incPattern) {
      return false
      }
  }
  return true;
};

// Example 1:
// let coordinates = [
//   [1, 2],
//   [2, 3],
//   [3, 4],
//   [4, 5],
//   [5, 6],
//   [6, 7],
// ];
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

// Example 3:
let coordinates = [
  [0, 0],
  [0, 1],
  [0, -1]
];
// Output: true

// Constraints:
// 2 <= coordinates.length <= 1000
// coordinates[i].length == 2
// -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
// coordinates contains no duplicate point.

console.log("");
console.log(checkStraightLine(coordinates));
console.log("");
