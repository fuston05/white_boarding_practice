// leetcode challenge (easy)
// Check if it is a straight line

// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  // ***** FIRST ATTEMPT ********
  // //  determine increment used for both X and Y between the 1st 2 coords
  // let X_incPattern= coordinates[1][0] - coordinates[0][0];
  // let Y_incPattern= coordinates[1][1] - coordinates[0][1];

  // console.log(`X_incPattern: ${X_incPattern}, \n Y_incPattern: ${Y_incPattern}`)

  // //  check that same increment stays consistant throughout.
  // //      if yes: it's straight
  // //      if no: it's not straight
  // for (let i = 0; i < coordinates.length-1; i++){
  //   // if 2nd x - 1st X not = increment pattern or 2nd Y - 1st Y not == pattern
  //     // return false
  //   // console.log(`2nd X: ${coordinates[i + 1][0]}, 1st X: ${coordinates[i][0]}, Diff: ${coordinates[i + 1][0] - coordinates[i][0]}`)
  //   // console.log('');
  //   // console.log(`2nd Y: ${coordinates[i + 1][1]}, 1st Y: ${coordinates[i][1]}, Diff: ${coordinates[i + 1][1] - coordinates[i][1]}`)
  //   // console.log('*****');

  //   if (coordinates[i+1][0] - coordinates[i][0] !== X_incPattern
  //     || coordinates[i+1][1] - coordinates[i][1] !== Y_incPattern) {
  //     return false
  //     }
  // }
  // return true;

  //  **** STUDIED UP ON GRAPHS ANS SLOPE ON khan academy ******
  // ***********************************************************
  // **** ATTEMPT 2 *****
  /**
   * SLOPE:
   * INCREASE/CHANGE IN VERTICAL OVER A GIVEN INCREASE/CHANGE IN HORIZONTAL: VERT INCREASE/HOR INCREASE
   *  SLOPE= ∆ Y/ ∆ X (Delta means 'change in')
   * the higher the 'slope' the steeper the line (slope)
   */

  let init_yChange = coordinates[1][1] - coordinates[0][1];
  console.log(`init_yChange: ${init_yChange}`);

  let inti_xChange = coordinates[1][0] - coordinates[0][0];
  console.log(`inti_xChange: ${inti_xChange}`);

  let initSlope = inti_xChange * init_yChange;
  console.log(`initSlope: ${initSlope}`);
  console.log('');

  for (let i = 0; i < coordinates.length - 1; i++) {
    let yChange = coordinates[i + 1][1] - coordinates[i][1];
    console.log(`yChange: ${yChange}`);

    let xChange = coordinates[i + 1][0] - coordinates[i][0];
    console.log(`xChange: ${xChange}`);

    let slope = xChange * yChange;
    console.log(`slope: ${slope}`);
    console.log('');

    if (initSlope !== slope || yChange !== init_yChange || xChange !== inti_xChange) {
      return false;
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
// let coordinates = [
//   [0, 0],
//   [0, 1],
//   [0, -1],
// ];
// Output: true

// Example 4:
let coordinates = [[0,0],[0,5],[5,5],[5,0]];
// Output: false

// Constraints:
// 2 <= coordinates.length <= 1000
// coordinates[i].length == 2
// -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
// coordinates contains no duplicate point.

console.log("");
console.log(checkStraightLine(coordinates));
console.log("");
