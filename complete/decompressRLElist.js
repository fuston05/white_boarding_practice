// leetCode challenge (easy)
// 1313. Decompress Run-Length Encoded List

// We are given a list nums of integers representing a list compressed with run-length encoding.

// Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.

// Return the decompressed list.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  // nums.length will always be even. && >= 2
  // there will be no 0's, >= 1

  // so [1, 2, 3, 4] = [1x 2's, and 3x 4's ] = [ 2, 4, 4, 4 ] 
  // let result= []
  let result = [];

  // loop for I:
  for (let i = 0; i < nums.length - 1; i+=2){
    // tempArr= []
    let tempArr = [];
    // get cur pair: nums[i] as quantity of: ,element: nums[i+1] == 1x 2's
    // count= nums[i]
    let count = nums[i];
    let element = nums[i + 1];
    // loop 'count' times:
    for (let j = 0; j < count; j++){
      // pushing the element (2) to result on each iteration into 'tempArr'.
      tempArr.push(element)
      console.log('tempArr: ', tempArr);
    }
    // concat tempArr onto result array.
    result= result.concat(tempArr)
    console.log('result: ', result)
  }

  // return result
  return result;
};  

// Example 1:
// let nums = [1,2,3,4]
// Output: [2,4,4,4]
// Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
// The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
// At the end the concatenation[2] + [4, 4, 4] is[2, 4, 4, 4].

// Example 2:
let nums = [1,1,2,3]
// Output: [1,3,3]

// Constraints:
// 2 <= nums.length <= 100
// nums.length % 2 == 0
// 1 <= nums[i] <= 100

console.log(decompressRLElist(nums));