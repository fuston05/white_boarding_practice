// leetCode challenge in JavaScript

// Given an array of integers arr, a lucky integer is an integer which has a frequency in the array equal to its value.

// Return a lucky integer in the array. If there are multiple lucky integers return the largest of them. If there is no lucky integer return -1.

// Example 1:

// arr = [2, 2, 3, 4]
// Output: 2
// Explanation: The only lucky number in the array is 2 because frequency[2] == 2.
// Example 2:

// arr = [1,2,2,3,3,3]
// Output: 3
// Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.
// Example 3:

// arr = [2,2,2,3,3]
// Output: -1
// Explanation: There are no lucky numbers in the array.
// Example 4:

// arr = [5]
// Output: -1
// Example 5:

arr = [7,7,7,7,7,7,7]
// Output: 7


/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  // BUILD LOOKUP TABLE
  const table = {}

  // iterate over arr
  arr.forEach(ele => {
    ele= parseInt(ele);
    // if num not in object
    if (!(ele in table)) {
      // add it num to object with occurance count as value
      table[ele] = 1;
    } else {
      // else: increment it's count in the obj
      table[ele]++;
    }
  })
  let largestSoFar= 0
  // iterate the obj, 
  for (const elem in table) {
    // if key === value / 2:
    if(parseInt(elem) === table[elem] ){
      // add to 'largestSoFar' var.
      if(parseInt(elem) > largestSoFar){
        largestSoFar= parseInt(elem);
      }
    }
  }
  return largestSoFar > 0 ? largestSoFar : -1;
};



console.log('outPut: ', findLucky(arr));