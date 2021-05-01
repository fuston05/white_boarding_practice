// leetCode challenge (easy)
// Maximum Score After Splitting a String

// Given a string s of zeros and ones, return the maximum score after splitting the string into two non-empty substrings (i.e. left substring and right substring).

// The score after splitting a string is the number of zeros in the left substring plus the number of ones in the right substring.

/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  // convert to array
  // iterate, adding (shifting, and adding it to the left (unshift)) more to the left each time
  // iterate over left and right: calc score
  // check if score > 'scoreSoFar'
  // if it is, update scoreSoFar.
  // const arrRight = s.split("");
  // const arrLeft = [];
  // let scoreSoFar = 0;

  // console.log("start arrRight: ", arrRight);
  // console.log("start arrLeft: ", arrLeft);

  // for (let i = 0; i < s.length-1; i++) {
  //   // add on from the right to the left arr
  //   arrLeft.push(arrRight.shift());
  //   // tally up total of this iteration
  //   let tempScore = 0;

  //   // left score
  //   arrLeft.forEach((num) => {
  //     if (parseInt(num) === 0) {
  //       tempScore += 1;
  //     }
  //   });

  //   // right score
  //   arrRight.forEach((num) => {
  //     if (parseInt(num) === 1) {
  //       tempScore += 1;
  //     }
  //   });

  //   console.log("");
  //   console.log("arrRight: ", arrRight);
  //   console.log("arrLeft: ", arrLeft);
  //   console.log("tempScore: ", tempScore);
  //   console.log("");

  //   // update the score if needed
  //   if (tempScore > scoreSoFar) {
  //     scoreSoFar = tempScore;
  //   }
  //   console.log('scoreSoFar: ', scoreSoFar)

  // }
  // return scoreSoFar;

  // ******** SECOND PASS SOLUTION *********
  // ***************************************

  let zeros = s[0] === "0" ? 1 : 0;
  let ones = 0;
  // sum all 1's
  for (let i = 1; i < s.length; i++) {
    console.log("s[i]: ", s[i]);
    if (s[i] === "1") {
      console.log("ones++: ", s[i]);
      ones++;
    }
  }
  console.log("start ones: ", ones);
  console.log("start zeros: ", zeros);

  score = zeros + ones;
  console.log("init score; ", score);

  for (let i = 1; i < s.length - 1; i++) {
    console.log("i: ", i);
    if (s[i] === "0") {
      console.log("s[i] === 0");
      zeros++;
    } else {
      ones--;
      console.log("decrement ones: ", ones, '\n');
      console.log("zeros: ", zeros, "ones: ", ones);
    }
    let tempScore = zeros + ones;
    console.log('tempScore: ', tempScore, 'score: ', score)
    score = Math.max(tempScore, score);
  }
  console.log("zeros: ", zeros);
  console.log("ones: ", ones);
  return score;
};

// Example 1:
// let s = "011101";
// Output: 5
// Explanation:
// All possible ways of splitting s into two non-empty substrings are:
// left = "0" and right = "11101", score = 1 + 4 = 5
// left = "01" and right = "1101", score = 1 + 3 = 4
// left = "011" and right = "101", score = 1 + 2 = 3
// left = "0111" and right = "01", score = 1 + 1 = 2
// left = "01110" and right = "1", score = 2 + 1 = 3

// Example 2:
// let s = "00111"
// Output: 5
// Explanation: When left = "00" and right = "111", we get the maximum score = 2 + 3 = 5

// Example 3:
// let s = "1111";
// Output: 3

// Constraints:
// 2 <= s.length <= 500
// The string s consists of characters '0' and '1' only.

console.log(maxScore(s));
