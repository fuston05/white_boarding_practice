// leetcode challenge

// Given a non-empty array of digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

var plusOne = function (digits) {
  // convert array => string
  let temp = digits.join('');
  console.log('temp: ', temp);
  console.log('temp type: ', typeof temp);

  // string => int
  temp = BigInt(temp);
  console.log('temp: ', temp);
  console.log('temp type: ', typeof temp);

  // add 1
  temp++;
  // convert back to an array
  console.log('temp+1: ', temp);
  // convert int => arr
  let arr = Array.from(temp.toString(), Number);
  console.log('arr: ', arr);

  return arr;
};

// Example 1:
// digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.

// Example 2:
// digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

// Example 3:
// digits = [0]
// Output: [1]

// Example 4:
digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
// Output: [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]

console.log(plusOne(digits));

