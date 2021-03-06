// leetcode challenge (easy)
// Student Attendance Record I

// You are given a string s representing an attendance record for a student where each character signifies whether the student was absent, late, or present on that day. The record only contains the following three characters:

// 'A': Absent.
// 'L': Late.
// 'P': Present.
// The student is eligible for an attendance award if they meet both of the following criteria:

// The student was absent ('A') for strictly fewer than 2 days total.
// The student was never late ('L') for 3 or more consecutive days.
// Return true if the student is eligible for an attendance award, or false otherwise.

/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  // **** FIRST PASS USING REGEX ****
  const absencesPass = (s.match(/[A]{1}/g) && s.match(/[A]{1}/g).length > 1) ? false : true;
  const latesPass = s.match(/[L]{3,}/) !== null ? false : true;

  return (absencesPass === true && latesPass === true) ? true : false;
};

// Example 1:
// let s = "PPALLP";
// Output: true
// Explanation: The student has fewer than 2 absences and was never late 3 or more consecutive days.

// Example 2:
// let s = "PPALLL"
// Output: false
// Explanation: The student was late 3 consecutive days in the last 3 days, so is not eligible for the award.

// Example 3:
let s = "ALLPPAL";
// Output: false

// Constraints:
// 1 <= s.length <= 1000
// s[i] is either 'A', 'L', or 'P'.

console.log("");
console.log(checkRecord(s));
console.log("");
